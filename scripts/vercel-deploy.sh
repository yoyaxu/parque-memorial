#!/bin/bash
# Deploy project to Vercel from a GitHub-connected repo.
#
# Usage:
#   VERCEL_TOKEN=vcp_xxx [GH_TOKEN=ghp_xxx] bash scripts/vercel-deploy.sh
#
# Environment variables:
#   VERCEL_TOKEN  (required) Vercel access token
#   GH_TOKEN      (required if project needs to be created) GitHub PAT
#   GH_USER       (optional) GitHub user/org, defaults to token owner
#   REPO_NAME     (optional) Repo name, defaults to "parque-memorial"
#   PROJECT_NAME  (optional) Vercel project name, defaults to "parque-memorial"
set -e

VERCEL_TOKEN="${VERCEL_TOKEN:?ERROR: VERCEL_TOKEN is required}"
GH_USER="${GH_USER:-}"
REPO_NAME="${REPO_NAME:-parque-memorial}"
PROJECT_NAME="${PROJECT_NAME:-parque-memorial}"

cd /home/z/my-project

echo "[1/5] Verificando token de Vercel..."
USER_RES=$(curl -s -H "Authorization: Bearer ${VERCEL_TOKEN}" https://api.vercel.com/v2/user)
VERCEL_USER=$(echo "$USER_RES" | python3 -c "import json,sys; print(json.load(sys.stdin).get('user',{}).get('id',''))" 2>/dev/null)
VERCEL_USERNAME=$(echo "$USER_RES" | python3 -c "import json,sys; print(json.load(sys.stdin).get('user',{}).get('username',''))" 2>/dev/null)
VERCEL_TEAM=$(echo "$USER_RES" | python3 -c "import json,sys; print(json.load(sys.stdin).get('user',{}).get('defaultTeamId','') or '')" 2>/dev/null)
if [ -z "$VERCEL_USER" ]; then
  echo "ERROR: Token Vercel inválido"
  echo "$USER_RES"
  exit 1
fi
echo "  Autenticado como: $VERCEL_USERNAME (uid: $VERCEL_USER, team: ${VERCEL_TEAM:-none})"

# Derive GH_USER from token if not provided
if [ -z "$GH_USER" ] && [ -n "${GH_TOKEN:-}" ]; then
  GH_USER=$(curl -s -H "Authorization: token ${GH_TOKEN}" https://api.github.com/user | python3 -c "import json,sys; print(json.load(sys.stdin).get('login',''))" 2>/dev/null)
fi
if [ -z "$GH_USER" ]; then
  echo "ERROR: GH_USER no se pudo determinar. Provee GH_USER o GH_TOKEN."
  exit 1
fi
echo "  GitHub user: $GH_USER"

# Build query string for team if present
TEAM_QS=""
if [ -n "$VERCEL_TEAM" ]; then
  TEAM_QS="?teamId=${VERCEL_TEAM}"
  TEAM_QS_AMP="&teamId=${VERCEL_TEAM}"
else
  TEAM_QS_AMP=""
fi

echo "[2/5] Verificando proyecto '${PROJECT_NAME}' en Vercel..."
SEARCH_ENDPOINT="https://api.vercel.com/v9/projects?limit=100${TEAM_QS_AMP}"
EXISTING=$(curl -s -H "Authorization: Bearer ${VERCEL_TOKEN}" "${SEARCH_ENDPOINT}")
EXIST_ID=$(echo "$EXISTING" | python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    for p in data.get('projects', []):
        if p.get('name') == '${PROJECT_NAME}':
            print(p.get('id'))
            break
except Exception:
    pass
" 2>/dev/null)

if [ -n "$EXIST_ID" ]; then
  echo "  El proyecto ya existe (id=$EXIST_ID), usando el existente."
  PROJECT_ID="$EXIST_ID"
else
  if [ -z "${GH_TOKEN:-}" ]; then
    echo "ERROR: GH_TOKEN requerido para crear el proyecto."
    exit 1
  fi
  GH_REPO_ID=$(curl -s -H "Authorization: token ${GH_TOKEN}" "https://api.github.com/repos/${GH_USER}/${REPO_NAME}" | python3 -c "import json,sys; print(json.load(sys.stdin).get('id',''))" 2>/dev/null)
  echo "  GitHub repo id: $GH_REPO_ID"

  CREATE_BODY=$(cat <<EOF
{
  "name": "${PROJECT_NAME}",
  "framework": "nextjs",
  "gitRepository": {
    "type": "github",
    "repo": "${GH_USER}/${REPO_NAME}"
  }
}
EOF
)
  CREATE_URL="https://api.vercel.com/v10/projects${TEAM_QS}"
  CREATE_RES=$(curl -s -w "\n%{http_code}" -X POST \
    -H "Authorization: Bearer ${VERCEL_TOKEN}" \
    -H "Content-Type: application/json" \
    "$CREATE_URL" \
    -d "$CREATE_BODY")
  HTTP_CODE=$(echo "$CREATE_RES" | tail -1)
  BODY=$(echo "$CREATE_RES" | sed '$d')
  if [ "$HTTP_CODE" != "200" ] && [ "$HTTP_CODE" != "201" ]; then
    echo "ERROR ($HTTP_CODE) creando proyecto:"
    echo "$BODY"
    exit 1
  fi
  PROJECT_ID=$(echo "$BODY" | python3 -c "import json,sys; print(json.load(sys.stdin).get('id',''))" 2>/dev/null)
  echo "  Proyecto creado: id=$PROJECT_ID"
fi

ENV_URL_BASE="https://api.vercel.com/v10/projects/${PROJECT_ID}/env${TEAM_QS}"
DEPLOY_URL_BASE="https://api.vercel.com/v13/deployments${TEAM_QS}"

echo "[3/5] Configurando variables de entorno..."
for TARGET in "production" "preview" "development"; do
  curl -s -o /dev/null -X POST \
    -H "Authorization: Bearer ${VERCEL_TOKEN}" \
    -H "Content-Type: application/json" \
    "${ENV_URL_BASE}" \
    -d "{\"key\":\"DATABASE_URL\",\"value\":\"file:/tmp/parque-memorial.db\",\"type\":\"${TARGET}\",\"target\":[\"${TARGET}\"]}"
  curl -s -o /dev/null -X POST \
    -H "Authorization: Bearer ${VERCEL_TOKEN}" \
    -H "Content-Type: application/json" \
    "${ENV_URL_BASE}" \
    -d "{\"key\":\"NEXT_PUBLIC_SITE_URL\",\"value\":\"https://${PROJECT_NAME}.vercel.app\",\"type\":\"${TARGET}\",\"target\":[\"${TARGET}\"]}"
done
echo "  Variables configuradas (DATABASE_URL, NEXT_PUBLIC_SITE_URL)"

echo "[4/5] Desplegando desde rama main (production)..."
if [ -z "${GH_TOKEN:-}" ]; then
  echo "ERROR: GH_TOKEN requerido para crear el deployment."
  exit 1
fi
GH_REPO_ID_NUM=$(curl -s -H "Authorization: token ${GH_TOKEN}" "https://api.github.com/repos/${GH_USER}/${REPO_NAME}" | python3 -c "import json,sys; print(json.load(sys.stdin).get('id',''))" 2>/dev/null)
DEPLOY_BODY=$(cat <<EOF
{
  "name": "${PROJECT_NAME}",
  "project": "${PROJECT_ID}",
  "target": "production",
  "gitSource": {
    "type": "github",
    "repoId": ${GH_REPO_ID_NUM},
    "ref": "main"
  }
}
EOF
)
DEPLOY_RES=$(curl -s -w "\n%{http_code}" -X POST \
  -H "Authorization: Bearer ${VERCEL_TOKEN}" \
  -H "Content-Type: application/json" \
  "${DEPLOY_URL_BASE}" \
  -d "$DEPLOY_BODY")
HTTP_CODE=$(echo "$DEPLOY_RES" | tail -1)
BODY=$(echo "$DEPLOY_RES" | sed '$d')
if [ "$HTTP_CODE" != "200" ] && [ "$HTTP_CODE" != "201" ]; then
  echo "ERROR ($HTTP_CODE) creando deployment:"
  echo "$BODY"
  exit 1
fi
DEPLOY_ID=$(echo "$BODY" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('id',''))" 2>/dev/null)
DEPLOY_URL_VAL=$(echo "$BODY" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('url',''))" 2>/dev/null)
INSPECT_URL=$(echo "$BODY" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('inspectUrl',''))" 2>/dev/null)
echo "  Deploy ID: $DEPLOY_ID"
echo "  URL temporal: https://$DEPLOY_URL_VAL"
echo "  Inspect: $INSPECT_URL"

echo "[5/5] Esperando a que el deploy termine..."
STATUS="BUILDING"
ATTEMPTS=0
MAX_ATTEMPTS=60
while [ "$STATUS" = "BUILDING" ] || [ "$STATUS" = "QUEUED" ] || [ "$STATUS" = "INITIALIZING" ]; do
  ATTEMPTS=$((ATTEMPTS + 1))
  if [ $ATTEMPTS -gt $MAX_ATTEMPTS ]; then
    echo "  Timeout esperando deploy. Último estado: $STATUS"
    break
  fi
  sleep 10
  STATUS_RES=$(curl -s -H "Authorization: Bearer ${VERCEL_TOKEN}" "https://api.vercel.com/v13/deployments/${DEPLOY_ID}${TEAM_QS}")
  STATUS=$(echo "$STATUS_RES" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('status','UNKNOWN'))" 2>/dev/null)
  READY=$(echo "$STATUS_RES" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('readyState',''))" 2>/dev/null)
  echo "  [$ATTEMPTS] Estado: $STATUS / readyState: $READY"
done

echo ""
echo "=== ESTADO FINAL DEL DEPLOY ==="
FINAL_RES=$(curl -s -H "Authorization: Bearer ${VERCEL_TOKEN}" "https://api.vercel.com/v13/deployments/${DEPLOY_ID}${TEAM_QS}")
echo "$FINAL_RES" | python3 -c "
import json, sys
d = json.load(sys.stdin)
print('readyState:', d.get('readyState'))
print('status:', d.get('status'))
url = d.get('url')
if url: print('URL temporal:', 'https://' + url)
alias = d.get('alias', [])
for a in alias: print('Alias:', 'https://' + a)
" 2>/dev/null
echo ""
echo "Production URL esperada: https://${PROJECT_NAME}.vercel.app"
echo "Dashboard: https://vercel.com/${VERCEL_USERNAME}/${PROJECT_NAME}"

#!/bin/bash
# Create GitHub repo and push.
#
# Usage:
#   GH_TOKEN=ghp_xxx bash scripts/github-push.sh
#
# Environment variables:
#   GH_TOKEN     (required) GitHub Personal Access Token with repo scope
#   REPO_NAME    (optional) Repo name, defaults to "parque-memorial"
#   PRIVATE      (optional) "true" for private repo, default "false"
set -e

GH_TOKEN="${GH_TOKEN:?ERROR: GH_TOKEN is required}"
REPO_NAME="${REPO_NAME:-parque-memorial}"
PRIVATE="${PRIVATE:-false}"
REPO_DESC="Parque Memorial — Funeraria & Parque Memorial (La Romana, RD). Next.js 16, TypeScript, Tailwind, Prisma."

echo "[1/4] Verificando token de GitHub..."
USER_RESPONSE=$(curl -s -H "Authorization: token ${GH_TOKEN}" https://api.github.com/user)
GH_USER=$(echo "$USER_RESPONSE" | python3 -c "import json,sys; print(json.load(sys.stdin).get('login',''))" 2>/dev/null)
if [ -z "$GH_USER" ]; then
  echo "ERROR: Token inválido o sin permisos."
  echo "Respuesta: $USER_RESPONSE"
  exit 1
fi
echo "  Autenticado como: $GH_USER"

echo "[2/4] Creando repo '${REPO_NAME}' (private=${PRIVATE})..."
CREATE_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
  -H "Authorization: token ${GH_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/user/repos \
  -d "{\"name\":\"${REPO_NAME}\",\"description\":\"${REPO_DESC}\",\"private\":${PRIVATE},\"auto_init\":false}")

HTTP_CODE=$(echo "$CREATE_RESPONSE" | tail -1)
BODY=$(echo "$CREATE_RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "201" ]; then
  HTML_URL=$(echo "$BODY" | python3 -c "import json,sys; print(json.load(sys.stdin).get('html_url',''))" 2>/dev/null)
  echo "  Repo creado: $HTML_URL"
elif [ "$HTTP_CODE" = "422" ]; then
  echo "  El repo ya existe, continuando con el existente..."
  HTML_URL="https://github.com/${GH_USER}/${REPO_NAME}"
else
  echo "ERROR ($HTTP_CODE) creando repo:"
  echo "$BODY"
  exit 1
fi

echo "[3/4] Configurando remote 'origin'..."
cd /home/z/my-project
git remote remove origin 2>/dev/null || true
AUTH_URL="https://${GH_TOKEN}@github.com/${GH_USER}/${REPO_NAME}.git"
git remote add origin "$AUTH_URL"
echo "  Remote configurado (URL con token oculto)."

echo "[4/4] Haciendo push a main..."
git push -u origin main 2>&1 | sed "s/${GH_TOKEN}/***REDACTED***/g"
PUSH_EXIT=$?

if [ $PUSH_EXIT -eq 0 ]; then
  echo ""
  echo "=== PUSH EXITOSO ==="
  echo "Repo:     $HTML_URL"
  echo "Branch:   main"
  echo "Archivos: $(git ls-files | wc -l)"
else
  echo "ERROR en push (código $PUSH_EXIT)"
  exit $PUSH_EXIT
fi

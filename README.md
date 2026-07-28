# Parque Memorial — Funeraria & Parque Memorial (La Romana, RD)

Sitio web institucional de servicios funerarios y Parque Memorial en La Romana,
República Dominicana. Construido con Next.js 16, TypeScript, Tailwind CSS y
Prisma.

## Características

- **Home** (`/`): Hero, servicios, teaser del Parque Memorial, tour virtual, contacto.
- **Parque Memorial** (`/parque-memorial`): página dedicada con hero, intro, stats,
  galería, infraestructura, fases del proyecto, ubicación con mapa, formulario de
  reservas y CTA final.
- **API de Leads** (`/api/leads`): recibe solicitudes del formulario con validación,
  honeypot anti-spam y las persiste en SQLite vía Prisma.
- **SEO**: sitemap.xml, robots.txt, metadata OpenGraph, lang `es_DO`.
- **Responsive**: mobile-first con sticky header y footer.

## Stack

- Next.js 16 (App Router, Turbopack, output standalone)
- TypeScript 5
- Tailwind CSS 4 + shadcn/ui (estilo New York)
- Prisma ORM (SQLite)
- React Hook Form + Zod (formulario de reservas)
- Lucide Icons

## Desarrollo local

```bash
bun install
bun run db:push   # inicializa SQLite
bun run dev       # servidor en http://localhost:3000
```

## Variables de entorno

Crea un archivo `.env` con:

```
DATABASE_URL=file:./db/custom.db
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

## Build de producción

```bash
bun run build
bun run start
```

## Estructura

```
src/
├── app/
│   ├── api/leads/route.ts        # POST /api/leads
│   ├── parque-memorial/page.tsx  # Página dedicada
│   ├── layout.tsx                # Layout con Header + Footer
│   ├── page.tsx                  # Home
│   ├── sitemap.ts                # sitemap.xml
│   └── robots.ts                 # robots.txt
├── components/
│   ├── site/
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── sections/             # Secciones del home
│   │   └── parque-memorial/      # Secciones de /parque-memorial
│   └── ui/                       # shadcn/ui components
└── lib/
    ├── db.ts                     # Prisma client
    ├── site-config.ts            # Constantes del sitio
    └── utils.ts
```

## Licencia

Propietaria. © Parque Memorial.

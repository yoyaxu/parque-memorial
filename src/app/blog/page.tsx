import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ChevronRight, ChevronLeft, BookOpen } from "lucide-react";
import { articles, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog — Ayuda en el duelo",
  description:
    "Recursos, reflexiones y guías prácticas para acompañar los procesos de pérdida y despedida. Artículos de Funeraria Romana.",
  openGraph: {
    title: "Blog — Ayuda en el duelo | Funeraria Romana",
    description:
      "Recursos, reflexiones y guías prácticas para acompañar los procesos de pérdida y despedida.",
    type: "website",
    locale: "es_DO",
  },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-DO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      {/* Hero */}
      <section className="bg-noir text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-gold">
              Inicio
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80">Blog</span>
          </nav>

          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-3">
            Recursos
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold leading-tight max-w-3xl">
            Ayuda en el duelo
          </h1>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-2xl">
            Recursos, reflexiones y guías prácticas para acompañar los procesos
            de pérdida y despedida. Un espacio de calma y orientación para usted
            y su familia.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="bg-cream border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-8 items-center bg-card border border-border rounded-sm overflow-hidden hover:border-gold transition-colors"
          >
            <div className="relative aspect-[16/10] lg:aspect-[4/3] bg-noir overflow-hidden">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <span className="absolute top-4 left-4 bg-gold text-black text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm">
                Destacado
              </span>
            </div>
            <div className="p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                {featured.category}
              </p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-foreground leading-tight group-hover:text-gold transition-colors">
                {featured.title}
              </h2>
              <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{formatDate(featured.publishedAt)}</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  {featured.readTime} de lectura
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
                Leer artículo completo
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Rest of articles */}
      {rest.length > 0 && (
        <section className="bg-background border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
              Más artículos
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((a) => (
                <article
                  key={a.id}
                  className="group bg-card border border-border/80 rounded-sm overflow-hidden hover:border-gold transition-colors flex flex-col"
                >
                  <Link
                    href={`/blog/${a.slug}`}
                    className="block relative aspect-[16/10] bg-noir overflow-hidden"
                  >
                    <Image
                      src={a.coverImage}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold bg-noir/80 backdrop-blur px-2 py-1 rounded-sm">
                      {a.category}
                    </span>
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      {a.readTime} de lectura
                    </p>
                    <h3 className="mt-3 font-serif text-lg font-semibold text-foreground leading-snug">
                      <Link
                        href={`/blog/${a.slug}`}
                        className="group-hover:text-gold transition-colors"
                      >
                        {a.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                      {a.excerpt}
                    </p>
                    <Link
                      href={`/blog/${a.slug}`}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:gap-2 transition-all"
                    >
                      Leer
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-noir text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <BookOpen className="h-8 w-8 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold">
            ¿Necesita hablar con alguien ahora?
          </h2>
          <p className="mt-3 text-white/70">
            Nuestro equipo está disponible 24 horas, 365 días al año, para
            acompañarle en lo que necesite.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center bg-gold text-black font-semibold px-5 py-3 rounded-sm hover:bg-gold/90 transition-colors"
            >
              Llamar ahora
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-5 py-3 rounded-sm hover:bg-white hover:text-black transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Clock, ChevronRight, BookOpen } from "lucide-react";
import { articles } from "@/lib/site-config";

export function BlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="bg-background border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-divider text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            Recursos
          </p>
          <h2
            id="blog-heading"
            className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground"
          >
            Ayuda en el duelo
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
            Recursos, reflexiones y guías prácticas para acompañar los procesos
            de pérdida y despedida. Un espacio de calma y orientación para usted
            y su familia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
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
                  className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold bg-noir/80 backdrop-blur px-2 py-1 rounded-sm">
                  {a.category}
                </span>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
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
                  Leer artículo completo
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-foreground/30 px-5 py-2.5 rounded-sm text-sm font-semibold text-foreground hover:bg-foreground hover:text-white transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Ver todos los artículos
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

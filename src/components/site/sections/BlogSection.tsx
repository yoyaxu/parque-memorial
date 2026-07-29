import Link from "next/link";
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
              <div className="aspect-[16/10] bg-noir relative flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-gold/50" aria-hidden="true" />
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold bg-noir/80 px-2 py-1 rounded-sm">
                  {a.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                  {a.readTime} de lectura
                </p>
                <h3 className="mt-3 font-serif text-lg font-semibold text-foreground leading-snug group-hover:text-gold transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:gap-2 transition-all"
                >
                  Leer
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
          >
            Ver todos los artículos
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

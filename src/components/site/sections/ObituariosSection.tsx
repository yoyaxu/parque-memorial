import Link from "next/link";
import { MapPin, Clock, Heart, Flower2, ChevronRight } from "lucide-react";
import { obituaries, siteConfig } from "@/lib/site-config";

export function ObituariosSection() {
  return (
    <section
      id="obituarios"
      aria-labelledby="obituarios-heading"
      className="bg-cream border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="section-divider text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            Obituarios
          </p>
          <h2
            id="obituarios-heading"
            className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground"
          >
            Velatorios en curso
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
            Honramos a quienes han partido. Aquí puede consultar los servicios
            en curso, enviar condolencias a las familias y conocer los detalles
            de cada velatorio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {obituaries.map((o) => (
            <article
              key={o.id}
              className="bg-card border border-border/80 rounded-sm overflow-hidden hover:border-gold transition-colors"
            >
              <div className="p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-noir text-white font-serif text-lg font-semibold">
                    {o.initials}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-foreground leading-tight">
                      {o.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {o.age} años · Falleció el {o.deathDate}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-5 pl-4 border-l-2 border-gold/40 italic text-sm text-foreground/80 leading-relaxed">
                  “{o.quote}”
                </blockquote>

                <div className="mt-6 space-y-2.5 text-sm">
                  <p className="flex items-start gap-2.5 text-foreground/80">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span>{o.location}</span>
                  </p>
                  <p className="flex items-start gap-2.5 text-foreground/80">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span>{o.schedule}</span>
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Heart className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                    {o.condolences} condolencias
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-gold cursor-pointer">
                    <Flower2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Enviar flores
                  </span>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-gold font-medium hover:underline"
                  >
                    Ver detalles
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Para consultar obituarios anteriores o servicios ya realizados,
          escríbanos a{" "}
          <a
            href={siteConfig.emailHref}
            className="text-gold font-medium hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </section>
  );
}

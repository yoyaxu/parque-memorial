import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function HomeHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-foreground/90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        {/* Patrón sutil */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 ring-1 ring-white/20 backdrop-blur">
            La Romana · República Dominicana
          </span>
          <h1
            id="hero-heading"
            className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-tight"
          >
            Acompañamos a tu familia con{" "}
            <span className="text-accent">respeto y dignidad</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
            Servicios funerarios integrales: sala de velación, capillas privadas,
            cremación y, próximamente, el Parque Memorial en un entorno natural
            de paz. Disponibles 24 horas, los 7 días de la semana.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/parque-memorial">
                Conoce el Parque Memorial
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/5 text-white border-white/30 hover:bg-white/10 hover:text-white"
            >
              <a href={siteConfig.phoneHref}>
                <Phone className="mr-2 h-4 w-4" />
                {siteConfig.phone}
              </a>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-4 max-w-xl">
            <div className="rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur px-4 py-3">
              <dt className="text-xs uppercase tracking-wider text-white/60">Disponibilidad</dt>
              <dd className="mt-1 font-serif text-2xl font-semibold text-white">24/7</dd>
            </div>
            <div className="rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur px-4 py-3">
              <dt className="text-xs uppercase tracking-wider text-white/60">Capacidad</dt>
              <dd className="mt-1 font-serif text-2xl font-semibold text-white">80+</dd>
            </div>
            <div className="rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur px-4 py-3">
              <dt className="text-xs uppercase tracking-wider text-white/60">Años</dt>
              <dd className="mt-1 font-serif text-2xl font-semibold text-white">15+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

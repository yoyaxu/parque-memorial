import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="pm-hero-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-foreground/95"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <nav
          aria-label="Migas de pan"
          className="mb-8 flex items-center gap-2 text-sm text-white/70"
        >
          <Link href="/" className="hover:text-white">Inicio</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-white">Parque Memorial</span>
        </nav>

        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            Próximamente · Reservas abiertas
          </span>
          <h1
            id="pm-hero-heading"
            className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-tight"
          >
            Parque Memorial
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
            Un nuevo concepto en memoriales en La Romana. Nichos verticales,
            parcelas tradicionales, mausoleo familiar y un jardín memorial,
            todo en un entorno natural de 12,000 m² diseñado para el
            recogimiento y el respeto.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#reservar"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-7 text-sm font-semibold text-accent-foreground shadow hover:bg-accent/90 transition-colors"
            >
              Apartar mi lugar
            </a>
            <a
              href="#galeria"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Ver galería
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

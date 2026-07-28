import Link from "next/link";
import { ArrowRight, MapPin, Clock, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CementerioProntoSection() {
  return (
    <section
      id="parque-memorial"
      className="relative isolate overflow-hidden py-20 sm:py-28"
      aria-labelledby="cementerio-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-foreground/95"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">
              Próximamente · Reservas abiertas
            </Badge>
            <h2
              id="cementerio-heading"
              className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight"
            >
              Parque Memorial: un lugar de paz para tus seres queridos
            </h2>
            <p className="mt-5 text-lg text-white/80 leading-relaxed">
              Un nuevo concepto en memoriales en La Romana. Nichos verticales,
              parcelas tradicionales, mausoleo familiar y un jardín memorial,
              todo en un entorno natural diseñado para el recogimiento y el
              respeto.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Nichos verticales modernos con mantenimiento permanente",
                "Parcelas tradicionales y mausoleo familiar",
                "Jardín memorial para cenizas",
                "Infraestructura completa: capilla, café, estacionamiento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90">
                  <TreePine className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/parque-memorial">
                  Conoce más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/5 text-white border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Link href="/parque-memorial#reservar">Apartar mi lugar</Link>
              </Button>
            </div>
          </div>

          {/* Tarjeta lateral */}
          <div className="lg:pl-8">
            <div className="rounded-2xl bg-white/10 backdrop-blur p-8 ring-1 ring-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Ubicación</p>
                  <p className="font-serif text-lg font-semibold text-white">
                    Carretera La Romana - Higüeral
                  </p>
                </div>
              </div>

              <dl className="space-y-4 border-t border-white/15 pt-6">
                <div className="flex justify-between items-baseline">
                  <dt className="text-sm text-white/70">Fase 1</dt>
                  <dd className="text-sm font-medium text-white">Nichos verticales · 200 unidades</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-sm text-white/70">Fase 2</dt>
                  <dd className="text-sm font-medium text-white">Parcelas + Mausoleo familiar</dd>
                </div>
                <div className="flex justify-between items-baseline">
                  <dt className="text-sm text-white/70">Superficie total</dt>
                  <dd className="text-sm font-medium text-white">12,000 m²</dd>
                </div>
                <div className="flex items-start gap-2 pt-3 border-t border-white/15">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <dd className="text-sm text-white/80">
                    Reservas con planes de pago flexibles. Aparta tu lugar sin compromiso.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

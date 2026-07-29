import Link from "next/link";
import { ArrowRight, MapPin, Clock, TreePine, Building2, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CementerioProntoSection() {
  return (
    <section
      id="parque-memorial"
      className="relative isolate overflow-hidden py-20 sm:py-24 border-y border-border bg-secondary/40"
      aria-labelledby="cementerio-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - contenido */}
          <div>
            <Badge variant="outline" className="bg-background">
              <HardHat className="mr-1.5 h-3 w-3" aria-hidden="true" />
              Proyecto en desarrollo
            </Badge>
            <h2
              id="cementerio-heading"
              className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
            >
              Parque Memorial: un nuevo espacio, próximamente
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Estamos desarrollando un nuevo Parque Memorial en La Romana:
              nichos verticales, parcelas tradicionales, mausoleo familiar y
              un jardín memorial, en un entorno natural diseñado para el
              recogimiento. <strong className="text-foreground">Aún no está
              inaugurado</strong>, pero las reservas ya están abiertas para
              familias que quieran apartar su lugar con anticipación.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Nichos verticales modernos con mantenimiento permanente",
                "Parcelas tradicionales y mausoleo familiar",
                "Jardín memorial para cenizas",
                "Capilla ecuménica, cafetería y estacionamiento amplio",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <TreePine className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link href="/parque-memorial">
                  Conoce más del proyecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/parque-memorial#reservar">Apartar mi lugar</Link>
              </Button>
            </div>
          </div>

          {/* Columna derecha - tarjeta resumen */}
          <div className="lg:pl-8">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Ubicación</p>
                  <p className="font-serif text-base font-semibold">
                    Carretera La Romana - Higüeral
                  </p>
                </div>
              </div>

              <dl className="space-y-3.5 border-t border-border pt-5">
                <div className="flex justify-between items-baseline gap-3">
                  <dt className="text-sm text-muted-foreground">Fase 1</dt>
                  <dd className="text-sm font-medium text-right">Nichos verticales · 200 unidades</dd>
                </div>
                <div className="flex justify-between items-baseline gap-3">
                  <dt className="text-sm text-muted-foreground">Fase 2</dt>
                  <dd className="text-sm font-medium text-right">Parcelas + Mausoleo familiar</dd>
                </div>
                <div className="flex justify-between items-baseline gap-3">
                  <dt className="text-sm text-muted-foreground">Superficie total</dt>
                  <dd className="text-sm font-medium">12,000 m²</dd>
                </div>
                <div className="flex justify-between items-baseline gap-3">
                  <dt className="text-sm text-muted-foreground">Estado</dt>
                  <dd className="text-sm font-medium text-primary">En construcción</dd>
                </div>
              </dl>

              <div className="mt-5 pt-5 border-t border-border flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">
                  Reservas con planes de pago flexibles. Aparta tu lugar sin
                  compromiso mientras se completa la obra.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Servicios funerarios operando normalmente en La Romana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

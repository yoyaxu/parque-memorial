import {
  Building2,
  Heart,
  Flame,
  Car,
  Trees,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Heart,
  Flame,
  Car,
  Trees,
  ClipboardList,
};

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-20 sm:py-28 bg-background"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Nuestros servicios
          </span>
          <h2
            id="services-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Acompañamiento completo en cada etapa
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Desde la velación hasta la cremación o el Parque Memorial, ofrecemos
            servicios pensados para honrar la memoria de tus seres queridos con
            respeto y profesionalismo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Building2;
            return (
              <Card
                key={service.id}
                className="group transition-all hover:shadow-md hover:-translate-y-0.5 border-border/60"
              >
                <CardHeader>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-3 font-serif text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

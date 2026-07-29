import { Building2, ClipboardList, Flame, type LucideIcon } from "lucide-react";
import { services } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  ClipboardList,
  Flame,
};

export function ServicesSection() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="bg-cream border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="section-divider text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            Servicios
          </p>
          <h2
            id="servicios-heading"
            className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground"
          >
            A su lado en cada momento
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
            Desde la atención inmediata en momentos de pérdida hasta la
            planificación anticipada de pre-arreglos, ofrecemos un servicio
            integral con la dignidad y el respeto que su familia merece.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Building2;
            return (
              <article
                key={s.id}
                className="group bg-card border border-border/80 rounded-sm p-8 transition-all hover:border-gold hover:shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-black">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

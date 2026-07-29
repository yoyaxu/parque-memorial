import { Check } from "lucide-react";
import { additionalServices } from "@/lib/site-config";

export function AdditionalServicesSection() {
  const cols = [
    additionalServices.col1,
    additionalServices.col2,
    additionalServices.col3,
  ];

  return (
    <section aria-labelledby="additional-heading" className="bg-background border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2
          id="additional-heading"
          className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-10 text-center"
        >
          Servicios especializados
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-serif text-lg font-semibold text-gold uppercase tracking-wide mb-4 pb-3 border-b border-gold/30">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

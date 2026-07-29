import { Crown, Star, Cross, Check, type LucideIcon } from "lucide-react";
import { plans } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Crown,
  Star,
  Cross,
};

export function PlansSection() {
  return (
    <section
      id="planes"
      aria-labelledby="planes-heading"
      className="bg-noir text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="section-divider text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            Planes funerarios
          </p>
          <h2
            id="planes-heading"
            className="mt-4 font-serif text-3xl sm:text-4xl font-semibold"
          >
            Cinco planes, una misma dignidad
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-white/75 leading-relaxed">
            Desde el servicio esencial hasta el plan más distinguido, cada
            opción incluye atención 24/7, equipo profesional y la garantía de
            Funeraria Romana. Eliga con calma, le asesoramos sin compromiso.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const Icon = iconMap[plan.tierIcon] ?? Crown;
            return (
              <article
                key={plan.id}
                className={cn(
                  "relative bg-noir-deep border p-7 rounded-sm flex flex-col",
                  plan.highlighted
                    ? "border-gold ring-1 ring-gold/40 md:-translate-y-2"
                    : "border-white/10"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
                    Más solicitado
                  </span>
                )}

                <div className="flex items-center gap-2 text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                    {plan.tier}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-semibold">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm italic text-white/70">
                  {plan.subtitle}
                </p>
                <p className="mt-4 text-sm text-white/80 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                    Ataúd incluido
                  </p>
                  <p className="mt-1 text-sm text-white font-medium">
                    {plan.coffin}
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-white/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.extras?.map((e) => (
                    <li key={e} className="flex gap-2 text-sm text-white/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#pre-arreglos"
                  className={cn(
                    "mt-7 inline-flex items-center justify-center rounded-sm px-4 py-3 text-sm font-semibold transition-colors",
                    plan.highlighted
                      ? "bg-gold text-black hover:bg-gold/90"
                      : "border border-white/30 text-white hover:bg-white hover:text-black"
                  )}
                >
                  {plan.cta}
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-white/60">
          ¿Conoce a alguien que podría estar interesado?{" "}
          <a
            href="https://wa.me/18093994382"
            className="text-gold font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctenos por WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}

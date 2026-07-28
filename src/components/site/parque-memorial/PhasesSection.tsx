import { CheckCircle2, Clock } from "lucide-react";

type Phase = {
  number: string;
  title: string;
  status: "available" | "soon";
  statusLabel: string;
  description: string;
  features: string[];
};

const phases: Phase[] = [
  {
    number: "01",
    title: "Fase 1 — Nichos verticales",
    status: "available",
    statusLabel: "Reservas abiertas",
    description:
      "La primera etapa del Parque Memorial ofrece 200 nichos verticales con diseño moderno, materiales duraderos y acabados de primera. Cada nicho incluye placa conmemorativa personalizada y mantenimiento permanente.",
    features: [
      "200 nichos verticales disponibles",
      "Diseño modular con materiales premium",
      "Placa conmemorativa personalizada incluida",
      "Acceso 24/7 con APP de gestión",
      "Iluminación LED en pasillos internos",
      "Mantenimiento permanente del área",
    ],
  },
  {
    number: "02",
    title: "Fase 2 — Parcelas y mausoleo",
    status: "soon",
    statusLabel: "Próximamente",
    description:
      "La segunda etapa incorpora parcelas tradicionales en tierra, mausoleo familiar para grupos familiares y un jardín memorial para cenizas. Espacios pensados para quienes buscan opciones tradicionales o privadas.",
    features: [
      "Parcelas tradicionales en tierra",
      "Mausoleo familiar privado (4-12 espacios)",
      "Jardín memorial para cenizas",
      "Áreas verdes expandidas (+2,000 m²)",
      "Capilla ecuménica operativa",
      "Cafetería y sala de descanso",
    ],
  },
];

export function PhasesSection() {
  return (
    <section className="py-20 sm:py-24 bg-background" aria-labelledby="phases-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Plan de desarrollo
          </span>
          <h2
            id="phases-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Una construcción por etapas, calidad en cada paso
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Desarrollamos el Parque Memorial por fases para garantizar la
            calidad de cada detalle. Así aseguramos que cada espacio cumpla
            con los estándares que tu familia merece.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Columna izquierda - número y estado */}
                <div className="bg-primary text-primary-foreground p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="font-serif text-6xl font-semibold opacity-30">
                      {phase.number}
                    </span>
                    <div className="mt-4">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                          phase.status === "available"
                            ? "bg-accent text-accent-foreground"
                            : "bg-white/10 text-white/90 ring-1 ring-white/20"
                        }`}
                      >
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {phase.statusLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Columna derecha - contenido */}
                <div className="lg:col-span-2 p-8 lg:p-10">
                  <h3 className="font-serif text-2xl font-semibold">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {phase.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

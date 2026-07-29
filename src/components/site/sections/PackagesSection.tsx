import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Plan Esencial",
    price: "RD$45,000",
    period: "pago único",
    description:
      "Servicio funerario básico para despedir a tu ser querido con dignidad, sin complicaciones.",
    features: [
      "Sala de velación por 24 horas",
      "Ataúd estándar de madera",
      "Traslado local en carroza fúnebre",
      "Trámites legales básicos",
      "Asesoría permanente",
    ],
    cta: "Solicitar información",
  },
  {
    name: "Plan Integral",
    price: "RD$89,000",
    period: "pago único",
    description:
      "El equilibrio entre servicios completos y atención personalizada para tu familia.",
    features: [
      "Sala de velación por 48 horas",
      "Ataúd premium de madera fina",
      "Capilla privada para ceremonia",
      "Traslados nacionales incluidos",
      "Programa de orden del servicio",
      "Café y agua para acompañantes",
      "Asesoría y trámites completos",
    ],
    highlighted: true,
    cta: "Solicitar información",
  },
  {
    name: "Plan Preneed",
    price: "Desde RD$2,500",
    period: "/ mes",
    description:
      "Planifica con anticipación y protege a tu familia de decisiones difíciles en el momento.",
    features: [
      "Plan de pago flexible (12-120 meses)",
      "Precio congelado, sin inflación",
      "Servicio garantizado al fallecer",
      "Transferible a familiares directos",
      "Sin examen médico",
      "Reserva de lugar en Parque Memorial*",
    ],
    cta: "Hablar con un asesor",
  },
];

export function PackagesSection() {
  return (
    <section id="paquetes" className="py-20 sm:py-24 bg-secondary/40 border-y border-border" aria-labelledby="packages-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Paquetes funerarios
          </span>
          <h2
            id="packages-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Planes pensados para cada familia
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Precios transparentes, sin sorpresas. Todos nuestros planes incluyen
            asesoría permanente y trámites. También ofrecemos planes de pago
            personalizados.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                plan.highlighted
                  ? "border-primary bg-card shadow-lg lg:scale-[1.03]"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Más solicitado
                  </Badge>
                </div>
              )}
              <h3 className="font-serif text-xl font-semibold">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-serif text-3xl font-semibold text-primary">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-7 w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                <Link href="/#contacto">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          * La reserva en el Parque Memorial está sujeta a disponibilidad.{" "}
          <Link href="/parque-memorial" className="text-primary hover:underline">
            Conoce el proyecto
          </Link>
          . Precios referenciales, pueden variar según requerimientos específicos.
        </p>
      </div>
    </section>
  );
}

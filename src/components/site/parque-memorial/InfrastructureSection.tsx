import {
  TreePine,
  Shield,
  Flower2,
  Car,
  Building2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Building2,
    title: "Capilla ecuménica",
    description:
      "Espacio para ceremonias de cualquier denominación religiosa. Aire acondicionado, capacidad para 60 personas y sistema de audio. Disponible para servicios privados con reserva anticipada.",
  },
  {
    icon: TreePine,
    title: "Áreas verdes ajardinadas",
    description:
      "Más de 4,000 m² de áreas verdes con vegetación local, árboles de sombra y flores de temporada. Senderos peatonales amplios y accesibles para personas con movilidad reducida.",
  },
  {
    icon: Shield,
    title: "Vigilancia 24/7",
    description:
      "Seguridad permanente con personal de guardia, circuito cerrado de cámaras y control de accesos. Garantizamos la tranquilidad de las familias en todo momento.",
  },
  {
    icon: Flower2,
    title: "Mantenimiento permanente",
    description:
      "Equipo dedicado al cuidado constante de nichos, parcelas, jardines y áreas comunes. Servicio de limpieza, jardinería y conservación incluido en el plan.",
  },
  {
    icon: Car,
    title: "Estacionamiento amplio",
    description:
      "Más de 80 espacios de estacionamiento, incluyendo plazas para personas con discapacidad. Acceso vehicular señalizado y cómodo para visitas familiares.",
  },
  {
    icon: Smartphone,
    title: "APP de gestión",
    description:
      "Aplicación móvil exclusiva para ubicar nichos y parcelas, reservar visitas, programar recordatorios y gestionar pagos de mantenimiento en línea.",
  },
];

export function InfrastructureSection() {
  return (
    <section
      className="py-20 sm:py-24 bg-secondary/40 border-y border-border"
      aria-labelledby="infra-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Infraestructura
          </span>
          <h2
            id="infra-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Todo lo que tu familia necesita en un solo lugar
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            El Parque Memorial combina infraestructura moderna con respeto por
            el entorno natural. Cada detalle está pensado para que las familias
            encuentren un espacio digno y acogedor.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

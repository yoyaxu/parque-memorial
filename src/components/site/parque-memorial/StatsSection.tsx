import { Trees, Shield, Flower2, Car, Camera, Building } from "lucide-react";

const stats = [
  {
    icon: Trees,
    value: "12,000 m²",
    label: "Superficie total",
    description: "Espacio amplio con áreas verdes, caminos internos y zonas de descanso.",
  },
  {
    icon: Shield,
    value: "24/7",
    label: "Vigilancia",
    description: "Seguridad permanente con cámaras y personal de guardia.",
  },
  {
    icon: Flower2,
    value: "100%",
    label: "Mantenimiento",
    description: "Cuidado constante de áreas comunes, jardines y nichos.",
  },
  {
    icon: Car,
    value: "80+",
    label: "Estacionamientos",
    description: "Amplio estacionamiento para visitantes, con accesos inclusivos.",
  },
  {
    icon: Building,
    value: "Capilla",
    label: "Ecuménica",
    description: "Espacio para ceremonias de cualquier denominación religiosa.",
  },
  {
    icon: Camera,
    value: "APP",
    label: "Gestión digital",
    description: "Aplicación para ubicar nichos, reservar visitas y pagar servicios.",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 sm:py-24 bg-secondary/40 border-y border-border" aria-labelledby="stats-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Infraestructura
          </span>
          <h2 id="stats-heading" className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight">
            Diseñado para el respeto y la tranquilidad
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Cada elemento del Parque Memorial está pensado para ofrecer a las
            familias un espacio que combine comodidad, seguridad y belleza natural.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 font-serif text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm font-medium">{stat.label}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

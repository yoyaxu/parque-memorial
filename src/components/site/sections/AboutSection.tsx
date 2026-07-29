import { Heart, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Respeto y dignidad",
    description:
      "Tratamos a cada familia y cada ser querido con el máximo respeto. Sabemos que estamos acompañando en uno de los momentos más difíciles, y nuestra prioridad es que cada despedida sea digna, tranquila y significativa.",
  },
  {
    icon: Shield,
    title: "Confianza y transparencia",
    description:
      "Más de 15 años atendiendo a las familias de La Romana nos respaldan. Precios claros desde el primer momento, sin sorpresas, y un equipo comprometido que te guía en cada decisión.",
  },
  {
    icon: Sparkles,
    title: "Atención personalizada",
    description:
      "Cada familia es única. Adaptamos nuestros servicios a tus necesidades, creencias y presupuesto. Desde la velación hasta el último adiós, estamos disponibles 24 horas, los 7 días de la semana.",
  },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 sm:py-24 bg-background" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Columna izquierda */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Sobre nosotros
            </span>
            <h2
              id="about-heading"
              className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
            >
              Acompañando a las familias de La Romana desde hace más de 15 años
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Somos una funeraria familiar comprometida con la comunidad de
                La Romana. Desde nuestros inicios, hemos acompañado a cientos de
                familias en el proceso de despedir a sus seres queridos,
                ofreciendo servicios integrales que combinan tradición,
                profesionalismo y calidez humana.
              </p>
              <p>
                Nuestro equipo está formado por personas preparadas no solo
                técnicamente, sino también humanamente. Entendemos que detrás
                de cada servicio hay una historia, una familia y un duelo que
                merece ser cuidado con sensibilidad. Por eso estamos
                disponibles 24 horas, todos los días del año.
              </p>
              <p>
                Ahora estamos dando el siguiente paso: la construcción del{" "}
                <strong className="text-foreground">Parque Memorial</strong>,
                un nuevo espacio que ampliará nuestros servicios con nichos,
                parcelas y un jardín memorial en un entorno natural de paz. Un
                proyecto que refleja nuestro compromiso a largo plazo con la
                memoria de quienes nos han confiado sus seres queridos.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <dt className="font-serif text-2xl font-semibold text-primary">15+</dt>
                <dd className="mt-1 text-xs text-muted-foreground">Años de servicio</dd>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <dt className="font-serif text-2xl font-semibold text-primary">500+</dt>
                <dd className="mt-1 text-xs text-muted-foreground">Familias atendidas</dd>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <dt className="font-serif text-2xl font-semibold text-primary">24/7</dt>
                <dd className="mt-1 text-xs text-muted-foreground">Disponibilidad</dd>
              </div>
            </dl>
          </div>

          {/* Columna derecha - valores */}
          <div className="space-y-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold">{value.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  location: string;
  date: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Familia Fernández Rosario",
    location: "La Romana",
    date: "Marzo 2026",
    text: "En el momento más difícil de nuestra familia, encontramos un equipo humano que nos acompañó con respeto y paciencia. Cada detalle fue cuidado, desde la velación hasta el último adiós. No tenemos palabras para agradecer tanto cariño.",
  },
  {
    name: "Lucía Martínez",
    location: "Higüey",
    date: "Enero 2026",
    text: "Perdimos a mi papá de manera repentina y no sabíamos qué hacer. Llamamos a las 3 de la mañana y nos atendieron de inmediato. Se encargaron de todo, nosotros solo nos dedicamos a despedirlo. Profundamente agradecida.",
  },
  {
    name: "Familia Reyes Castillo",
    location: "La Romana",
    date: "Noviembre 2025",
    text: "Contratamos el plan preneed hace 5 años para mi mamá. Cuando falleció el año pasado, todo estaba listo y pago. Nos ahorramos decisiones y trámites en medio del dolor. Una de las mejores decisiones que tomamos.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="py-20 sm:py-24 bg-background"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Testimonios
          </span>
          <h2
            id="testimonials-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Familias que confiaron en nosotros
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Algunas palabras de las familias que hemos acompañado. Compartimos
            sus testimonios con su autorización y gratitud.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col"
            >
              <div className="flex items-center gap-1 text-accent mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <Quote className="h-6 w-6 text-primary/30 mb-3" aria-hidden="true" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-serif font-semibold">{t.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {t.location} · {t.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

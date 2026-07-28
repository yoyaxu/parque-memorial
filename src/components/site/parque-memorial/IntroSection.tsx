export function IntroSection() {
  return (
    <section className="py-20 sm:py-24 bg-background" aria-labelledby="intro-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Nuestro proyecto
        </span>
        <h2
          id="intro-heading"
          className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
        >
          Un memorial pensado para el descanso eterno
        </h2>
        <div className="mt-6 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p>
            El Parque Memorial nace de la convicción de que cada vida merece
            un espacio digno, tranquilo y perdurable. Ubicado en la carretera
            La Romana - Higüeral, este nuevo memorial se desarrolla bajo
            estándares modernos de infraestructura, manteniendo el respeto
            y la serenidad que merecen las familias que confían en nosotros.
          </p>
          <p>
            El proyecto se desarrolla por fases para garantizar calidad en cada
            etapa. La <strong className="text-foreground">Fase 1</strong> ofrece
            200 nichos verticales con diseño moderno y mantenimiento permanente.
            La <strong className="text-foreground">Fase 2</strong> incorpora
            parcelas tradicionales, mausoleo familiar y un jardín memorial
            para quienes eligen la cremación.
          </p>
          <p>
            Con una superficie total de <strong className="text-foreground">12,000 m²</strong>,
            el parque incluye infraestructura completa: capilla ecuménica,
            sala de descanso, cafetería, estacionamiento amplio, vigilancia 24/7
            y áreas verdes ajardinadas. Todo diseñado para que cada visita sea
            un momento de paz y conexión.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-serif text-2xl font-semibold text-primary">12,000 m²</p>
            <p className="mt-1 text-sm text-muted-foreground">Superficie total del parque</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-serif text-2xl font-semibold text-primary">200+</p>
            <p className="mt-1 text-sm text-muted-foreground">Nichos en Fase 1</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="font-serif text-2xl font-semibold text-primary">24/7</p>
            <p className="mt-1 text-sm text-muted-foreground">Vigilancia y seguridad</p>
          </div>
        </div>
      </div>
    </section>
  );
}

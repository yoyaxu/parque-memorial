import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function MidCtaSection() {
  return (
    <section aria-labelledby="midcta-heading" className="bg-cream border-t border-border/60">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2
          id="midcta-heading"
          className="font-serif text-2xl sm:text-3xl font-semibold text-foreground leading-snug"
        >
          ¿Necesita asesoría inmediata o desea planificar con anticipación?
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Estamos disponibles 24 horas para acompañarle. Sin compromiso, sin
          costos ocultos.
        </p>
        <Link
          href="#pre-arreglos"
          className="mt-6 inline-flex items-center gap-2 text-gold font-semibold text-lg hover:gap-3 transition-all"
        >
          Conversemos sobre sus necesidades
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}

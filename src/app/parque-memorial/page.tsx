import type { Metadata } from "next";
import { Hero } from "@/components/site/parque-memorial/Hero";
import { IntroSection } from "@/components/site/parque-memorial/IntroSection";
import { StatsSection } from "@/components/site/parque-memorial/StatsSection";
import { GallerySection } from "@/components/site/parque-memorial/GallerySection";
import { InfrastructureSection } from "@/components/site/parque-memorial/InfrastructureSection";
import { PhasesSection } from "@/components/site/parque-memorial/PhasesSection";
import { LocationSection } from "@/components/site/parque-memorial/LocationSection";
import { ReservationForm } from "@/components/site/parque-memorial/ReservationForm";
import { CtaSection } from "@/components/site/parque-memorial/CtaSection";

export const metadata: Metadata = {
  title: "Parque Memorial — Nichos, parcelas y mausoleo en La Romana",
  description:
    "Parque Memorial en La Romana: nichos verticales, parcelas tradicionales, mausoleo familiar y jardín memorial en un entorno natural de 12,000 m². Reservas abiertas.",
  alternates: {
    canonical: "/parque-memorial",
  },
  openGraph: {
    title: "Parque Memorial — La Romana",
    description:
      "Nichos verticales, parcelas, mausoleo familiar y jardín memorial. Reservas abiertas.",
  },
};

export default function ParqueMemorialPage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <StatsSection />
      <GallerySection />
      <InfrastructureSection />
      <PhasesSection />
      <LocationSection />

      {/* Reservación */}
      <section
        id="reservar"
        className="py-20 sm:py-24 bg-background"
        aria-labelledby="reserve-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Reservar
            </span>
            <h2
              id="reserve-heading"
              className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
            >
              Aparta tu lugar en el Parque Memorial
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Completa el formulario y un asesor te contactará para coordinar
              una visita o resolver tus dudas. Sin compromiso.
            </p>
          </div>

          <ReservationForm />
        </div>
      </section>

      <CtaSection />
    </>
  );
}

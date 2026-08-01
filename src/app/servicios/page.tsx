import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ServicesSection } from "@/components/site/sections/ServicesSection";
import { AdditionalServicesSection } from "@/components/site/sections/AdditionalServicesSection";
import { CoverageSection } from "@/components/site/sections/CoverageSection";
import { TourSection } from "@/components/site/sections/TourSection";
import { PreArreglosSection } from "@/components/site/sections/PreArreglosSection";

export const metadata: Metadata = {
  title: "Servicios Funerarios en La Romana | Funeraria Romana",
  description:
    "Velatorio, cremación, pre-arreglos, traslados nacionales e internacionales a Haití. Servicio 24 horas, 365 días en La Romana, República Dominicana.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios funerarios"
        title="Acompañamiento integral en cada momento"
        description="Desde el velatorio y la cremación hasta los traslados internacionales y los pre-arreglos. Servicio disponible 24 horas, los 365 días del año, con la calidez de quienes conocen a las familias de La Romana."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios" },
        ]}
      />

      <ServicesSection />
      <AdditionalServicesSection />
      <CoverageSection />
      <TourSection />
      <PreArreglosSection />
    </>
  );
}

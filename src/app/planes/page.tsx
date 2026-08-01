import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { PlansSection } from "@/components/site/sections/PlansSection";
import { FaqSection } from "@/components/site/sections/FaqSection";

export const metadata: Metadata = {
  title: "Planes Funerarios GOLD · ROYAL · Plan A | Funeraria Romana",
  description:
    "Conozca nuestros planes funerarios: Plan GOLD premium, Plan ROYAL semi-premium y Plan A esencial. Precios claros, financiación flexible y pre-arreglos transferibles.",
  alternates: { canonical: "/planes" },
};

export default function PlanesPage() {
  return (
    <>
      <PageHero
        eyebrow="Planes funerarios"
        title="Tres niveles de servicio, una misma dignidad"
        description="Cada familia merece una despedida acorde a sus recursos y a la vida que honra. Nuestros planes GOLD, ROYAL y Plan A cubren desde lo esencial hasta la máxima distinción, con precios claros y financiación flexible."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Planes" },
        ]}
      />

      <PlansSection />
      <FaqSection />
    </>
  );
}

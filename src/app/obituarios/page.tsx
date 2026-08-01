import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ObituariosExplorer } from "@/components/site/sections/ObituariosExplorer";
import { ContactSection } from "@/components/site/sections/ContactSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Obituarios en La Romana | Funeraria Romana",
  description:
    "Consulte los velatorios en curso en Funeraria Romana. Busque por nombre, sala o fecha, envíe condolencias y envíe arreglos florales a la familia.",
  alternates: { canonical: "/obituarios" },
};

export default function ObituariosPage() {
  return (
    <>
      <PageHero
        eyebrow="Obituarios · En vivo"
        title="Velatorios en curso"
        description="Honramos a quienes han partido. Consulte los servicios activos, envíe condolencias a las familias y coordine envío de arreglos florales a través de nuestra tienda."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Obituarios" },
        ]}
      >
        <p className="text-[13px] text-muted-foreground">
          Para obituarios anteriores o servicios ya realizados, escríbanos a{" "}
          <a
            href={siteConfig.emailHref}
            className="text-gold font-medium hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
      </PageHero>

      <ObituariosExplorer />
      <ContactSection />
    </>
  );
}

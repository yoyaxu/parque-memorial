import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/site/PageHero";
import { TiendaExplorer } from "@/components/site/sections/TiendaExplorer";
import { ContactSection } from "@/components/site/sections/ContactSection";

export const metadata: Metadata = {
  title: "Tienda — Coronas, Arreglos Florales y Urnas | Funeraria Romana",
  description:
    "Tienda de productos funerarios en La Romana: coronas, arreglos florales, urnas y recordatorios. Seleccione el velatorio de destino al comprar.",
  alternates: { canonical: "/tienda" },
};

export default function TiendaPage() {
  return (
    <>
      <PageHero
        eyebrow="Tienda · Arreglos florales"
        title="Coronas, arreglos y recordatorios"
        description="Envíe un homenaje floral al velatorio. Seleccione el producto y elija el velatorio de destino al hacer el pedido. Entrega coordinada en 2-4 horas dentro de La Romana."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Tienda" },
        ]}
      />

      <Suspense fallback={null}>
        <TiendaExplorer />
      </Suspense>
      <ContactSection />
    </>
  );
}

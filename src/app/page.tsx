import { HomeHero } from "@/components/site/sections/HomeHero";
import { ServicesSection } from "@/components/site/sections/ServicesSection";
import { AdditionalServicesSection } from "@/components/site/sections/AdditionalServicesSection";
import { CementerioProntoSection } from "@/components/site/sections/CementerioProntoSection";
import { MidCtaSection } from "@/components/site/sections/MidCtaSection";
import { PlansSection } from "@/components/site/sections/PlansSection";
import { ObituariosSection } from "@/components/site/sections/ObituariosSection";
import { TourSection } from "@/components/site/sections/TourSection";
import { CoverageSection } from "@/components/site/sections/CoverageSection";
import { BlogSection } from "@/components/site/sections/BlogSection";
import { PreArreglosSection } from "@/components/site/sections/PreArreglosSection";
import { FaqSection } from "@/components/site/sections/FaqSection";
import { ContactSection } from "@/components/site/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <AdditionalServicesSection />
      <CementerioProntoSection />
      <MidCtaSection />
      <PlansSection />
      <ObituariosSection />
      <TourSection />
      <CoverageSection />
      <BlogSection />
      <PreArreglosSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

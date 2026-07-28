import { HomeHero } from "@/components/site/sections/HomeHero";
import { ServicesSection } from "@/components/site/sections/ServicesSection";
import { CementerioProntoSection } from "@/components/site/sections/CementerioProntoSection";
import { TourSection } from "@/components/site/sections/TourSection";
import { ContactSection } from "@/components/site/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <CementerioProntoSection />
      <TourSection />
      <ContactSection />
    </>
  );
}

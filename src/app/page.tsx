import { HomeHero } from "@/components/site/sections/HomeHero";
import { AboutSection } from "@/components/site/sections/AboutSection";
import { ServicesSection } from "@/components/site/sections/ServicesSection";
import { PackagesSection } from "@/components/site/sections/PackagesSection";
import { TourSection } from "@/components/site/sections/TourSection";
import { TestimonialsSection } from "@/components/site/sections/TestimonialsSection";
import { CementerioProntoSection } from "@/components/site/sections/CementerioProntoSection";
import { FaqSection } from "@/components/site/sections/FaqSection";
import { ContactSection } from "@/components/site/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <TourSection />
      <TestimonialsSection />
      <CementerioProntoSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

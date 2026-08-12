import { Hero } from "@/components/sections/hero/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { SelectedWork } from "@/components/sections/work/SelectedWork";
import { PhotographySection } from "@/components/sections/PhotographySection";
import { Lab } from "@/components/sections/Lab";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col bg-[#080808]">
      <Hero />
      <Introduction />
      <SelectedWork />
      <PhotographySection />
      <Lab />
      <CertificationsSection />
      <About />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

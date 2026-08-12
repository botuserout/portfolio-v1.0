import { Hero } from "@/components/sections/hero/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { SelectedWork } from "@/components/sections/work/SelectedWork";
import { PhotographySection } from "@/components/sections/PhotographySection";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col bg-[#080808]">
      <Hero />
      <Introduction />
      <SelectedWork />
      <PhotographySection />
    </div>
  );
}

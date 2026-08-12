import { Hero } from "@/components/sections/hero/Hero";
import { Introduction } from "@/components/sections/Introduction";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col bg-[#080808]">
      <Hero />
      <Introduction />
    </div>
  );
}

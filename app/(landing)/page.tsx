import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { ClientsStats } from "@/components/sections/clients-stats";
import { WhyUMP } from "@/components/sections/why-ump";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { CTAFinal } from "@/components/sections/cta-final";

// Lazy load heavy video/interactive sections below the fold
const Showcase = dynamic(() =>
  import("@/components/sections/showcase").then((mod) => mod.Showcase),
);
const TeamTeaser = dynamic(() =>
  import("@/components/sections/team-teaser").then((mod) => mod.TeamTeaser),
);

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f6f6f3]">
      <Hero />
      <ClientsStats />
      <Showcase />
      <WhyUMP />
      <AboutTeaser />
      <TeamTeaser />
      <CTAFinal />
    </main>
  );
}

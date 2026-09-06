import { Hero } from "@/components/sections/hero";
import { ClientsStats } from "@/components/sections/clients-stats";
import { Showcase } from "@/components/sections/showcase";
import { WhyUMP } from "@/components/sections/why-ump";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { TeamTeaser } from "@/components/sections/team-teaser";
import { CTAFinal } from "@/components/sections/cta-final";

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

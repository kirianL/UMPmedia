import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { ClientsStats } from "@/components/sections/clients-stats";
import { WhyUMP } from "@/components/sections/why-ump";

// Lazy load sections below the fold
const PortfolioPreview = dynamic(() =>
  import("@/components/sections/portfolio-preview").then(
    (mod) => mod.PortfolioPreview,
  ),
);
const ServicesTeaser = dynamic(() =>
  import("@/components/sections/services-teaser").then(
    (mod) => mod.ServicesTeaser,
  ),
);
const TeamTeaser = dynamic(() =>
  import("@/components/sections/team-teaser").then((mod) => mod.TeamTeaser),
);
const CommunityCTA = dynamic(() =>
  import("@/components/sections/community-cta").then((mod) => mod.CommunityCTA),
);
const CTAFinal = dynamic(() =>
  import("@/components/sections/cta-final").then((mod) => mod.CTAFinal),
);

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Hero />
        <ClientsStats />
        <PortfolioPreview />
        <ServicesTeaser />
        <WhyUMP />
        <AboutTeaser />
        <TeamTeaser />
        <CommunityCTA />
        <CTAFinal />
      </main>
    </>
  );
}

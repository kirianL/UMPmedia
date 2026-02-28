import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { VideoShowcase } from "@/components/sections/video-showcase";

// Lazy load sections below the fold
const ServicesTeaser = dynamic(() =>
  import("@/components/sections/services-teaser").then(
    (mod) => mod.ServicesTeaser,
  ),
);
const PortfolioPreview = dynamic(() =>
  import("@/components/sections/portfolio-preview").then(
    (mod) => mod.PortfolioPreview,
  ),
);
const TeamTeaser = dynamic(() =>
  import("@/components/sections/team-teaser").then((mod) => mod.TeamTeaser),
);
const NewsTeaser = dynamic(() =>
  import("@/components/sections/news-teaser").then((mod) => mod.NewsTeaser),
);
const CommunityCTA = dynamic(() =>
  import("@/components/sections/community-cta").then((mod) => mod.CommunityCTA),
);
const Manifesto = dynamic(() =>
  import("@/components/sections/manifesto").then((mod) => mod.Manifesto),
);
const CTAFinal = dynamic(() =>
  import("@/components/sections/cta-final").then((mod) => mod.CTAFinal),
);

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <AboutTeaser />
      <VideoShowcase />
      <ServicesTeaser />
      <PortfolioPreview />
      <TeamTeaser />
      <NewsTeaser />
      <CommunityCTA />
      <Manifesto />
      <CTAFinal />
    </main>
  );
}

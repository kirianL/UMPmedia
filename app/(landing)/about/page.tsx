import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "Nosotros | Ultimate Media Productions - Desde Limón para el Mundo",
  description:
    "Conoce la historia de Ultimate Media Productions. Nacimos en Limón en 2026 con una misión: crear narrativa audiovisual auténtica y de calidad obsesiva.",
};

export default function AboutPage() {
  return <AboutContent />;
}

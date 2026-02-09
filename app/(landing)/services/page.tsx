import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/services-content";

export const metadata: Metadata = {
  title: "Servicios Audiovisuales | Video, Podcast y Fotografía - UMPmedia",
  description:
    "Catálogo de servicios audiovisuales en Costa Rica: Producción de video, fotografía profesional, podcast, cobertura de eventos y manejo de redes sociales.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}

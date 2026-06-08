import type { Metadata } from "next";
import { TeamContent } from "@/components/pages/team-content";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Ultimate Media Productions - Talento Audiovisual",
  description:
    "Conoce al equipo detrás de Ultimate Media Productions en Limón, Costa Rica. Fabián Acuña, Eymar Ortiz y Kirian Luna: profesionales apasionados por el cine, la fotografía y la tecnología.",
};

export default function TeamPage() {
  return <TeamContent />;
}

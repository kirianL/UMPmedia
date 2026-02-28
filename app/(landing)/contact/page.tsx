import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contacto | UMPmedia - Cotiza tu Proyecto",
  description:
    "Hablemos de tu idea. Contáctanos para cotizaciones de video, fotografía o estrategia digital. Estudio en Limón, disponible en todo Costa Rica.",
};

export default function ContactPage() {
  return <ContactContent />;
}

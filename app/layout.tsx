import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UMPmedia | Estudio Audiovisual - Limón, Costa Rica",
  description:
    "Creamos experiencias visuales que perduran. Estudio audiovisual independiente especializado en producción, fotografía y branding visual.",
  keywords: [
    "producción audiovisual",
    "estudi audiovisual",
    "Limón",
    "Costa Rica",
    "fotografía",
    "video",
    "branding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

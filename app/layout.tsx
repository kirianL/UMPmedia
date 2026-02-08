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
    "estudio audiovisual",
    "Limón",
    "Costa Rica",
    "fotografía",
    "video",
    "branding",
  ],
  icons: {
    icon: "/LOGO-UMP.webp",
  },
  openGraph: {
    title: "UMPmedia | Estudio Audiovisual - Limón, Costa Rica",
    description:
      "Creamos experiencias visuales que perduran. Estudio audiovisual independiente especializado en producción, fotografía y branding visual.",
    url: "https://umpmedia.vercel.app",
    siteName: "UMPmedia",
    images: [
      {
        url: "/assets/OpenGraph/OG.png",
        width: 1200,
        height: 630,
        alt: "UMPmedia - Productora Audiovisual",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UMPmedia | Estudio Audiovisual",
    description: "Creamos experiencias visuales que perduran.",
    images: ["/assets/OpenGraph/OG.png"],
  },
  metadataBase: new URL("https://umpmedia.vercel.app"),
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

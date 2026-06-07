import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UMPmedia | Estudio Audiovisual - Limón, Costa Rica",
    template: "%s | UMPmedia",
  },
  description:
    "Desde Limón para el mundo. Estudio audiovisual especializado en producción de video, fotografía profesional y estrategias de contenido digital.",
  keywords: [
    "producción audiovisual",
    "estudio de video Costa Rica",
    "fotografía profesional Limón",
    "creación de contenido",
    "marketing digital",
    "UMPmedia",
    "video corporativo",
  ],
  authors: [{ name: "UMPmedia Team", url: "https://umpmedia.vercel.app" }],
  creator: "UMPmedia",
  publisher: "UMPmedia",
  openGraph: {
    title: "UMPmedia | Estudio Audiovisual - Limón, Costa Rica",
    description:
      "Desde Limón para el mundo. Estudio audiovisual especializado en producción de video, fotografía profesional y estrategias de contenido digital.",
    url: "https://umpmedia.vercel.app",
    siteName: "UMPmedia",
    images: [
      {
        url: "/assets/OpenGraph/og-social.jpg",
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
    description:
      "Desde Limón para el mundo. Producción audiovisual de alto nivel.",
    images: ["/assets/OpenGraph/og-social.jpg"],
    creator: "@umpmedia",
  },
  metadataBase: new URL("https://umpmedia.vercel.app"),
  icons: {
    icon: [
      { url: "/assets/ICO-UMP/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/ICO-UMP/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/ICO-UMP/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/assets/ICO-UMP/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/assets/ICO-UMP/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/ICO-UMP/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/assets/ICO-UMP/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/assets/ICO-UMP/favicon-180x180.png", sizes: "180x180", type: "image/png" }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "UMPmedia",
    image: "https://umpmedia.vercel.app/assets/OpenGraph/og-social.jpg",
    description: "Estudio audiovisual independiente desde Limón, Costa Rica.",
    url: "https://umpmedia.vercel.app",
    telephone: "+50600000000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Limón Centro",
      addressLocality: "Limón",
      addressRegion: "Limón",
      postalCode: "70101",
      addressCountry: "CR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.9913,
      longitude: -83.0415,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/umpmediacr",
      "https://www.youtube.com/@UltimateMediaProductions",
    ],
  };

  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UMPmedia | Estudio Audiovisual",
    short_name: "UMPmedia",
    description:
      "Estudio audiovisual independiente desde Limón, Costa Rica. Producción de video, fotografía y estrategia digital.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#18943A",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

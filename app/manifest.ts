import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ultimate Media Productions | Estudio Audiovisual",
    short_name: "Ultimate Media Productions",
    description:
      "Estudio audiovisual independiente desde Limón, Costa Rica. Producción de video, fotografía y estrategia digital.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#32fb00",
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

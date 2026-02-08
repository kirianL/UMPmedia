"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface EquipmentItem {
  id: number;
  name: string;
  category: string;
  description: string;
  usage: string;
  imageMain: string;
  imageDetail: string;
  specs: string[];
}

const equipment: EquipmentItem[] = [
  {
    id: 1,
    name: "Panasonic HC-X1000",
    category: "Broadcast 4K",
    description:
      "Nuestra cámara principal para capturar contenido broadcast de alta calidad.",
    usage:
      "La usamos para documentales, eventos corporativos y producciones televisivas.",
    imageMain: "/assets/images/Panasonic HC-X1000/Panasonic HC-X1000.png",
    imageDetail:
      "/assets/images/Panasonic HC-X1000/Panasonic HC-X1000-detalles.jpeg",
    specs: ["Zoom 20x", "O.I.S.", "Filtros ND", "XLR x2"],
  },
  {
    id: 2,
    name: "DJI Mini 3 Pro",
    category: "Drone Cinema",
    description:
      "Nuestro drone compacto para tomas aéreas cinematográficas con calidad profesional.",
    usage:
      "Lo usamos para capturar perspectivas únicas en bienes raíces, turismo y contenido publicitario.",
    imageMain: "/assets/images/DJI Mini 3 Pro/DJI Mini 3 Pro.jpeg",
    imageDetail: "/assets/images/DJI Mini 3 Pro/DJI Mini 3 Pro Detalles.jpeg",
    specs: ["4K 60fps HDR", "48MP RAW", "True Vertical", "APAS 4.0"],
  },
  {
    id: 3,
    name: "YOLOLIV YoloBox Extreme",
    category: "Streaming Studio 4K",
    description:
      "Nuestro estudio portátil all-in-one para producciones en vivo.",
    usage:
      "Lo usamos para streaming multicámara, eventos híbridos y transmisiones profesionales.",
    imageMain:
      "/assets/images/YOLOLIV YoloBox Extreme/YOLOLIV YoloBox Extreme.jpeg",
    imageDetail:
      "/assets/images/YOLOLIV YoloBox Extreme/YOLOLIV YoloBox Extreme detalles.jpeg",
    specs: ["8 HDMI In", "ISO Rec 4K", "Wi-Fi 7", "120Hz OLED"],
  },
];

export function EquipmentShowcase() {
  return (
    <section className="py-12 md:py-20 bg-ump-alt relative z-20 overflow-hidden rounded-t-[2.5rem] -mt-12 border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-ump-accent text-xs font-bold uppercase tracking-widest block mb-2"
          >
            Nuestras Herramientas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
          >
            Tecnología de <span className="text-ump-accent">Producción</span>
          </motion.h2>
        </div>

        {/* Equipment Cards */}
        <div className="space-y-6">
          {equipment.map((item, index) => (
            <EquipmentCard key={item.id} equipment={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EquipmentCard({
  equipment,
  index,
}: {
  equipment: EquipmentItem;
  index: number;
}) {
  return (
    <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
      {/* Images Row - Top */}
      <div className="grid grid-cols-2">
        <div className="relative aspect-video bg-neutral-800">
          <Image
            src={equipment.imageMain}
            alt={equipment.name}
            fill
            className="object-contain"
            priority={index === 0}
          />
        </div>
        <div className="relative aspect-video bg-neutral-800 border-l border-white/5">
          <Image
            src={equipment.imageDetail}
            alt="Detail"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content Row - Bottom */}
      <div className="p-4 md:p-5 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          {/* Left: Title & Category */}
          <div className="md:w-1/4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
              className="text-ump-accent text-[10px] font-bold uppercase tracking-widest"
            >
              {equipment.category}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="text-lg md:text-xl font-bold text-white"
            >
              {equipment.name}
            </motion.h3>
          </div>

          {/* Center: Description & Usage */}
          <div className="md:flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="text-ump-secondary text-sm leading-relaxed"
            >
              {equipment.description}{" "}
              <span className="text-white/60">{equipment.usage}</span>
            </motion.p>
          </div>

          {/* Right: Specs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.15 }}
            className="md:w-1/4 text-right hidden md:block"
          >
            <span className="text-white/40 text-xs">
              {equipment.specs.join(" · ")}
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

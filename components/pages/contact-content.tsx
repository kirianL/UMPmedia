"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";

export function ContactContent() {
  return (
    <div className="min-h-screen bg-ump-background">
      {/* Jeton-Style Header Banner with UMP Neon Green Background */}
      <div className="bg-[#32fb00] text-black pt-40 pb-24 md:pb-32 px-6 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-12 text-black">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none select-none text-black">
              Contacto
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="max-w-md md:text-right md:self-end text-black"
          >
            <p className="text-base md:text-lg font-bold leading-snug text-black/80">
              Cuéntanos qué tienes en mente. Desde producciones completas hasta consultorías creativas o soluciones de desarrollo de software.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area Overlapping the Banner with Smooth Rounded Top */}
      <div className="bg-ump-background rounded-t-[2.5rem] md:rounded-t-[4.5rem] -mt-10 md:-mt-16 relative z-20 pt-16 md:pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Col: Info & Headline */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-ump-alt rounded-full text-[#32fb00]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Email</h3>
                    <a
                      href="mailto:hello@umpmedia.com"
                      className="text-ump-secondary hover:text-white transition-colors"
                    >
                      hello@umpmedia.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-ump-alt rounded-full text-[#32fb00]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Estudio</h3>
                    <p className="text-ump-secondary">
                      Limón, Costa Rica
                      <br />
                      Disponible para viajes internacionales.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-16 p-6 bg-ump-accent/10 border border-ump-accent/20 rounded-xl"
              >
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <MessageSquare size={20} className="text-[#32fb00]" />
                  Respuesta Rápida
                </h3>
                <p className="text-sm text-ump-secondary mb-4">
                  ¿Prefieres chat? Escríbenos directamente por WhatsApp.
                </p>
                <Button className="w-full bg-[#32fb00] hover:bg-[#32fb00]/90 text-black font-bold">
                  Chat en WhatsApp
                </Button>
              </motion.div>
            </div>

            {/* Right Col: Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-ump-alt p-8 md:p-10 rounded-2xl border border-white/5"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-bold text-ump-secondary">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full bg-ump-background border border-white/10 rounded-lg p-4 text-white focus:border-ump-accent focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-bold text-ump-secondary">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-ump-background border border-white/10 rounded-lg p-4 text-white focus:border-ump-accent focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-ump-secondary">
                    Tipo de Proyecto
                  </label>
                  <select className="w-full bg-ump-background border border-white/10 rounded-lg p-4 text-white focus:border-ump-accent focus:outline-none transition-colors appearance-none">
                    <option>Producción Audiovisual</option>
                    <option>Fotografía</option>
                    <option>Branding / Diseño</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-ump-secondary">
                    Presupuesto Estimado (USD)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["< $1k", "$1k - 5k", "$5k +"].map((range) => (
                      <button
                        key={range}
                        type="button"
                        className="border border-white/10 rounded-lg p-3 text-sm text-ump-secondary hover:border-ump-accent hover:text-white transition-colors focus:bg-ump-accent focus:text-white"
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-ump-secondary">
                    Detalles del Proyecto
                  </label>
                  <textarea
                    className="w-full bg-ump-background border border-white/10 rounded-lg p-4 text-white focus:border-ump-accent focus:outline-none transition-colors min-h-[150px]"
                    placeholder="Cuéntanos sobre tu visión, tiempos y objetivos..."
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-[#32fb00] hover:bg-[#32fb00]/90 text-black font-bold h-14 text-lg"
                >
                  Enviar Solicitud
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

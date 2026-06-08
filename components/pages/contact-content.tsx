"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  ArrowRight,
  Phone,
} from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";

export function ContactContent() {
  return (
    <div className="min-h-screen bg-ump-background">
      {/* Jeton-Style Header Banner with UMP Neon Green Background */}
      <div className="bg-[#32fb00] text-black pt-40 pb-24 md:pb-32 px-6 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-12 text-black">
          <RevealText
            text="Contacto"
            tag="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none select-none text-black"
          />

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
      <div className="bg-ump-background rounded-t-[2.5rem] md:rounded-t-[4.5rem] -mt-10 md:-mt-16 relative z-20 pt-16 md:pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left Col: Info & Headline */}
            <div className="lg:col-span-6 space-y-12">
              <div>
                <span className="text-ump-accent text-xs font-bold uppercase tracking-widest mb-4 block">
                  / hablemos /
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                  Siempre listos para ayudarte y responder tus preguntas
                </h2>
                <p className="text-lg text-ump-secondary leading-relaxed">
                  Queremos escuchar tus ideas y hacerlas realidad. Cuéntanos sobre tu proyecto cinematográfico, comercial, o de desarrollo y descubramos cómo podemos colaborar juntos.
                </p>
              </div>

              {/* Info Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                {/* Phones */}
                <div className="space-y-2">
                  <h3 className="text-white font-bold uppercase tracking-wider text-xs text-ump-secondary flex items-center gap-2">
                    <Phone size={14} className="text-[#32fb00]" /> Llámanos
                  </h3>
                  <div className="text-ump-secondary space-y-1 text-sm">
                    <a href="tel:+50688888888" className="hover:text-white transition-colors block">
                      +506 8888-8888
                    </a>
                    <a href="tel:+50622222222" className="hover:text-white transition-colors block">
                      +506 2222-2222
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <h3 className="text-white font-bold uppercase tracking-wider text-xs text-ump-secondary flex items-center gap-2">
                    <MapPin size={14} className="text-[#32fb00]" /> Nuestra Ubicación
                  </h3>
                  <p className="text-ump-secondary text-sm leading-relaxed">
                    Limón, Costa Rica
                    <br />
                    Barrio Vargas, Calle Central
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <h3 className="text-white font-bold uppercase tracking-wider text-xs text-ump-secondary flex items-center gap-2">
                    <Mail size={14} className="text-[#32fb00]" /> Email
                  </h3>
                  <a
                    href="mailto:contacto@ultimatemediaproductions.com"
                    className="text-ump-secondary hover:text-white transition-colors text-sm break-all"
                  >
                    contacto@ultimatemediaproductions.com
                  </a>
                </div>

                {/* Social Network */}
                <div className="space-y-2">
                  <h3 className="text-white font-bold uppercase tracking-wider text-xs text-ump-secondary flex items-center gap-2">
                    <MessageSquare size={14} className="text-[#32fb00]" /> Redes Sociales
                  </h3>
                  <div className="flex gap-4 pt-1">
                    <a
                      href="#"
                      className="text-ump-secondary hover:text-[#32fb00] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="text-ump-secondary hover:text-[#32fb00] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                      aria-label="Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="text-ump-secondary hover:text-[#32fb00] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="text-ump-secondary hover:text-[#32fb00] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                      aria-label="YouTube"
                    >
                      <Youtube size={18} />
                    </a>
                    <a
                      href="#"
                      className="text-ump-secondary hover:text-[#32fb00] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Booking Form Card */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="bg-ump-alt p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ponte en Contacto</h3>
                  <p className="text-sm text-ump-secondary leading-relaxed">
                    Define tus metas e identifica cómo podemos potenciar tu marca o proyecto.
                  </p>
                </div>

                <form className="space-y-6">
                  {/* Nombre */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-ump-secondary/70">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-[#32fb00] focus:outline-none transition-colors placeholder:text-ump-secondary/30"
                      placeholder="Ej. Juan Pérez"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-ump-secondary/70">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-[#32fb00] focus:outline-none transition-colors placeholder:text-ump-secondary/30"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  {/* Asunto */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-ump-secondary/70">
                      Asunto
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-[#32fb00] focus:outline-none transition-colors placeholder:text-ump-secondary/30"
                      placeholder="Ej. Cotización de video musical"
                      required
                    />
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-ump-secondary/70">
                      Mensaje
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-[#32fb00] focus:outline-none transition-colors placeholder:text-ump-secondary/30 resize-none"
                      placeholder="Cuéntanos brevemente sobre tu proyecto..."
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-[#32fb00] text-black hover:bg-[#32fb00]/90 font-bold uppercase tracking-wider text-xs transition-colors shadow-lg cursor-pointer"
                    >
                      <span>Enviar Mensaje</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Stylized Grayscale Dark Map */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl h-[450px] relative w-full bg-neutral-900"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125718.36868875323!2d-83.11181299999999!3d9.991295999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa14fc903d6d5ef%3A0xa1936c5357497d3e!2zTGltw7NuLCBDb3N0YSBSaWNh!5e0!3m2!1ses!2scr!4v1700000000000!5m2!1ses!2scr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.15) brightness(0.95)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

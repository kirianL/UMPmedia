"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export function ContactContent() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Col: Info & Headline */}
          <div>
            <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              Contacto
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-none">
              Hablemos de tu idea.
            </h1>
            <p className="text-xl text-ump-secondary max-w-md mb-12 leading-relaxed">
              Cuéntanos qué tienes en mente. Desde producciones completas hasta
              consultorías creativas.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ump-alt rounded-full text-ump-accent">
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
                <div className="p-3 bg-ump-alt rounded-full text-ump-accent">
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
            </div>

            <div className="mt-16 p-6 bg-ump-accent/10 border border-ump-accent/20 rounded-xl">
              <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                <MessageSquare size={20} className="text-ump-accent" />
                Respuesta Rápida
              </h3>
              <p className="text-sm text-ump-secondary mb-4">
                ¿Prefieres chat? Escríbenos directamente por WhatsApp.
              </p>
              <Button className="w-full bg-ump-accent hover:bg-ump-accentHover text-white font-bold">
                Chat en WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Col: Booking Form */}
          <div className="bg-ump-alt p-8 md:p-10 rounded-2xl border border-white/5">
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
                className="w-full bg-white text-black hover:bg-neutral-200 font-bold h-14 text-lg"
              >
                Enviar Solicitud
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PiArrowRightBold, PiCheckBold, PiCopyBold } from "react-icons/pi";
import { SlotText } from "slot-text/react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.05,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  }),
};

export function ContactContent() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "fabian@ultimatemediaproductions.com";
  const phone = "(506) 8888-8888";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f3] text-neutral-900 selection:bg-neutral-950 selection:text-white">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 pt-36 sm:pt-44 md:pt-48 pb-24 md:pb-36">
        {/* Main Display Headline with Page Entrance Animation */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="mb-14 sm:mb-20 md:mb-24"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-bold tracking-tight text-neutral-950">
            Hablemos.
          </h1>
        </motion.div>

        {/* Two-Column Architecture matching Fabrica reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-28 items-start">
          {/* Left Column: Mission / Intent & Team Lead */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="lg:col-span-5 space-y-10 lg:space-y-12"
          >
            {/* Two-tone statement matching user screenshot */}
            <div className="max-w-md">
              <p className="text-xl sm:text-2xl md:text-[1.65rem] font-normal leading-snug tracking-tight text-neutral-500">
                <span className="font-bold text-neutral-950">
                  ¿Tienes un proyecto en mente?
                </span>{" "}
                Escríbenos y conversemos sobre la mejor manera de avanzar
                juntos.
              </p>
            </div>

            {/* Team Lead Card (matching Fabrica reference) */}
            <div className="flex items-center gap-4 pt-2">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-300/80 shadow-xs shrink-0 bg-neutral-200">
                <Image
                  src="/assets/images/Team/Fabian.jpg"
                  alt="Fabián Acuña"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-neutral-950 leading-tight">
                  Fabián Acuña
                </p>
                <p className="text-xs text-neutral-500 font-mono tracking-tight mt-0.5">
                  Director Creativo & Fundador
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Minimalist Form & Direct Contact */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="lg:col-span-7 space-y-14 sm:space-y-16"
          >
            {/* Form Container with AnimatePresence */}
            <div className="max-w-xl">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -10 }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 26,
                      mass: 0.8,
                    }}
                    className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/80 shadow-xs flex flex-col items-center text-center"
                  >
                    {/* Pop-in Checkmark badge */}
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0, rotate: -10 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 24,
                        delay: 0.05,
                      }}
                      className="w-14 h-14 rounded-full bg-neutral-950 text-white flex items-center justify-center mb-6 shadow-xs"
                    >
                      <PiCheckBold size={24} />
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mb-3">
                      ¡Mensaje recibido con éxito!
                    </h3>

                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                      Gracias por escribirnos
                      {formData.name ? `, ${formData.name}` : ""}. Hemos
                      recibido los detalles de tu proyecto y nos pondremos en
                      contacto contigo a la brevedad.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="group relative overflow-hidden px-7 py-3 rounded-full border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950 text-xs font-mono uppercase tracking-wider font-semibold text-neutral-800 hover:text-white transition-all duration-300 cursor-pointer shadow-xs hover:scale-[1.02] active:scale-95"
                    >
                      <span className="relative overflow-hidden inline-flex h-4 leading-none">
                        <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                          Enviar otro mensaje
                        </span>
                        <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-white">
                          Enviar otro mensaje
                        </span>
                      </span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97, y: -12 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    {/* Name field */}
                    <div className="border-b border-neutral-300 focus-within:border-neutral-950 transition-colors pb-2">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Tu nombre *"
                        className="w-full bg-transparent text-base sm:text-lg text-neutral-950 placeholder:text-neutral-400 outline-none py-2"
                      />
                    </div>

                    {/* Email field */}
                    <div className="border-b border-neutral-300 focus-within:border-neutral-950 transition-colors pb-2">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Tu correo electrónico *"
                        className="w-full bg-transparent text-base sm:text-lg text-neutral-950 placeholder:text-neutral-400 outline-none py-2"
                      />
                    </div>

                    {/* Message field */}
                    <div className="border-b border-neutral-300 focus-within:border-neutral-950 transition-colors pb-2">
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tu mensaje o detalles del proyecto"
                        className="w-full bg-transparent text-base sm:text-lg text-neutral-950 placeholder:text-neutral-400 outline-none py-2 resize-none"
                      />
                    </div>

                    {/* Submit Button & Disclaimer */}
                    <div className="pt-2 space-y-4">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-neutral-950 text-white text-xs font-mono uppercase tracking-wider font-bold hover:bg-neutral-800 transition-all duration-300 cursor-pointer shadow-xs hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                      >
                        {/* Dual Text Roll */}
                        <span className="relative overflow-hidden inline-flex h-[18px] leading-none">
                          <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                            {status === "submitting"
                              ? "Enviando..."
                              : "Enviar mensaje"}
                          </span>
                          <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-emerald-400">
                            {status === "submitting"
                              ? "Enviando..."
                              : "Enviar mensaje"}
                          </span>
                        </span>

                        {/* Kinetic Arrow Slide-Through */}
                        <span className="relative inline-flex w-3.5 h-3.5 overflow-hidden shrink-0">
                          <PiArrowRightBold
                            size={13}
                            className="absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3.5"
                          />
                          <PiArrowRightBold
                            size={13}
                            className="absolute inset-0 -translate-x-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 text-emerald-400"
                          />
                        </span>
                      </button>

                      <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-mono">
                        Al enviar este formulario, aceptas nuestros términos y
                        políticas de privacidad.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Contact Info - Clean, spacious layout with zero line cuts */}
            <div className="pt-8 border-t border-neutral-200/80 max-w-xl space-y-6">
              {/* Direct Email */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                  Correo directo
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={`mailto:${email}`}
                    className="text-base sm:text-lg font-bold text-neutral-950 hover:text-emerald-700 transition-colors underline decoration-neutral-300 underline-offset-4 whitespace-nowrap"
                  >
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md bg-neutral-200/70 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-950 transition-colors shrink-0 cursor-pointer active:scale-95"
                    title="Copiar correo"
                  >
                    {copied ? (
                      <PiCheckBold size={13} className="text-emerald-700" />
                    ) : (
                      <PiCopyBold size={13} />
                    )}
                  </button>
                </div>
              </div>

              {/* Direct WhatsApp */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/50670609325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-neutral-950 hover:text-emerald-700 transition-colors inline-block whitespace-nowrap"
                >
                  +506 7060 9325
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

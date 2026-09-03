"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  PiArrowRightBold, 
  PiCheckBold, 
  PiCopyBold 
} from "react-icons/pi";
import { SlotText } from "slot-text/react";

export function ContactContent() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
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
        
        {/* Main Display Headline */}
        <div className="mb-14 sm:mb-20 md:mb-24">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter uppercase leading-[0.9] text-neutral-950">
            Hablemos.
          </h1>
        </div>

        {/* Two-Column Architecture matching Fabrica reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-28 items-start">
          
          {/* Left Column: Mission / Intent & Team Lead */}
          <div className="lg:col-span-5 space-y-10 lg:space-y-12">
            
            <div className="max-w-md space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-[1.7rem] font-bold text-neutral-950 leading-snug tracking-tight">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg font-normal leading-relaxed text-pretty">
                Escríbenos y conversemos sobre la mejor manera de planificar, producir y hacer crecer tu marca desde el Caribe para el mundo.
              </p>
            </div>

            {/* Team Lead Card (matching Fabrica reference) */}
            <div className="flex items-center gap-4 pt-2">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-300/80 shadow-xs shrink-0 bg-neutral-200">
                <Image
                  src="/assets/images/Team/Fabian.jpg"
                  alt="Fabián Forbes"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-neutral-950 leading-tight">
                  Fabián Forbes
                </p>
                <p className="text-xs text-neutral-500 font-mono tracking-tight mt-0.5">
                  Director Creativo & Fundador
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Minimalist Form & Direct Contact */}
          <div className="lg:col-span-7 space-y-14 sm:space-y-16">
            
            {/* Form */}
            <div className="max-w-xl">
              {status === "success" ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <PiCheckBold size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    Gracias por escribirnos, {formData.name}. Hemos recibido los detalles de tu proyecto y nos pondremos en contacto contigo a la brevedad.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-4 text-xs font-mono uppercase tracking-wider font-bold text-neutral-950 hover:text-emerald-700 transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Name field */}
                  <div className="border-b border-neutral-300 focus-within:border-neutral-950 transition-colors pb-2">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tu mensaje o detalles del proyecto"
                      className="w-full bg-transparent text-base sm:text-lg text-neutral-950 placeholder:text-neutral-400 outline-none py-2 resize-none"
                    />
                  </div>

                  {/* Submit Button & Disclaimer */}
                  <div className="pt-2 space-y-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-950 text-white text-xs font-mono uppercase tracking-wider font-bold hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs active:scale-[0.98] disabled:opacity-50"
                    >
                      <span>{status === "submitting" ? "Enviando..." : "Enviar mensaje"}</span>
                      <PiArrowRightBold size={13} />
                    </button>

                    <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-mono">
                      Al enviar este formulario, aceptas nuestros términos y políticas de privacidad.
                    </p>
                  </div>

                </form>
              )}
            </div>

            {/* Subtle Divider symbol matching Fabrica reference */}
            <div className="text-neutral-300 text-lg font-light select-none">
              +
            </div>

            {/* Direct Contact Block (matching Fabrica reference) */}
            <div className="space-y-4 pt-2 max-w-xl">
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                {phone}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-950 hover:text-emerald-700 transition-colors flex items-center gap-2 group"
                >
                  <span className="text-neutral-400 group-hover:text-emerald-700 transition-colors">•</span>
                  <span className="underline decoration-neutral-300 underline-offset-6 group-hover:decoration-emerald-700 transition-colors break-all sm:break-normal">
                    {email}
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-200/70 hover:bg-neutral-200 border border-neutral-300/80 text-[11px] font-mono uppercase tracking-wider text-neutral-700 hover:text-neutral-950 transition-colors w-fit cursor-pointer active:scale-95"
                >
                  {copied ? <PiCheckBold size={12} className="text-emerald-700" /> : <PiCopyBold size={12} />}
                  <span className="overflow-hidden py-0.5 inline-block">
                    <SlotText
                      text={copied ? "¡Copiado!" : "Copiar"}
                      options={{
                        direction: copied ? "up" : "down",
                        rollBy: "character",
                        duration: 250,
                      }}
                    />
                  </span>
                </button>
              </div>

              {/* Studio Address */}
              <p className="text-xs sm:text-sm text-neutral-500 font-mono uppercase tracking-wider pt-2">
                Limón, Costa Rica | Producción disponible en todo el país
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

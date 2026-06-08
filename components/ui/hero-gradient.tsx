"use client";

import { useEffect, useState } from "react";

export function HeroGradient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 z-0 bg-[#32fb00]" />;
  }

  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden bg-[#32fb00]">
      {/* Moving organic blurred green waves */}
      <div className="absolute inset-0 opacity-95 filter blur-[70px] md:blur-[110px] transform-gpu">
        {/* Blob 1: Dark Forest Green (Top-Left area, drifts right/down) */}
        <div
          className="absolute rounded-full bg-[#1a4d10] opacity-45"
          style={{
            width: "55vw",
            height: "55vw",
            top: "-10%",
            left: "-10%",
            animation: "drift-1 12s infinite ease-in-out",
            willChange: "transform",
          }}
        />
        {/* Blob 2: Lighter Bright Green (Bottom-Right area, drifts left/up) */}
        <div
          className="absolute rounded-full bg-[#5fe738] opacity-75"
          style={{
            width: "50vw",
            height: "50vw",
            bottom: "-10%",
            right: "-10%",
            animation: "drift-2 9s infinite ease-in-out",
            willChange: "transform",
          }}
        />
        {/* Blob 3: Dark Forest Green (Adds rich depth background, drifts slowly) */}
        <div
          className="absolute rounded-full bg-[#1a4d10] opacity-50"
          style={{
            width: "65vw",
            height: "65vw",
            bottom: "-15%",
            left: "-15%",
            animation: "drift-3 15s infinite ease-in-out",
            willChange: "transform",
          }}
        />
        {/* Blob 4: Light Neon Green Highlight (Top-Right area, drifts left/down) */}
        <div
          className="absolute rounded-full bg-[#5fe738] opacity-70"
          style={{
            width: "45vw",
            height: "45vw",
            top: "-15%",
            right: "-10%",
            animation: "drift-4 11s infinite ease-in-out",
            willChange: "transform",
          }}
        />
        {/* Blob 5: Dynamic fluid shadow (Dark green blob cutting through to define organic shapes) */}
        <div
          className="absolute rounded-full bg-[#1a4d10] opacity-40"
          style={{
            width: "45vw",
            height: "45vw",
            top: "20%",
            left: "25%",
            animation: "drift-5 10s infinite ease-in-out",
            willChange: "transform",
          }}
        />
      </div>

      {/* Textured cinematic grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.22] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hardware accelerated CSS keyframes */}
      <style>{`
        @keyframes drift-1 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate3d(25%, 15%, 0) scale(1.2) rotate(120deg);
          }
          66% {
            transform: translate3d(-10%, 25%, 0) scale(0.9) rotate(240deg);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1) rotate(360deg);
          }
        }
        @keyframes drift-2 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate3d(-20%, -25%, 0) scale(0.8) rotate(-120deg);
          }
          66% {
            transform: translate3d(20%, -10%, 0) scale(1.25) rotate(-240deg);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1) rotate(-360deg);
          }
        }
        @keyframes drift-3 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          50% {
            transform: translate3d(15%, -15%, 0) scale(1.2) rotate(180deg);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1) rotate(360deg);
          }
        }
        @keyframes drift-4 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate3d(-25%, 20%, 0) scale(1.15) rotate(90deg);
          }
          66% {
            transform: translate3d(10%, -15%, 0) scale(0.85) rotate(180deg);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1) rotate(360deg);
          }
        }
        @keyframes drift-5 {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate3d(20%, -20%, 0) scale(1.3) rotate(-90deg);
          }
          66% {
            transform: translate3d(-15%, 15%, 0) scale(0.75) rotate(-180deg);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}

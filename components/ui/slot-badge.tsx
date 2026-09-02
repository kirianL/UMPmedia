"use client";

import React from "react";
import { SlotText } from "slot-text/react";
import { cn } from "@/lib/utils";

interface SlotBadgeProps {
  text: string;
  direction?: "up" | "down";
  className?: string;
  variant?: "accent" | "dark" | "outline" | "glass";
}

export function SlotBadge({
  text,
  direction = "down",
  className,
  variant = "glass",
}: SlotBadgeProps) {
  const variantStyles = {
    accent: "bg-ump-accent/15 text-ump-accent border-ump-accent/30",
    dark: "bg-black/70 text-white border-white/10",
    outline: "bg-transparent text-white/90 border-white/20",
    glass: "bg-white/[0.04] text-white/90 border-white/[0.08] backdrop-blur-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border select-none transition-colors duration-200",
        variantStyles[variant],
        className
      )}
    >
      <span className="inline-block overflow-hidden py-0.5">
        <SlotText
          text={text}
          options={{
            direction,
            rollBy: "character",
            duration: 250,
            stagger: 20,
            skipUnchanged: true,
          }}
        />
      </span>
    </span>
  );
}

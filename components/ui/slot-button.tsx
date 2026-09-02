"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { slotText, type SlotTextController } from "slot-text";
import "slot-text/style.css";
import { cn } from "@/lib/utils";

interface SlotButtonProps {
  children: string;
  hoverText?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function SlotButton({
  children,
  hoverText,
  href,
  onClick,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  type = "button",
  disabled = false,
}: SlotButtonProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const controllerRef = useRef<SlotTextController | null>(null);

  useEffect(() => {
    if (textRef.current) {
      controllerRef.current = slotText(textRef.current, children, {
        direction: "down",
        rollBy: "character",
        duration: 260,
        stagger: 14,
        easing: "cubic-bezier(0.23, 1, 0.32, 1)",
      });
    }
    return () => {
      controllerRef.current?.destroy();
    };
  }, [children]);

  const handleMouseEnter = () => {
    if (disabled || !controllerRef.current) return;
    controllerRef.current.set(hoverText || children, {
      direction: "up",
      skipUnchanged: false,
      rollBy: "character",
      duration: 260,
      stagger: 14,
      easing: "cubic-bezier(0.23, 1, 0.32, 1)",
    });
  };

  const handleMouseLeave = () => {
    if (disabled || !controllerRef.current) return;
    controllerRef.current.set(children, {
      direction: "down",
      skipUnchanged: false,
      rollBy: "character",
      duration: 260,
      stagger: 14,
      easing: "cubic-bezier(0.23, 1, 0.32, 1)",
    });
  };

  const variantStyles = {
    primary:
      "bg-[#141414] text-white hover:bg-black border border-black/15 shadow-sm",
    secondary:
      "bg-white text-black hover:bg-neutral-100 shadow-sm border border-neutral-200",
    accent:
      "bg-ump-accent text-white font-semibold hover:bg-ump-accentHover shadow-sm",
    outline:
      "bg-transparent text-black/80 border border-black/15 hover:bg-black/5 hover:text-black",
    ghost:
      "bg-transparent text-black/80 hover:text-black hover:bg-black/[0.04]",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-xs md:text-sm rounded-lg gap-2",
    lg: "px-6 py-3 text-sm md:text-base rounded-lg gap-2.5",
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center select-none cursor-pointer tracking-wider font-bold uppercase transition-[background-color,border-color,opacity,transform,box-shadow] duration-200 ease-out active:scale-[0.98]",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span ref={textRef} className="inline-block py-0.5" aria-label={children}>
        {children}
      </span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn("group", baseClasses)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn("group", baseClasses)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {content}
    </button>
  );
}




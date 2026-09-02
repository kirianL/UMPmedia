"use client";
// beui.dev/components/motion/tooltip adapted with framer-motion

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  cloneElement,
  isValidElement,
  type PointerEvent,
  type ReactElement,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

type Side = "top" | "right" | "bottom" | "left";
type Align = "start" | "center" | "end";

export interface TooltipProps {
  content: ReactNode;
  children: ReactElement;
  side?: Side;
  align?: Align;
  /** Delay before showing (ms). Default 120. */
  delay?: number;
  className?: string;
  /** Classes for the outer wrapper span. Use to fix baseline / fill parent. */
  wrapperClassName?: string;
}

// Ease out curve
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

// Gap between trigger and tooltip, in px.
const GAP = 8;

function getAnchorTransform(side: Side, align: Align = "center"): string {
  if (side === "top" || side === "bottom") {
    const yTransform = side === "top" ? "-100%" : "0";
    if (align === "start") return `translate(0, ${yTransform})`;
    if (align === "end") return `translate(-100%, ${yTransform})`;
    return `translate(-50%, ${yTransform})`;
  }
  const xTransform = side === "left" ? "-100%" : "0";
  if (align === "start") return `translate(${xTransform}, 0)`;
  if (align === "end") return `translate(${xTransform}, -100%)`;
  return `translate(${xTransform}, -50%)`;
}

function getTransformOrigin(side: Side, align: Align = "center"): string {
  if (side === "top" || side === "bottom") {
    const yOrigin = side === "top" ? "bottom" : "top";
    if (align === "start") return `left ${yOrigin}`;
    if (align === "end") return `right ${yOrigin}`;
    return `center ${yOrigin}`;
  }
  const xOrigin = side === "left" ? "right" : "left";
  if (align === "start") return `${xOrigin} top`;
  if (align === "end") return `${xOrigin} bottom`;
  return `${xOrigin} center`;
}

// Offset is in the direction *away* from the trigger — content originates near
// the trigger and rises into resting position.
const offsetFrom: Record<Side, { x?: number; y?: number }> = {
  top: { y: 8 },
  bottom: { y: -8 },
  left: { x: 8 },
  right: { x: -8 },
};

function buildVariants(side: Side): Variants {
  const o = offsetFrom[side];
  return {
    initial: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(5px)",
      x: o.x ?? 0,
      y: o.y ?? 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 30,
        mass: 0.7,
        opacity: { duration: 0.14, ease: EASE_OUT },
        filter: { duration: 0.18, ease: EASE_OUT },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      filter: "blur(3px)",
      x: (o.x ?? 0) * 0.6,
      y: (o.y ?? 0) * 0.6,
      transition: { duration: 0.12, ease: EASE_OUT },
    },
  };
}

const REDUCED_VARIANTS: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.14, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.1, ease: EASE_OUT } },
};

// Once any tooltip has just closed, neighbouring tooltips open without the
// initial delay — moving along a toolbar feels instant after the first one.
const WARM_WINDOW_MS = 300;
let lastHiddenAt = 0;

function useHoverGesture() {
  return {
    enter: (e: PointerEvent) => e.pointerType !== "touch",
    leave: (_e: PointerEvent) => true,
  };
}

function useTapGesture<T>() {
  const lastTap = useRef<{ pointerType: string; state: T } | null>(null);
  return {
    start: (e: PointerEvent, state: T) => {
      if (e.pointerType === "touch") {
        lastTap.current = { pointerType: e.pointerType, state };
      }
    },
    take: () => {
      const g = lastTap.current;
      lastTap.current = null;
      return g;
    },
    drop: () => {
      lastTap.current = null;
    },
  };
}

function useDismiss(
  open: boolean,
  onDismiss: () => void,
  anchorRef: React.RefObject<HTMLSpanElement | null>
) {
  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (
        anchorRef.current &&
        !anchorRef.current.contains(e.target as Node)
      ) {
        onDismiss();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown as EventListener);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown as EventListener);
    };
  }, [open, onDismiss, anchorRef]);
}

export function Tooltip({
  content,
  children,
  side = "top",
  align = "center",
  delay = 120,
  className,
  wrapperClassName,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null,
  );
  const id = useId();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const hover = useHoverGesture();
  const reduce = useReducedMotion();

  // Anchor point in viewport coords, on the edge of the trigger facing `side`.
  const place = useCallback(() => {
    const el = anchorRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;

    let left = cx;
    let top = cy;

    if (side === "top" || side === "bottom") {
      top = side === "top" ? r.top - GAP : r.bottom + GAP;
      if (align === "start") left = r.left;
      else if (align === "end") left = r.right;
      else left = cx;
    } else {
      left = side === "left" ? r.left - GAP : r.right + GAP;
      if (align === "start") top = r.top;
      else if (align === "end") top = r.bottom;
      else top = cy;
    }

    setCoords({ top, left });
  }, [side, align]);

  const show = useCallback(() => {
    if (typeof window !== "undefined") {
      const isTouchOrMobile = window.matchMedia("(pointer: coarse), (max-width: 1024px)").matches;
      if (isTouchOrMobile) return;
    }
    if (timer.current) clearTimeout(timer.current);
    const warm = Date.now() - lastHiddenAt < WARM_WINDOW_MS;
    timer.current = setTimeout(
      () => {
        place();
        setOpen(true);
      },
      warm ? 0 : delay,
    );
  }, [delay, place]);

  const hide = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    if (open) lastHiddenAt = Date.now();
    setOpen(false);
  }, [open]);

  const tap = useTapGesture<boolean>();

  const toggleOnTap = useCallback(() => {
    // Completely deactivated on touch/mobile
    return;
  }, []);

  useDismiss(open, hide, anchorRef);

  useEffect(() => {
    if (!open) return;
    const onMove = () => place();
    window.addEventListener("scroll", onMove, true);
    window.addEventListener("resize", onMove);
    return () => {
      window.removeEventListener("scroll", onMove, true);
      window.removeEventListener("resize", onMove);
    };
  }, [open, place]);

  const variants = useMemo(
    () => (reduce ? REDUCED_VARIANTS : buildVariants(side)),
    [reduce, side],
  );

  if (!isValidElement(children)) return children;

  const trigger = cloneElement(children as ReactElement<Record<string, unknown>>, {
    "aria-describedby": id,
  });

  return (
    <>
      <span
        ref={anchorRef}
        className={cn("relative inline-flex align-middle", wrapperClassName)}
        onPointerEnter={(event: PointerEvent) => {
          if (hover.enter(event)) show();
        }}
        onPointerLeave={(event: PointerEvent) => {
          if (hover.leave(event)) hide();
        }}
        onFocus={show}
        onBlur={hide}
        onPointerDown={(event: PointerEvent) => tap.start(event, open)}
        onPointerCancel={tap.drop}
        onKeyDown={tap.drop}
        onClick={toggleOnTap}
      >
        {trigger}
      </span>
      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {open && coords ? (
                <span
                  aria-hidden
                  className="pointer-events-none fixed z-[9999]"
                  style={{
                    top: coords.top,
                    left: coords.left,
                    transform: getAnchorTransform(side, align),
                  }}
                >
                  <motion.span
                    id={id}
                    role="tooltip"
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{ transformOrigin: getTransformOrigin(side, align) }}
                    className={cn(
                      "block whitespace-nowrap rounded-md border border-neutral-800/90 bg-neutral-950 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-neutral-200 shadow-xl",
                      className,
                    )}
                  >
                    {content}
                  </motion.span>
                </span>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}

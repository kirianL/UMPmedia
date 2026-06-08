"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scrolls to the top of the page instantly on every route change.
 * Drop this once inside a client layout and forget about it.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Use instant scroll to avoid a visible "slide up" when landing on a new page
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One observer for the whole site: any element with .reveal or .reveal-img
 * fades/reveals as it scrolls into view. Keeps pages as server components.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Reveal on entry, and never leave anything hidden that was scrolled past quickly
          if (e.isIntersecting || e.boundingClientRect.bottom < 0) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    const observeAll = () =>
      document.querySelectorAll(".reveal:not(.is-in), .reveal-img:not(.is-in)").forEach((el) => io.observe(el));
    observeAll();
    // Catch elements rendered after hydration (e.g. filtered project grid)
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}

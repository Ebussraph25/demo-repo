"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    __apLoaded?: boolean;
  }
}

/**
 * Brief (~1.5s) architectural line-drawing intro, shown only on the first
 * page load — never on client-side navigation back to the homepage.
 */
export function Loader() {
  const [show] = useState(() => typeof window === "undefined" || !window.__apLoaded);
  useEffect(() => {
    window.__apLoaded = true;
  }, []);
  if (!show) return null;
  return (
    <div className="loader pointer-events-none fixed inset-0 z-[60] grid place-items-center bg-charcoal" aria-hidden>
      <svg viewBox="96 116 288 288" className="h-24 w-24" fill="none" strokeWidth="6">
        <path d="M118 383 L240 133 L362 383" stroke="#9B7B52" />
        <line className="l2" x1="160" y1="280" x2="320" y2="280" stroke="#9B7B52" />
        <line className="l3" x1="240" y1="133" x2="240" y2="380" stroke="#D8D0C4" />
        <path className="l4" d="M240 137 H262 A62 62 0 0 1 262 261 H240" stroke="#D8D0C4" />
      </svg>
    </div>
  );
}

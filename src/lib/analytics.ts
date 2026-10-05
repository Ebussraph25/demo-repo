declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Safe no-op when GA isn't loaded (no consent, or no GA ID configured). */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const KEY = "ap-cookie-consent";

/**
 * GA4 loads only after the visitor accepts analytics cookies (PRD §44).
 * Conversion events (PRD §46) are captured with one delegated click listener,
 * so CTA links anywhere on the site are tracked without extra wiring.
 */
export function Analytics() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: "granted" | "denied" | null = null;
    try {
      const v = localStorage.getItem(KEY);
      if (v === "granted" || v === "denied") stored = v;
      // First-touch attribution for lead records (PRD §52)
      const q = new URLSearchParams(window.location.search);
      const utm = Object.fromEntries(
        ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].flatMap((k) => (q.get(k) ? [[k, q.get(k)!.slice(0, 100)]] : [])),
      );
      if (Object.keys(utm).length && !sessionStorage.getItem("ap-utm")) sessionStorage.setItem("ap-utm", JSON.stringify(utm));
      if (!sessionStorage.getItem("ap-ref")) sessionStorage.setItem("ap-ref", document.referrer.slice(0, 300));
    } catch {
      /* storage unavailable — treat as undecided */
    }
    const id = requestAnimationFrame(() => {
      setConsent(stored);
      setReady(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const explicit = a.dataset.track;
      if (href.startsWith("tel:")) trackEvent("phone_click", { location: window.location.pathname });
      else if (href.startsWith("mailto:")) trackEvent("email_click", { location: window.location.pathname });
      if (explicit) trackEvent(explicit, { location: window.location.pathname, label: a.textContent?.trim() });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const choose = (v: "granted" | "denied") => {
    setConsent(v);
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      {GA_ID && consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {GA_ID && ready && consent === null && (
        <div
          role="dialog"
          aria-label="Cookie preferences"
          className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-xl border border-line bg-white p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] md:bottom-8 md:left-8 md:right-auto"
        >
          <p className="text-sm leading-relaxed text-ink">
            We use analytics cookies to understand how visitors use this site and improve it. See our{" "}
            <Link href="/cookie-policy" className="underline underline-offset-4">Cookie Policy</Link>.
          </p>
          <div className="mt-5 flex gap-3">
            <button onClick={() => choose("granted")} className="btn btn-primary !min-h-11 !px-5">Accept</button>
            <button onClick={() => choose("denied")} className="btn btn-secondary !min-h-11 !px-5">Decline</button>
          </div>
        </div>
      )}
    </>
  );
}

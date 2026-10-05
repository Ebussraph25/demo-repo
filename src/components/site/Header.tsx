"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { nav, site, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/cn";

const LIGHT_PAGES = ["/projects", "/insights", "/contact", "/privacy-policy", "/terms", "/accessibility", "/cookie-policy"];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Menu open state is tied to the path it was opened on, so navigating closes it.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) =>
    setOpenPath((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null));
  // Server-side best guess (light-background pages), then confirmed from the DOM.
  const [domCheck, setDomCheck] = useState<{ path: string; dark: boolean } | null>(null);
  const overDark = domCheck?.path === pathname ? domCheck.dark : !LIGHT_PAGES.some((p) => pathname === p || (p === "/insights" && pathname.startsWith("/insights/")));
  const menuButton = useRef<HTMLButtonElement>(null);

  // Pages opt into the transparent "over image" header by rendering [data-hero-dark].
  useEffect(() => {
    const id = requestAnimationFrame(() => setDomCheck({ path: pathname, dark: !!document.querySelector("[data-hero-dark]") }));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenPath(null);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || !overDark;
  const light = !solid && !open; // light text over image

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500",
          solid && !open ? "bg-paper/95 py-3 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md" : "bg-transparent py-5 md:py-7",
          open && "bg-charcoal",
        )}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Link href="/" aria-label="Alfred Pederson — home" className="relative z-10">
            <Logo tone={light || open ? "dark" : "light"} />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-10">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "relative py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-colors",
                      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100",
                      isActive(item.href) && "after:scale-x-100",
                      light ? "text-white/90 hover:text-white" : "text-charcoal/80 hover:text-charcoal",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              data-track="consultation_cta"
              className={cn("btn hidden !min-h-11 !px-5 sm:inline-flex", light ? "btn-light" : "btn-primary")}
            >
              Start Your Project
            </Link>
            <button
              ref={menuButton}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn("relative z-10 grid h-11 w-11 place-items-center lg:hidden", light || open ? "text-white" : "text-charcoal")}
            >
              <span className="relative block h-3 w-7">
                <span className={cn("absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500", open && "translate-y-1.5 rotate-45")} />
                <span className={cn("absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-500", open && "-translate-y-1.5 -rotate-45")} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-charcoal pt-28 text-white transition-[opacity,visibility] duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Mobile" className="container-x flex-1 overflow-y-auto">
          <ul className="border-t border-white/10">
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-white/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 font-serif text-3xl transition-colors hover:text-bronze-light"
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                >
                  {item.label}
                  <span className="font-sans text-xs tracking-[0.2em] text-stone">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3 pb-10 text-sm">
            <a href={site.phoneHref} className="text-beige hover:text-white">
              {site.phoneDisplay}
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-beige hover:text-white">
              WhatsApp
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-solid-light mt-4 w-full">
              Start Your Project
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export interface Transformation {
  label: string;
  before: string;
  after: string;
  /** Applies a desaturated "existing condition" treatment to the before image (placeholder imagery only). */
  simulateBefore?: boolean;
}

export function BeforeAfter({ items }: { items: Transformation[] }) {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const item = items[active];

  return (
    <div>
      <div role="tablist" aria-label="Transformations" className="mb-8 flex flex-wrap gap-x-8 gap-y-3">
        {items.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={i === active}
            onClick={() => { setActive(i); setPos(50); }}
            className={`border-b pb-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${i === active ? "border-charcoal text-charcoal" : "border-transparent text-stone-ink hover:text-charcoal"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        ref={box}
        className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden bg-beige md:aspect-[16/9]"
        onPointerDown={(e) => { dragging.current = true; (e.target as Element).setPointerCapture?.(e.pointerId); update(e.clientX); }}
        onPointerMove={(e) => dragging.current && update(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <Image src={item.after} alt={`${item.label} — after`} fill sizes="(min-width:1024px) 80vw, 100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image
            src={item.before}
            alt={`${item.label} — before`}
            fill
            sizes="(min-width:1024px) 80vw, 100vw"
            className="object-cover"
            style={item.simulateBefore ? { filter: "grayscale(0.85) sepia(0.25) brightness(0.78) contrast(0.85) blur(0.4px)" } : undefined}
          />
        </div>

        <span className="pointer-events-none absolute left-5 top-5 bg-charcoal/80 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white">Before</span>
        <span className="pointer-events-none absolute right-5 top-5 bg-white/90 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-charcoal">After</span>

        <div className="pointer-events-none absolute inset-y-0 w-px bg-white" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white bg-charcoal/40 text-white backdrop-blur-sm">
            <svg viewBox="0 0 24 12" className="h-3 w-6" fill="none" stroke="currentColor" aria-hidden><path d="M5 1 1 6l4 5M19 1l4 5-4 5" /></svg>
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Before and after comparison for ${item.label}`}
          className="absolute inset-x-0 bottom-0 h-full w-full cursor-ew-resize opacity-0"
          onPointerDown={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export function Gallery({ images }: { images: { src: string; alt: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    dialog.current?.close();
    setOpen(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (open !== null && !dialog.current?.open) dialog.current?.showModal();
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <>
      <div className={images.length === 1 ? "" : images.length === 2 ? "columns-1 gap-6 sm:columns-2 [&>*]:mb-6" : "columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6"}>
        {images.map((im, i) => (
          <button
            key={im.src + i}
            onClick={(e) => { lastTrigger.current = e.currentTarget; setOpen(i); }}
            className="zoom-wrap reveal-img relative block w-full break-inside-avoid bg-beige"
            style={{ aspectRatio: images.length === 1 ? "16 / 9" : [4 / 3, 4 / 5, 3 / 2][i % 3] }}
            aria-label={`Open image ${i + 1} of ${images.length}: ${im.alt}`}
          >
            <Image src={im.src} alt={im.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialog.current && close()}
        className="m-0 h-full max-h-none w-full max-w-none bg-charcoal/95 p-0 text-white backdrop:bg-charcoal/90"
        aria-label="Project image viewer"
      >
        {open !== null && (
          <div className="relative flex h-full w-full items-center justify-center p-4 md:p-16">
            <div className="relative h-full w-full">
              <Image src={images[open].src} alt={images[open].alt} fill sizes="100vw" className="object-contain" />
            </div>
            <button onClick={close} className="absolute right-4 top-4 grid h-12 w-12 place-items-center text-3xl font-light" aria-label="Close viewer">×</button>
            <button onClick={() => step(-1)} className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center text-2xl md:left-6" aria-label="Previous image">‹</button>
            <button onClick={() => step(1)} className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center text-2xl md:right-6" aria-label="Next image">›</button>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-beige">{open + 1} / {images.length}</p>
          </div>
        )}
      </dialog>
    </>
  );
}

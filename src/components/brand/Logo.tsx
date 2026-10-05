import { cn } from "@/lib/cn";

/**
 * Vector recreation of the Alfred Pederson mark: an "A" in bronze with a "P"
 * drawn through its apex, set on faint drafting guides. Vector keeps it crisp
 * at any size and lets the colors adapt to light/dark surfaces.
 */
export function Monogram({
  className,
  tone = "dark",
  guides = false,
  title,
}: {
  className?: string;
  tone?: "dark" | "light";
  guides?: boolean;
  title?: string;
}) {
  const p = tone === "dark" ? "#D8D0C4" : "#1A1A1A";
  return (
    <svg
      viewBox="96 116 288 288"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {guides && (
        <g stroke={tone === "dark" ? "#ffffff" : "#1A1A1A"} strokeOpacity="0.12" strokeDasharray="6 6" strokeWidth="1.5">
          <line x1="100" y1="140" x2="380" y2="140" />
          <line x1="100" y1="260" x2="380" y2="260" />
          <line x1="100" y1="380" x2="380" y2="380" />
          <line x1="240" y1="120" x2="240" y2="400" />
        </g>
      )}
      <g fill="none" strokeLinecap="butt" strokeWidth="7">
        <path d="M118 383 L240 133 L362 383" stroke="#9B7B52" />
        <line x1="160" y1="280" x2="320" y2="280" stroke="#9B7B52" />
        <line x1="240" y1="133" x2="240" y2="380" stroke={p} />
        <path d="M240 137 H262 A62 62 0 0 1 262 261 H240" stroke={p} />
      </g>
    </svg>
  );
}

export function Logo({
  tone = "dark",
  className,
  showDescriptor = true,
}: {
  tone?: "dark" | "light";
  className?: string;
  showDescriptor?: boolean;
}) {
  const text = tone === "dark" ? "text-white" : "text-charcoal";
  const sub = tone === "dark" ? "text-beige" : "text-stone-ink";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Monogram tone={tone} className="h-9 w-9 shrink-0 md:h-10 md:w-10" />
      <span className="flex flex-col">
        <span className={cn("text-[0.95rem] font-normal leading-none tracking-[0.18em] md:text-[1.05rem]", text)}>
          ALFRED PEDERSON
        </span>
        {showDescriptor && (
          <span
            className={cn(
              "mt-1.5 hidden border-t border-bronze/70 pt-1.5 text-[0.5rem] whitespace-nowrap sm:block font-medium leading-none tracking-[0.34em] md:text-[0.54rem]",
              sub,
            )}
          >
            ARCHITECTURE • BUILDING • INTERIORS
          </span>
        )}
      </span>
    </span>
  );
}

import Link from "next/link";
import { Monogram } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <section className="blueprint relative flex min-h-[85svh] items-center overflow-hidden pt-32">
      <Monogram tone="light" guides className="pointer-events-none absolute -right-24 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 opacity-10" />
      <div className="container-x relative">
        <p className="eyebrow mb-6 flex items-center gap-4 text-bronze"><span className="h-px w-10 bg-current" />Error 404</p>
        <h1 className="max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-[6rem]">This Space Doesn&apos;t <em className="italic text-stone-ink">Exist Yet.</em></h1>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink/75">The page you&apos;re looking for may have moved or no longer exists.</p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="btn btn-primary">Return Home</Link>
          <Link href="/projects" className="btn btn-secondary">Explore Projects</Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { projectCategories, type Project } from "@/content/projects";
import { ProjectCard } from "./index";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter, projects],
  );

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="mb-14 flex flex-wrap gap-x-8 gap-y-4 border-b border-line pb-6">
        {projectCategories.map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.categories.includes(c)).length;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${filter === c ? "text-charcoal" : "text-stone-ink hover:text-charcoal"}`}
            >
              {c} <sup className="ml-0.5 text-[0.6rem] text-bronze">{count}</sup>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">{list.length} projects shown</p>

      {list.length === 0 ? (
        <p className="py-20 text-center text-ink/70">No projects in this category yet.</p>
      ) : (
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
          {list.map((p, i) => (
            <div key={p.slug} className={i % 2 === 1 ? "md:mt-32" : ""}>
              <ProjectCard project={p} aspect={i % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]"} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

import { projects, photo } from "@/content/projects";
import { pageMeta } from "@/lib/seo";
import { CTABanner, LightHero } from "@/components/ui";
import { ProjectGrid } from "@/components/ui/ProjectGrid";

export const metadata = pageMeta({
  title: "Projects",
  description: "Residential, commercial, interior, renovation and architectural projects by Alfred Pederson.",
  path: "/projects",
  image: photo("courtyard-house"),
});

export default function ProjectsPage() {
  return (
    <>
      <LightHero
        eyebrow="Portfolio"
        title={<>Spaces shaped by <em className="italic text-stone-ink">context and craft.</em></>}
        intro="A selection of homes, interiors and commercial environments — each designed around the people who use them."
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <ProjectGrid projects={projects} />
        </div>
      </section>
      <CTABanner image={photo("bush-pavilion-house")} title="Have a Similar Project in Mind?" />
    </>
  );
}

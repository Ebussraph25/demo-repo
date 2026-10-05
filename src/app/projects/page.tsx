import { projects, photoIds as I } from "@/content/projects";
import { img } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { CTABanner, LightHero } from "@/components/ui";
import { ProjectGrid } from "@/components/ui/ProjectGrid";

export const metadata = pageMeta({
  title: "Projects",
  description: "Residential, commercial, interior, renovation and architectural projects by Alfred Pederson.",
  path: "/projects",
  image: img(I.poolHouse, 1200),
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
      <CTABanner image={img(I.houseDusk, 2400)} title="Have a Similar Project in Mind?" />
    </>
  );
}

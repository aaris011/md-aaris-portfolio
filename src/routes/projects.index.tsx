import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Section";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — MD Aaris" },
      { name: "description", content: "Data analytics and machine learning projects: fraud analytics, Netflix SQL analysis, hospital ER dashboard, student performance and demand forecasting." },
      { property: "og:title", content: "Projects — MD Aaris" },
      { property: "og:description", content: "Case studies in fraud analytics, SQL, Excel dashboards and machine learning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader eyebrow="Featured projects" title="Problems solved with" accent="data.">
        Each project starts with a real-world question. Open a card for the overview, problem statement, tools and code.
      </PageHeader>
      <Container className="pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
      </Container>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Section";
import { skillGroups } from "@/data/skills";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Technical Skills — MD Aaris" },
      { name: "description", content: "SQL, MySQL, Python, Pandas, NumPy, Matplotlib, Seaborn, Excel, Scikit-learn, Jupyter, Git and GitHub." },
      { property: "og:title", content: "Technical Skills — MD Aaris" },
      { property: "og:description", content: "SQL, Python analytics, business intelligence, machine learning and tooling skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <>
      <PageHeader eyebrow="Technical skills" title="The analyst's" accent="toolkit.">
        The languages, libraries and tools I use to take a problem from raw data to a clear answer.
      </PageHeader>
      <Container className="pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, idx) => (
            <section key={g.title} className={`reveal glass rounded-3xl p-7 ${idx === skillGroups.length - 1 ? "md:col-span-2" : ""}`}>
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent text-primary-glow"><g.icon className="size-5" /></span>
                <div>
                  <h2 className="text-lg font-semibold">{g.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{g.blurb}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-xl border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary-glow">{s}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}

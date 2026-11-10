import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Github, ImageIcon, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Section";
import { StatusBadge } from "@/components/site/StatusBadge";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found — MD Aaris" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.title} — MD Aaris` },
        { name: "description", content: p.summary },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <Container className="pb-24 pt-40 text-center">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <Button asChild variant="glass" className="mt-6"><Link to="/projects">Back to projects</Link></Button>
    </Container>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length] ?? p;

  return (
    <article>
      <header className="relative overflow-hidden px-5 pb-12 pt-32 md:px-8 md:pt-40">
        <div className="glow-orb pointer-events-none absolute -top-24 left-1/3 h-72 w-[36rem]" />
        <div className="relative mx-auto max-w-4xl animate-fade-up">
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> All projects</Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="eyebrow">{p.category}</span>
            <StatusBadge status={p.status} />
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{p.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{p.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {p.repo ? (
              <Button asChild variant="hero" size="xl"><a href={p.repo} target="_blank" rel="noreferrer"><Github /> View on GitHub</a></Button>
            ) : (
              <Button variant="glass" size="xl" disabled><Github /> Repository coming soon</Button>
            )}
          </div>
        </div>
      </header>


      <Container className="max-w-4xl space-y-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Block title="Overview"><p>{p.overview}</p></Block>
          <Block title="Problem statement"><p>{p.problem}</p></Block>
        </div>

        <Block title="Technologies used">
          <ul className="flex flex-wrap gap-2">
            {p.tech.map((t) => <li key={t} className="rounded-xl border border-border bg-surface px-3.5 py-1.5 text-sm text-foreground">{t}</li>)}
          </ul>
          {p.dataset && (
            <p className="mt-5 flex items-center gap-2 text-sm"><Database className="size-4 text-primary-glow" /> Dataset: <span className="text-foreground">{p.dataset}</span></p>
          )}
        </Block>

        <Block title="Key features">
          <ul className="grid gap-3 sm:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary-glow" /><span>{f}</span></li>
            ))}
          </ul>
        </Block>

        <Block title="Screenshots & demo">
          {p.screenshots.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {p.screenshots.map((src, i) => <img key={src} src={src} alt={`${p.title} screenshot ${i + 1}`} loading="lazy" className="rounded-2xl border border-border" />)}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2].map((n) => (
                <div key={n} className="grid aspect-video place-items-center rounded-2xl border border-dashed border-border bg-surface text-center">
                  <div><ImageIcon className="mx-auto size-6" /><p className="mt-2 font-mono text-xs">Screenshot coming soon</p></div>
                </div>
              ))}
            </div>
          )}
        </Block>

        <Block title="Results & key findings">
          {p.results?.length ? (
            <ul className="space-y-3">
              {p.results.map((r) => (
                <li key={r} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-foreground" /><span>{r}</span></li>
              ))}
            </ul>
          ) : (
            <p className="font-mono text-sm">Results & key findings — to be added.</p>
          )}
        </Block>
      </Container>

      <Container className="max-w-4xl pb-24">
        <Link to="/projects/$slug" params={{ slug: next.slug }} className="glass group flex items-center justify-between rounded-3xl p-6 transition-colors hover:border-foreground/25">
          <div>
            <p className="font-mono text-xs text-muted-foreground">Next project</p>
            <p className="mt-1 font-medium ">{next.title}</p>
          </div>
          <ArrowLeft className="size-5 rotate-180 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </Link>
      </Container>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="reveal glass rounded-3xl p-7">
      <h2 className="eyebrow">{title}</h2>
      <div className="mt-4 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

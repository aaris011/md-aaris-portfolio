import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="reveal group relative flex h-full flex-col rounded-2xl border border-border bg-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:bg-foreground/[0.02]"
    >
      <div className="flex items-start justify-between gap-4">
        <StatusBadge status={project.status} />
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:bg-foreground group-hover:text-background">
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>

      <p className="mt-8 font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground">
        {index !== undefined && <span className="text-foreground">{String(index + 1).padStart(2, "0")} — </span>}
        {project.category}
      </p>
      <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight md:text-xl">{project.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-6 font-mono text-[0.7rem] text-muted-foreground">
        {project.tech.slice(0, 4).map((t) => <li key={t}>{t}</li>)}
      </ul>
    </Link>
  );
}

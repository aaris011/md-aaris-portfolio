import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Github, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Container, PageHeader, SectionHeading } from "@/components/site/Section";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/github")({
  head: () => ({
    meta: [
      { title: "GitHub & Coding Profiles — MD Aaris" },
      { name: "description", content: "GitHub activity and public repositories of MD Aaris (aaris011)." },
      { property: "og:title", content: "GitHub — MD Aaris" },
      { property: "og:description", content: "Contribution activity and repository showcase." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GithubPage,
});

type Repo = { id: number; name: string; description: string | null; html_url: string; language: string | null; stargazers_count: number; forks_count: number; updated_at: string; fork: boolean };
type User = { public_repos: number; followers: number; following: number; avatar_url: string };

const fetchJson = async <T,>(url: string): Promise<T> => {
  const r = await fetch(url);
  if (!r.ok) throw new Error("GitHub request failed");
  return r.json();
};

function GithubPage() {
  const user = useQuery({ queryKey: ["gh-user"], queryFn: () => fetchJson<User>(`https://api.github.com/users/${profile.githubUser}`), staleTime: 3600_000 });
  const repos = useQuery({
    queryKey: ["gh-repos"],
    queryFn: () => fetchJson<Repo[]>(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`),
    staleTime: 3600_000,
  });
  const list = (repos.data ?? []).filter((r) => !r.fork && !r.name.endsWith(".github.io"));
  const languages = new Set(list.map((r) => r.language).filter(Boolean));

  const stats = [
    { label: "Public repos", value: user.data?.public_repos },
    { label: "Languages", value: repos.data ? languages.size : undefined },
    { label: "Followers", value: user.data?.followers },
  ];

  return (
    <>
      <PageHeader eyebrow="GitHub & coding profiles" title="Code in the" accent="open.">
        Everything I build lives on GitHub — notebooks, SQL scripts and dashboards.
      </PageHeader>

      <Container className="pb-16">
        <div className="grid gap-5 lg:grid-cols-[1fr_2fr]">
          <div className="reveal glass rounded-3xl p-7">
            <div className="flex items-center gap-4">
              {user.data ? (
                <img src={user.data.avatar_url} alt="GitHub avatar of MD Aaris" className="size-14 rounded-2xl border border-border" width={56} height={56} />
              ) : (
                <Skeleton className="size-14 rounded-2xl" />
              )}
              <div>
                <p className="font-semibold">{profile.name}</p>
                <p className="font-mono text-sm text-muted-foreground">@{profile.githubUser}</p>
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-surface p-3 text-center">
                  <dd className="text-2xl font-semibold">{s.value ?? "—"}</dd>
                  <dt className="mt-1 text-[0.7rem] text-muted-foreground">{s.label}</dt>
                </div>
              ))}
            </dl>
            <Button asChild variant="hero" className="mt-6 w-full rounded-full" size="lg">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github /> Follow on GitHub</a>
            </Button>
          </div>

          <div className="reveal glass overflow-hidden rounded-3xl p-7">
            <p className="eyebrow">Contribution activity</p>
            <div className="mt-6 overflow-x-auto">
              <img
                src={`https://ghchart.rshah.org/3b82f6/${profile.githubUser}`}
                alt={`GitHub contribution chart for ${profile.githubUser}`}
                loading="lazy"
                className="w-full min-w-[640px] opacity-90 [filter:invert(1)_hue-rotate(180deg)_brightness(0.9)]"
              />
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">Last 12 months of public contributions</p>
          </div>
        </div>
      </Container>

      <Container className="pb-24">
        <SectionHeading eyebrow="Repository showcase" title="Public" accent="repositories" />
        {repos.isError ? (
          <p className="text-muted-foreground">Couldn't load repositories right now. <a className="text-primary-glow underline" href={profile.github} target="_blank" rel="noreferrer">View them on GitHub</a>.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {repos.isLoading
              ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-40 rounded-3xl" />)
              : list.map((r) => (
                  <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="reveal glass group flex flex-col rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                    <div className="flex items-start justify-between gap-3">
                      <p className="break-all font-mono text-sm font-medium group-hover:text-primary-glow">{r.name}</p>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.description ?? "No description provided."}</p>
                    <div className="mt-5 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                      {r.language && <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary" />{r.language}</span>}
                      <span className="flex items-center gap-1"><Star className="size-3.5" />{r.stargazers_count}</span>
                      <span className="flex items-center gap-1"><GitFork className="size-3.5" />{r.forks_count}</span>
                    </div>
                  </a>
                ))}
          </div>
        )}
      </Container>
    </>
  );
}

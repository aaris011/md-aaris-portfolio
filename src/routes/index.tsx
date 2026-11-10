import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/site/Section";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CertCard } from "@/components/site/CertCard";
import { ResumeButton } from "@/components/site/ResumeButton";
import { SocialLinks } from "@/components/site/SocialLinks";
import { ToolStrip } from "@/components/site/ToolStrip";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Aaris — Aspiring Data Analyst & Data Science Student" },
      { name: "description", content: "MD Aaris: Data Science undergraduate building SQL, Excel dashboard and machine learning projects. Open to Data Analyst, BI and Risk/Fraud Analytics internships." },
      { property: "og:title", content: "MD Aaris — Aspiring Data Analyst" },
      { property: "og:description", content: "SQL, Excel BI and fraud-detection machine learning projects. Open to internships." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const viewAll = "inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent";

function Home() {
  return (
    <>
      <Hero />

      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading
            title="Projects"
            action={<Link to="/projects" className={viewAll}>View All Projects <ArrowRight className="size-4" /></Link>}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading
            title="Licenses & Certifications"
            action={<Link to="/certifications" className={viewAll}>View All Certifications <ArrowRight className="size-4" /></Link>}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c, i) => <CertCard key={i} cert={c} />)}
          </div>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <div className="reveal border-t border-border pt-16 text-center md:pt-20">
            <p className="eyebrow">Open to opportunities</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-muted-foreground md:text-5xl">
              Looking for a data-driven <span className="font-bold italic text-foreground">intern?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              I'm seeking {profile.goal}. Let's talk about how I can contribute to your team.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="xl"><Link to="/contact">Get in touch <ArrowRight /></Link></Button>
              <ResumeButton />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Hero() {
  return (
    <section className="relative px-5 pb-16 pt-32 md:pt-40">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="animate-fade-up space-y-2 text-[2.6rem] font-semibold leading-[1.1] tracking-tight text-muted-foreground sm:text-6xl md:space-y-4 md:text-7xl">
          <span className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            Hey, I'm <span className="font-bold text-foreground">{profile.name}</span>
          </span>
          <span className="block">
            An <span className="font-bold text-foreground">Aspiring Data Analyst</span>
          </span>
          <span className="block">
            Turning <span className="font-bold italic text-foreground">Data into Decisions</span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl animate-fade-up text-base text-muted-foreground [animation-delay:120ms] md:text-lg">
          Data Science student who enjoys turning messy, raw data into clear insight people can act on.
        </p>

        <div className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-x-5 gap-y-4 [animation-delay:220ms]">
          <SocialLinks />
          <span className="hidden h-7 w-px bg-border sm:block" />
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full px-3 py-2 font-medium text-foreground transition-colors hover:bg-accent">
            Let's Talk <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="hidden h-7 w-px bg-border sm:block" />
          <ResumeButton size="lg" />
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-6xl items-center gap-4">
        <span className="h-px flex-1 bg-border" />
        <Link to="/projects" className="inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
          Scroll down <Mouse className="size-4" /> to see projects
        </Link>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="mx-auto mt-10 max-w-6xl">
        <ToolStrip />
      </div>
    </section>
  );
}

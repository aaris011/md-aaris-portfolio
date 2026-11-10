import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, BrainCircuit, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, PageHeader } from "@/components/site/Section";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MD Aaris" },
      { name: "description", content: "About MD Aaris: Computer Science (Data Science) undergraduate focused on analytics, machine learning and solving business problems with data." },
      { property: "og:title", content: "About MD Aaris" },
      { property: "og:description", content: "Academic background and data-driven approach of MD Aaris." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const interests = [
  { icon: LineChart, title: "Data Analytics", text: "Cleaning, exploring and visualising data to uncover the patterns behind the numbers — with SQL, Python and Excel." },
  { icon: BrainCircuit, title: "Machine Learning & AI", text: "Building and evaluating predictive models with Scikit-learn, and exploring how AI can augment everyday decision-making." },
  { icon: Briefcase, title: "Business Impact", text: "Framing every analysis around a real question — fraud risk, demand, operations — so the output is something a team can act on." },
];

function About() {
  return (
    <>
      <PageHeader eyebrow="About me" title="Data, with a" accent="purpose.">
        I'm {profile.name}, a {profile.education.year.toLowerCase()} {profile.education.degree} student from {profile.location}, focused on turning data into practical business insight.
      </PageHeader>

      <Container className="grid gap-6 pb-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="reveal glass rounded-3xl p-7">
          <p className="eyebrow">Education</p>
          <ol className="mt-6 space-y-6 border-l border-border pl-6">
            <li className="relative">
              <span className="absolute -left-[1.85rem] top-1 size-3 rounded-full bg-gradient-primary shadow-glow" />
              <p className="font-mono text-xs text-muted-foreground">{profile.education.year} · {profile.education.graduation}</p>
              <p className="mt-1 font-medium">{profile.education.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">{profile.education.institution}</p>
            </li>
          </ol>
        </div>
        <div className="reveal space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            I'm a Computer Science Engineering student specializing in Data Science, with a strong interest in data analytics, business intelligence and machine learning. I enjoy transforming raw datasets into meaningful insight through data cleaning, exploratory data analysis, SQL, visualization and predictive modelling.
          </p>
          <p>
            I've worked on projects in retail banking fraud analytics, SQL-based content analysis, hospital operations dashboards and student performance analytics. My current focus is strengthening my analytical skills and building practical solutions that support data-driven business decisions.
          </p>
          <p className="text-foreground">Currently seeking {profile.goal}.</p>
        </div>
      </Container>

      <Container className="pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {interests.map((i) => (
            <div key={i.title} className="reveal glass rounded-3xl p-7">
              <i.icon className="size-6 text-primary-glow" />
              <h2 className="mt-5 text-lg font-semibold">{i.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="hero" size="xl"><Link to="/projects">See my projects <ArrowRight /></Link></Button>
          <Button asChild variant="glass" size="xl"><Link to="/skills">Technical skills</Link></Button>
        </div>
      </Container>
    </>
  );
}

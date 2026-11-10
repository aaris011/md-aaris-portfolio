import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Section";
import { CertCard } from "@/components/site/CertCard";
import { certifications } from "@/data/certifications";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Licenses & Certifications — MD Aaris" },
      { name: "description", content: "Licenses and certifications of MD Aaris, including the One Million Prompters initiative by Dubai Future Foundation." },
      { property: "og:title", content: "Licenses & Certifications — MD Aaris" },
      { property: "og:description", content: "Learning milestones and recognitions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Certifications,
});

function Certifications() {
  return (
    <>
      <PageHeader eyebrow="Licenses & certifications" title="Always" accent="learning.">
        Programs and recognitions along the way. More will be added as they are verified.
      </PageHeader>
      <Container className="pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => <CertCard key={i} cert={c} />)}
        </div>
      </Container>
    </>
  );
}

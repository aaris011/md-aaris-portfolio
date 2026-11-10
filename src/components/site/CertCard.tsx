import { ArrowUpRight, Award, ImageIcon } from "lucide-react";
import type { Certification } from "@/data/certifications";
import { cn } from "@/lib/utils";

export function CertCard({ cert }: { cert: Certification }) {
  const body = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface">
        {cert.image ? (
          <img src={cert.image} alt={`${cert.title} certificate`} loading="lazy" className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
        ) : (
          <div className="grid size-full place-items-center text-center text-muted-foreground">
            <div>
              {cert.placeholder ? <ImageIcon className="mx-auto size-7" /> : <Award className="mx-auto size-8 text-foreground" />}
              <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-widest">Certificate image coming soon</p>
            </div>
          </div>
        )}
      </div>
      <div className="px-1 pb-1 pt-4">
        <h3 className={cn("font-semibold leading-snug", cert.placeholder && "text-muted-foreground")}>{cert.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {cert.issuer}
          {!cert.placeholder && cert.date && <span> · {cert.date}</span>}
        </p>
        {cert.url && (
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
            View certificate <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        )}
      </div>
    </>
  );
  const cls = "reveal group block rounded-2xl border border-border bg-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25";
  return cert.url ? (
    <a href={cert.url} target="_blank" rel="noreferrer" className={cls}>{body}</a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

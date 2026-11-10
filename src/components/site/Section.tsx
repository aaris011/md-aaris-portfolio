import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHeader({ eyebrow, title, accent, children }: { eyebrow: string; title: string; accent?: string | undefined; children?: ReactNode }) {
  return (
    <section className="relative pb-12 pt-36 md:pt-44">
      <div className="relative mx-auto max-w-6xl animate-fade-up px-5 md:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-muted-foreground md:text-6xl">
          {title} {accent && <span className="font-bold italic text-foreground">{accent}</span>}
        </h1>
        {children && <div className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, accent, className, action }: { eyebrow?: string; title: string; accent?: string | undefined; className?: string | undefined; action?: ReactNode }) {
  return (
    <div className={cn("reveal mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between", className)}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 inline-block border-b-2 border-foreground/30 pb-2 text-3xl font-bold tracking-tight md:text-4xl">
          {title} {accent && <span className="italic">{accent}</span>}
        </h2>
      </div>
      {action}
    </div>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string | undefined }) {
  return <div className={cn("mx-auto max-w-6xl px-5 md:px-8", className)}>{children}</div>;
}

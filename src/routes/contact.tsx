
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Container, PageHeader } from "@/components/site/Section";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MD Aaris" },
      {
        name: "description",
        content:
          "Get in touch with MD Aaris about Data Analyst, Business Intelligence or Risk/Fraud Analytics internship opportunities.",
      },
      { property: "og:title", content: "Contact MD Aaris" },
      {
        property: "og:description",
        content: "Reach out about internships and collaborations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please add a subject").max(150, "Subject is too long"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000, "Message is too long"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const parsed = schema.safeParse(
      Object.fromEntries(new FormData(form))
    );

    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach(
        (i) => (errs[i.path[0] as keyof Errors] ??= i.message)
      );
      setErrors(errs);
      return;
    }

    setErrors({});
    setSending(true);
    setSent(false);

    try {
      await emailjs.send(
        "service_4pkkhih",
        "template_yh021wm",
        {
          name: parsed.data.name,
          email: parsed.data.email,
          subject: parsed.data.subject,
          message: parsed.data.message,
        },
        {
          publicKey: "zWxeYfC44vUED8RjN",
        }
      );

      form.reset();
      setSent(true);

      toast.success("Message sent", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
   } catch (error) {
  console.error("EmailJS submission failed:", error);

  const details =
    typeof error === "object" && error !== null && "text" in error
      ? String(error.text)
      : error instanceof Error
        ? error.message
        : String(error);

  toast.error("Message not sent", {
    description: details,
  });
}finally {
      setSending(false);
    }
  };

  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: FaLinkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin },
    { icon: FaGithub, label: "GitHub", value: `github.com/${profile.githubUser}`, href: profile.github },
    { icon: SiLeetcode, label: "LeetCode", value: "leetcode.com/u/24bcs10402", href: profile.leetcode },
  ];

  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's build something" accent="insightful.">
        Open to {profile.goal}. I usually reply within a couple of days.
      </PageHeader>

      <Container className="grid gap-6 pb-24 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="reveal group flex items-center gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-foreground/25"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-foreground">
                <c.icon className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-1 truncate">{c.value}</p>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          ))}
        </div>

        <form onSubmit={onSubmit} noValidate className="reveal space-y-5 rounded-2xl border border-border p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}>
              <Input id="name" name="name" placeholder="Your name" maxLength={100} className="h-11 bg-surface" />
            </Field>

            <Field id="email" label="Email" error={errors.email}>
              <Input id="email" name="email" type="email" placeholder="you@company.com" maxLength={255} className="h-11 bg-surface" />
            </Field>
          </div>

          <Field id="subject" label="Subject" error={errors.subject}>
            <Input id="subject" name="subject" placeholder="Internship opportunity" maxLength={150} className="h-11 bg-surface" />
          </Field>

          <Field id="message" label="Message" error={errors.message}>
            <Textarea id="message" name="message" rows={6} maxLength={2000} placeholder="Tell me about the role or opportunity…" className="bg-surface" />
          </Field>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" variant="hero" size="xl" disabled={sending} className="w-full sm:w-auto">
              {sending ? <Loader2 className="animate-spin" /> : <Send />}
              {sending ? "Sending…" : "Send message"}
            </Button>

            {sent && (
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-foreground" />
                Message received. Thank you!
              </p>
            )}
          </div>
        </form>
      </Container>
    </>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { Award, FolderOpen, Github, Home, Layers, Mail, Menu, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export const navLinks = [
  { to: "/about", label: "About", icon: User },
  { to: "/skills", label: "Skills", icon: Layers },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/certifications", label: "Certifications", icon: Award },
  { to: "/github", label: "GitHub", icon: Github },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

const allLinks = [{ to: "/", label: "Home", icon: Home }, ...navLinks] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-border bg-background/75 backdrop-blur-xl" : "border-border bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="text-base font-extrabold uppercase tracking-tight" onClick={() => setOpen(false)}>
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {allLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "font-semibold text-foreground" }}
              >
                <l.icon className="size-4" />
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="grid size-10 place-items-center rounded-full text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="animate-fade-up border-t border-border px-3 pb-4 pt-2 lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col">
            {allLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-base text-muted-foreground hover:text-foreground"
                  activeProps={{ className: "font-semibold text-foreground" }}
                >
                  <l.icon className="size-4" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

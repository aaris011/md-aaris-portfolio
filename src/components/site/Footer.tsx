import { Link } from "@tanstack/react-router";
import { profile } from "@/data/profile";
import { navLinks } from "./Navbar";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-extrabold uppercase tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.roles.join(" · ")}</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="hover:text-foreground">{l.label}</Link>
            </li>
          ))}
        </ul>
        <SocialLinks className="-ml-2.5" />
      </div>
      <p className="pb-8 text-center font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}

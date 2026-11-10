import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const iconClass =
  "grid size-10 cursor-pointer place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-foreground";

// GitHub, LinkedIn, LeetCode and Email icons — each one is a real link.
export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className={iconClass}>
        <FaGithub className="size-[1.35rem]" />
      </a>
      {profile.linkedin ? (
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className={iconClass}>
          <FaLinkedin className="size-[1.35rem]" />
        </a>
      ) : (
        <button type="button" aria-label="LinkedIn" title="LinkedIn" className={iconClass} onClick={() => toast("LinkedIn profile coming soon")}>
          <FaLinkedin className="size-[1.35rem]" />
        </button>
      )}
      <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" title="LeetCode" className={iconClass}>
        <SiLeetcode className="size-[1.3rem]" />
      </a>
      <a href={`mailto:${profile.email}`} aria-label="Email" title="Email" className={iconClass}>
        <Mail className="size-[1.35rem]" />
      </a>
    </div>
  );
}

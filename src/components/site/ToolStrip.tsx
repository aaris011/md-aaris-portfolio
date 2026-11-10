import type { IconType } from "react-icons";
import { SiPython, SiMysql, SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiGit, SiGithub, SiLeetcode } from "react-icons/si";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

const tools: { name: string; icon: IconType }[] = [
  { name: "Python", icon: SiPython },
  { name: "MySQL", icon: SiMysql },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Excel", icon: PiMicrosoftExcelLogoFill },
  { name: "Jupyter", icon: SiJupyter },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "LeetCode", icon: SiLeetcode },
];

// Endless, slow-scrolling row of grayscale tool logos.
export function ToolStrip() {
  return (
    <div className="mask-fade-x overflow-hidden">
      <ul className="flex w-max animate-marquee gap-14 py-4 hover:[animation-play-state:paused]">
        {[...tools, ...tools].map((t, i) => (
          <li key={i} aria-hidden={i >= tools.length} className="flex flex-col items-center gap-2 text-muted-foreground/70 transition-colors hover:text-foreground">
            <t.icon className="size-10" />
            <span className="font-mono text-[0.65rem] uppercase tracking-widest">{t.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button, type ButtonProps } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function ResumeButton({ variant = "glass", size = "xl" }: Pick<ButtonProps, "variant" | "size">) {
  if (profile.resumeUrl) {
    return (
      <Button asChild variant={variant} size={size}>
        <a href={profile.resumeUrl} download>
          <Download /> Download Resume
        </a>
      </Button>
    );
  }
  return (
    <Button variant={variant} size={size} onClick={() => toast("Resume coming soon", { description: "Please reach out via the contact page in the meantime." })}>
      <Download /> Download Resume
    </Button>
  );
}

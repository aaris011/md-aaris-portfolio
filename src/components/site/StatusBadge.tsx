import { cn } from "@/lib/utils";

export function StatusBadge({ status }: { status: "Completed" | "In Progress" }) {
  const inProgress = status === "In Progress";
  return (
    <span className={cn("chip", inProgress ? "text-warning" : "text-success")}>
      <span className={cn("size-1.5 rounded-full", inProgress ? "animate-pulse-dot bg-warning" : "bg-success")} />
      {status}
    </span>
  );
}

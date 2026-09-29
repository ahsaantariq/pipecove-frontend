import { cn } from "@/lib/utils";

export function Mark({ className, tone = "ink" }: { className?: string; tone?: "ink" | "paper" }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-8 shrink-0", className)}>
      <rect width="32" height="32" rx="8" className={tone === "ink" ? "fill-ink" : "fill-paper"} />
      <path
        d="M7.2 11.2h8.4c4.7 0 8.2 3.3 8.2 7.6 0 3.6-2.6 6.2-6.4 6.2H13"
        fill="none"
        className="stroke-signal"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

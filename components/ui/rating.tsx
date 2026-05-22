import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({
  value,
  count,
  size = "md",
  className,
}: {
  value: number;
  count: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const iconSizes = { sm: 12, md: 14, lg: 18 };
  const textSizes = { sm: "text-xs", md: "text-sm", lg: "text-base" };
  return (
    <div
      className={cn("inline-flex items-center gap-2", textSizes[size], className)}
      aria-label={`${value} von 5 Sternen, ${count} Bewertungen`}
    >
      <span className="inline-flex items-center gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={iconSizes[size]}
            strokeWidth={1.5}
            className={
              i < Math.round(value)
                ? "fill-accent text-accent"
                : "text-accent/30"
            }
          />
        ))}
      </span>
      <span className="font-medium tabular-nums">{value.toFixed(1)}</span>
      <span className="text-ink-3">· {count} Bewertungen</span>
    </div>
  );
}

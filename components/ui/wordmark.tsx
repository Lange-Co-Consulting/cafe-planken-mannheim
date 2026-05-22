import Link from "next/link";
import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };
  return (
    <Link
      href="/"
      className={cn(
        "font-display font-display-soft inline-flex items-baseline gap-1.5",
        sizes[size],
        className,
      )}
      aria-label="Café Planken — zurück zum Anfang"
    >
      <span className="italic tracking-tight">Café</span>
      <span className="tracking-tight">Planken</span>
    </Link>
  );
}

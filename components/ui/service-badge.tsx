import { cn } from "@/lib/utils";

export function ServiceBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-rule px-3 py-1.5 text-xs text-ink-2 transition-colors hover:border-rule-strong hover:bg-paper",
        className,
      )}
    >
      <span
        aria-hidden
        className="h-1 w-1 rounded-full bg-accent"
      />
      {children}
    </span>
  );
}

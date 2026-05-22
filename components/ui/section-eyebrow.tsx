import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  className,
  accent = false,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3",
        accent ? "eyebrow-accent" : "eyebrow",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-6",
          accent ? "bg-accent" : "bg-rule-strong",
        )}
      />
      <span>{children}</span>
    </div>
  );
}

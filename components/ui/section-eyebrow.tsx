import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  number,
  className,
  accent = false,
}: {
  children: React.ReactNode;
  number?: string;
  className?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        accent ? "eyebrow-accent" : "eyebrow",
        className,
      )}
    >
      {number && <span>{number}</span>}
      {number && (
        <span
          aria-hidden
          className="h-px w-8 bg-current opacity-40"
        />
      )}
      <span>{children}</span>
    </div>
  );
}

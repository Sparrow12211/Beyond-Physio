import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-10 lg:mb-14",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.2em]",
            light ? "text-mint/80" : "text-teal",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-2xl font-bold leading-tight min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-sm leading-relaxed min-[375px]:text-base sm:mt-4 sm:text-lg",
            align === "center" && "mx-auto",
            light ? "text-white/85" : "text-foreground/70",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

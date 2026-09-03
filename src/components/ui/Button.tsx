import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "white";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-teal)] text-white hover:brightness-95 shadow-sm hover:shadow-md", // Updated to use --color-teal
  secondary:
    "bg-[var(--color-deep-teal)] text-white hover:brightness-95 shadow-sm hover:shadow-md", // Consistent with other variants
  outline:
    "border-2 border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-teal)] hover:text-white",
  white:
    "bg-white text-[var(--color-navy)] hover:bg-[color:rgba(255,255,255,0.95)] shadow-sm hover:shadow-md",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:px-6",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}

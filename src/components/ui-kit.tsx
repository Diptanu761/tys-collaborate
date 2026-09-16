import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 disabled:hover:opacity-40",
  accent:
    "bg-accent text-accent-foreground hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100",
  outline: "border border-border-strong bg-card text-foreground hover:bg-muted",
  ghost: "text-muted-foreground hover:text-foreground hover:bg-muted",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size; asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[background,opacity,transform,filter] duration-200 active:scale-[0.98] disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function Field({
  label,
  hint,
  error,
  className,
  id,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string; error?: string }) {
  const inputId = id ?? props.name ?? label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={!!error}
        className={cn(
          "h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none",
          error && "border-destructive",
          className,
        )}
        {...props}
      />
      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

export function Badge({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "accent" | "success";
}) {
  const tones = {
    muted: "bg-muted text-muted-foreground",
    accent: "bg-accent-soft text-accent",
    success: "bg-muted text-success",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2 py-0.5 text-[0.7rem] font-medium tracking-wide",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  title,
  subtitle,
  action,
  className,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-6 flex items-end justify-between gap-4", className)}>
      <div>
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

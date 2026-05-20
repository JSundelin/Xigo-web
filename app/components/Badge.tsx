import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "subtle";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-[var(--color-accent-subtle)] text-[var(--color-foreground)] border-[var(--color-border)]",
    accent:
      "bg-[var(--color-accent-subtle)] text-[var(--brand-accent)] border-[var(--brand-accent)]/20",
    subtle:
      "bg-transparent text-[var(--color-foreground-muted)] border-[var(--color-border)]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-[var(--radius-full)] border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

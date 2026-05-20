import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-medium
    transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none
    rounded-[var(--radius-sm)]
  `;

  const variants = {
    primary: `
      bg-[var(--brand-accent)] text-white
      hover:bg-[var(--color-accent-hover)]
    `,
    secondary: `
      bg-transparent text-[var(--brand-accent)]
      border border-[var(--brand-accent)]
      hover:bg-[var(--color-accent-subtle)]
    `,
    ghost: `
      bg-transparent text-[var(--color-foreground-muted)]
      hover:text-[var(--color-foreground)] hover:bg-[var(--color-accent-subtle)]
    `,
    inverse: `
      bg-white text-[var(--brand-primary)]
      hover:bg-[var(--surface-muted)]
    `,
  };

  const sizes = {
    sm: "px-[22px] py-2 text-sm",
    md: "px-[22px] py-3 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}

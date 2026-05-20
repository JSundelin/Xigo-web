"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  glass?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
  glass = false,
}: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-5",
    lg: "p-6",
  };

  const baseStyles = glass
    ? "glass rounded-[var(--radius-xl)]"
    : "bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-[var(--radius-xl)]";

  const hoverStyles = hover
    ? "transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-foreground)]/20"
    : "";

  return (
    <div
      className={`
        ${baseStyles}
        ${paddingClasses[padding]}
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

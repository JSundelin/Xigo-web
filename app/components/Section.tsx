import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "default" | "alt" | "muted";
  spacing?: "default" | "compact";
}

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  background = "default",
  spacing = "default",
}: SectionProps) {
  const bgClasses = {
    default: "bg-[var(--color-background)]",
    alt: "bg-[var(--color-background-alt)]",
    muted: "bg-[var(--surface-muted)]",
  };

  const spacingClasses = {
    default: "py-[var(--space-section-sm)] lg:py-[var(--space-section)]",
    compact: "py-12 sm:py-16",
  };

  return (
    <section
      id={id}
      className={`${spacingClasses[spacing]} ${bgClasses[background]} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

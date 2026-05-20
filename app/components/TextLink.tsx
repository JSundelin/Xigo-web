import Link from "next/link";
import { ReactNode } from "react";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`text-[var(--brand-accent)] font-medium inline-flex items-center gap-1 hover:underline underline-offset-4 transition-colors ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

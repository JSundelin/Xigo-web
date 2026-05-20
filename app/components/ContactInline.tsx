"use client";

import { ContactForm } from "./ContactForm";
import { Card } from "./Card";

interface ContactInlineProps {
  title?: string;
  className?: string;
}

export function ContactInline({ title, className = "" }: ContactInlineProps) {
  return (
    <Card glass hover={false} padding="lg" className={className}>
      {title && (
        <h3 className="text-lg font-medium text-[var(--color-foreground)] mb-4">
          {title}
        </h3>
      )}
      <ContactForm />
    </Card>
  );
}





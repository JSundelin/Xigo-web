import { Section } from "./Section";
import type { HowWeWorkStep } from "@/app/lib/types";

interface HowWeWorkStepsProps {
  title: string;
  subtitle?: string;
  steps: HowWeWorkStep[];
}

export function HowWeWorkSteps({ title, subtitle, steps }: HowWeWorkStepsProps) {
  return (
    <Section background="alt">
      <div className="text-center mb-12">
        <h2 className="mb-3">{title}</h2>
        {subtitle && (
          <p className="text-body-lg text-[var(--color-foreground-muted)] mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={step.id} className="text-center md:text-left">
            <span
              className="inline-flex items-center justify-center w-10 h-10 mb-4 rounded-[var(--radius-sm)] bg-[var(--brand-accent)] text-white text-sm font-semibold"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-[var(--color-foreground-muted)]">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

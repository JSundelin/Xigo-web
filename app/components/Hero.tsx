import { Button } from "./Button";
import { Container } from "./Container";
import { TextLink } from "./TextLink";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  compact?: boolean;
}

export function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`hero-gradient relative flex items-center ${compact ? "py-16 lg:py-20" : "min-h-[70vh] lg:min-h-[75vh]"}`}
    >
      <Container className="relative z-10 py-12 lg:py-16">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-caption uppercase tracking-wide mb-4">{eyebrow}</p>
          )}
          <h1 className="text-balance mb-6">{headline}</h1>
          <p className="text-body-lg text-[var(--color-foreground-muted)] max-w-2xl mb-10">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Button href={primaryCTA.href} size="lg">
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <TextLink href={secondaryCTA.href}>{secondaryCTA.label}</TextLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

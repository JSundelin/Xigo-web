import { Button } from "./Button";
import { Container } from "./Container";
import { ctaBand } from "@/app/lib/site";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: { label: string; href: string };
}

export function CTASection({
  headline = ctaBand.headline,
  subheadline = ctaBand.subheadline,
  primaryCTA = ctaBand.primaryCTA,
}: CTASectionProps) {
  return (
    <section className="bg-[var(--color-cta-band)] py-16 lg:py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white mb-4">{headline}</h2>
          <p className="text-white/80 text-body-lg mb-8 mx-auto">{subheadline}</p>
          <Button href={primaryCTA.href} variant="inverse" size="lg">
            {primaryCTA.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}

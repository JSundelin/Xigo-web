import { Container } from "./Container";

interface PageHeroProps {
  headline: string;
  lead: string;
}

export function PageHero({ headline, lead }: PageHeroProps) {
  return (
    <section className="hero-gradient py-12 lg:py-16">
      <Container>
        <div className="max-w-3xl">
          <h1 className="mb-4">{headline}</h1>
          <p className="text-body-lg text-[var(--color-foreground-muted)]">{lead}</p>
        </div>
      </Container>
    </section>
  );
}

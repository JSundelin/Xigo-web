import {
  Hero,
  Section,
  ServiceCard,
  HowWeWorkSteps,
  CaseSnapshotCard,
  CTASection,
  TextLink,
  JsonLd,
} from "../components";
import {
  heroContent,
  servicesSection,
  caseTeaserSection,
  aboutTeaser,
  proofBullets,
} from "../lib/home";
import { serviceCards } from "../lib/services";
import { cases } from "../lib/cases";
import { howWeWork } from "../lib/site";
import { organizationJsonLd } from "../lib/json-ld";

export default function HomePage() {
  return (
    <main id="main-content" className="pt-16">
      <JsonLd data={organizationJsonLd()} />

      <Hero
        eyebrow={heroContent.eyebrow}
        headline={heroContent.headline}
        subheadline={heroContent.subheadline}
        primaryCTA={heroContent.primaryCTA}
        secondaryCTA={heroContent.secondaryCTA}
      />

      <Section>
        <div className="mb-10">
          <h2 className="mb-3">{servicesSection.title}</h2>
          <p className="text-body-lg text-[var(--color-foreground-muted)]">
            {servicesSection.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </div>
      </Section>

      <HowWeWorkSteps
        title={howWeWork.title}
        subtitle={howWeWork.subtitle}
        steps={howWeWork.steps}
      />

      <Section>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="mb-3">{caseTeaserSection.title}</h2>
            <p className="text-body-lg text-[var(--color-foreground-muted)]">
              {caseTeaserSection.subtitle}
            </p>
          </div>
          <TextLink href={caseTeaserSection.linkHref}>
            {caseTeaserSection.linkLabel}
          </TextLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.slice(0, 3).map((c) => (
            <CaseSnapshotCard
              key={c.id}
              title={c.title}
              industry={c.industry}
              teaser={c.teaser}
            />
          ))}
        </div>
      </Section>

      <Section background="alt">
        <h2 className="mb-4">{aboutTeaser.title}</h2>
        <p className="text-body-lg text-[var(--color-foreground-muted)] mb-6 max-w-3xl">
          {aboutTeaser.body}
        </p>
        <TextLink href={aboutTeaser.linkHref}>{aboutTeaser.linkLabel}</TextLink>
        <ul className="mt-10 flex flex-wrap gap-4">
          {proofBullets.map((b) => (
            <li
              key={b}
              className="text-sm px-3 py-1.5 border border-[var(--color-border)] rounded-[var(--radius-full)] text-[var(--color-foreground-muted)]"
            >
              {b}
            </li>
          ))}
        </ul>
      </Section>

      <CTASection />
    </main>
  );
}

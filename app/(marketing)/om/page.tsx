import type { Metadata } from "next";
import {
  PageHero,
  Section,
  ProofStrip,
  CertBadgeRow,
  CTASection,
} from "@/app/components";
import { aboutContent, aboutSeo } from "@/app/lib/about";

export const metadata: Metadata = {
  title: { absolute: aboutSeo.title },
  description: aboutSeo.description,
};

export default function OmPage() {
  return (
    <main id="main-content" className="pt-16">
      <PageHero headline={aboutContent.headline} lead={aboutContent.lead} />

      <Section>
        <h2 className="mb-4">{aboutContent.company.title}</h2>
        <p className="text-body-lg text-[var(--color-foreground-muted)] max-w-3xl">
          {aboutContent.company.body}
        </p>
      </Section>

      <Section background="alt">
        <h2 className="mb-4">{aboutContent.leadership.title}</h2>
        <p className="text-body-lg text-[var(--color-foreground-muted)] max-w-3xl">
          {aboutContent.leadership.body}
        </p>
      </Section>

      <Section>
        <h2 className="mb-8 text-center">Arbetssätt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {aboutContent.principles.map((p) => (
            <div
              key={p.title}
              className="p-6 border border-[var(--color-border)] rounded-[var(--radius-md)]"
            >
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-[var(--color-foreground-muted)]">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="alt">
        <h2 className="mb-6">Bakgrund</h2>
        <ul className="space-y-4 max-w-2xl">
          {aboutContent.timeline.map((item) => (
            <li key={`${item.period}-${item.org}`} className="flex flex-col sm:flex-row sm:gap-4">
              <span className="text-sm font-medium text-[var(--brand-accent)] w-28 flex-shrink-0">
                {item.period}
              </span>
              <span className="text-sm text-[var(--color-foreground-muted)]">
                {item.role} — {item.org}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="mb-6 text-center">Certifieringar</h2>
        <CertBadgeRow certifications={aboutContent.certifications} />
      </Section>

      <Section background="alt">
        <ProofStrip
          title={aboutContent.proof.title}
          clients={aboutContent.proof.clients}
          metrics={aboutContent.proof.metrics}
        />
      </Section>

      <Section>
        <h2 className="mb-4">{aboutContent.partners.title}</h2>
        <p className="text-body-lg text-[var(--color-foreground-muted)] max-w-3xl">
          {aboutContent.partners.body}
        </p>
      </Section>

      <CTASection />
    </main>
  );
}

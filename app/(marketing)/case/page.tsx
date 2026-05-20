import type { Metadata } from "next";
import { PageHero, Section, CaseSnapshotCard, CTASection } from "@/app/components";
import { cases, casesOverview, casesSeo } from "@/app/lib/cases";

export const metadata: Metadata = {
  title: { absolute: casesSeo.title },
  description: casesSeo.description,
};

export default function CasePage() {
  return (
    <main id="main-content" className="pt-16">
      <PageHero headline={casesOverview.headline} lead={casesOverview.lead} />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((c) => (
            <CaseSnapshotCard
              key={c.id}
              title={c.title}
              industry={c.industry}
              teaser={c.teaser}
              situation={c.situation}
              approach={c.approach}
              delivery={c.delivery}
              results={c.results}
              expanded
            />
          ))}
        </div>
      </Section>

      <CTASection />
    </main>
  );
}

import type { Metadata } from "next";
import {
  PageHero,
  Section,
  ServiceCard,
  IndustryList,
  CTASection,
} from "@/app/components";
import {
  servicesOverview,
  servicesOverviewSeo,
  serviceCards,
} from "@/app/lib/services";
import { industries } from "@/app/lib/site";

export const metadata: Metadata = {
  title: { absolute: servicesOverviewSeo.title },
  description: servicesOverviewSeo.description,
};

export default function TjansterPage() {
  return (
    <main id="main-content" className="pt-16">
      <PageHero headline={servicesOverview.headline} lead={servicesOverview.lead} />

      <Section>
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

      <Section background="alt">
        <h2 className="mb-4">Branscher</h2>
        <IndustryList text={industries} />
      </Section>

      <CTASection />
    </main>
  );
}

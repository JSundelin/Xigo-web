import { PageHero } from "./PageHero";
import { Section } from "./Section";
import { CTASection } from "./CTASection";
import type { ServicePage } from "@/app/lib/types";

export function ServicePageTemplate({ service }: { service: ServicePage }) {
  return (
    <>
      <PageHero headline={service.title} lead={service.heroLead} />

      <Section>
        <h2 className="mb-6">Vad vi gör</h2>
        <ul className="space-y-3 max-w-3xl">
          {service.whatWeDo.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[var(--color-foreground-muted)]"
            >
              <span className="text-[var(--brand-accent)] mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section background="alt">
        <h2 className="mb-8">Så jobbar vi</h2>
        <ol className="space-y-6 max-w-3xl">
          {service.howWeWork.map((step, i) => (
            <li key={step.id} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--brand-accent)] text-white text-sm font-semibold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-[var(--color-foreground-muted)]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <h2 className="mb-6">Exempel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {service.examples.map((ex) => (
            <div
              key={ex.title}
              className="p-6 border border-[var(--color-border)] rounded-[var(--radius-md)] bg-[var(--surface)]"
            >
              <h3 className="font-semibold mb-2">{ex.title}</h3>
              <p className="text-sm text-[var(--color-foreground-muted)]">{ex.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {service.faq.length > 0 && (
        <Section background="alt">
          <h2 className="mb-6">Vanliga frågor</h2>
          <dl className="space-y-6 max-w-3xl">
            {service.faq.map((item) => (
              <div key={item.question}>
                <dt className="font-semibold text-[var(--color-foreground)] mb-1">
                  {item.question}
                </dt>
                <dd className="text-sm text-[var(--color-foreground-muted)]">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      <CTASection />
    </>
  );
}

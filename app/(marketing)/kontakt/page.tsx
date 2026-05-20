import type { Metadata } from "next";
import { PageHero, Section, Card, ContactForm, CTASection } from "@/app/components";
import { contactContent, contactSeo } from "@/app/lib/contact";
import { siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: { absolute: contactSeo.title },
  description: contactSeo.description,
};

export default function KontaktPage() {
  const bookingsUrl = process.env.NEXT_PUBLIC_BOOKINGS_URL;

  return (
    <main id="main-content" className="pt-16">
      <PageHero
        headline={contactContent.headline}
        lead={contactContent.subheadline}
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card hover={false} padding="lg">
            <p className="text-sm text-[var(--color-foreground-subtle)] mb-1">
              {contactContent.blocks.phone.label}
            </p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="text-lg font-medium text-[var(--brand-accent)] hover:underline"
            >
              {contactContent.blocks.phone.value}
            </a>
          </Card>
          <Card hover={false} padding="lg">
            <p className="text-sm text-[var(--color-foreground-subtle)] mb-1">
              {contactContent.blocks.email.label}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-lg font-medium text-[var(--brand-accent)] hover:underline break-all"
            >
              {contactContent.blocks.email.value}
            </a>
          </Card>
          <Card hover={false} padding="lg">
            <p className="text-sm text-[var(--color-foreground-subtle)] mb-1">
              {contactContent.blocks.booking.label}
            </p>
            {bookingsUrl ? (
              <a
                href={bookingsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[var(--brand-accent)] hover:underline"
              >
                Boka möte
              </a>
            ) : (
              <p className="text-sm text-[var(--color-foreground-muted)]">
                Bokningslänk konfigureras via NEXT_PUBLIC_BOOKINGS_URL
              </p>
            )}
          </Card>
        </div>

        <div className="max-w-xl mx-auto">
          <Card hover={false} padding="lg">
            <ContactForm />
          </Card>
        </div>

        <p className="mt-8 text-center text-caption">
          {siteConfig.legalName} · Org.nr {siteConfig.orgNumber} · {siteConfig.addressLine}
        </p>
      </Section>

      {bookingsUrl && (
        <Section background="alt" spacing="compact">
          <h2 className="mb-4 text-center">Boka samtal</h2>
          <div className="max-w-3xl mx-auto aspect-[16/10] min-h-[400px] rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)]">
            <iframe
              src={bookingsUrl}
              title="Boka samtal med XIGO"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
            />
          </div>
        </Section>
      )}

      <CTASection />
    </main>
  );
}

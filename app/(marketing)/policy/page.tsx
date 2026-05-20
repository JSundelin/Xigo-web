import type { Metadata } from "next";
import { PageHero, Section } from "@/app/components";
import { siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Personuppgiftspolicy — XIGO" },
  description: "Information om hur XIGO behandlar personuppgifter.",
  robots: { index: false },
};

export default function PolicyPage() {
  return (
    <main id="main-content" className="pt-16">
      <PageHero
        headline="Personuppgiftspolicy"
        lead="Här beskriver vi hur vi behandlar personuppgifter som lämnas via webbplatsen."
      />
      <Section>
        <div className="prose max-w-3xl space-y-4 text-[var(--color-foreground-muted)]">
          <p>
            {siteConfig.legalName} ({siteConfig.name}) är personuppgiftsansvarig för
            uppgifter som skickas via kontaktformuläret på {siteConfig.url}.
          </p>
          <p>
            Vi behandlar namn, organisation, beskrivning av ärende och eventuell
            tidplan för att besvara din förfrågan. Behandlingen sker med stöd av
            berättigat intresse att hantera affärsförfrågningar.
          </p>
          <p>
            Uppgifter sparas så länge det behövs för att hantera dialogen och
            uppfylla rättsliga skyldigheter. Du kan begära tillgång, rättelse eller
            radering genom att kontakta {siteConfig.email}.
          </p>
          <p>Fullständig policy uppdateras när org.nr och adress är fastställda.</p>
        </div>
      </Section>
    </main>
  );
}

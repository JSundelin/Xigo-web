import type { Metadata } from "next";
import { PageHero, Section } from "@/app/components";
import { siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Tillgänglighet — XIGO" },
  description: "Tillgänglighetsinformation för xigo.se.",
};

export default function TillganglighetPage() {
  return (
    <main id="main-content" className="pt-16">
      <PageHero
        headline="Tillgänglighet"
        lead="Vi arbetar för att xigo.se ska uppfylla WCAG 2.2 nivå AA."
      />
      <Section>
        <ul className="space-y-3 max-w-3xl text-[var(--color-foreground-muted)]">
          <li>Hoppa-till-innehåll-länk finns som första fokuserbara element.</li>
          <li>Alla interaktiva element har synligt fokustillstånd.</li>
          <li>Formulärfält har associerade etiketter.</li>
          <li>En H1 per sida och logisk rubrikhierarki.</li>
          <li>Färgkontrast är vald för läsbarhet mot bakgrund.</li>
        </ul>
        <p className="mt-6 text-sm text-[var(--color-foreground-muted)]">
          Rapportera brister till{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-[var(--brand-accent)]">
            {siteConfig.email}
          </a>
          .
        </p>
      </Section>
    </main>
  );
}

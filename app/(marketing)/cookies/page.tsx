import type { Metadata } from "next";
import { PageHero, Section } from "@/app/components";

export const metadata: Metadata = {
  title: { absolute: "Cookies — XIGO" },
  description: "Information om cookies på xigo.se.",
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <main id="main-content" className="pt-16">
      <PageHero
        headline="Cookies"
        lead="xigo.se använder i första hand nödvändiga cookies för drift. Analys sker via Plausible utan cookies när det är aktiverat."
      />
      <Section>
        <p className="text-[var(--color-foreground-muted)] max-w-3xl">
          Om vi aktiverar Plausible Analytics lagras ingen personlig identifierbar
          information i cookies från det verktyget. Vid framtida byte till
          cookie-baserad analys visas samtyckesbanner innan spårning startar.
        </p>
      </Section>
    </main>
  );
}

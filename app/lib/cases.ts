import type { CaseTeaser, SeoMeta } from "./types";

export const casesSeo: SeoMeta = {
  title: "Case — XIGO",
  description:
    "Anonymiserade och namngivna case från IT-uppdrag i större organisationer. Plattformsuppgraderingar, M&A, styrning och service management.",
};

export const casesOverview = {
  headline: "Case",
  lead: "Ett urval av uppdrag vi levererat. Vissa är namngivna med kundens medgivande, andra är anonymiserade.",
};

export const cases: CaseTeaser[] = [
  {
    id: "m365-koncern",
    title: "Koncerngemensam M365-konsolidering",
    industry: "PE-ägd koncern",
    teaser:
      "Programledning för gemensam molnarbetsplats i internationell koncern.",
    situation:
      "Koncernen hade fragmenterade tenant-miljöer och otydlig leveransmodell inför ägarbyte. IT behövde en gemensam målbild och genomförbar plan.",
    approach:
      "Vi etablerade programstruktur, migreringsvågor och leverantörsstyrning. Kommunikationspaket och försäljningsunderlag ingick i leveransen.",
    delivery:
      "Migreringar genomfördes bolag för bolag med tydlig riskstyrning och rapportering till styrgrupp.",
    results: [
      "Gemensam M365-miljö för koncernen",
      "Migreringar upp till 1 200 användare per bolag",
      "Leveransmodell dokumenterad för ägarövergång",
    ],
  },
  {
    id: "ma-playbook",
    title: "IT M&A Playbook",
    industry: "Medtech",
    teaser: "Playbook och operationsström vid internationell transaktion.",
    situation:
      "Bolaget behövde strukturerat IT-stöd inför och under M&A-process med flera beroenden mellan marknader.",
    approach:
      "Vi tog fram M&A IT Playbook, prioriterade integrationsspår och samordnade leverantörer och interna team.",
    delivery:
      "Operativt stöd till M&A-lead med tydliga beslutspunkter och leveransplan.",
    results: [
      "Gemensam playbook för IT vid transaktioner",
      "Tydligare beslutsvägar för ledning",
      "Snabbare onboarding av strategiska leverantörer",
    ],
  },
  {
    id: "datavaruhus",
    title: "Förvaltningsledning globala datavaruhus",
    industry: "Industri",
    teaser: "Förvaltningsledning av kritiska datavaruhus i global koncern.",
    situation:
      "Två globala datavaruhus krävde tydlig förvaltningsmodell och stabil drift i en komplex IT-miljö.",
    approach:
      "Vi etablerade governance, tjänstekatalog och handover-modell med fokus på driftbarhet.",
    delivery:
      "ITSM-processer och ServiceNow-stöd med pm3-baserad förvaltningsstruktur.",
    results: [
      "Dokumenterad kostnadsreduktion i kritisk drift",
      "Tydligare ägarskap och förvaltningsmodell",
      "Stabilare integrationer mot affärssystem",
    ],
  },
];

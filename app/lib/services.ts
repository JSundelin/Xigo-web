import type { ServiceCardData, ServicePage, SeoMeta } from "./types";

export const servicesOverviewSeo: SeoMeta = {
  title: "Tjänster — XIGO",
  description:
    "Fem tjänsteområden: programledning, moln och modern arbetsplats, M&A-integration, IT-styrning och interim IT-ledarskap.",
};

export const servicesOverview = {
  headline: "Tjänster",
  lead: "Vi arbetar i fem etablerade områden inom IT-leverans. De flesta uppdrag rör sig mellan flera områden inom samma leverans.",
};

const services: ServicePage[] = [
  {
    slug: "programledning",
    title: "Program- och projektledning",
    shortTitle: "Programledning",
    description:
      "Vi leder IT-program och projekt från beslut till stabil förvaltning.",
    icon: "clipboard-check",
    href: "/tjanster/programledning",
    seo: {
      title: "Program- och projektledning — XIGO",
      description:
        "Vi leder IT-program och projekt i komplexa miljöer. Plattformsuppgraderingar, implementationer och integrationer.",
    },
    heroLead:
      "Vi leder IT-program och projekt i komplexa miljöer. Plattformsuppgraderingar, implementationer, infrastruktur och integrationer. Vi äger scope, leverantörsstyrning, risk och kommunikation, och rapporterar till styrgrupp på den nivå ledningen förväntar sig.",
    whatWeDo: [
      "Programledning och projektledning i större organisationer.",
      "Plattformsuppgraderingar: ERP, moln, M365, ITSM-byte.",
      "Integrations- och migreringsprojekt.",
      "Förändringsledning i distribuerade organisationer.",
      "Förvaltningsöverlämning och tydlig styrning.",
    ],
    howWeWork: [
      {
        id: "1",
        title: "Förstå nuläge och målbild",
        description: "Vi kartlägger beroenden, intressenter och leveransförutsättningar.",
      },
      {
        id: "2",
        title: "Sätt scope, plan och risk",
        description: "Vi etablerar plan, RAID och leveransmodell.",
      },
      {
        id: "3",
        title: "Led exekvering",
        description: "Vi driver leverantörer och interna team med tydlig rapportering.",
      },
      {
        id: "4",
        title: "Säkra överlämning",
        description: "Vi lämnar över till förvaltning utan att tappa fart.",
      },
    ],
    examples: [
      {
        title: "Koncerngemensam M365-konsolidering",
        body: "Programledning för konsolidering till gemensam molnarbetsplats. Migreringar för bolag upp till 1 200 användare med tydlig leveransmodell.",
      },
      {
        title: "Kritisk affärssystemförvaltning",
        body: "IT-ansvar för internt system med stor affärspåverkan. Dokumenterad kostnadsreduktion i drift av kritiska integrationer.",
      },
    ],
    faq: [
      {
        question: "Vilken typ av projekt är ni starkast på?",
        answer:
          "Plattformsuppgraderingar, koncerngemensamma initiativ och projekt med många leverantörer.",
      },
      {
        question: "Kan ni gå in i ett pågående projekt?",
        answer: "Ja. Vi rekonstruerar status, riskbild och plan inom två veckor.",
      },
    ],
  },
  {
    slug: "moln-och-arbetsplats",
    title: "Moln och modern arbetsplats",
    shortTitle: "Moln och arbetsplats",
    description:
      "Vi bygger säkra, skalbara plattformar och arbetssätt för modern arbetsplats.",
    icon: "cloud",
    href: "/tjanster/moln-och-arbetsplats",
    seo: {
      title: "Moln och modern arbetsplats — XIGO",
      description:
        "Modern arbetsplats, M365, identitet och klientplattform. Standardisering och säkerhet i skala.",
    },
    heroLead:
      "Vi bygger säkra, skalbara moderna arbetsplatsplattformar och arbetssätt. M365, identitet, klient och governance i organisationer som behöver standardisering utan att tappa kontroll.",
    whatWeDo: [
      "M365-arkitektur och migreringar.",
      "IAM- och identitetsflöden.",
      "Klientplattform och enhetsstyrning.",
      "Governance och adoption i skala.",
      "Lösningsdesign som kan exekveras.",
    ],
    howWeWork: [
      {
        id: "1",
        title: "Förstå krav och beroenden",
        description: "Vi kartlägger verksamhetens behov och tekniska skulder.",
      },
      {
        id: "2",
        title: "Sätt målbild",
        description: "Vi definierar arkitekturprinciper och styrningsmodell.",
      },
      {
        id: "3",
        title: "Designa och förankra",
        description: "Vi tar fram lösning som organisationen kan bära.",
      },
      {
        id: "4",
        title: "Stötta implementation",
        description: "Vi följer leverans och tar beslut när det behövs.",
      },
    ],
    examples: [
      {
        title: "O365-arkitektur i industrikoncern",
        body: "Solution Architect för molnarbetsplats, IAM-flöden och konsolidering av äldre plattformar globalt.",
      },
    ],
    faq: [
      {
        question: "Är ni leverantörsneutrala?",
        answer: "Ja. Vi har inga försäljningsincitament åt något håll.",
      },
    ],
  },
  {
    slug: "ma-integration",
    title: "M&A och IT-integration",
    shortTitle: "M&A-integration",
    description:
      "Vi planerar och genomför integrationer och avknoppningar med tydlig styrning.",
    icon: "git-branch",
    href: "/tjanster/ma-integration",
    seo: {
      title: "M&A och IT-integration — XIGO",
      description:
        "Integrationsplaybooks, day-1 readiness, tenantstrategi och stabilisering efter transaktion.",
    },
    heroLead:
      "Vi planerar och genomför IT-integrationer och avknoppningar med minimal störning och tydlig governance. Vi används av M&A-lead och IT-chef när transaktionen kräver struktur och tempo.",
    whatWeDo: [
      "Integrations- och separationsplaybooks.",
      "Day-1 readiness och beroendekartläggning.",
      "Tenant- och plattformsstrategi.",
      "Stabilisering efter closing.",
      "Styrning av leverantörer under integration.",
    ],
    howWeWork: [
      {
        id: "1",
        title: "Kartlägg läge",
        description: "Vi identifierar beroenden, risker och kritiska tjänster.",
      },
      {
        id: "2",
        title: "Bygg playbook",
        description: "Vi tar fram plan, beslut och kommunikationspaket.",
      },
      {
        id: "3",
        title: "Driv integration",
        description: "Vi leder leverans mot överenskomna milstolpar.",
      },
      {
        id: "4",
        title: "Stabilisera",
        description: "Vi säkerställer driftbarhet efter övergång.",
      },
    ],
    examples: [
      {
        title: "M&A IT Playbook medtech",
        body: "Utveckling av IT-playbook och operationsström vid internationell transaktion.",
      },
    ],
    faq: [
      {
        question: "Hur snabbt kan ni starta?",
        answer: "Två till fyra veckor är norm. Snabbare om läget kräver det.",
      },
    ],
  },
  {
    slug: "styrning-och-itsm",
    title: "IT-styrning och ITSM",
    shortTitle: "IT-styrning",
    description:
      "Vi skapar tydlighet kring tjänster, processer och leverantörsmodeller.",
    icon: "settings-2",
    href: "/tjanster/styrning-och-itsm",
    seo: {
      title: "IT-styrning och ITSM — XIGO",
      description:
        "ITSM, förvaltningsmodell, tjänstekatalog och governance. Process före verktyg.",
    },
    heroLead:
      "Vi etablerar och skärper ITSM- och förvaltningsprocesser. ITIL, pm3, ServiceNow och Jira Service Management. Förvaltningsmodell, tjänstekatalog och governance som håller över tid.",
    whatWeDo: [
      "ITSM-implementation och processdesign.",
      "Förvaltningsmodell enligt pm3.",
      "ITIL-baserade processer.",
      "Tjänstekatalog och governance.",
      "SIAM och multisourcad leverans.",
    ],
    howWeWork: [
      {
        id: "1",
        title: "Förstå mognad",
        description: "Vi kartlägger organisationens förvaltningsförutsättningar.",
      },
      {
        id: "2",
        title: "Designa processer",
        description: "Vi tar fram arbetssätt som passar verksamheten.",
      },
      {
        id: "3",
        title: "Implementera",
        description: "Vi rullar ut plattform och arbetssätt i fas.",
      },
      {
        id: "4",
        title: "Mät och justera",
        description: "Vi följer upp och förbättrar över tid.",
      },
    ],
    examples: [
      {
        title: "ITSM i industrikoncern",
        body: "Etablering av ITSM-processer, tjänstekatalog och handover-to-operation-modell.",
      },
      {
        title: "Global förvaltningsmodell",
        body: "pm3-baserad förvaltningsmodell över koncernens bolag med nytt ITSM.",
      },
    ],
    faq: [
      {
        question: "Behöver vi byta plattform?",
        answer: "Inte alltid. Vi börjar i process och organisation, inte verktyg.",
      },
    ],
  },
  {
    slug: "interim-ledarskap",
    title: "Interim IT-ledarskap",
    shortTitle: "Interim ledarskap",
    description:
      "Vi tillför senior ledningskapacitet i övergångar och förändring.",
    icon: "user-check",
    href: "/tjanster/interim-ledarskap",
    seo: {
      title: "Interim IT-ledarskap — XIGO",
      description:
        "Tillförordnad Service Manager, IT Operations Manager eller IT-chef. Tre till arton månader.",
    },
    heroLead:
      "Vi går in som tillförordnad Service Manager, IT Operations Manager eller IT-chef när linjen är vakant eller behöver en trygg hand i förändring. Typiskt tre till arton månader.",
    whatWeDo: [
      "Tillförordnad Service Manager eller Operations Manager.",
      "Tillförordnad IT-chef i mindre organisationer.",
      "Områdesansvarig i större IT-organisationer.",
      "Leverans- och förändringsledning under överenskommen period.",
    ],
    howWeWork: [
      {
        id: "1",
        title: "Lyssna in läget",
        description: "Vi förstår team, leverantörer och verksamhetens behov.",
      },
      {
        id: "2",
        title: "Sätt prioriteringar",
        description: "Vi etablerar struktur och rapportering.",
      },
      {
        id: "3",
        title: "Drive leverans",
        description: "Vi leder leverans och förändring under perioden.",
      },
      {
        id: "4",
        title: "Lämna över",
        description: "Vi förbereder permanent organisation eller rekrytering.",
      },
    ],
    examples: [
      {
        title: "Interim Service Manager",
        body: "Digital Workplace under organisatorisk förändring med tydlig leveransstabilitet.",
      },
      {
        title: "IT Service & Delivery Manager",
        body: "Teamledning och leverantörsansvar i industrikoncern under omställning.",
      },
    ],
    faq: [
      {
        question: "Hur snabbt kan ni starta?",
        answer: "Två till fyra veckor är norm.",
      },
      {
        question: "Tar ni linjeansvar?",
        answer:
          "Vi tar arbetsledning och leveransansvar. Formellt HR-ansvar diskuteras per uppdrag.",
      },
    ],
  },
];

export const serviceCards: ServiceCardData[] = services.map(
  ({ slug, title, shortTitle, description, icon, href }) => ({
    slug,
    title,
    shortTitle,
    description,
    icon,
    href,
  })
);

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

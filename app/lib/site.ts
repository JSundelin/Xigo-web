import type { NavItem } from "./types";

export const siteConfig = {
  name: "XIGO",
  tagline: "IT Management Consulting",
  legalName: "Sundelin Company AB",
  legalLine: "Sundelin Company AB",
  url: "https://xigo.se",
  email: "contact@xigo.se",
  phone: "0761-88 66 99",
  phoneTel: "+46761886699",
  linkedin: "https://linkedin.com/company/xigo",
  address: {
    locality: "Åkersberga",
    region: "Stockholms län",
    country: "SE",
  },
  orgNumber: "Tillkommer",
  addressLine: "Tillkommer",
};

export const navigation: NavItem[] = [
  { name: "Tjänster", href: "/tjanster" },
  { name: "Case", href: "/case" },
  { name: "Om", href: "/om" },
  { name: "Kontakt", href: "/kontakt" },
];

export const footerServices = [
  { name: "Program- och projektledning", href: "/tjanster/programledning" },
  { name: "Moln och modern arbetsplats", href: "/tjanster/moln-och-arbetsplats" },
  { name: "M&A och IT-integration", href: "/tjanster/ma-integration" },
  { name: "IT-styrning och ITSM", href: "/tjanster/styrning-och-itsm" },
  { name: "Interim IT-ledarskap", href: "/tjanster/interim-ledarskap" },
];

export const footerLegal: NavItem[] = [
  { name: "Personuppgiftspolicy", href: "/policy" },
  { name: "Cookies", href: "/cookies" },
  { name: "Tillgänglighet", href: "/tillganglighet" },
];

export const ctaBand = {
  headline: "Vill du diskutera ett uppdrag?",
  subheadline: "Vi svarar inom 24 timmar på vardagar.",
  primaryCTA: { label: "Kontakta oss", href: "/kontakt" },
};

export const howWeWork = {
  title: "Så jobbar vi",
  subtitle: "Struktur, tydlighet och leverans i komplexa miljöer.",
  steps: [
    {
      id: "forankra",
      title: "Förankra",
      description:
        "Vi klargör scope, utfall, intressenter och begränsningar innan exekvering startar.",
    },
    {
      id: "strukturera",
      title: "Strukturera",
      description:
        "Vi sätter plan, styrning, risker och leveransmodell som håller i verkligheten.",
    },
    {
      id: "leverera",
      title: "Leverera",
      description:
        "Vi driver leverans, avväpnar risker och lämnar över till stabil förvaltning.",
    },
  ],
};

export const industries =
  "Vi har levererat uppdrag inom industri, energi, fastighet, retail, offentlig sektor, bygg och PE-portföljbolag.";

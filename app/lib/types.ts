export type NavItem = { name: string; href: string };

export type SeoMeta = {
  title: string;
  description: string;
};

export type CtaLink = { label: string; href: string };

export type HowWeWorkStep = {
  id: string;
  title: string;
  description: string;
};

export type ServiceCardData = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  href: string;
};

export type ServicePage = ServiceCardData & {
  seo: SeoMeta;
  heroLead: string;
  whatWeDo: string[];
  howWeWork: HowWeWorkStep[];
  examples: { title: string; body: string }[];
  faq: { question: string; answer: string }[];
};

export type CaseTeaser = {
  id: string;
  title: string;
  industry: string;
  teaser: string;
  situation: string;
  approach: string;
  delivery: string;
  results: string[];
};

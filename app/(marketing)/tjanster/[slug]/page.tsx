import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate, JsonLd } from "@/app/components";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/app/lib/services";
import { serviceJsonLd } from "@/app/lib/json-ld";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: { absolute: service.seo.title },
    description: service.seo.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main id="main-content" className="pt-16">
      <JsonLd
        data={serviceJsonLd(
          service.title,
          service.description,
          service.href
        )}
      />
      <ServicePageTemplate service={service} />
    </main>
  );
}

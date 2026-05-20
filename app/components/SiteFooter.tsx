import Link from "next/link";
import { Container } from "./Container";
import {
  siteConfig,
  footerServices,
  footerLegal,
} from "@/app/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--brand-primary)] text-white/80 py-14 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="text-xl font-semibold text-white hover:opacity-90">
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm text-white/70">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm text-white/60">
              {siteConfig.address.locality}
              <br />
              {siteConfig.legalName}
              <br />
              Org.nr: {siteConfig.orgNumber}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-white mb-3">Tjänster</p>
            <ul className="space-y-2">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white mb-3">Kontakt</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${siteConfig.phoneTel}`} className="text-white/70 hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-white/70 hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link href="/kontakt" className="text-white/70 hover:text-white">
                  Kontaktformulär
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {year} {siteConfig.name}</p>
          <div className="flex flex-wrap gap-4">
            {footerLegal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white/80">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

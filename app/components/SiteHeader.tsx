"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { navigation, siteConfig } from "@/app/lib/site";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[var(--duration-slow)] ${
        isScrolled ? "glass py-3 shadow-[var(--shadow-1)]" : "bg-transparent py-4"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between gap-4" aria-label="Huvudnavigering">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-[var(--color-foreground)] hover:opacity-80 transition-opacity"
          >
            {siteConfig.name}
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--brand-accent)] whitespace-nowrap"
            >
              {siteConfig.phone}
            </a>
            <Button href="/kontakt" size="sm">
              Kontakta oss
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-[var(--color-foreground)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Öppna meny"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-[var(--duration-slow)] ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 py-4 border-t border-[var(--color-border)]">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-[var(--color-foreground-muted)]"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <a href={`tel:${siteConfig.phoneTel}`} className="text-base" onClick={closeMenu}>
              {siteConfig.phone}
            </a>
            <Button href="/kontakt" onClick={closeMenu}>
              Kontakta oss
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

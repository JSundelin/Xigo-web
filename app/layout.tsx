import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PlausibleScript } from "./components/PlausibleScript";
import { siteConfig } from "./lib/site";
import { homeSeo } from "./lib/home";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeSeo.title,
    template: "%s",
  },
  description: homeSeo.description,
  keywords: [
    "IT-konsult",
    "IT-management",
    "programledning",
    "moln",
    "M365",
    "M&A IT",
    "ITSM",
    "interim IT-chef",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    type: "website",
    locale: "sv_SE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "XIGO" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <a href="#main-content" className="skip-link">
          Hoppa till innehåll
        </a>
        {children}
        <PlausibleScript />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import "./services.css";
import { siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
  title: "Ing. Santiago Arreche | Software Architecture, AI & Technical Leadership",
  description: "Software architect and technology consultant helping teams design scalable systems, adopt AI thoughtfully, and turn complexity into clear decisions.",
  alternates: { canonical: "/" },
  openGraph: { title: "Ing. Santiago Arreche | Software Architecture, AI & Technical Leadership", description: "Architecture, AI, and technical leadership with judgment.", type: "website", url: "/" },
  twitter: { card: "summary_large_image", title: "Ing. Santiago Arreche | Software Architecture, AI & Technical Leadership", description: "Architecture, AI, and technical leadership with judgment." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}

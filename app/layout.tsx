import type { Metadata } from "next";
import "./globals.css";
import "./services.css";

export const metadata: Metadata = {
  title: "Ing. Santiago Arreche | Software Architecture, AI & Technical Leadership",
  description: "Software architect and technology consultant helping teams design scalable systems, adopt AI thoughtfully, and turn complexity into clear decisions.",
  openGraph: { title: "Santiago Arreche | Software Architecture, AI & Technical Leadership", description: "Architecture, AI, and technical leadership with judgment.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}

import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./services.css";
import "./blog.css";
import { siteConfig } from "../lib/site-config";

const clarityProjectId = "yalgudr7bx";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
  title: "Ing. Santiago Arreche | Software Architecture, AI & Technical Leadership",
  description: "Software architect and technology consultant helping teams design scalable systems, adopt AI thoughtfully, and turn complexity into clear decisions.",
  alternates: { canonical: "/" },
  openGraph: { title: "Ing. Santiago Arreche | Software Architecture, AI & Technical Leadership", description: "Architecture, AI, and technical leadership with judgment.", type: "website", url: "/" },
  twitter: { card: "summary_large_image", title: "Ing. Santiago Arreche | Software Architecture, AI & Technical Leadership", description: "Architecture, AI, and technical leadership with judgment." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
        {process.env.NODE_ENV === "production" ? (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityProjectId}");
            `}
          </Script>
        ) : null}
      </body>
    </html>
  );
}

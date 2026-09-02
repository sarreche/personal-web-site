import type { Metadata } from "next";
import { OpenClawPage } from "../../../components/openclaw-page";
import styles from "../../../components/openclaw.module.css";
import { openclawContact, openclawPrivacySections } from "../../../data/openclaw-content";

const title = "Política de privacidad | OpenClaw Personal";
const description = "Uso de datos de Gmail y Google Calendar, proveedores de IA, almacenamiento y revocación del acceso en OpenClaw Personal de Santiago Arreche.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/openclaw/privacidad" },
  openGraph: { title, description, url: "/openclaw/privacidad", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function OpenClawPrivacy() {
  return (
    <OpenClawPage current="privacy">
      <div className={styles.hero}>
        <p className="eyebrow">OpenClaw Personal</p>
        <h1>Política de privacidad</h1>
        <p className={styles.lead}>Qué información utiliza esta integración personal, para qué se utiliza y cómo controlar el acceso.</p>
        <p className={styles.updated}>Última actualización: {openclawContact.updatedAt} · Responsable: {openclawContact.name}</p>
      </div>
      {openclawPrivacySections.map((section) => (
        <section className={styles.section} key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
      ))}
      <section className={styles.section}>
        <h2>Enlaces y contacto</h2>
        <ul className={styles.resources}>
          <li><a className={styles.inlineLink} href="https://myaccount.google.com/connections">Gestionar o revocar las conexiones en Google</a></li>
          <li><a className={styles.inlineLink} href="https://developers.google.com/terms/api-services-user-data-policy">Política de Datos de Usuario de los Servicios de API de Google</a></li>
          <li><a className={styles.inlineLink} href="https://ai.google.dev/gemini-api/terms">Condiciones de la API de Gemini</a></li>
          <li><a className={styles.inlineLink} href="https://openrouter.ai/privacy">Privacidad de OpenRouter</a></li>
          <li><a className={styles.inlineLink} href="https://telegram.org/privacy">Privacidad de Telegram</a></li>
          <li><a className={styles.inlineLink} href="https://vercel.com/legal/privacy-policy">Privacidad de Vercel</a></li>
          <li><a className={styles.inlineLink} href="https://privacy.microsoft.com/privacystatement">Privacidad de Microsoft</a></li>
          <li><a className={styles.inlineLink} href={`mailto:${openclawContact.email}`}>{openclawContact.email}</a></li>
        </ul>
      </section>
    </OpenClawPage>
  );
}

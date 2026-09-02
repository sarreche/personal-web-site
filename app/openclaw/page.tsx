import type { Metadata } from "next";
import { CalendarDays, Mail } from "lucide-react";
import Link from "next/link";
import { OpenClawPage } from "../../components/openclaw-page";
import styles from "../../components/openclaw.module.css";
import { openclawContact } from "../../data/openclaw-content";

const title = "OpenClaw Personal | Santiago Arreche";
const description = "Asistente de uso personal de Santiago Arreche para organizar Gmail y Google Calendar. Información sobre sus funciones, permisos y privacidad.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/openclaw" },
  openGraph: { title, description, url: "/openclaw", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function OpenClawHome() {
  return (
    <OpenClawPage current="about">
      <div className={styles.hero}>
        <p className="eyebrow">OpenClaw Personal · Santiago Arreche</p>
        <h1>Un asistente para organizar correo y agenda.</h1>
        <p className={styles.lead}>Mi instalación personal de OpenClaw conecta Gmail y Google Calendar para consultar información, preparar respuestas y organizar el día mediante una conversación.</p>
        <div className={styles.actions}>
          <Link className="button" href="/openclaw/privacidad">Leer la política de privacidad</Link>
          <a className={styles.inlineLink} href={`mailto:${openclawContact.email}`}>Contactar a Santiago</a>
        </div>
      </div>
      <div className={styles.cards}>
        <section className={styles.card}>
          <Mail size={28} aria-hidden="true" />
          <h2>Correo con contexto</h2>
          <p>Buscar mensajes, resumir conversaciones y preparar respuestas en Gmail. Las acciones de envío u organización dependen de las instrucciones del titular y de los permisos concedidos.</p>
        </section>
        <section className={styles.card}>
          <CalendarDays size={28} aria-hidden="true" />
          <h2>Una agenda a mano</h2>
          <p>Consultar eventos de Google Calendar y ayudar a organizar reuniones. Crear o modificar eventos requiere que la integración disponga de los permisos correspondientes.</p>
        </section>
      </div>
      <section className={styles.note}>
        <h2>Uso personal, acceso autorizado</h2>
        <p>Esta aplicación es administrada por Santiago Arreche y se utiliza con su propia cuenta. No ofrece registro público. La conexión se autoriza en Google y se puede revocar desde la cuenta en cualquier momento.</p>
      </section>
      <section className={styles.section}>
        <h2>Cómo se procesa la información</h2>
        <p>El asistente se ejecuta en mi equipo y puede utilizar Google Gemini u otros modelos a través de OpenRouter. Las consultas pueden incluir datos de correo o calendario; si uso Telegram, las respuestas también pasan por ese canal. La <Link className={styles.inlineLink} href="/openclaw/privacidad">política de privacidad</Link> explica estos flujos y cómo retirar el acceso.</p>
      </section>
      <section className={styles.section}>
        <h2>Acerca de esta instalación</h2>
        <p>OpenClaw Personal es el nombre de esta integración particular. Esta página no representa al proyecto OpenClaw ni a Google. El acceso a la cuenta ocurre en la instalación local: esta web presenta la aplicación y su información de privacidad.</p>
        <p>Responsable y contacto: {openclawContact.name}, <a className={styles.inlineLink} href={`mailto:${openclawContact.email}`}>{openclawContact.email}</a>.</p>
      </section>
    </OpenClawPage>
  );
}

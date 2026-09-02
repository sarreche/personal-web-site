import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { openclawContact } from "../data/openclaw-content";
import styles from "./openclaw.module.css";

export function OpenClawPage({ children, current }: { children: ReactNode; current: "about" | "privacy" }) {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#contenido">Saltar al contenido</a>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Navegación de OpenClaw Personal">
          <Link href="/" className="wordmark" aria-label="Ir al sitio de Santiago Arreche">
            <span aria-hidden="true"><BrainCircuit size={19} /></span>
            <strong>Ing. Santiago Arreche</strong>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/openclaw" aria-current={current === "about" ? "page" : undefined}>OpenClaw Personal</Link>
            <Link href="/openclaw/privacidad" aria-current={current === "privacy" ? "page" : undefined}>Privacidad</Link>
          </div>
        </nav>
      </header>
      <main id="contenido" className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div><strong>OpenClaw Personal</strong><p>Una instalación personal administrada por {openclawContact.name}.</p></div>
        <nav aria-label="Información y contacto">
          <Link href="/openclaw">Acerca de la aplicación</Link>
          <Link href="/openclaw/privacidad">Política de privacidad</Link>
          <a href={`mailto:${openclawContact.email}`}>Contacto</a>
        </nav>
      </footer>
    </div>
  );
}

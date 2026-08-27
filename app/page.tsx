"use client";

import Image from "next/image";
import { ArrowUpRight, Award, BrainCircuit, Check, ChevronRight, Handshake, Linkedin, Menu, MessageCircle, PenTool, Play, Target, Twitch, X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "../lib/site-config";
import { copy } from "../data/site-content";
import type { Language } from "../lib/types";

const socialLinks = { LinkedIn: "https://www.linkedin.com/in/sarreche", YouTube: "https://www.youtube.com/@saarreche", Twitch: "https://www.twitch.tv/sarreche", TikTok: "https://www.tiktok.com/@bysarreche" };
const socialIcons = { LinkedIn: Linkedin, YouTube: Youtube, Twitch, TikTok: Play };
const bookingUrl = siteConfig.bookingUrl;

export default function Home() {
  const [lang, setLang] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <div className="site-shell">
    <header className="nav-wrap"><nav className="nav" aria-label={lang === "es" ? "Navegación principal" : "Main navigation"}>
      <a href="#inicio" className="wordmark" aria-label="Ing. Santiago Arreche, inicio"><span className="brand-mark" aria-hidden="true"><BrainCircuit size={19} /></span><strong>Ing. Santiago Arreche</strong></a>
      <div className="nav-links">{t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
      <div className="nav-actions"><div className="language-switch" aria-label={lang === "es" ? "Seleccionar idioma" : "Select language"}><button className={lang === "es" ? "active" : ""} onClick={() => setLang("es")} aria-pressed={lang === "es"}>ES</button><button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button></div><a className="button button-small" href={bookingUrl} target="_blank" rel="noreferrer">{t.cta}<ArrowUpRight size={16} /></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>{menuOpen ? <X /> : <Menu />}</button></div>
    </nav>{menuOpen && <div className="mobile-menu">{t.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="button" href={bookingUrl} target="_blank" rel="noreferrer">{t.cta}</a></div>}</header>
    <main>
      <section id="inicio" className="hero section-pad"><div className="hero-copy"><p className="eyebrow">{t.heroKicker}</p><h1>{t.heroTitle}</h1><p className="hero-lead">{t.heroText}</p><div className="hero-actions"><a className="button" href={bookingUrl} target="_blank" rel="noreferrer">{t.cta}<ArrowUpRight size={18} /></a><a className="text-link" href="#experiencia">{t.heroSecondary}<ChevronRight size={17} /></a></div><div className="proof-row">{t.proof.map((item) => <span key={item}><Check size={14} />{item}</span>)}</div></div><div className="hero-visual"><div className="portrait-frame"><Image src="/images/santiago-portrait.jpg" alt="Ing. Santiago Arreche" fill priority sizes="(min-width: 900px) 42vw, 90vw" className="portrait" /></div><div className="portrait-card"><span className="status-dot" /><div><strong>Ing. Santiago Arreche</strong><p>{t.portraitNote}</p></div></div><div className="blue-stroke" aria-hidden="true" /></div></section>
      <section className="metrics" aria-label={lang === "es" ? "Credenciales" : "Credentials"}>{t.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
      <section id="acerca" className="about section-pad"><div className="section-intro"><p className="eyebrow">{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2></div><div className="about-copy">{t.aboutBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><article className="award-card"><Award size={28} /><div><p className="award-label">{t.awardLabel}</p><h3>{t.awardTitle}</h3><p>{t.awardText}</p><span>{t.awardSource}</span></div></article></section>
      <section id="servicios" className="dark-section section-pad"><div className="section-heading-row"><div><p className="eyebrow">{t.servicesEyebrow}</p><h2>{t.servicesTitle}</h2></div><p>{t.servicesText}</p></div><div className="service-grid">{t.services.map(([number, title, text]) => <article key={number}><span>{number}</span><BrainCircuit size={25} /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section id="proceso" className="process section-pad"><div className="section-intro"><p className="eyebrow">{t.processEyebrow}</p><h2>{t.processTitle}</h2></div><div className="process-grid">{t.process.map(([title, text], index) => { const Icon = [MessageCircle, Target, PenTool, Handshake][index]; return <article key={title}><span className="process-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.8} /></span><h3>{title}</h3><p>{text}</p></article>; })}</div></section>
      <section id="experiencia" className="experience section-pad"><div className="section-heading-row"><div><p className="eyebrow">{t.expEyebrow}</p><h2>{t.expTitle}</h2></div><p>{t.expText}</p></div><div className="timeline">{t.jobs.map(([date, company, role, text], index) => <article key={company}><div className="timeline-date">{date}</div><div className="timeline-marker"><span>{index + 1}</span></div><div className="timeline-body"><p>{company}</p><h3>{role}</h3><span>{text}</span></div></article>)}</div></section>
      <section id="videos" className="channel section-pad"><div className="channel-image"><Image src="/images/youtube-channel.png" alt="Canal de YouTube El Rincón de Sarreche" fill sizes="(min-width: 900px) 52vw, 100vw" className="cover" /></div><div className="channel-copy"><p className="eyebrow">{t.videosEyebrow}</p><h2>{t.videosTitle}</h2><p>{t.videosText}</p><a className="button button-light" href={socialLinks.YouTube} target="_blank" rel="noreferrer"><Youtube size={18} />{t.watch}<ArrowUpRight size={17} /></a></div></section>
      <section id="redes" className="social section-pad"><div className="section-intro"><p className="eyebrow">{t.socialEyebrow}</p><h2>{t.socialTitle}</h2></div><div className="social-grid">{t.socials.map(([name, text]) => { const Icon = socialIcons[name as keyof typeof socialIcons]; return <a key={name} href={socialLinks[name as keyof typeof socialLinks]} target="_blank" rel="noreferrer"><Icon size={23} /><div><strong>{name}</strong><p>{text}</p></div><ArrowUpRight className="social-arrow" size={18} /></a>; })}</div></section>
      <section className="final-cta section-pad"><p className="eyebrow">{t.finalEyebrow}</p><h2>{t.finalTitle}</h2><p>{t.finalText}</p><a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">{t.cta}<ArrowUpRight size={18} /></a></section>
    </main>
    <footer><div><a href="#inicio" className="wordmark"><span className="brand-mark" aria-hidden="true"><BrainCircuit size={19} /></span><strong>Ing. Santiago Arreche</strong></a><p>{t.footer}</p></div><div className="footer-links">{t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><p className="copyright">© {new Date().getFullYear()} Santiago Arreche. {t.rights}</p></footer>
  </div>;
}

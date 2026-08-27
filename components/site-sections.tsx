import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  Check,
  ChevronRight,
  Handshake,
  Linkedin,
  Menu,
  MessageCircle,
  PenTool,
  Play,
  Rocket,
  Target,
  Twitch,
  UsersRound,
  X,
  Youtube,
} from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import type { SiteContent } from "../data/site-content";
import { siteConfig } from "../lib/site-config";
import type { Language } from "../lib/types";

type ContentProps = { content: SiteContent };

type HeaderProps = ContentProps & {
  language: Language;
  menuOpen: boolean;
  setLanguage: Dispatch<SetStateAction<Language>>;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export function SiteHeader({ content, language, menuOpen, setLanguage, setMenuOpen }: HeaderProps) {
  return <header className="nav-wrap"><nav className="nav" aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
    <a href="#inicio" className="wordmark" aria-label="Ing. Santiago Arreche, inicio"><span className="brand-mark" aria-hidden="true"><BrainCircuit size={19} /></span><strong>Ing. Santiago Arreche</strong></a>
    <div className="nav-links">{content.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
    <div className="nav-actions"><div className="language-switch" aria-label={language === "es" ? "Seleccionar idioma" : "Select language"}><button className={language === "es" ? "active" : ""} onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ES</button><button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button></div><a className="button button-small" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">{content.cta}<ArrowUpRight size={16} /></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>{menuOpen ? <X /> : <Menu />}</button></div>
  </nav>{menuOpen && <div className="mobile-menu">{content.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="button" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">{content.cta}</a></div>}</header>;
}

export function HeroSection({ content }: ContentProps) {
  return <section id="inicio" className="hero section-pad"><div className="hero-copy"><p className="eyebrow">{content.heroKicker}</p><h1>{content.heroTitle}</h1><p className="hero-lead">{content.heroText}</p><div className="hero-actions"><a className="button" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">{content.cta}<ArrowUpRight size={18} /></a><a className="text-link" href="#experiencia">{content.heroSecondary}<ChevronRight size={17} /></a></div><div className="proof-row">{content.proof.map((item) => <span key={item}><Check size={14} />{item}</span>)}</div></div><div className="hero-visual"><div className="portrait-frame"><Image src="/images/santiago-portrait.jpg" alt="Ing. Santiago Arreche" fill priority sizes="(min-width: 900px) 42vw, 90vw" className="portrait" /></div><div className="portrait-card"><span className="status-dot" /><div><strong>Ing. Santiago Arreche</strong><p>{content.portraitNote}</p></div></div><div className="blue-stroke" aria-hidden="true" /></div></section>;
}

export function MetricsSection({ content, language }: ContentProps & { language: Language }) {
  return <section className="metrics" aria-label={language === "es" ? "Credenciales" : "Credentials"}>{content.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>;
}

export function AboutSection({ content }: ContentProps) {
  return <section id="acerca" className="about section-pad"><div className="section-intro"><p className="eyebrow">{content.aboutEyebrow}</p><h2>{content.aboutTitle}</h2></div><div className="about-copy">{content.aboutBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><article className="award-card"><Award size={28} /><div><p className="award-label">{content.awardLabel}</p><h3>{content.awardTitle}</h3><p>{content.awardText}</p><span>{content.awardSource}</span></div></article></section>;
}

export function ServicesSection({ content }: ContentProps) {
  return <section id="servicios" className="dark-section section-pad"><div className="section-heading-row"><div><p className="eyebrow">{content.servicesEyebrow}</p><h2>{content.servicesTitle}</h2></div><p>{content.servicesText}</p></div><div className="service-grid">{content.services.map(([number, title, text]) => <article key={number}><span>{number}</span><BrainCircuit size={25} /><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}

const processIcons = [MessageCircle, Target, PenTool, Handshake] as const;

export function ProcessSection({ content }: ContentProps) {
  return <section id="proceso" className="process section-pad"><div className="section-intro"><p className="eyebrow">{content.processEyebrow}</p><h2>{content.processTitle}</h2></div><div className="process-grid">{content.process.map(([title, text], index) => { const Icon = processIcons[index]; return <article key={title}><span className="process-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.8} /></span><h3>{title}</h3><p>{text}</p></article>; })}</div></section>;
}

export function ExperienceSection({ content }: ContentProps) {
  const experienceIcons = [Handshake, BrainCircuit, Rocket, UsersRound] as const;

  return <section id="experiencia" className="experience section-pad"><div className="section-heading-row"><div><p className="eyebrow">{content.expEyebrow}</p><h2>{content.expTitle}</h2></div><p>{content.expText}</p></div><div className="timeline">{content.jobs.map(([date, company, role, text], index) => { const Icon = experienceIcons[index]; return <article key={company}><div className="timeline-date">{date}</div><div className="timeline-marker"><span aria-hidden="true"><Icon size={14} strokeWidth={1.9} /></span></div><div className="timeline-body"><p>{company}</p><h3>{role}</h3><span>{text}</span></div></article>; })}</div></section>;
}

export function ChannelSection({ content }: ContentProps) {
  return <section id="videos" className="channel section-pad"><div className="channel-image"><Image src="/images/youtube-channel.png" alt="Canal de YouTube El Rincón de Sarreche" fill sizes="(min-width: 900px) 52vw, 100vw" className="cover" /></div><div className="channel-copy"><p className="eyebrow">{content.videosEyebrow}</p><h2>{content.videosTitle}</h2><p>{content.videosText}</p><a className="button button-light" href={siteConfig.socials.youtube} target="_blank" rel="noreferrer"><Youtube size={18} />{content.watch}<ArrowUpRight size={17} /></a></div></section>;
}

const socialIcons = { LinkedIn: Linkedin, YouTube: Youtube, Twitch, TikTok: Play };
const socialLinks = { LinkedIn: siteConfig.socials.linkedin, YouTube: siteConfig.socials.youtube, Twitch: siteConfig.socials.twitch, TikTok: siteConfig.socials.tiktok };

export function SocialSection({ content }: ContentProps) {
  return <section id="redes" className="social section-pad"><div className="section-intro"><p className="eyebrow">{content.socialEyebrow}</p><h2>{content.socialTitle}</h2></div><div className="social-grid">{content.socials.map(([name, text]) => { const socialName = name as keyof typeof socialIcons; const Icon = socialIcons[socialName]; return <a key={name} href={socialLinks[socialName]} target="_blank" rel="noreferrer"><Icon size={23} /><div><strong>{name}</strong><p>{text}</p></div><ArrowUpRight className="social-arrow" size={18} /></a>; })}</div></section>;
}

export function FinalCtaSection({ content }: ContentProps) {
  return <section className="final-cta section-pad"><p className="eyebrow">{content.finalEyebrow}</p><h2>{content.finalTitle}</h2><p>{content.finalText}</p><a className="button button-light" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">{content.cta}<ArrowUpRight size={18} /></a></section>;
}

export function SiteFooter({ content }: ContentProps) {
  return <footer><div><a href="#inicio" className="wordmark"><span className="brand-mark" aria-hidden="true"><BrainCircuit size={19} /></span><strong>Ing. Santiago Arreche</strong></a><p>{content.footer}</p></div><div className="footer-links">{content.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><p className="copyright">© {new Date().getFullYear()} Santiago Arreche. {content.rights}</p></footer>;
}

import { ArrowLeft, ArrowRight, ArrowUpRight, BrainCircuit, CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { BlogPost, BlogPostSummary } from "../lib/blog-types";
import { siteConfig } from "../lib/site-config";
import type { Language } from "../lib/types";

const labels = {
  es: {
    home: "Inicio", blog: "Blog", booking: "Agendar una llamada", back: "Volver al blog",
    reading: "min de lectura", empty: "Los primeros artículos están en preparación.",
    emptyText: "Volvé pronto para encontrar ideas sobre arquitectura, IA, software y liderazgo técnico.",
    eyebrow: "Ideas para construir con criterio", title: "Notas sobre software, IA y decisiones técnicas.",
    intro: "Análisis, aprendizajes y perspectivas prácticas para convertir complejidad tecnológica en mejores decisiones.",
    ctaEyebrow: "¿Lo llevamos a la práctica?", ctaTitle: "Transformemos una idea compleja en un próximo paso claro.",
    ctaText: "Puedo ayudarte con desarrollo AI-first, automatización, liderazgo técnico y arquitectura de software.",
    recent: "Seguí leyendo", latest: "Últimos artículos", all: "Ver todos los artículos",
  },
  en: {
    home: "Home", blog: "Blog", booking: "Book a call", back: "Back to the blog",
    reading: "min read", empty: "The first articles are in progress.",
    emptyText: "Come back soon for ideas on architecture, AI, software, and technical leadership.",
    eyebrow: "Ideas for building with judgment", title: "Notes on software, AI, and technical decisions.",
    intro: "Analysis, lessons, and practical perspectives for turning technology complexity into better decisions.",
    ctaEyebrow: "Ready to put it into practice?", ctaTitle: "Let’s turn a complex idea into a clear next step.",
    ctaText: "I can help with AI-first development, automation, technical leadership, and software architecture.",
    recent: "Keep reading", latest: "Latest articles", all: "View all articles",
  },
} as const;

export function blogBase(language: Language) {
  return language === "es" ? "/blog" : "/en/blog";
}

function formatDate(date: string, language: Language) {
  return new Intl.DateTimeFormat(language === "es" ? "es-UY" : "en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function BlogHeader({ language, postSlug }: { language: Language; postSlug?: string }) {
  const t = labels[language];
  const translationBase = language === "es" ? "/en/blog" : "/blog";
  const translationUrl = postSlug ? `${translationBase}/${postSlug}` : translationBase;

  return <header className="nav-wrap"><nav className="nav blog-nav" aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
    <Link href="/" className="wordmark" aria-label={`Ing. Santiago Arreche, ${t.home.toLowerCase()}`}><span className="brand-mark" aria-hidden="true"><BrainCircuit size={19} /></span><strong>Ing. Santiago Arreche</strong></Link>
    <div className="blog-nav-links"><Link href="/">{t.home}</Link><Link href={blogBase(language)} aria-current="page">{t.blog}</Link></div>
    <div className="nav-actions"><div className="language-switch" aria-label={language === "es" ? "Seleccionar idioma" : "Select language"}>
      <Link href={language === "es" ? blogBase(language) + (postSlug ? `/${postSlug}` : "") : translationUrl} className={language === "es" ? "active" : ""} aria-current={language === "es" ? "page" : undefined}>ES</Link>
      <Link href={language === "en" ? blogBase(language) + (postSlug ? `/${postSlug}` : "") : translationUrl} className={language === "en" ? "active" : ""} aria-current={language === "en" ? "page" : undefined}>EN</Link>
      </div><a className="button button-small" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">{t.booking}<ArrowUpRight size={16} /></a></div>
  </nav></header>;
}

export function BlogFooter({ language }: { language: Language }) {
  const t = labels[language];
  return <footer className="blog-footer"><div><Link href="/" className="wordmark"><span className="brand-mark" aria-hidden="true"><BrainCircuit size={19} /></span><strong>Ing. Santiago Arreche</strong></Link><p>{language === "es" ? "Arquitectura de software, IA y liderazgo técnico con criterio." : "Software architecture, AI, and technical leadership with judgment."}</p></div><div className="footer-links"><Link href="/">{t.home}</Link><Link href={blogBase(language)}>{t.blog}</Link></div><p className="copyright">© {new Date().getFullYear()} Santiago Arreche.</p></footer>;
}

function PostCard({ post }: { post: BlogPostSummary }) {
  const t = labels[post.language];
  return <article className="blog-card">
    {post.coverImage && post.coverAlt ? <Link href={`${blogBase(post.language)}/${post.slug}`} className="blog-card-image"><Image src={post.coverImage} alt={post.coverAlt} fill sizes="(min-width: 900px) 38vw, 100vw" /></Link> : <div className="blog-card-accent" aria-hidden="true" />}
    <div className="blog-card-body"><div className="post-meta"><span><CalendarDays size={14} aria-hidden="true" />{formatDate(post.publishedAt, post.language)}</span><span><Clock size={14} aria-hidden="true" />{post.readingMinutes} {t.reading}</span></div>
      <h2><Link href={`${blogBase(post.language)}/${post.slug}`}>{post.title}</Link></h2><p>{post.description}</p><Link className="text-link" href={`${blogBase(post.language)}/${post.slug}`}>{languageLabel(post.language)}<ArrowRight size={16} /></Link>
    </div>
  </article>;
}

function languageLabel(language: Language) {
  return language === "es" ? "Leer artículo" : "Read article";
}

export function BlogIndex({ language, posts }: { language: Language; posts: BlogPostSummary[] }) {
  const t = labels[language];
  return <div className="site-shell"><BlogHeader language={language} /><main className="blog-main"><section className="blog-hero"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p></section>
    <section className="blog-list" aria-label={language === "es" ? "Artículos" : "Articles"}>{posts.length ? posts.map((post) => <PostCard key={post.slug} post={post} />) : <div className="blog-empty"><BrainCircuit size={28} aria-hidden="true" /><div><h2>{t.empty}</h2><p>{t.emptyText}</p></div></div>}</section>
  </main><BlogFooter language={language} /></div>;
}

export function BlogArticle({ language, post, recentPosts }: { language: Language; post: BlogPost; recentPosts: BlogPostSummary[] }) {
  const t = labels[language];
  return <div className="site-shell"><BlogHeader language={language} postSlug={post.slug} /><main className="article-main"><article>
    <header className="article-header"><Link className="back-link" href={blogBase(language)}><ArrowLeft size={16} />{t.back}</Link><div className="post-meta"><span><CalendarDays size={14} aria-hidden="true" />{formatDate(post.publishedAt, language)}</span><span><Clock size={14} aria-hidden="true" />{post.readingMinutes} {t.reading}</span></div><h1>{post.title}</h1><p>{post.description}</p></header>
    {post.coverImage && post.coverAlt ? <div className="article-cover"><Image src={post.coverImage} alt={post.coverAlt} fill priority sizes="(min-width: 900px) 980px, 100vw" /></div> : null}
    <div className="article-content"><ReactMarkdown components={{ img: ({ src, alt }) => typeof src === "string" ? <Image src={src} alt={alt ?? ""} width={1200} height={675} sizes="(min-width: 900px) 760px, 100vw" /> : null, a: ({ href, children }) => <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noreferrer" : undefined}>{children}</a> }}>{post.content}</ReactMarkdown></div>
  </article><aside className="article-cta"><p className="eyebrow">{t.ctaEyebrow}</p><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><a className="button" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">{t.booking}<ArrowUpRight size={17} /></a></aside>
    {recentPosts.length ? <section className="recent-posts"><div className="recent-heading"><p className="eyebrow">{t.recent}</p><Link className="text-link" href={blogBase(language)}>{t.all}<ArrowRight size={16} /></Link></div><div className="recent-grid">{recentPosts.map((recent) => <PostCard key={recent.slug} post={recent} />)}</div></section> : null}
  </main><BlogFooter language={language} /></div>;
}

export function LatestPostsSection({ language, posts }: { language: Language; posts: BlogPostSummary[] }) {
  const t = labels[language];
  return <section id="blog" className="latest-posts section-pad"><div className="section-heading-row"><div><p className="eyebrow">Blog</p><h2>{t.latest}</h2></div><Link className="text-link" href={blogBase(language)}>{t.all}<ArrowRight size={16} /></Link></div>{posts.length ? <div className="latest-grid">{posts.map((post) => <PostCard key={post.slug} post={post} />)}</div> : <p className="latest-empty">{t.emptyText}</p>}</section>;
}

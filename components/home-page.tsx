"use client";

import { useEffect, useState } from "react";
import {
  AboutSection,
  ChannelSection,
  ExperienceSection,
  HeroSection,
  MetricsSection,
  ProcessSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  SocialSection,
} from "./site-sections";
import { LabsSection } from "./labs-section";
import { ContactForm } from "./contact-form";
import { LatestPostsSection } from "./blog";
import { copy } from "../data/site-content";
import type { BlogPostSummary } from "../lib/blog-types";
import type { Language } from "../lib/types";

export function HomePage({ latestPosts }: { latestPosts: Record<Language, BlogPostSummary[]> }) {
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const content = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <div className="site-shell">
    <SiteHeader {...{ content, language, menuOpen, setLanguage, setMenuOpen }} />
    <main>
      <HeroSection content={content} />
      <MetricsSection content={content} language={language} />
      <AboutSection content={content} />
      <ServicesSection content={content} />
      <ProcessSection content={content} />
      <ExperienceSection content={content} />
      <LabsSection content={content} language={language} />
      <ChannelSection content={content} />
      <LatestPostsSection language={language} posts={latestPosts[language]} />
      <SocialSection content={content} />
      <ContactForm content={content} />
    </main>
    <SiteFooter content={content} />
  </div>;
}

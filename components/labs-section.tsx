"use client";

import { ArrowUpRight, Github, Star } from "lucide-react";
import { useEffect, useState } from "react";
import type { SiteContent } from "../data/site-content";
import { siteConfig } from "../lib/site-config";
import type { Language } from "../lib/types";

type GithubRepository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

type LabsSectionProps = {
  content: SiteContent;
  language: Language;
};

export function LabsSection({ content, language }: LabsSectionProps) {
  const [repositories, setRepositories] = useState<GithubRepository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepositories() {
      try {
        const response = await fetch("https://api.github.com/users/sarreche/repos?type=owner&sort=created&direction=desc&per_page=30", {
          headers: { Accept: "application/vnd.github+json" },
          signal: controller.signal,
        });

        if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);

        const repos = await response.json() as GithubRepository[];
        setRepositories(repos.filter((repo) => !repo.fork && !repo.archived).slice(0, 5));
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) setRepositories([]);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadRepositories();
    return () => controller.abort();
  }, []);

  const dateLocale = language === "es" ? "es-UY" : "en-US";

  return <section id="labs" className="labs section-pad">
    <div className="labs-heading">
      <div>
        <p className="eyebrow">{content.labsEyebrow}</p>
        <h2>{content.labsTitle}</h2>
      </div>
      <div className="labs-intro">
        <p>{content.labsText}</p>
        <a className="labs-profile-link" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
          <Github size={18} />{content.labsCta}<ArrowUpRight size={16} />
        </a>
      </div>
    </div>

    {loading ? <p className="labs-status" aria-live="polite">{content.labsLoading}</p> : repositories.length > 0 ?
      <div className="labs-grid">
        {repositories.map((repo, index) => <a className={index === 0 ? "lab-card lab-card-featured" : "lab-card"} href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}>
          <div className="lab-card-top"><span>0{index + 1}</span><ArrowUpRight size={18} /></div>
          <div className="lab-card-body">
            <h3>{repo.name}</h3>
            <p>{repo.description ?? repo.name}</p>
          </div>
          <div className="lab-card-meta">
            {repo.language && <span><i aria-hidden="true" />{repo.language}</span>}
            {repo.stargazers_count > 0 && <span><Star size={13} />{repo.stargazers_count}</span>}
            <span>{content.labsUpdated} {new Intl.DateTimeFormat(dateLocale, { month: "short", year: "numeric" }).format(new Date(repo.updated_at))}</span>
          </div>
        </a>)}
      </div> : <div className="labs-empty"><Github size={24} /><p>{content.labsEmpty}</p></div>}
  </section>;
}

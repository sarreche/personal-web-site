"use client";

import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import type { SiteContent } from "../data/site-content";
import { siteConfig } from "../lib/site-config";

type ContactFormProps = { content: SiteContent };
type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ content }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");

    const form = event.currentTarget;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null);

    if (!response?.ok) {
      setSubmitState("error");
      return;
    }

    form.reset();
    setSubmitState("success");
  }

  return (
    <section id="contacto" className="contact-section section-pad">
      <div className="contact-intro">
        <p className="eyebrow">{content.contactEyebrow}</p>
        <h2>{content.contactTitle}</h2>
        <p>{content.contactText}</p>
        <div className="booking-alternative">
          <span>{content.contactBookingPrompt}</span>
          <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">
            {content.cta}<ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} aria-label={content.contactFormLabel}>
        <div className="form-row">
          <label>
            <span>{content.contactName}</span>
            <input name="name" autoComplete="name" required maxLength={80} />
          </label>
          <label>
            <span>{content.contactEmail}</span>
            <input name="email" type="email" autoComplete="email" required maxLength={160} />
          </label>
        </div>
        <label>
          <span>{content.contactCompany} <small>{content.contactOptional}</small></span>
          <input name="company" autoComplete="organization" maxLength={120} />
        </label>
        <label>
          <span>{content.contactHelp}</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>{content.contactSelect}</option>
            {content.contactServices.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </label>
        <label>
          <span>{content.contactMessage}</span>
          <textarea name="message" required minLength={20} maxLength={3000} rows={6} placeholder={content.contactMessagePlaceholder} />
        </label>
        <label className="contact-honeypot" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <div className="form-footer">
          <button className="button" type="submit" disabled={submitState === "submitting"}>
            {submitState === "submitting" ? content.contactSending : content.contactSubmit}
            <Send size={16} aria-hidden="true" />
          </button>
          <p className="form-note">{content.contactPrivacy}</p>
        </div>
        <div className="form-status" aria-live="polite">
          {submitState === "success" && <p className="form-success"><CheckCircle2 size={18} />{content.contactSuccess}</p>}
          {submitState === "error" && <p className="form-error">{content.contactError}</p>}
        </div>
      </form>
    </section>
  );
}

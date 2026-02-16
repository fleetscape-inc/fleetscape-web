"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzdaggkv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-12 border border-forest/20 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-forest/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl uppercase tracking-wide font-semibold text-forest mb-3">
          Message Sent
        </h3>
        <p className="text-concrete">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-concrete/20 rounded text-charcoal placeholder:text-concrete/50 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors";
  const labelClass = "block text-sm font-semibold text-charcoal mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 md:p-10 border border-concrete/10 shadow-sm">
      <h3 className="font-heading text-xl uppercase tracking-wide font-semibold text-charcoal mb-6">
        Send Us a Message
      </h3>
      <div className="space-y-6">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              className={inputClass}
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Phone
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              className={inputClass}
              placeholder="(805) 555-0100"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Company / Organization
          </label>
          <input
            type="text"
            id="contact-company"
            name="company"
            className={inputClass}
            placeholder="Your company or organization"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className={inputClass}
            placeholder="Tell us about your project..."
          />
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full px-8 py-4 bg-gold text-charcoal font-heading text-lg uppercase tracking-wider font-semibold rounded hover:bg-gold-bright transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

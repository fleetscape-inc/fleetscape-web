"use client";

import { useState, FormEvent } from "react";

const serviceTypes = [
  "Decorative Ground Cover",
  "Soil Amendment",
  "Playground Safety Surfacing",
  "Landscaping Partnership",
  "Other",
];

const materialOptions = [
  "EWF Playground Chips",
  "Decorative Bark",
  "Natural Mulch",
  "Topsoil",
  "Compost",
  "Other / Not Sure",
];

const timelineOptions = [
  "ASAP / Within 2 weeks",
  "Within 1 month",
  "1–3 months",
  "3+ months / Flexible",
  "Just exploring options",
];

const hearAboutOptions = [
  "Google Search",
  "Referral",
  "Social Media",
  "Repeat Customer",
  "Other",
];

export function QuoteForm() {
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
      const res = await fetch("https://formspree.io/f/mnjbbdpe", {
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
          Quote Request Received
        </h3>
        <p className="text-concrete">
          Thanks for your interest. We&apos;ll review your project details and get
          back to you within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-concrete/20 rounded text-charcoal placeholder:text-concrete/50 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors";
  const labelClass = "block text-sm font-semibold text-charcoal mb-1.5";
  const selectClass =
    "w-full px-4 py-3 bg-white border border-concrete/20 rounded text-charcoal focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors appearance-none";

  const selectChevron = (
    <svg
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-concrete"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 md:p-10 border border-concrete/10 shadow-sm">
      <h3 className="font-heading text-xl uppercase tracking-wide font-semibold text-charcoal mb-2">
        Request a Quote
      </h3>
      <p className="text-sm text-concrete mb-6">
        Tell us about your project and we&apos;ll get you a free estimate.
      </p>

      <div className="space-y-6">
        {/* Required Fields */}
        <div>
          <label htmlFor="quote-name" className={labelClass}>
            Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="quote-name"
            name="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="quote-email" className={labelClass}>
              Email <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              id="quote-email"
              name="email"
              required
              className={inputClass}
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="quote-phone" className={labelClass}>
              Phone <span className="text-gold">*</span>
            </label>
            <input
              type="tel"
              id="quote-phone"
              name="phone"
              required
              className={inputClass}
              placeholder="(805) 555-0100"
            />
          </div>
        </div>

        <div>
          <label htmlFor="quote-service" className={labelClass}>
            Service Type <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <select
              id="quote-service"
              name="service_type"
              required
              className={selectClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceTypes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {selectChevron}
          </div>
        </div>

        {/* Optional Fields */}
        <hr className="border-concrete/10" />
        <p className="text-xs text-concrete -mt-2">
          The more detail you provide, the faster we can get you an accurate quote.
        </p>

        <div>
          <label htmlFor="quote-organization" className={labelClass}>
            Company / Organization
          </label>
          <input
            type="text"
            id="quote-organization"
            name="organization"
            className={inputClass}
            placeholder="Your company, HOA, school, municipality, etc."
          />
        </div>

        <div>
          <label htmlFor="quote-material" className={labelClass}>
            Preferred Material
          </label>
          <div className="relative">
            <select
              id="quote-material"
              name="material"
              className={selectClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select a material (if known)
              </option>
              {materialOptions.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            {selectChevron}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="quote-volume" className={labelClass}>
              Estimated Volume
            </label>
            <input
              type="text"
              id="quote-volume"
              name="estimated_volume"
              className={inputClass}
              placeholder="e.g. 200 cubic yards"
            />
          </div>
          <div>
            <label htmlFor="quote-area" className={labelClass}>
              Approximate Area (sq ft)
            </label>
            <input
              type="text"
              id="quote-area"
              name="approximate_area"
              className={inputClass}
              placeholder="e.g. 10,000 sq ft"
            />
          </div>
        </div>

        <div>
          <label htmlFor="quote-location" className={labelClass}>
            Project Location
          </label>
          <input
            type="text"
            id="quote-location"
            name="project_location"
            className={inputClass}
            placeholder="City or address"
          />
        </div>

        <div>
          <label htmlFor="quote-timeline" className={labelClass}>
            Desired Timeline
          </label>
          <div className="relative">
            <select
              id="quote-timeline"
              name="timeline"
              className={selectClass}
              defaultValue=""
            >
              <option value="" disabled>
                When do you need this done?
              </option>
              {timelineOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {selectChevron}
          </div>
        </div>

        <div>
          <label htmlFor="quote-hear" className={labelClass}>
            How did you hear about us?
          </label>
          <div className="relative">
            <select
              id="quote-hear"
              name="referral_source"
              className={selectClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select one
              </option>
              {hearAboutOptions.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
            {selectChevron}
          </div>
        </div>

        <div>
          <label htmlFor="quote-details" className={labelClass}>
            Additional Details
          </label>
          <textarea
            id="quote-details"
            name="details"
            rows={4}
            className={inputClass}
            placeholder="Any other details about your project — access conditions, depth requirements, special considerations..."
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
          {submitting ? "Submitting..." : "Request a Free Quote"}
        </button>
      </div>
    </form>
  );
}

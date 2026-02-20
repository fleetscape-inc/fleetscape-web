"use client";

import { useState, FormEvent } from "react";

export function CareersForm() {
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
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-12 border border-forest/20 text-center fade-in">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-forest/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl uppercase tracking-wide font-semibold text-forest mb-3">
          Application Received
        </h3>
        <p className="text-concrete">
          Thanks for your interest in Fleetscape. We&apos;ll review your
          application and reach out directly — usually within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-cream border border-concrete/20 rounded-lg text-charcoal placeholder:text-concrete/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors";
  const labelClass = "block text-sm font-semibold text-charcoal mb-1.5";
  const selectClass =
    "w-full px-4 py-3 bg-cream border border-concrete/20 rounded-lg text-charcoal focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors appearance-none";

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
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Hidden fields */}
      <input type="hidden" name="_subject" value="CDL Driver Application — Fleetscape Careers" />

      {/* First & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="careers-first-name" className={labelClass}>
            First Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="careers-first-name"
            name="first_name"
            required
            className={inputClass}
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="careers-last-name" className={labelClass}>
            Last Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="careers-last-name"
            name="last_name"
            required
            className={inputClass}
            placeholder="Last name"
          />
        </div>
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="careers-phone" className={labelClass}>
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="careers-phone"
            name="phone"
            required
            className={inputClass}
            placeholder="(805) 555-0100"
          />
        </div>
        <div>
          <label htmlFor="careers-email" className={labelClass}>
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="careers-email"
            name="email"
            required
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
      </div>

      {/* CDL Class & Years */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="careers-cdl-class" className={labelClass}>
            CDL Class <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <select
              id="careers-cdl-class"
              name="cdl_class"
              required
              className={selectClass}
              defaultValue=""
            >
              <option value="" disabled>Select</option>
              <option value="Class B">Class B</option>
              <option value="Class A">Class A</option>
            </select>
            {selectChevron}
          </div>
        </div>
        <div>
          <label htmlFor="careers-cdl-years" className={labelClass}>
            Years with CDL <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <select
              id="careers-cdl-years"
              name="cdl_years"
              required
              className={selectClass}
              defaultValue=""
            >
              <option value="" disabled>Select</option>
              <option value="Less than 3">Less than 3 years</option>
              <option value="3-5 years">3–5 years</option>
              <option value="5-10 years">5–10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
            {selectChevron}
          </div>
        </div>
      </div>

      {/* CDL Number */}
      <div>
        <label htmlFor="careers-cdl-number" className={labelClass}>
          CDL Number &amp; Issuing State <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="careers-cdl-number"
          name="cdl_number"
          required
          className={inputClass}
          placeholder="e.g. CA B1234567"
        />
      </div>

      {/* DOT Medical Card */}
      <div>
        <label htmlFor="careers-dot-medical" className={labelClass}>
          Current DOT Medical Card? <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <select
            id="careers-dot-medical"
            name="dot_medical"
            required
            className={selectClass}
            defaultValue=""
          >
            <option value="" disabled>Select</option>
            <option value="Yes - Current">Yes — Current</option>
            <option value="Expired - Can Renew">Expired — Can renew quickly</option>
            <option value="No">No</option>
          </select>
          {selectChevron}
        </div>
      </div>

      {/* Moving Violations */}
      <div>
        <label htmlFor="careers-violations" className={labelClass}>
          Any moving violations, accidents, or license actions in the past 3 years? <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <select
            id="careers-violations"
            name="violations"
            required
            className={selectClass}
            defaultValue=""
          >
            <option value="" disabled>Select</option>
            <option value="None">None — Clean record</option>
            <option value="1 Minor">1 minor violation (speeding under 15 over, etc.)</option>
            <option value="2+ or Major">2+ violations or a major violation</option>
          </select>
          {selectChevron}
        </div>
      </div>

      {/* Relevant Experience */}
      <div>
        <label htmlFor="careers-experience" className={labelClass}>
          Relevant Experience
        </label>
        <textarea
          id="careers-experience"
          name="experience"
          rows={4}
          className={inputClass}
          placeholder="Tell us about your driving background — types of trucks, industries, anything relevant. Blower truck or landscaping experience is a plus but not required."
        />
      </div>

      {/* Availability */}
      <div>
        <label htmlFor="careers-availability" className={labelClass}>
          Availability
        </label>
        <textarea
          id="careers-availability"
          name="availability"
          rows={3}
          className={inputClass}
          placeholder="Which afternoons and weekends work best for you? Any scheduling constraints we should know about?"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full px-8 py-4 bg-forest text-white font-heading text-lg uppercase tracking-wider font-semibold rounded-lg hover:bg-forest-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </button>

      <p className="text-center text-xs text-concrete">
        We&apos;ll review your application and respond within 24 hours. All
        applicants must pass a DOT pre-employment drug screen and FMCSA
        Clearinghouse verification.
      </p>
    </form>
  );
}

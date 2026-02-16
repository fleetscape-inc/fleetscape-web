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
          application and contact you within 48 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-concrete/20 rounded text-charcoal placeholder:text-concrete/50 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors";
  const labelClass =
    "block text-sm font-semibold text-charcoal mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 md:p-10 border border-concrete/10 shadow-sm">
      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number <span className="text-gold">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className={inputClass}
              placeholder="(805) 555-0100"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputClass}
              placeholder="you@email.com"
            />
          </div>
        </div>

        {/* CDL Class & Issuance Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cdl_class" className={labelClass}>
              CDL Class <span className="text-gold">*</span>
            </label>
            <select
              id="cdl_class"
              name="cdl_class"
              required
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select CDL Class
              </option>
              <option value="Class A">Class A</option>
              <option value="Class B">Class B</option>
            </select>
          </div>
          <div>
            <label htmlFor="cdl_issuance_date" className={labelClass}>
              CDL Issuance Date <span className="text-gold">*</span>
            </label>
            <input
              type="date"
              id="cdl_issuance_date"
              name="cdl_issuance_date"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Years of Experience */}
        <div>
          <label htmlFor="years_experience" className={labelClass}>
            Years of Commercial Driving Experience
          </label>
          <input
            type="number"
            id="years_experience"
            name="years_experience"
            min="0"
            max="50"
            className={inputClass}
            placeholder="e.g. 5"
          />
        </div>

        {/* Moving Violations */}
        <div>
          <label className={labelClass}>
            Do you have any moving violations in the past 3 years? <span className="text-gold">*</span>
          </label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="moving_violations"
                value="Yes"
                required
                className="w-4 h-4 text-forest accent-forest"
              />
              <span className="text-charcoal">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="moving_violations"
                value="No"
                className="w-4 h-4 text-forest accent-forest"
              />
              <span className="text-charcoal">No</span>
            </label>
          </div>
        </div>

        {/* FMCSA Clearinghouse */}
        <div>
          <label className={labelClass}>
            Are you registered with the FMCSA Drug &amp; Alcohol Clearinghouse? <span className="text-gold">*</span>
          </label>
          <div className="flex gap-6 mt-2">
            {["Yes", "No", "Not Sure"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="fmcsa_clearinghouse"
                  value={opt}
                  required
                  className="w-4 h-4 text-forest accent-forest"
                />
                <span className="text-charcoal">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className={labelClass}>Availability</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {["Weekends", "Weekdays", "Both", "Flexible"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="availability"
                  value={opt}
                  className="w-4 h-4 accent-forest"
                />
                <span className="text-charcoal">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* How did you hear about this position */}
        <div>
          <label htmlFor="referral_source" className={labelClass}>
            How did you hear about this position?
          </label>
          <select
            id="referral_source"
            name="referral_source"
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="Indeed">Indeed</option>
            <option value="Craigslist">Craigslist</option>
            <option value="Referral">Referral</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="notes" className={labelClass}>
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className={inputClass}
            placeholder="Anything else you'd like us to know..."
          />
        </div>

        {/* Error */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full px-8 py-4 bg-gold text-charcoal font-heading text-lg uppercase tracking-wider font-semibold rounded hover:bg-gold-bright transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
}

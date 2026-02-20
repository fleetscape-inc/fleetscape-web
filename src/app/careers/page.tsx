import type { Metadata } from "next";
import { CareersForm } from "./CareersForm";

export const metadata: Metadata = {
  title: "CDL Driver Jobs | Fleetscape Careers — Ventura County, CA",
  description:
    "Join Fleetscape as a CDL driver. Competitive pay ($30-$38/hr), flexible schedule, premium equipment. Class B CDL required. Apply now for ground cover installation positions in Ventura County, CA.",
  openGraph: {
    title: "CDL Driver Jobs | Fleetscape Careers",
    description:
      "Join Fleetscape as a CDL driver. Competitive pay, flexible schedule, premium equipment.",
  },
};

const benefits = [
  {
    title: "Competitive Pay",
    detail: "$30\u2013$38/hour depending on experience",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "4-Hour Minimum",
    detail: "Every call-out guarantees a minimum of 4 hours paid",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Schedule",
    detail: "Weekend and ad hoc work \u2014 supplement your income without giving up your weekday job",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Premium Equipment",
    detail: "Operate a 2015 Freightliner 114SD with Express Blower EB-60 \u2014 top-of-the-line, well-maintained",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Growth Opportunity",
    detail: "Get in on the ground floor of a growing operation expanding across California",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const requirements = [
  "Valid Class B CDL (Class A also accepted)",
  "Minimum 2 years CDL experience (measured from issuance date on MVR)",
  "Clean driving record \u2014 no DUI/DWI, no reckless driving, no suspensions",
  "No more than 2 minor violations in the past 3 years",
  "Must pass DOT pre-employment drug screen",
  "Must be registered (or willing to register) with FMCSA Drug & Alcohol Clearinghouse",
  "Physically able to handle hose operation and job site conditions",
  "Reliable, professional, and comfortable operating commercial equipment independently",
];

const niceToHave = [
  "Experience with pneumatic/blower truck equipment",
  "Air brake endorsement",
  "Tanker endorsement",
  "Experience in landscaping, construction, or material delivery",
  "Bilingual (English/Spanish)",
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-forest/60 to-charcoal" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 bg-gold/20 text-gold rounded font-heading text-sm uppercase tracking-widest font-semibold mb-6">
              Now Hiring
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6">
              Drive for<br />
              <span className="text-gold">Fleetscape</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Join California&apos;s premier ground cover installation company.
              We&apos;re looking for experienced CDL drivers who take pride in
              their work.
            </p>
          </div>
        </div>
      </section>

      {/* Why Drive for Fleetscape */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-forest mb-12 fade-in">
            Why Drive for Fleetscape
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-stagger">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="fade-in-child bg-white rounded-lg p-8 border border-concrete/10"
              >
                <div className="text-gold mb-4">{benefit.icon}</div>
                <h3 className="font-heading text-lg uppercase tracking-wide font-semibold text-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-concrete text-sm leading-relaxed">
                  {benefit.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opening */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-12 fade-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-forest mb-4">
                Current Opening: Class B CDL Driver
              </h2>
              <p className="text-concrete">
                Ventura County, CA &middot; Part-time / On-call &middot; $30&ndash;$38/hr
              </p>
            </div>

            {/* Requirements */}
            <div className="mb-12 fade-in">
              <h3 className="font-heading text-xl uppercase tracking-wide font-semibold text-charcoal mb-6">
                Requirements
              </h3>
              <div className="space-y-3">
                {requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded border-2 border-forest flex items-center justify-center">
                      <svg className="w-3 h-3 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-charcoal/80">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nice to Have */}
            <div className="mb-12 fade-in">
              <h3 className="font-heading text-xl uppercase tracking-wide font-semibold text-charcoal mb-6">
                Nice to Have
              </h3>
              <div className="space-y-3">
                {niceToHave.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded border-2 border-concrete/30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </div>
                    <span className="text-charcoal/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-cream" id="apply">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-forest mb-4">
                Apply Now
              </h2>
              <p className="text-concrete">
                Fill out the form below and we&apos;ll be in touch within 48 hours.
              </p>
            </div>

            <CareersForm />

            <div className="mt-8 text-center text-sm text-concrete">
              <p>
                Questions? Email us at{" "}
                <a
                  href="mailto:careers@fleetscape.com"
                  className="text-forest hover:text-gold transition-colors font-semibold"
                >
                  careers@fleetscape.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

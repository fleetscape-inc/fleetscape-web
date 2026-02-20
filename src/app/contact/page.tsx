import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { QuoteForm } from "./QuoteForm";

export const metadata: Metadata = {
  title: "Contact Fleetscape | Get a Free Estimate",
  description:
    "Get a free estimate for pneumatic ground cover installation. Serving Santa Barbara, Montecito, Ventura, Oxnard, Camarillo, and communities along the Highway 101 corridor.",
  openGraph: {
    title: "Contact Fleetscape",
    description:
      "Get a free estimate for pneumatic ground cover installation on California's Central Coast.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest/60 via-charcoal to-charcoal" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6">
              Let&apos;s Talk<br />
              <span className="text-gold">Ground Cover</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Whether you need a quote, have questions about our services, or
              want to discuss a project, we&apos;re here.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Request */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <div className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-3">
                Free Estimate
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-forest mb-6">
                Request a Quote
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                Tell us about your project and we&apos;ll provide a detailed
                estimate — typically within one business day. No obligation, no
                pressure.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal text-sm">Free, no-obligation estimates</div>
                    <p className="text-sm text-concrete">We&apos;ll scope your project and provide transparent pricing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal text-sm">Fast turnaround</div>
                    <p className="text-sm text-concrete">Most quotes returned within one business day.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal text-sm">Central Coast coverage</div>
                    <p className="text-sm text-concrete">Santa Barbara to Ventura County and the 101 corridor.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quote Form */}
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + General Contact Form */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-forest mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-forest/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading text-xs uppercase tracking-widest text-concrete mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:hello@fleetscape.com"
                      className="text-xl text-charcoal hover:text-gold transition-colors font-semibold"
                    >
                      hello@fleetscape.com
                    </a>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-forest/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading text-xs uppercase tracking-widest text-concrete mb-1">
                      Service Area
                    </div>
                    <p className="text-charcoal/80 leading-relaxed">
                      Santa Barbara, Montecito, Ventura, Oxnard, Camarillo — and
                      communities along the Highway 101 corridor
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: General Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

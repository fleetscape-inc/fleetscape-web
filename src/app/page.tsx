import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fleetscape | Precision Ground Cover Installation — California Central Coast",
  description:
    "Premium pneumatic ground cover installation for commercial properties, municipalities, and HOAs across California's Central Coast. Mulch, playground chips, landscaper partnerships, and decorative ground cover.",
};

const services = [
  {
    title: "Precision Ground Cover Application",
    description: "Municipalities, Schools, HOAs, Corporate Campuses, Golf Courses, Estates",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Playground Safety Surfacing",
    description: "ASTM F2075 compliant engineered wood fiber",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Landscapers",
    description: "Subcontract our services to support your clients",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Decorative Ground Cover",
    description: "Bark, Mulch, Topsoil",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

const differentiators = [
  {
    title: "Pneumatic Precision",
    description:
      "Our Commercial Blower Truck holds 60 cubic yards per trip and delivers material up to 600 feet with remote-controlled variable application rates. No wheelbarrows. No raking. No mess.",
  },
  {
    title: "Speed & Scale",
    description:
      "We complete in hours what takes a traditional crew days. That means less disruption to your people and property.",
  },
  {
    title: "Commercial Grade",
    description:
      "Licensed (CSLB C-27), insured, USDOT registered. We carry the certifications your procurement department requires.",
  },
];

const cities = ["Santa Barbara", "Goleta", "Ventura", "Oxnard", "Camarillo"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-forest/80 to-charcoal" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white mb-6">
              Precision<br />
              <span className="text-gold">Ground Cover</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              Pneumatic ground cover application for Municipalities, Schools,
              HOAs, Corporate Campuses, Golf Courses, Orchards and Estates
              throughout California&apos;s Central Coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gold text-charcoal font-heading text-lg uppercase tracking-wider font-semibold rounded hover:bg-gold-bright transition-colors"
              >
                Get a Free Estimate
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center text-gold hover:text-gold-bright font-heading text-base uppercase tracking-wider transition-colors group py-4"
              >
                We&apos;re Hiring CDL Drivers
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-16 fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-forest mb-6">
              What We Do
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              We use pneumatic blower truck technology to install ground cover
              materials with speed and precision that manual methods can&apos;t
              match. One truck replaces a full crew — delivering material up
              to 600 feet from the truck directly to the installation point.
              Projects that take days by hand are completed in hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-stagger">
            {services.map((service) => (
              <div
                key={service.title}
                className="fade-in-child bg-white rounded-lg p-8 border border-concrete/10 hover:border-gold/30 hover:shadow-lg transition-all group"
              >
                <div className="text-forest group-hover:text-gold transition-colors mb-4">
                  {service.icon}
                </div>
                <h3 className="font-heading text-lg uppercase tracking-wide font-semibold text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="text-concrete text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fleetscape */}
      <section className="py-24 bg-forest">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-16 fade-in">
            Why Fleetscape
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-stagger">
            {differentiators.map((item, i) => (
              <div key={item.title} className="fade-in-child">
                <div className="text-gold font-heading text-5xl font-bold mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-heading text-xl uppercase tracking-wide font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-forest mb-6">
              Serving California&apos;s Central Coast
            </h2>
            <p className="text-lg text-charcoal/80 mb-10 leading-relaxed">
              From Santa Barbara to Camarillo along the Highway 101 corridor,
              Fleetscape brings precision ground cover installation to
              commercial and institutional properties.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {cities.map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-forest/10 text-forest rounded font-heading text-sm uppercase tracking-wider font-semibold"
                >
                  {city}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold text-charcoal font-heading text-base uppercase tracking-wider font-semibold rounded hover:bg-gold-bright transition-colors"
            >
              Request a Quote for Your Area
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring Banner */}
      <section className="py-16 bg-gradient-to-r from-forest via-forest-light to-forest">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                Join the Fleetscape Team
              </h2>
              <p className="text-white/70">
                We&apos;re hiring experienced CDL drivers. Competitive pay, flexible
                schedule.
              </p>
            </div>
            <Link
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-gold text-charcoal font-heading text-base uppercase tracking-wider font-semibold rounded hover:bg-gold-bright transition-colors whitespace-nowrap"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

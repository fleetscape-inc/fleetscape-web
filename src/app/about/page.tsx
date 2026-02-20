import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Fleetscape | Precision Ground Cover Installation",
  description:
    "Fleetscape, Inc. is a Delaware C-Corporation specializing in pneumatic ground cover installation using Express Blower technology. Serving California's Central Coast.",
  openGraph: {
    title: "About Fleetscape",
    description:
      "Precision equipment. Premium results. Learn about Fleetscape's pneumatic ground cover installation services.",
  },
};

const specs = [
  { label: "Capacity", value: "Up to 80 cubic yards per load" },
  { label: "Reach", value: "300+ feet of hose from truck to installation point" },
  { label: "Application", value: "Remote-controlled variable rate for precise depth" },
  { label: "Materials", value: "Mulch, engineered wood fiber, compost, bark, soil amendments" },
  { label: "Advantage", value: "Reaches tight spaces, slopes, and areas inaccessible to traditional equipment" },
];

const credentials = [
  { title: "California Contractor License (C-27)", status: "Pending", icon: "license" },
  { title: "USDOT #4530173", status: "Active", icon: "dot" },
  { title: "FMCSA Registered", status: "Active", icon: "fmcsa" },
  { title: "Fully Insured", status: "General Liability + Commercial Auto", icon: "insurance" },
  { title: "Drug & Alcohol Testing", status: "FMCSA Clearinghouse Compliant", icon: "testing" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest/70 via-charcoal to-charcoal" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6">
              Precision Equipment.<br />
              <span className="text-gold">Premium Results.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Built to deliver commercial-grade ground cover solutions with
              unmatched speed and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-forest mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
              <p>
                Fleetscape, Inc. specializes in pneumatic ground cover
                installation for California&apos;s Central Coast from Santa
                Barbara to Camarillo. We use Express Blower technology — the same
                systems trusted by the largest landscape contractors in the
                country — to deliver mulch, playground chips, compost, and
                other ground cover materials with unmatched speed and precision.
              </p>
              <p>
                Founded by Seth and Melissa Henderson, Fleetscape exists to
                bring commercial-grade ground cover solutions to a market
                that&apos;s been stuck doing things the hard way. While
                competitors still rely on wheelbarrows and manual labor, we
                deploy a 2015 Freightliner 114SD equipped with an Express
                Blower EB-60 pneumatic system that can install up to 80 cubic
                yards of material per load through 300 feet of hose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Equipment */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-forest mb-4">
              Our Equipment
            </h2>
            <p className="text-concrete mb-12">
              2015 Freightliner 114SD with Express Blower EB-60
            </p>
          </div>

          {/* Equipment image */}
          <div className="mb-12 rounded-lg overflow-hidden fade-in">
            <Image
              src="/images/fleetscape-coast-truck-feature.png"
              alt="Fleetscape 2015 Freightliner 114SD with Express Blower EB-60 on California's Central Coast"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/10 rounded-lg overflow-hidden fade-in-stagger">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="fade-in-child bg-cream p-8"
              >
                <div className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-2">
                  {spec.label}
                </div>
                <p className="text-charcoal/80">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-24 bg-forest">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-12 fade-in">
            Certifications &amp; Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-stagger">
            {credentials.map((cred) => (
              <div
                key={cred.title}
                className="fade-in-child bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-gold/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {cred.title}
                    </h3>
                    <p className="text-white/50 text-sm">{cred.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

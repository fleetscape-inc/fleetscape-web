import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Fleetscape — Pneumatic Ground Cover Installation",
  description:
    "Precision ground cover application, playground safety surfacing, landscaper partnerships, and decorative ground cover. One truck, one operator, hundreds of cubic yards installed in hours.",
  openGraph: {
    title: "Fleetscape Services",
    description:
      "Precision ground cover, playground surfacing, landscaper partnerships, and decorative ground cover installation.",
  },
};

const services = [
  {
    title: "Precision Ground Cover Application",
    description:
      "For municipalities, schools, HOAs, corporate campuses, golf courses, and estates. Our pneumatic system installs ground cover evenly across large areas — no wheelbarrow tracks, no uneven spots, no crew trampling your landscaping. We work with bark mulch, wood chips, and shredded hardwood in any depth your specification requires.",
    features: [
      "Even coverage across large areas",
      "No wheelbarrow damage to existing landscaping",
      "Bark mulch, wood chips, shredded hardwood",
      "Custom depth specifications",
    ],
  },
  {
    title: "Playground Safety Surfacing",
    description:
      "Engineered wood fiber (EWF) installed to ASTM F2075 and CPSC guidelines. We work with schools, parks departments, daycare facilities, and HOAs to install safety surfacing at the precise depth required for your equipment fall height. Pneumatic installation achieves more consistent depth and compaction than hand-spread methods.",
    features: [
      "ASTM F2075 compliant",
      "CPSC guideline adherence",
      "Precise depth for equipment fall height",
      "Superior compaction consistency",
    ],
  },
  {
    title: "Landscapers",
    description:
      "Expand your service offering without expanding your fleet. We partner with landscaping companies to provide pneumatic ground cover installation as a subcontracted service — so you can offer your clients professional-grade mulch, bark, and topsoil installation without the capital investment in specialized equipment. Keep your clients happy and your margins healthy.",
    features: [
      "White-label subcontracting available",
      "Seamless integration with your crew",
      "Expand services without equipment investment",
      "Reliable scheduling for your project timelines",
    ],
  },
  {
    title: "Decorative Ground Cover",
    description:
      "Bark, mulch, and topsoil installed with precision. Whether you're refreshing a resort entrance, a golf course cart path, or a corporate campus, we deliver a finished result that looks professionally installed — because it is.",
    features: [
      "Bark, mulch, topsoil",
      "Precision application for any terrain",
      "Resort and hospitality grade finishing",
      "Corporate campus installations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-forest/50 to-charcoal" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6">
              What We<br />
              <span className="text-gold">Install</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              One truck. One operator. Hundreds of cubic yards installed in
              hours, not days.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="fade-in"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="text-gold font-heading text-sm uppercase tracking-widest font-semibold mb-3">
                      Service 0{i + 1}
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-forest mb-6">
                      {service.title}
                    </h2>
                    <p className="text-charcoal/80 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span className="text-sm text-charcoal/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    {i === 1 ? (
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src="/images/fleetscape-playground-chips.png"
                          alt="Engineered wood fiber playground safety surfacing installed by Fleetscape"
                          width={1536}
                          height={1024}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-forest via-forest-light to-charcoal flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-white/10">
                            0{i + 1}
                          </div>
                          <div className="font-heading text-xs uppercase tracking-[0.2em] text-gold/40 mt-2">
                            {service.title}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-forest">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-6">
              Ready to See What Precision Ground Cover Looks Like?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold text-charcoal font-heading text-lg uppercase tracking-wider font-semibold rounded hover:bg-gold-bright transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

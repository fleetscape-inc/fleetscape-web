import type { Metadata } from "next";
import { CareersForm } from "./CareersForm";

export const metadata: Metadata = {
  title: "CDL Driver Jobs | Fleetscape Careers — $40/hr, Ventura County CA",
  description:
    "Join Fleetscape as a CDL driver operating a pneumatic blower truck. $40/hr starting, performance bonuses, local routes, home every night. Class B CDL required. Apply now.",
  openGraph: {
    title: "CDL Driver — Pneumatic Blower Truck | Fleetscape Careers",
    description:
      "Join Fleetscape and operate specialized equipment. $40/hr starting, performance bonuses, local routes on the 101 corridor.",
  },
};

/* ── Data ── */

const heroStats = [
  { value: "$40/hr", label: "Starting Rate" },
  { value: "+ Bonuses", label: "Performance-Based" },
  { value: "Local", label: "Home Every Night" },
  { value: "Growth", label: "Full-Time Path" },
];

const responsibilities = [
  {
    bold: "Drive and operate",
    text: "the Freightliner 114SD with Express Blower system to commercial job sites across the Santa Barbara to Camarillo corridor.",
  },
  {
    bold: "Load material",
    text: "at supplier locations and transport to job sites safely and on schedule.",
  },
  {
    bold: "Operate pneumatic blower equipment",
    text: "to install mulch, topsoil, and playground chips to client specifications. We\u2019ll train you on the blower system \u2014 this isn\u2019t something you learn at CDL school.",
  },
  {
    bold: "Manage hose work",
    text: "and material placement, including positioning and cleanup. You\u2019ll have a laborer working alongside you \u2014 this is a two-person operation, not a solo gig.",
  },
  {
    bold: "Perform pre-trip and post-trip inspections",
    text: "per DOT requirements. Maintain vehicle logs and report any maintenance needs promptly.",
  },
  {
    bold: "Represent Fleetscape professionally",
    text: "on job sites. You\u2019re the face of the operation at every property \u2014 our reputation rides with you.",
  },
];

const requirements = [
  {
    bold: "Valid Class B CDL",
    text: "(Class A also welcome). Air brake endorsement required \u2014 no restrictions.",
  },
  {
    bold: "3+ years of CDL experience",
    text: "with a clean driving record. No DUI/DWI, no reckless driving, no suspensions or revocations.",
  },
  {
    bold: "Current DOT medical card.",
    text: "Must be able to pass a DOT pre-employment drug screen and FMCSA Clearinghouse check.",
  },
  {
    bold: "Available afternoons and weekends.",
    text: "This starts as 4\u20138 hours/week and scales. Dispatches carry a 4-hour minimum \u2014 we respect your time.",
  },
  {
    bold: "Physically capable",
    text: "of handling hose work and assisting with material operations. You\u2019ll have a laborer with you, but the work still has a physical side.",
  },
  {
    bold: "Reliable and professional.",
    text: "When a client books an installation, showing up on time isn\u2019t optional.",
  },
];

const niceToHave = [
  "Experience with blower trucks, dump trucks, or pneumatic equipment",
  "Background in landscaping, construction, or material delivery",
  "Bilingual (English / Spanish)",
];

const equipmentSpecs = [
  "2015 Freightliner 114SD",
  "Express Blower EB-60 System",
  "Pneumatic Material Delivery",
  "Local Routes \u2014 101 Corridor",
  "100+ CY/Day Capacity",
  "300 ft. Hose Reach",
];

const compDetails = [
  { label: "Minimum Dispatch", value: "4-Hour Minimum", highlight: true },
  { label: "Starting Commitment", value: "4\u20138 hrs/week, scaling", highlight: false },
  { label: "Performance Bonuses", value: "Yes \u2014 details at interview", highlight: true },
  { label: "Equipment Training", value: "Paid \u2014 on us", highlight: false },
];

const growthTimeline = [
  {
    phase: "Months 1\u20133",
    title: "Learn the Equipment & Build the Rhythm",
    desc: "Part-time afternoon and weekend dispatches. Paid training on the Express Blower system. Get comfortable with the rig, the routes, and the clients.",
  },
  {
    phase: "Months 3\u20136",
    title: "Scale with the Business",
    desc: "As our client base grows, so do your hours and earnings. Increased dispatch frequency across the 101 corridor.",
  },
  {
    phase: "Months 6\u201312",
    title: "Full-Time Opportunity",
    desc: "Path to full-time employment with a lead operator role. Potential for benefits, crew management, and route ownership.",
  },
];

/* ── Page ── */

export default function CareersPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[60vh] flex items-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-[#0D2818] to-[#0D2818]" />
        <div className="absolute -top-[50%] -right-[20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,168,67,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative mx-auto max-w-[800px] w-full px-6 py-20 md:py-24">
          <div className="inline-flex items-center px-4 py-1.5 bg-gold/15 border border-gold/30 text-gold rounded font-heading text-xs uppercase tracking-[2px] font-bold mb-6">
            Now Hiring
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-3 leading-[1.1]">
            CDL Driver — <span className="text-gold">Pneumatic Blower Truck</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-[600px]">
            Join Fleetscape and operate specialized equipment that most drivers
            never get to touch. We&apos;re building something different — and we
            need the right person behind the wheel.
          </p>

          <div className="flex flex-wrap gap-8">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-heading text-3xl font-bold text-gold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-white/50 font-medium mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ The Role ═══ */}
      <section className="py-14 bg-cream">
        <div className="mx-auto max-w-[800px] px-6 fade-in">
          <div className="font-heading text-xs uppercase tracking-[2.5px] font-bold text-forest-light mb-3">
            The Role
          </div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-forest mb-5">
            Not Your Typical Driving Job
          </h2>
          <p className="text-base text-concrete leading-[1.7] mb-4">
            Fleetscape installs premium commercial ground cover — mulch,
            playground safety surfacing, and engineered wood fiber — using
            pneumatic blower truck technology. Instead of wheelbarrows and rakes,
            we use a 2015 Freightliner 114SD equipped with an Express Blower
            EB-60 system that places material at 100+ cubic yards per day
            through a 300-foot hose.
          </p>
          <p className="text-base text-concrete leading-[1.7] mb-4">
            This is a part-time position with real runway. You&apos;ll start at
            4–8 hours per week on afternoon and weekend dispatches, scaling
            steadily over the first six months as we build our client base
            across the 101 corridor. Our clients are HOAs, golf courses,
            municipalities, schools, private estates, orchards, and commercial
            properties from Santa Barbara to Camarillo — professionals who
            expect a professional operation.
          </p>

          {/* Equipment Card */}
          <div className="bg-white rounded-xl border border-black/[0.08] p-8 mt-6 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
            <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-forest mb-3">
              Your Rig
            </h3>
            <p className="text-base text-concrete leading-[1.7]">
              You&apos;ll be operating purpose-built equipment that most CDL
              drivers never see.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {equipmentSpecs.map((spec) => (
                <div key={spec} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-sm font-medium text-charcoal">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Responsibilities ═══ */}
      <section className="py-14 bg-cream border-t border-black/[0.06]">
        <div className="mx-auto max-w-[800px] px-6 fade-in">
          <div className="font-heading text-xs uppercase tracking-[2.5px] font-bold text-forest-light mb-3">
            What You&apos;ll Do
          </div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-forest mb-5">
            Responsibilities
          </h2>
          <div className="flex flex-col gap-3 mt-5">
            {responsibilities.map((item, i) => (
              <div key={i} className="flex gap-3.5 items-start">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-forest/[0.08] flex items-center justify-center mt-px text-forest text-sm">
                  ▸
                </div>
                <p className="text-[15px] leading-relaxed text-charcoal">
                  <strong className="font-semibold">{item.bold}</strong> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Requirements ═══ */}
      <section className="py-14 bg-cream border-t border-black/[0.06]">
        <div className="mx-auto max-w-[800px] px-6 fade-in">
          <div className="font-heading text-xs uppercase tracking-[2.5px] font-bold text-forest-light mb-3">
            Requirements
          </div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-forest mb-5">
            What We Need From You
          </h2>
          <div className="flex flex-col gap-3 mt-5">
            {requirements.map((item, i) => (
              <div key={i} className="flex gap-3.5 items-start">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-forest/[0.08] flex items-center justify-center mt-px text-forest-light text-sm">
                  ✓
                </div>
                <p className="text-[15px] leading-relaxed text-charcoal">
                  <strong className="font-semibold">{item.bold}</strong> {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Nice to Have */}
          <div className="mt-7">
            <div className="font-heading text-xs uppercase tracking-[2.5px] font-bold text-gold mb-3">
              Nice to Have
            </div>
            <div className="flex flex-col gap-3">
              {niceToHave.map((item, i) => (
                <div key={i} className="flex gap-3.5 items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gold/[0.12] flex items-center justify-center mt-px text-[#9A7B2E] text-sm">
                    +
                  </div>
                  <p className="text-[15px] leading-relaxed text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Compensation ═══ */}
      <section className="py-14 bg-cream border-t border-black/[0.06]">
        <div className="mx-auto max-w-[800px] px-6 fade-in">
          <div className="font-heading text-xs uppercase tracking-[2.5px] font-bold text-forest-light mb-3">
            Compensation
          </div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-forest mb-5">
            Premium Pay for Premium Work
          </h2>
          <p className="text-base text-concrete leading-[1.7]">
            This isn&apos;t a mega-carrier gig paying you by the mile to sit in
            traffic on the 5. We pay well because this work is specialized,
            physical, and client-facing — and because the right driver is worth
            it.
          </p>

          {/* Comp Card */}
          <div className="bg-gradient-to-br from-forest to-[#0D2818] rounded-xl p-8 sm:p-10 mt-6 text-white">
            <div className="font-heading text-xs uppercase tracking-[2.5px] font-bold text-gold mb-3">
              Starting Rate
            </div>
            <div className="font-heading text-5xl font-black tracking-tight text-white mb-1">
              $40 <span className="text-xl font-medium text-white/50 tracking-normal">/hour</span>
            </div>
            <p className="text-[15px] text-white/60 mb-7">
              Plus performance bonuses based on job execution and efficiency
            </p>
            <div className="flex flex-col gap-4">
              {compDetails.map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center pb-4 ${
                    i < compDetails.length - 1
                      ? "border-b border-white/10"
                      : "pb-0"
                  }`}
                >
                  <span className="text-sm text-white/60 font-medium">
                    {row.label}
                  </span>
                  <span
                    className={`text-[15px] font-semibold ${
                      row.highlight ? "text-gold" : "text-white"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Growth ═══ */}
      <section className="py-14 bg-cream border-t border-black/[0.06]">
        <div className="mx-auto max-w-[800px] px-6 fade-in">
          <div className="font-heading text-xs uppercase tracking-[2.5px] font-bold text-forest-light mb-3">
            Growth
          </div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-forest mb-5">
            This Role Has a Trajectory
          </h2>

          <div className="relative pl-7 mt-6">
            {/* Vertical line */}
            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold to-forest-light" />

            {growthTimeline.map((step, i) => (
              <div
                key={i}
                className={`relative ${
                  i < growthTimeline.length - 1 ? "pb-7" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute -left-[18px] top-1.5 w-3 h-3 rounded-full border-2 border-gold bg-cream" />
                <div className="font-heading text-xs uppercase tracking-[1.5px] font-bold text-gold mb-1">
                  {step.phase}
                </div>
                <div className="text-base font-bold text-forest mb-1">
                  {step.title}
                </div>
                <p className="text-sm text-concrete leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ APPLICATION FORM ═══ */}
      <section className="bg-white border-t-4 border-forest py-16 px-6" id="apply">
        <div className="mx-auto max-w-2xl">
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
      </section>
    </>
  );
}

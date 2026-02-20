import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const serviceAreas = [
  "Santa Barbara",
  "Montecito",
  "Ventura",
  "Oxnard",
  "Camarillo",
];

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-with-tagline.svg"
              alt="Fleetscape — Precision Ground Cover"
              width={200}
              height={60}
              className="h-14 w-auto mb-6"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Pneumatic ground cover application for Municipalities, Schools,
              Property Managers, HOAs, Golf Courses, Orchards and Estates
              throughout California&apos;s Central Coast.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:hello@fleetscape.com" className="hover:text-white transition-colors">
                  hello@fleetscape.com
                </a>
              </li>
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-gold mb-4">
              Service Areas
            </h4>
            <ul className="space-y-1 text-sm text-white/70">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>USDOT #4530173 | CSLB License Pending</p>
            <p>&copy; {new Date().getFullYear()} Fleetscape, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

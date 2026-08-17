import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks } from "@/lib/site-content";

const footerServices = [
  "House Construction",
  "Architecture",
  "Structural Engineering",
  "Interior Design",
  "Turnkey Construction",
];

const socials = [
  { label: "Instagram", href: company.social.instagram },
  { label: "Facebook", href: company.social.facebook },
  { label: "LinkedIn", href: company.social.linkedin },
  { label: "YouTube", href: company.social.youtube },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      {/* CTA band */}
      <div className="border-b border-ink-foreground/12">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-ink-foreground/55">Ready When You Are</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] text-ink-foreground">
              Have a plot and a vision? Let's build your home together.
            </h2>
          </div>
          <a
            href="/request-consultation"
            className="group relative shrink-0 overflow-hidden bg-ink-foreground px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-foreground"
          >
            <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-ink-foreground">
              Request a Consultation
              <ArrowRight
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </span>
            <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-2xl leading-none tracking-tight">
            {company.name}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
            Complete end-to-end house construction and turnkey solutions — architecture,
            engineering, construction, interiors and handover under one roof.
          </p>
          <p className="mt-8 text-[0.62rem] uppercase tracking-[0.2em] text-ink-foreground/40">
            {company.tagline}
          </p>
        </div>

        <nav className="lg:col-span-2" aria-label="Quick links">
          <h2 className="text-[0.62rem] uppercase tracking-[0.2em] text-ink-foreground/45">
            Quick Links
          </h2>
          <ul className="mt-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-ink-foreground/75 transition-colors hover:text-accent"
                >
                  <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-[0.62rem] uppercase tracking-[0.2em] text-ink-foreground/45">
            Services
          </h2>
          <ul className="mt-6 space-y-4">
            {footerServices.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="group flex items-center gap-2 text-sm text-ink-foreground/75 transition-colors hover:text-accent"
                >
                  <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" />
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-[0.62rem] uppercase tracking-[0.2em] text-ink-foreground/45">
            Contact
          </h2>
          <ul className="mt-6 space-y-4 text-sm text-ink-foreground/75">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
              {company.phoneDisplay}
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
              {company.email}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
              {company.location}
            </li>
          </ul>
          <ul className="mt-9 flex flex-wrap gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="flex h-11 items-center border border-ink-foreground/20 px-4 text-[0.6rem] uppercase tracking-[0.18em] text-ink-foreground/65 transition-colors hover:border-accent hover:text-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-foreground/12">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-7 text-[0.62rem] uppercase tracking-[0.18em] text-ink-foreground/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © 2026 {company.name}. All Rights Reserved.
          </p>
          <p>Placeholder contact details — replace before launch.</p>
        </div>
      </div>
    </footer>
  );
}

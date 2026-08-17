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
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-2xl">{company.name}</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
            Complete end-to-end house construction and turnkey solutions — architecture,
            engineering, construction, interiors and handover under one roof.
          </p>
          <p className="mt-6 text-[0.62rem] uppercase tracking-[0.2em] text-ink-foreground/40">
            {company.tagline}
          </p>
        </div>

        <nav className="lg:col-span-2" aria-label="Quick links">
          <h2 className="text-[0.62rem] uppercase tracking-[0.2em] text-ink-foreground/45">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-foreground/75 transition-colors hover:text-accent"
                >
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
          <ul className="mt-5 space-y-3">
            {footerServices.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="text-sm text-ink-foreground/75 transition-colors hover:text-accent"
                >
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
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/75">
            <li>{company.phoneDisplay}</li>
            <li>{company.email}</li>
            <li>{company.location}</li>
          </ul>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-[0.62rem] uppercase tracking-[0.18em] text-ink-foreground/60 transition-colors hover:text-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/12">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-7 text-[0.62rem] uppercase tracking-[0.18em] text-ink-foreground/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 {company.name}. All Rights Reserved.</p>
          <p>Placeholder contact details — replace before launch.</p>
        </div>
      </div>
    </footer>
  );
}

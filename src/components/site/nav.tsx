import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { company, navLinks } from "@/lib/site-content";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-panel py-3 shadow-[0_1px_0_0_var(--border)]"
          : "border-b border-transparent py-6"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8"
      >
        <a
          href="#home"
          className={`font-display leading-none tracking-tight transition-all duration-500 ${
            scrolled ? "text-lg" : "text-xl sm:text-2xl"
          } ${scrolled ? "text-foreground" : "text-ink-foreground"}`}
        >
          {company.name}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative text-[0.8rem] uppercase tracking-[0.16em] transition-colors ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-ink-foreground/75 hover:text-ink-foreground"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden border px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-300 lg:inline-block ${
              scrolled
                ? "border-foreground/25 text-foreground hover:bg-foreground hover:text-primary-foreground"
                : "border-ink-foreground/40 text-ink-foreground hover:bg-ink-foreground hover:text-foreground"
            }`}
          >
            Get a Free Consultation
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 flex-col items-center justify-center gap-[7px] border lg:hidden ${
              scrolled || open
                ? "border-foreground/20 text-foreground"
                : "border-ink-foreground/35 text-ink-foreground"
            }`}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35 }}
              className="block h-px w-6 bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35 }}
              className="block h-px w-6 bg-current"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[68px] bottom-0 bg-background px-6 pt-8 lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5 }}
                  className="border-b border-border"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-5 text-3xl text-foreground"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-10 block bg-foreground px-6 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground"
            >
              Get a Free Consultation
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

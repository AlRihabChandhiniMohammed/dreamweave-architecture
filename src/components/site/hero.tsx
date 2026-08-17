import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroVilla from "@/assets/hero-villa.jpg";
import { company } from "@/lib/site-content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-[100svh] min-h-[620px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroVilla}
          alt="Modern luxury villa illuminated at dusk with reflecting pool"
          width={1920}
          height={1088}
          decoding="async"
          className="hero-drift h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.19_0.008_60/0.72)] via-[oklch(0.19_0.008_60/0.42)] to-[oklch(0.19_0.008_60/0.86)]" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-20 sm:px-8 sm:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow text-ink-foreground/70"
        >
          Building Spaces. Creating Legacies.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5.75rem)] leading-[0.98] text-ink-foreground"
        >
          Your Dream Home, Built From the Ground Up.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg"
        >
          From architectural design to construction, interiors and final handover — we manage every
          detail under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="/request-consultation"
            className="group relative overflow-hidden bg-ink-foreground px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-foreground"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-ink-foreground">
              Start Your Project
            </span>
            <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
          </a>
          <a
            href="#services"
            className="border border-ink-foreground/40 px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink-foreground transition-colors duration-500 hover:border-ink-foreground hover:bg-ink-foreground/10"
          >
            Explore Our Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col gap-6 border-t border-ink-foreground/20 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-ink-foreground/60">
            {company.tagline}
          </p>
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-ink-foreground/60"
          >
            Scroll
            <span className="scroll-cue block h-8 w-px bg-ink-foreground/50" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

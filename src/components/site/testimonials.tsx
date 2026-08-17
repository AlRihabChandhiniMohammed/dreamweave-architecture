import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import testimonialBg from "@/assets/testimonial-bg.jpg";
import { testimonials } from "@/lib/site-content";
import { Reveal } from "./reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index] ?? testimonials[0]!;

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32">
      <img
        src={testimonialBg}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-[oklch(0.19_0.008_60/0.72)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-ink-foreground/55">In Their Words</p>
        </Reveal>

        <div className="mt-12 min-h-[300px] sm:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <p className="font-display text-[clamp(1.5rem,3.6vw,2.75rem)] leading-[1.2] text-ink-foreground">
                “{current.quote}”
              </p>
              <footer className="mt-10 text-[0.68rem] uppercase tracking-[0.2em] text-ink-foreground/60">
                {current.name} — {current.projectType}, {current.location}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-ink-foreground/20 pt-6">
          <p className="text-[0.6rem] uppercase tracking-[0.2em] text-ink-foreground/40">
            Placeholder testimonials — pending client approval
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="flex h-12 w-12 items-center justify-center border border-ink-foreground/30 text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.2} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="flex h-12 w-12 items-center justify-center border border-ink-foreground/30 text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-foreground"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

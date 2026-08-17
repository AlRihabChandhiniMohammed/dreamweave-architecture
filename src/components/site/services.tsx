import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./reveal";

const AUTOPLAY_MS = 3000;

export function Services() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const featured = services[active] ?? services[0]!;

  const next = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const card = list.querySelector<HTMLElement>("li:not(:last-child)");
    const gap = 20;
    if (card) {
      const nextLeft = card.offsetLeft + card.offsetWidth + gap;
      list.scrollTo({ left: nextLeft, behavior: "smooth" });
    } else {
      list.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(min-width: 1024px)").matches) {
      return;
    }
    let paused = false;
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    const list = listRef.current;
    list?.addEventListener("pointerdown", pause);
    list?.addEventListener("wheel", pause);
    window.addEventListener("pointerup", resume);
    window.addEventListener("pointercancel", resume);
    const id = window.setInterval(() => {
      if (paused) return;
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current ?? {
        scrollLeft: 0,
        scrollWidth: 0,
        clientWidth: 0,
      };
      if (scrollLeft + clientWidth >= scrollWidth - 8) {
        listRef.current?.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        next();
      }
    }, AUTOPLAY_MS);
    return () => {
      window.clearInterval(id);
      list?.removeEventListener("pointerdown", pause);
      list?.removeEventListener("wheel", pause);
      window.removeEventListener("pointerup", resume);
      window.removeEventListener("pointercancel", resume);
    };
  }, [next]);

  return (
    <section id="services" className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything Your Home Needs.
              <br />
              Under One Roof.
            </>
          }
          subtitle="From the first sketch to the final key handover, we take care of every stage of your project."
        />

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          {/* Featured image — desktop only */}
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden bg-muted">
              <AnimatePresence mode="wait">
                <motion.img
                  key={featured.image}
                  src={featured.image}
                  alt={featured.title}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.19_0.008_60/0.65)] via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={featured.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="eyebrow text-ink-foreground/70">
                      {featured.number} — Featured
                    </p>
                    <h3 className="mt-3 text-3xl text-ink-foreground">{featured.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-ink-foreground/75">
                      {featured.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Service list — horizontal carousel on mobile, list on desktop */}
          <ul
            ref={listRef}
            className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] lg:col-span-6 lg:mt-0 lg:block lg:gap-0 lg:overflow-visible lg:pb-0 lg:snap-none"
          >
            {services.map((service, i) => (
              <Reveal
                as="li"
                key={service.number}
                delay={Math.min(i * 0.03, 0.24)}
                className="w-[78vw] max-w-[330px] shrink-0 snap-center lg:w-auto lg:max-w-none lg:shrink lg:snap-none"
              >
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-current={active === i}
                  className={`group relative block w-full border border-border bg-background text-left transition-all duration-500 lg:border-0 lg:border-b lg:bg-transparent lg:py-5 ${
                    active === i ? "lg:pl-4" : "lg:pl-0"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-accent transition-all duration-500 lg:block ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {/* Mobile / tablet image */}
                  <span className="block aspect-[16/10] overflow-hidden lg:hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </span>
                  <div className="flex items-start gap-5 p-5 lg:p-0">
                    <span
                      className={`mt-1 font-display text-sm tabular-nums transition-colors duration-500 ${
                        active === i ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {service.number}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center justify-between gap-4">
                        <span className="font-display text-2xl leading-tight text-foreground sm:text-[1.75rem]">
                          {service.title}
                        </span>
                        <ArrowUpRight
                          className={`h-5 w-5 shrink-0 text-accent transition-all duration-500 ${
                            active === i
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                          strokeWidth={1}
                        />
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </span>
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

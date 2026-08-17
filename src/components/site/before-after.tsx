import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import beforeSite from "@/assets/before-site.jpg";
import afterHome from "@/assets/after-home.jpg";
import { Reveal, SectionHeading } from "./reveal";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Before / After"
          title="From Site to Dream Home"
          subtitle="Drag the handle to see the same plot before construction and after handover."
        />

        <Reveal delay={0.12}>
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onPointerDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            className="relative mt-14 aspect-[16/10] w-full touch-none select-none overflow-hidden bg-muted"
          >
            <img
              src={afterHome}
              alt="Completed home on the plot after construction"
              width={1600}
              height={1000}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <img
                src={beforeSite}
                alt="Empty plot with marked foundation trenches before construction"
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ width: containerRef.current?.offsetWidth ?? undefined }}
              />
            </div>

            <div
              className="absolute inset-y-0 w-px bg-ink-foreground"
              style={{ left: `${position}%` }}
            >
              <button
                type="button"
                role="slider"
                aria-label="Before and after comparison slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(position)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
                  if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
                }}
                className="glass-panel-dark absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full text-ink-foreground"
              >
                <span className="text-lg leading-none">⇄</span>
              </button>
            </div>

            <span className="absolute bottom-5 left-5 text-[0.62rem] uppercase tracking-[0.2em] text-ink-foreground/85">
              Before — Empty Site
            </span>
            <span className="absolute bottom-5 right-5 text-[0.62rem] uppercase tracking-[0.2em] text-ink-foreground/85">
              After — Completed Home
            </span>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

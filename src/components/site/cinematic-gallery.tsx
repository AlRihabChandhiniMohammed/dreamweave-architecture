import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import proj4 from "@/assets/proj-4.jpg";
import proj5 from "@/assets/proj-5.jpg";
import proj6 from "@/assets/proj-6.jpg";
import svcConstruction from "@/assets/svc-construction.jpg";
import svcLandscaping from "@/assets/svc-landscaping.jpg";
import svcInterior from "@/assets/svc-interior.jpg";
import matWood from "@/assets/mat-wood.jpg";
import { Reveal } from "./reveal";

const rowOne = [
  { src: proj1, alt: "Contemporary villa with pool at twilight", w: "w-[70vw] sm:w-[34vw]" },
  { src: svcConstruction, alt: "House under construction at golden hour", w: "w-[52vw] sm:w-[22vw]" },
  { src: proj4, alt: "Luxury kitchen interior", w: "w-[62vw] sm:w-[28vw]" },
  { src: svcLandscaping, alt: "Landscaped courtyard at dusk", w: "w-[50vw] sm:w-[20vw]" },
  { src: proj3, alt: "Modern home courtyard with brick screen", w: "w-[66vw] sm:w-[30vw]" },
];

const rowTwo = [
  { src: svcInterior, alt: "Warm minimal living room", w: "w-[58vw] sm:w-[26vw]" },
  { src: proj2, alt: "Independent modern house facade", w: "w-[68vw] sm:w-[32vw]" },
  { src: matWood, alt: "Oak wood grain detail", w: "w-[42vw] sm:w-[16vw]" },
  { src: proj6, alt: "Modern bedroom interior", w: "w-[60vw] sm:w-[28vw]" },
  { src: proj5, alt: "Renovated residence exterior", w: "w-[54vw] sm:w-[22vw]" },
];

function MarqueeRow({
  items,
  reverse = false,
  slow = false,
}: {
  items: typeof rowOne;
  reverse?: boolean;
  slow?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="group flex w-full overflow-hidden">
      <div
        className={`flex shrink-0 gap-4 pr-4 ${slow ? "marquee-track-slow" : "marquee-track"} group-hover:[animation-play-state:paused]`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((item, i) => (
          <figure
            key={`${item.src}-${i}`}
            className={`${item.w} shrink-0 overflow-hidden`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function CinematicGallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const shiftA = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const shiftB = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section ref={ref} className="overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-ink-foreground/55">Selected Frames</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-3xl text-[clamp(1.9rem,4.6vw,3.5rem)] leading-[1.05] text-ink-foreground">
            A Continuous View of the Work.
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 flex flex-col gap-4">
        <motion.div style={{ x: shiftA }}>
          <MarqueeRow items={rowOne} />
        </motion.div>
        <motion.div style={{ x: shiftB }}>
          <MarqueeRow items={rowTwo} reverse slow />
        </motion.div>
      </div>

      <div className="mx-auto mt-10 max-w-[1400px] px-5 sm:px-8">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-ink-foreground/40">
          Hover to pause
        </p>
      </div>
    </section>
  );
}

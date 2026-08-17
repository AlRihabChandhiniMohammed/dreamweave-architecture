import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import aboutStudio from "@/assets/about-studio.jpg";
import { stats } from "@/lib/site-content";
import { Reveal, RevealImage } from "./reveal";

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(value.replace(/\d+/, "0"));
  const match = value.match(/(\d+)/);

  useEffect(() => {
    if (!inView || !match) {
      if (!match) setDisplay(value);
      return;
    }
    const target = Number(match[1]);
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1400, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value.replace(/\d+/, String(Math.round(target * eased))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, match]);

  return <span ref={ref}>{display}</span>;
}

export function About() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <RevealImage
            src={aboutStudio}
            alt="Architects reviewing house drawings and a scale model in a concrete studio"
            width={1280}
            height={1600}
            className="aspect-[4/5] w-full"
          />
        </div>

        <div className="lg:col-span-7 lg:pl-6">
          <Reveal>
            <p className="eyebrow">About [COMPANY NAME]</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05]">
              More Than Construction. We Build the Way You Imagine Living.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We provide complete construction solutions — from the first planning conversation to
              the final handover. Architecture, structural engineering, civil execution, services,
              interiors and finishing are coordinated by one team, so nothing falls between
              disciplines and nothing is left for you to chase.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Every home is planned around how you actually intend to live in it: orientation, light,
              circulation, storage, ventilation and long-term maintenance are considered before a
              single line is drawn on site.
            </p>
          </Reveal>

          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.08 * i}>
                <div className="border-t border-border pt-5">
                  <dt className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-none text-foreground">
                    <StatValue value={stat.value} />
                  </dt>
                  <dd className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.3}>
            <p className="mt-6 text-xs text-muted-foreground/70">
              Figures shown are placeholders — replace with verified company numbers.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

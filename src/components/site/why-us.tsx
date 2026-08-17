import {
  CompassIcon,
  DraftingCompass,
  Layers,
  KeyRound,
  Ruler,
  ClipboardList,
} from "lucide-react";
import { whyUs } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./reveal";

const icons = [Layers, ClipboardList, DraftingCompass, Ruler, CompassIcon, KeyRound];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Six Reasons Clients Hand Us the Whole Project."
        />

        <div className="mt-16 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((reason, i) => {
            const Icon = icons[i] ?? Layers;
            return (
              <Reveal key={reason.title} delay={Math.min(i * 0.06, 0.3)}>
                <article className="group h-full border-b border-border p-8 transition-colors duration-500 hover:bg-secondary/50 sm:p-10">
                  <Icon
                    className="h-7 w-7 text-accent transition-transform duration-500 group-hover:-translate-y-1"
                    strokeWidth={0.9}
                  />
                  <h3 className="mt-8 text-2xl leading-tight text-foreground">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

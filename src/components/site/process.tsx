import { processSteps } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./reveal";

export function Process() {
  return (
    <section id="process" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="From First Idea to Final Key."
          subtitle="Nine defined stages, each with clear deliverables, so you always know where your project stands."
        />

        <ol className="mt-16 sm:mt-20">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={Math.min(i * 0.05, 0.3)}>
              <div className="group grid gap-3 border-t border-border py-8 transition-colors duration-500 hover:bg-secondary/40 sm:grid-cols-12 sm:gap-8 sm:px-2">
                <span className="font-display text-sm tabular-nums text-accent sm:col-span-1">
                  {step.number}
                </span>
                <h3 className="text-2xl leading-tight text-foreground sm:col-span-4 sm:text-[1.9rem]">
                  {step.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:col-span-7">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { Reveal } from "./reveal";

const journey = [
  { label: "You", note: "Tell us your vision" },
  { label: "We design", note: "Architecture and interiors" },
  { label: "We plan", note: "Structure, approvals, schedule" },
  { label: "We build", note: "Civil, electrical, plumbing" },
  { label: "We finish", note: "Interiors, painting, landscape" },
  { label: "You", note: "Receive the keys" },
];

export function ClientJourney() {
  return (
    <section className="bg-stone-warm py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Client Journey</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,5vw,4rem)] leading-[1.02]">
            You Imagine It. We Take Care of the Rest.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-y-10 sm:mt-20 sm:grid-cols-3 lg:grid-cols-6">
          {journey.map((step, i) => (
            <Reveal as="li" key={`${step.label}-${i}`} delay={i * 0.08}>
              <div className="relative pr-6">
                <span className="font-display text-xs tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-2xl leading-tight text-foreground">
                  {step.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.note}</p>
                {i < journey.length - 1 ? (
                  <span
                    aria-hidden
                    className="mt-6 block h-px w-full max-w-[70%] bg-gradient-to-r from-accent/60 to-transparent"
                  />
                ) : (
                  <span aria-hidden className="mt-6 block h-px w-10 bg-foreground" />
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

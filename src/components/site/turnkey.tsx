import turnkeyHome from "@/assets/turnkey-home.jpg";
import { turnkeyJourney } from "@/lib/site-content";
import { Reveal, RevealImage } from "./reveal";

export function Turnkey() {
  return (
    <section className="bg-ink py-24 text-ink-foreground sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-ink-foreground/55">Signature Turnkey</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-4xl text-[clamp(2rem,5.4vw,4.25rem)] leading-[1.02] text-ink-foreground">
            One Team. One Responsibility. One Complete Home.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-foreground/70">
            Turnkey means you hold one conversation, not ten. Design, engineering, approvals,
            construction, services, interiors, finishing and landscaping run on a single schedule
            with a single point of accountability — until the keys are in your hand.
          </p>
        </Reveal>

        {/* Journey — horizontal on desktop, vertical on mobile */}
        <div className="mt-16 sm:mt-20">
          <div className="hidden lg:block">
            <div className="relative border-t border-ink-foreground/20 pt-10">
              <ol className="grid grid-cols-10">
                {turnkeyJourney.map((step, i) => (
                  <Reveal as="li" key={step} delay={i * 0.06}>
                    <div className="relative pr-4">
                      <span className="absolute -top-[42px] left-0 block h-2 w-2 -translate-y-px rounded-full bg-accent" />
                      <span className="font-display text-sm text-ink-foreground/45">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-2 text-[0.82rem] leading-snug text-ink-foreground/85">
                        {step}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          <ol className="lg:hidden">
            {turnkeyJourney.map((step, i) => (
              <Reveal as="li" key={step} delay={Math.min(i * 0.04, 0.2)}>
                <div className="relative flex gap-5 pb-7">
                  <span className="relative flex flex-col items-center">
                    <span className="mt-1.5 block h-2 w-2 rounded-full bg-accent" />
                    {i < turnkeyJourney.length - 1 ? (
                      <span className="mt-1 block w-px flex-1 bg-ink-foreground/20" />
                    ) : null}
                  </span>
                  <div>
                    <span className="font-display text-xs text-ink-foreground/45">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg text-ink-foreground/90">{step}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-16 sm:mt-20">
          <RevealImage
            src={turnkeyHome}
            alt="Completed luxury home exterior with stone facade and landscaped driveway"
            width={1920}
            height={1088}
            className="aspect-[16/9] w-full"
          />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="group relative overflow-hidden border border-ink-foreground/40 px-8 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink-foreground"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-foreground">
                Build My Home
              </span>
              <span className="absolute inset-0 translate-y-full bg-ink-foreground transition-transform duration-500 group-hover:translate-y-0" />
            </a>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-foreground/50">
              Concept to key handover
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { materials } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./reveal";

export function Materials() {
  return (
    <section className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Materials & Quality"
          title="Built With Attention to Every Detail."
          subtitle="Quality is decided long before finishing. Mixes, reinforcement, joinery, joints, glazing and final coats are checked as the work progresses — not at the end."
        />
      </div>

      <div className="mt-14 overflow-x-auto pb-4 [scrollbar-width:thin]">
        <ul className="flex w-max gap-4 px-5 sm:px-8">
          {materials.map((material, i) => (
            <Reveal as="li" key={material.title} delay={Math.min(i * 0.05, 0.3)}>
              <figure className="group w-[68vw] max-w-[320px] sm:w-[26vw]">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={material.image}
                    alt={`${material.title} material detail`}
                    width={900}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <p className="font-display text-xl text-foreground">{material.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {material.note}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

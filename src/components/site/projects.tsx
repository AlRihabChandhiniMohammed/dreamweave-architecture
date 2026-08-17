import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { projectCategories, projects, type Project } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./reveal";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Spaces We've Built."
          subtitle="A selection of residential work across villas, independent houses, interiors, renovations and landscapes. Project details shown are placeholders."
        />

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-5">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`text-[0.7rem] uppercase tracking-[0.18em] transition-colors ${
                  filter === cat
                    ? "text-foreground underline decoration-accent decoration-1 underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.button
                layout
                key={project.id}
                type="button"
                onClick={() => setSelected(project)}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, delay: Math.min(i * 0.06, 0.3), ease: [0.16, 1, 0.3, 1] }}
                className={`group relative block overflow-hidden text-left ${project.span}`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[300px]">
                  <img
                    src={project.image}
                    alt={`${project.type} project — ${project.name}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.19_0.008_60/0.78)] via-[oklch(0.19_0.008_60/0.1)] to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-ink-foreground/65">
                    {project.category} · {project.location}
                  </p>
                  <h3 className="mt-2 text-2xl text-ink-foreground">{project.name}</h3>
                  <span className="mt-3 inline-block h-px w-0 bg-accent transition-all duration-500 group-hover:w-16" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected ? (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
      className="fixed inset-0 z-[60] overflow-y-auto bg-[oklch(0.19_0.008_60/0.75)] px-0 py-0 backdrop-blur-md sm:px-6 sm:py-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="mx-auto max-w-5xl bg-background"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={`${project.name} main view`}
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="glass-panel-dark absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-ink-foreground"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>

        <div className="px-6 py-10 sm:px-10 sm:py-12">
          <p className="eyebrow">{project.category}</p>
          <h3 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] leading-tight">{project.name}</h3>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-3">
            {[
              ["Location", project.location],
              ["Project Type", project.type],
              ["Area", project.area],
              ["Architecture", project.architecture],
              ["Construction", project.construction],
              ["Interior", project.interior],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-border pt-4">
                <dt className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-2 text-sm text-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {project.gallery.map((img, i) => (
              <img
                key={`${project.id}-${i}`}
                src={img}
                alt={`${project.name} gallery image ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            ))}
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="mt-10 inline-block bg-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-accent"
          >
            Discuss a Similar Project
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      custom={delay}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </Comp>
  );
}

/** Image that scales down into place as it enters the viewport. */
export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: "inset(12% 12% 12% 12%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName ?? ""}`}
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <Reveal>
        <p className={`eyebrow ${invert ? "text-ink-foreground/60" : ""}`}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] ${
            invert ? "text-ink-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.16}>
          <p
            className={`mt-6 max-w-xl text-base leading-relaxed ${
              align === "center" ? "mx-auto" : ""
            } ${invert ? "text-ink-foreground/70" : "text-muted-foreground"}`}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

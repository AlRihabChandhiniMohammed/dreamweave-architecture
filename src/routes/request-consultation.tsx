import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { SiteNav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Reveal, SectionHeading } from "@/components/site/reveal";
import { company, projectTypeOptions, serviceOptions } from "@/lib/site-content";

const fieldClass =
  "w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

export const Route = createFileRoute("/request-consultation")({
  head: () => ({
    meta: [
      { title: "Request a Consultation | [COMPANY NAME]" },
      {
        name: "description",
        content:
          "Tell us about your plot, requirements and timeline. Our team will get in touch with you shortly.",
      },
    ],
  }),
  component: RequestConsultation,
});

function RequestConsultation() {
  const [submitting, setSubmitting] = useState(false);

  const waHref = company.phoneRaw ? `https://wa.me/${company.phoneRaw}` : "#";
  const telHref = company.phoneRaw ? `tel:+${company.phoneRaw}` : "#";

  return (
    <>
      <SiteNav />
      <main className="pt-[68px] lg:pt-[88px]">
        <section className="bg-secondary/60 py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Request a Consultation"
                title="Let's Build Something Extraordinary."
                subtitle="Tell us about your project and our team will get in touch with you."
              />

              <Reveal delay={0.16}>
                <ul className="mt-12 space-y-6">
                  <li>
                    <a href={telHref} className="group flex items-center gap-4">
                      <Phone className="h-5 w-5 text-accent" strokeWidth={1} />
                      <span>
                        <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                          Call Us
                        </span>
                        <span className="text-sm text-foreground group-hover:text-accent">
                          {company.phoneDisplay}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={waHref}
                      target={company.phoneRaw ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-4"
                    >
                      <MessageCircle className="h-5 w-5 text-accent" strokeWidth={1} />
                      <span>
                        <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                          WhatsApp Us
                        </span>
                        <span className="text-sm text-foreground group-hover:text-accent">
                          {company.phoneRaw
                            ? company.phoneDisplay
                            : "[Add phone number to activate]"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${company.email}`}
                      className="group flex items-center gap-4"
                    >
                      <Mail className="h-5 w-5 text-accent" strokeWidth={1} />
                      <span>
                        <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                          Email Us
                        </span>
                        <span className="text-sm text-foreground group-hover:text-accent">
                          {company.email}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <form
                  className="grid gap-8 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    const form = e.currentTarget;
                    setTimeout(() => {
                      setSubmitting(false);
                      form.reset();
                      toast.success("Thank you — your enquiry has been recorded.", {
                        description: "Our team will get in touch with you shortly.",
                      });
                    }, 600);
                  }}
                >
                  <div>
                    <label htmlFor="name" className="eyebrow">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="eyebrow">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Contact number"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="eyebrow">
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      placeholder="City / area"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="plot" className="eyebrow">
                      Plot Size
                    </label>
                    <input
                      id="plot"
                      name="plotSize"
                      placeholder="e.g. 30x40 ft"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="eyebrow">
                      Approximate Budget
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      placeholder="Approximate range"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="eyebrow">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className={fieldClass}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      {projectTypeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="servicesRequired" className="eyebrow">
                      Services Required
                    </label>
                    <select
                      id="servicesRequired"
                      name="servicesRequired"
                      multiple
                      className={`${fieldClass} h-24`}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="eyebrow">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your plot, requirements and timeline"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group relative w-full overflow-hidden bg-foreground px-8 py-5 text-[0.72rem] uppercase tracking-[0.2em] text-primary-foreground disabled:opacity-70 sm:w-auto"
                    >
                      <span className="relative z-10">
                        {submitting ? "Sending…" : "Request a Consultation"}
                      </span>
                      <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

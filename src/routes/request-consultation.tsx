import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteNav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { company, projectTypeOptions, serviceOptions } from "@/lib/site-content";

const fieldClass =
  "w-full border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-1 focus:ring-accent/40";

const selectClass =
  "h-auto w-full border border-border bg-background px-4 py-3.5 text-sm shadow-none data-[placeholder]:text-muted-foreground/60 focus:ring-accent/40";

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
  const [projectType, setProjectType] = useState("");
  const [services, setServices] = useState("");

  const waHref = company.phoneRaw ? `https://wa.me/${company.phoneRaw}` : "#";
  const telHref = company.phoneRaw ? `tel:+${company.phoneRaw}` : "#";

  return (
    <>
      <SiteNav />
      <main className="pt-[68px] lg:pt-[88px]">
        {/* Page header */}
        <section className="border-b border-border bg-secondary/50">
          <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
            <Reveal>
              <p className="eyebrow">Request a Consultation</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
                Let's Build Something Extraordinary.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Share a few details about your plot, requirements and timeline. Our team will
                review your enquiry and get in touch with you shortly.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
            {/* Contact details */}
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">Prefer to talk directly?</p>
                <h2 className="mt-4 text-3xl leading-tight">Reach Us Directly</h2>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-10 space-y-6">
                  <li>
                    <a href={telHref} className="group flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-background transition-colors group-hover:border-accent">
                        <Phone className="h-5 w-5 text-accent" strokeWidth={1} />
                      </span>
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
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-background transition-colors group-hover:border-accent">
                        <MessageCircle className="h-5 w-5 text-accent" strokeWidth={1} />
                      </span>
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
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-background transition-colors group-hover:border-accent">
                        <Mail className="h-5 w-5 text-accent" strokeWidth={1} />
                      </span>
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
                  <li className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-background">
                      <MapPin className="h-5 w-5 text-accent" strokeWidth={1} />
                    </span>
                    <span>
                      <span className="block text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                        Office
                      </span>
                      <span className="text-sm text-foreground">{company.location}</span>
                    </span>
                  </li>
                </ul>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <form
                  className="border border-border bg-secondary/40 p-6 sm:p-10"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    const form = e.currentTarget;
                    setTimeout(() => {
                      setSubmitting(false);
                      form.reset();
                      setProjectType("");
                      setServices("");
                      toast.success("Thank you — your enquiry has been recorded.", {
                        description: "Our team will get in touch with you shortly.",
                      });
                    }, 600);
                  }}
                >
                  <p className="eyebrow">Project Details</p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="eyebrow">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className={`${fieldClass} mt-3`}
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
                        className={`${fieldClass} mt-3`}
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
                        className={`${fieldClass} mt-3`}
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
                        className={`${fieldClass} mt-3`}
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
                        className={`${fieldClass} mt-3`}
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
                        className={`${fieldClass} mt-3`}
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="eyebrow">
                        Project Type
                      </label>
                      <Select value={projectType} onValueChange={setProjectType}>
                        <SelectTrigger
                          id="projectType"
                          name="projectType"
                          className={`${selectClass} mt-3`}
                        >
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypeOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="services" className="eyebrow">
                        Services Required <span className="text-accent">*</span>
                      </label>
                      <Select value={services} onValueChange={setServices}>
                        <SelectTrigger
                          id="services"
                          name="servicesRequired"
                          className={`${selectClass} mt-3`}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="eyebrow">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your plot, requirements and timeline"
                        className={`${fieldClass} mt-3 resize-none`}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group relative w-full overflow-hidden bg-foreground px-8 py-5 text-[0.72rem] uppercase tracking-[0.2em] text-primary-foreground disabled:opacity-70 sm:w-auto"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {submitting ? "Sending…" : "Request a Consultation"}
                          {!submitting && (
                            <ArrowRight
                              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                              strokeWidth={1.5}
                            />
                          )}
                        </span>
                        <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
                      </button>
                    </div>
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

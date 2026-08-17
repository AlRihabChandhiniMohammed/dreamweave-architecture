import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Turnkey } from "@/components/site/turnkey";
import { Projects } from "@/components/site/projects";
import { CinematicGallery } from "@/components/site/cinematic-gallery";
import { Materials } from "@/components/site/materials";
import { WhyUs } from "@/components/site/why-us";
import { BeforeAfter } from "@/components/site/before-after";
import { ClientJourney } from "@/components/site/client-journey";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { FloatingContact } from "@/components/site/floating-contact";
import { Footer } from "@/components/site/footer";
import { faqs, services } from "@/lib/site-content";

const title = "Complete House Construction & Turnkey Solutions | [COMPANY NAME]";
const description =
  "From architectural design and structural engineering to construction, interiors, approvals and final handover, [COMPANY NAME] provides complete turnkey house construction solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "[COMPANY NAME]",
          description,
          areaServed: "[Service Area]",
          makesOffer: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.description },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Services />
        <Turnkey />
        <Projects />
        <CinematicGallery />
        <Materials />
        <WhyUs />
        <BeforeAfter />
        <ClientJourney />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}

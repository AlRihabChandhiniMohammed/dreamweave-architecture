import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./reveal";

export function Faq() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title="Questions, Answered." />
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="items-start gap-6 py-6 text-left font-display text-xl leading-snug hover:no-underline sm:text-2xl [&>svg]:mt-1 [&>svg]:size-5 [&>svg]:text-accent">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

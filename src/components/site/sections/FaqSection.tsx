"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-config";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-cream border-t border-border/60"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl font-semibold text-foreground"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Respuestas a las consultas más comunes que recibimos
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="1" className="w-full">
          {faqs.map((f) => (
            <AccordionItem
              key={f.id}
              value={f.id}
              className="border-b border-border/80"
            >
              <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-medium text-foreground hover:text-gold hover:no-underline py-5">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed pb-5">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

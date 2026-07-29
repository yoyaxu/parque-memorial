import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    q: "¿Están disponibles las 24 horas?",
    a: "Sí. Nuestro equipo está disponible 24 horas, los 7 días de la semana, incluyendo feriados. Llámanos en cualquier momento y te atenderemos de inmediato. Sabemos que los momentos difíciles no tienen horario.",
  },
  {
    q: "¿Qué incluye un servicio funerario básico?",
    a: "Nuestro Plan Esencial incluye sala de velación por 24 horas, ataúd estándar, traslado local en carroza fúnebre, trámites legales básicos y asesoría permanente. Para servicios más completos, consulta nuestro Plan Integral con capilla privada y traslados nacionales.",
  },
  {
    q: "¿Ofrecen planes de pago o preneed?",
    a: "Sí. Tenemos planes preneed que permiten planificar con anticipación y pagar en cuotas mensuales desde RD$2,500. El precio se congela al momento de la firma, protegiéndote de la inflación. Sin examen médico y transferible a familiares directos.",
  },
  {
    q: "¿Qué áreas cubren para traslados?",
    a: "Cubrimos La Romana, Higüey y toda la región este. También coordinamos traslados nacionales a cualquier punto del país, así como traslados internacionales con la documentación y permisos necesarios.",
  },
  {
    q: "¿Cuándo va a estar listo el Parque Memorial?",
    a: "El Parque Memorial es un proyecto en desarrollo. La Fase 1 (nichos verticales) está próxima a inaugurarse. Las reservas ya están abiertas para familias que quieran apartar su lugar con anticipación. Puedes conocer más detalles del proyecto en la página dedicada.",
  },
  {
    q: "¿Puedo reservar un lugar en el Parque Memorial sin compromiso?",
    a: "Sí. Ofrecemos asesoría gratuita y sin compromiso para familias interesadas en el Parque Memorial. Un asesor te mostrará el sitio, te explicará las opciones (nichos, parcelas, mausoleo, jardín memorial) y los planes de pago disponibles. Solo comprométete cuando estés seguro.",
  },
  {
    q: "¿Aceptan seguros funerarios?",
    a: "Sí, trabajamos con las principales aseguradoras del país. Si tienes un seguro funerario, coordina con nosotros y gestionamos directamente con la aseguradora. También podemos asesorarte sobre la contratación de uno si aún no lo tienes.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-24 bg-secondary/40 border-y border-border" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Preguntas frecuentes
          </span>
          <h2
            id="faq-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Resolvemos tus dudas
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Si tienes una pregunta que no encuentras aquí, no dudes en
            contactarnos directamente.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-serif text-base sm:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            ¿No encuentras la respuesta que buscas?{" "}
            <Link href="/#contacto" className="text-primary font-medium hover:underline">
              Contáctanos
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

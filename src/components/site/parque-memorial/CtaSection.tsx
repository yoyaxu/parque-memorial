import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-foreground" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
          ¿Listo para apartar tu lugar en el Parque Memorial?
        </h2>
        <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
          Nuestros asesores están disponibles para responder tus preguntas,
          mostrarte el sitio y ayudarte a elegir la opción ideal para tu
          familia. Sin compromiso.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-7 text-sm font-semibold text-accent-foreground shadow hover:bg-accent/90 transition-colors"
          >
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
            Escribir por WhatsApp
          </a>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
        </div>
        <p className="mt-6 text-sm text-white/60">
          Atención inmediata · Disponibles 24 horas
        </p>
      </div>
    </section>
  );
}

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  const items = [
    {
      icon: Phone,
      label: "Teléfono",
      value: siteConfig.phone,
      href: siteConfig.phoneHref,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: siteConfig.emailHref,
    },
    {
      icon: MapPin,
      label: "Dirección",
      value: siteConfig.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        siteConfig.address
      )}`,
    },
    {
      icon: Clock,
      label: "Disponibilidad",
      value: siteConfig.hours,
    },
  ];

  return (
    <section id="contacto" className="py-20 sm:py-24 bg-secondary/40 border-t border-border" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Contacto
            </span>
            <h2
              id="contact-heading"
              className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
            >
              Estamos disponibles cuando nos necesites
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Nuestro equipo está disponible 24 horas, los 7 días de la semana.
              Llámanos o escríbenos por WhatsApp para atención inmediata, o
              agenda una visita al Parque Memorial.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {items.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium mt-0.5 break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary"
                  >
                    {content}
                  </a>
                ) : (
                  <Card key={item.label} className="p-4 border-border bg-card">
                    <CardContent className="p-0">{content}</CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href={siteConfig.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar ahora
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold">
              Aparta tu lugar en el Parque Memorial
            </h3>
            <p className="mt-3 text-muted-foreground">
              Reservas abiertas para Fase 1 (nichos verticales). Nuestros
              asesores te ayudarán a elegir la opción ideal para tu familia,
              con planes de pago flexibles y sin compromiso.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Asesoría gratuita y sin compromiso",
                "Planes de pago personalizados",
                "Visita guiada al sitio disponible",
                "Mantenimiento permanente incluido",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-7 w-full" size="lg">
              <a href="/parque-memorial#reservar">Reservar ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

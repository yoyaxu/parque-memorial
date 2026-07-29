import { Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="bg-background border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-divider text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            Contacto
          </p>
          <h2
            id="contacto-heading"
            className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground"
          >
            Estamos a su lado, siempre
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
            Visítenos en nuestra sede o llámenos a cualquier hora. Servicio
            disponible 24 horas, los 365 días del año.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Mapa */}
          <div className="lg:col-span-2 bg-card border border-border rounded-sm overflow-hidden">
            <iframe
              title="Ubicación de Funeraria Romana en La Romana"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-69.0480%2C18.4200%2C-69.0280%2C18.4320&layer=mapnik&marker=18.4260%2C-69.0380"
              className="w-full h-[400px] lg:h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Caja de emergencia */}
          <aside className="bg-noir text-white p-8 rounded-sm flex flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Línea de emergencia
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold">
              Atención inmediata
            </h3>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              Si necesita atención inmediata, no dude en llamarnos a cualquier
              hora del día o de la noche.
            </p>

            <a
              href={siteConfig.emergencyHref}
              className="mt-6 flex items-center justify-center gap-2 bg-gold text-black font-semibold text-lg py-3 rounded-sm hover:bg-gold/90 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.emergencyPhone}
            </a>

            <div className="mt-8 space-y-5 pt-6 border-t border-white/10">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">
                    Dirección
                  </p>
                  <p className="mt-1 text-sm text-white/90 leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">
                    Horario
                  </p>
                  <p className="mt-1 text-sm text-white/90 leading-relaxed">
                    {siteConfig.hours}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-sm text-white/90">
                    {siteConfig.whatsapp}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Car, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function LocationSection() {
  const mapsQuery = encodeURIComponent(
    "Carretera La Romana - Higüeral, La Romana, República Dominicana"
  );
  const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <section
      className="py-20 sm:py-24 bg-secondary/40 border-y border-border"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Ubicación
            </span>
            <h2
              id="location-heading"
              className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
            >
              Fácil acceso desde La Romana
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              El Parque Memorial está ubicado en la carretera La Romana -
              Higüeral, a solo 15 minutos del centro de La Romana. Acceso
              asfaltado, señalización clara y amplio estacionamiento.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {siteConfig.address}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Car className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium">Cómo llegar</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    15 min desde La Romana · 35 min desde Higüey · Acceso asfaltado
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Navigation className="mr-2 h-4 w-4" aria-hidden="true" />
                Cómo llegar (Google Maps)
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-sm min-h-[400px]">
            <iframe
              src={mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa: Parque Memorial en La Romana"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

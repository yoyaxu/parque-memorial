import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, TreePine } from "lucide-react";
import { siteConfig, navItems } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <TreePine className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="font-serif text-base font-semibold">
                Parque Memorial
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Servicios funerarios integrales en La Romana, República Dominicana.
              Acompañamos a tu familia con respeto y dignidad en cada momento.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del pie de página">
            <h2 className="font-serif text-sm font-semibold uppercase tracking-wider mb-4">
              Navegación
            </h2>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h2 className="font-serif text-sm font-semibold uppercase tracking-wider mb-4">
              Contacto
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href={siteConfig.phoneHref}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href={siteConfig.emailHref}
                  className="text-muted-foreground hover:text-foreground break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-muted-foreground">{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div>
            <h2 className="font-serif text-sm font-semibold uppercase tracking-wider mb-4">
              Disponibilidad
            </h2>
            <div className="flex items-start gap-3 text-sm">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-muted-foreground">{siteConfig.hours}</p>
            </div>
            <div className="mt-5 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                Parque Memorial
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Reservas abiertas. Aparta tu lugar con anticipación.
              </p>
              <Link
                href="/parque-memorial#reservar"
                className="text-sm font-medium text-primary hover:underline"
              >
                Conoce más →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            La Romana, República Dominicana
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Flame,
  ChevronRight,
} from "lucide-react";
import { siteConfig, navItems } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-noir text-white">
      {/* Promo Parque Memorial */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-1">
                Próximamente · La Romana
              </p>
              <p className="font-serif text-2xl font-semibold">
                Parque Memorial Romana
              </p>
              <p className="mt-1 text-sm text-white/60">
                Un nuevo espacio de paz y memoria está naciendo.
              </p>
            </div>
            <Link
              href="/parque-memorial"
              className="inline-flex items-center gap-2 border border-gold text-gold px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-gold hover:text-black transition-colors"
            >
              Conocer el proyecto
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold">
                <Flame className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-base font-semibold">
                  Funeraria Romana
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-gold/80">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              Lo que comenzó como un pequeño servicio familiar frente al
              Cementerio No. 1 se ha convertido en una institución querida por
              toda la comunidad. Servicio 24 horas, 365 días.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-gold hover:border-gold transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-gold hover:border-gold transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del pie de página">
            <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Navegación
            </h2>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Contacto
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={siteConfig.phoneHref}
                  className="text-white/70 hover:text-gold"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={siteConfig.emailHref}
                  className="text-white/70 hover:text-gold break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-white/70 leading-relaxed">
                  {siteConfig.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Disponibilidad */}
          <div>
            <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Disponibilidad
            </h2>
            <div className="flex items-start gap-3 text-sm">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <p className="text-white/70 leading-relaxed">{siteConfig.hours}</p>
            </div>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-gold text-black font-semibold px-4 py-2.5 rounded-sm text-sm hover:bg-gold/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              WhatsApp · {siteConfig.whatsapp}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/50">
            La Romana, República Dominicana
          </p>
        </div>
      </div>
    </footer>
  );
}

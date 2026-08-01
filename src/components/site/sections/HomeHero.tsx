import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
  Users,
  Clock,
  ShieldCheck,
  Phone,
  MapPin,
  Heart,
  Building2,
  ClipboardList,
  Flame,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, services, obituaries } from "@/lib/site-config";

const pillars = [
  {
    icon: Users,
    title: "Comunidad",
    text: "Conocemos a las familias de La Romana y sus tradiciones.",
  },
  {
    icon: Clock,
    title: "Disponibilidad",
    text: "24 horas, 365 días. Cuando nos necesites, estamos ahí.",
  },
  {
    icon: ShieldCheck,
    title: "Transparencia",
    text: "Precios claros, sin cargos sorpresa. Lo acordado es lo que pagas.",
  },
];

const serviceIconMap: Record<string, typeof Building2> = {
  Building2,
  ClipboardList,
  Flame,
};

export function HomeHero() {
  return (
    <>
      {/* ===== HERO con foto de fondo — tono charcoal brown + sepia ===== */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-noir text-white"
        style={{ backgroundColor: "#2A2520" }}
      >
        {/* Imagen de fondo con tratamiento sepia + carbón */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')",
            filter: "sepia(0.45) brightness(0.42) saturate(0.55) contrast(1.05) hue-rotate(-8deg)",
          }}
          aria-hidden="true"
        />
        {/* Overlay carbón marrón cálido — vertical (más oscuro arriba y abajo) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(42,37,32,0.92) 0%, rgba(42,37,32,0.68) 50%, rgba(26,22,18,0.96) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Overlay lateral — oscurece la izquierda para legibilidad del texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(26,22,18,0.88) 0%, rgba(42,37,32,0.45) 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        {/* Veladura sepia superior — da unidad cromática */}
        <div
          className="absolute inset-0 mix-blend-soft-light"
          style={{
            background:
              "linear-gradient(180deg, rgba(184,149,106,0.18) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Columna izquierda */}
            <div className="lg:col-span-3 max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-soft">
                {siteConfig.tagline}
              </span>
              <h1
                id="hero-heading"
                className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.08] tracking-tight"
              >
                Acompañamos a su familia con{" "}
                <span className="text-gold-soft italic font-medium">
                  respeto y dignidad
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/80">
                Servicio funerario en La Romana con cobertura nacional y
                traslados internacionales a Haití. 24 horas, los 365 días del
                año, con la cercanía de quienes conocen a cada familia.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-white hover:bg-gold/90"
                >
                  <a href={siteConfig.phoneHref}>
                    <Phone className="mr-2 h-4 w-4" />
                    Llamar ahora · {siteConfig.phone}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/servicios">
                    Ver servicios
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Pillars inline */}
              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {pillars.map((p) => (
                  <li key={p.title} className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-soft">
                      <p.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-serif text-base font-medium leading-tight">
                        {p.title}
                      </p>
                      <p className="mt-0.5 text-xs text-white/70 leading-relaxed">
                        {p.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna derecha — card de obituarios en vivo */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-white/15 bg-white/5 backdrop-blur-md p-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h2 className="font-serif text-lg font-semibold">
                    Obituarios de hoy
                  </h2>
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-red-700/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-red-300">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                    {obituaries.length} activos
                  </span>
                </div>

                <ul className="divide-y divide-white/10">
                  {obituaries.map((o) => (
                    <li key={o.id} className="py-3.5 flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-serif text-sm text-gold-soft">
                        {o.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          {o.name}
                        </p>
                        <p className="text-xs text-white/60 mt-0.5">
                          {o.location}
                        </p>
                        <p className="text-xs text-white/60">{o.schedule}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/obituarios"
                  className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium uppercase tracking-wider text-gold-soft hover:text-gold transition-colors"
                >
                  Ver todos los obituarios
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Onda inferior */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </div>
      </section>

      {/* ===== SERVICIOS PRINCIPALES — compacto ===== */}
      <section id="servicios" className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="section-divider text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Nuestros servicios
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground">
              Lo esencial para una despedida digna
            </h2>
            <p className="mt-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
              Tres servicios principales que cubren la mayoría de las
              necesidades. Conozca la oferta completa en la página de servicios.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIconMap[s.icon] ?? Building2;
              return (
                <article
                  key={s.id}
                  className="bg-card border border-border/80 rounded-sm p-7 hover:border-gold transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {s.description}
                  </p>
                  <Link
                    href="/servicios"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-gold group-hover:underline"
                  >
                    Conocer más
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/servicios">
                Ver todos los servicios
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== TEASER PARQUE MEMORIAL ===== */}
      <section className="bg-noir text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80')",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-soft mb-2">
                Próximamente · La Romana
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold">
                Parque Memorial Romana
              </h2>
              <p className="mt-4 text-[15px] sm:text-base text-white/75 leading-relaxed">
                Un nuevo espacio de paz y memoria está naciendo. Más de 40,000
                m² desarrollados en alianza con el Ayuntamiento de La Romana
                bajo modelo APP.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gold text-white hover:bg-gold/90"
                >
                  <Link href="/parque-memorial">
                    Conocer el proyecto
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-sm border border-white/15 bg-white/5 p-5">
                <p className="font-serif text-3xl font-semibold text-gold-soft">
                  40,000+
                </p>
                <p className="mt-1 text-xs text-white/70 uppercase tracking-wider">
                  m² de espacio
                </p>
              </div>
              <div className="rounded-sm border border-white/15 bg-white/5 p-5">
                <p className="font-serif text-3xl font-semibold text-gold-soft">
                  10,000+
                </p>
                <p className="mt-1 text-xs text-white/70 uppercase tracking-wider">
                  Nichos y parcelas
                </p>
              </div>
              <div className="rounded-sm border border-white/15 bg-white/5 p-5">
                <p className="font-serif text-3xl font-semibold text-gold-soft">
                  APP
                </p>
                <p className="mt-1 text-xs text-white/70 uppercase tracking-wider">
                  Alianza público-privada
                </p>
              </div>
              <div className="rounded-sm border border-white/15 bg-white/5 p-5">
                <p className="font-serif text-3xl font-semibold text-gold-soft">
                  2026
                </p>
                <p className="mt-1 text-xs text-white/70 uppercase tracking-wider">
                  Inauguración
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEASER TIENDA + CTA FINAL ===== */}
      <section className="bg-cream-100 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-2">
                Tienda · Arreglos florales
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                Envíe una corona o arreglo floral
              </h2>
              <p className="mt-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
                Explore nuestra tienda de arreglos florales y envíos directos
                al velatorio. Seleccione el producto, elija el velatorio de
                destino y coordine la entrega con nuestro equipo.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-foreground text-background hover:bg-gold hover:text-white">
                  <Link href="/tienda">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Ir a la tienda
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/obituarios">
                    <Heart className="mr-2 h-4 w-4" />
                    Ver obituarios
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80"
                  alt="Corona de flores"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-cream-200 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1525164286253-04e68b9c4a45?auto=format&fit=crop&w=600&q=80"
                  alt="Arreglo floral"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            ¿Necesita hablar con alguien ahora?
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Nuestro equipo está disponible 24 horas, los 365 días del año.
            Llámenos y le orientaremos con calma y sin compromiso.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gold text-white hover:bg-gold/90"
            >
              <a href={siteConfig.phoneHref}>
                <Phone className="mr-2 h-4 w-4" />
                {siteConfig.phone}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp · {siteConfig.whatsapp}
              </a>
            </Button>
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {siteConfig.addressShort}
          </p>
        </div>
      </section>
    </>
  );
}

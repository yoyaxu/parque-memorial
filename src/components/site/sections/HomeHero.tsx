import Link from "next/link";
import { ChevronRight, Users, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const pillars = [
  {
    icon: Users,
    title: "Somos parte de la comunidad.",
    text: "Conocemos a las familias, sus tradiciones y sus necesidades.",
  },
  {
    icon: Clock,
    title: "Disponibilidad",
    text: "24 horas, 365 días al año. Cuando nos necesites, estamos ahí, sin excusas ni demoras.",
  },
  {
    icon: ShieldCheck,
    title: "Transparencia",
    text: "Precios claros, sin cargos sorpresa. Lo acordado es lo que pagas, siempre.",
  },
];

export function HomeHero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Columna izquierda — narrativa */}
          <div className="lg:col-span-3 max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
              {siteConfig.tagline}
            </span>
            <h1
              id="hero-heading"
              className="mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-foreground"
            >
              Acompañamos a su familia con{" "}
              <span className="text-gold italic">respeto y dignidad</span>
            </h1>
            <div className="mt-6 space-y-4 text-[15px] sm:text-base leading-relaxed text-muted-foreground">
              <p>
                Lo que comenzó como un pequeño servicio familiar frente al
                Cementerio No. 1 se ha convertido en una institución querida por
                toda la comunidad.
              </p>
              <p>
                Nos conocen como <strong className="text-foreground">“La Funeraria del Pueblo”</strong>{" "}
                porque hemos hecho de la cercanía y el respeto nuestra forma de
                servir. Cada familia que llega a nuestra puerta recibe la misma
                atención digna, sin distinción de origen, recursos o creencias.
              </p>
              <p>
                Hoy, con cobertura en todo el territorio nacional y traslados
                internacionales a Haití, mantenemos viva la calidez de los
                primeros días. Combinamos tradición e infraestructura moderna
                para ofrecer lo que ninguna otra funeraria puede: la mirada
                cercana de quien sabe que cada despedida es única e irrepetible.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-gold text-black hover:bg-gold/90">
                <Link href="#planes">
                  Ver planes funerarios
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground hover:text-white"
              >
                <a href={siteConfig.phoneHref}>Llamar ahora</a>
              </Button>
            </div>
          </div>

          {/* Columna derecha — pilares */}
          <aside className="lg:col-span-2 bg-noir text-white p-8 lg:p-10 rounded-sm">
            <h2 className="font-serif text-xl font-semibold mb-6 text-gold">
              Por qué elegirnos
            </h2>
            <ul className="space-y-7">
              {pillars.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-medium text-white leading-tight">
                      {p.title}
                    </p>
                    <p className="mt-1 text-sm text-white/70 leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

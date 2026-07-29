import Link from "next/link";
import { Bell, ChevronRight, Check } from "lucide-react";

const features = [
  "8,000 nichos verticales + 2,000 parcelas",
  "Capilla ecuménica y mausoleos familiares",
  "Crematorio ecológico (Fase 2)",
  "Seguridad 24/7 y mantenimiento permanente",
];

export function CementerioProntoSection() {
  return (
    <section
      aria-labelledby="pronto-heading"
      className="bg-noir text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold">
                <Bell className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                Próximamente
              </span>
            </div>
            <h2
              id="pronto-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold leading-tight"
            >
              Parque Memorial Romana
            </h2>
            <p className="mt-5 text-[15px] sm:text-base text-white/75 leading-relaxed">
              Próximamente abriremos el Parque Memorial Romana, un cementerio
              moderno desarrollado en alianza con el Ayuntamiento de La Romana
              bajo modelo APP. Más de 40,000 m² con 8,000 nichos verticales,
              2,000 parcelas tradicionales, capilla ecuménica, jardines
              memoriales y un crematorio ecológico. Inversión 100% privada,
              supervisión municipal y 5% de espacios reservados para familias
              vulnerables.
            </p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/parque-memorial"
                className="inline-flex items-center gap-2 text-gold font-semibold text-base hover:gap-3 transition-all"
              >
                Quiero enterarme primero
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Tarjeta lateral */}
          <aside className="bg-noir-deep border border-white/10 p-8 rounded-sm">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/80">Ubicación</p>
                <p className="mt-1 font-serif text-lg">
                  Carretera La Romana – Higüey
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/80">Extensión</p>
                <p className="mt-1 font-serif text-lg">Más de 40,000 m²</p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/80">Fase actual</p>
                <p className="mt-1 font-serif text-lg">
                  Proyecto en aprobación final
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/80">Concesión</p>
                <p className="mt-1 font-serif text-lg">25 años · APP municipal</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

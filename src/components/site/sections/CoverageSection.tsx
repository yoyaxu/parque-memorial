import { MapPin } from "lucide-react";
import { coverageRegions } from "@/lib/site-config";

export function CoverageSection() {
  return (
    <section
      id="cobertura"
      aria-labelledby="cobertura-heading"
      className="bg-cream border-t border-border/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Texto */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Cobertura
            </p>
            <h2
              id="cobertura-heading"
              className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight"
            >
              Donde nos necesite, allí estamos
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Cobertura en toda la República Dominicana y traslados
              internacionales a Haití.
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Flota propia disponible 24 horas para llegar a donde su familia
              nos necesita.
            </p>

            <div className="mt-8 space-y-6">
              {coverageRegions.map((r) => (
                <div key={r.region}>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      Región {r.region}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] bg-gold/15 text-gold px-2 py-0.5 rounded-sm">
                      {r.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {r.cities.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1.5 text-xs bg-card border border-border rounded-sm px-2.5 py-1.5 text-foreground/80"
                      >
                        <MapPin className="h-3 w-3 text-gold" aria-hidden="true" />
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    ⓘ {r.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mapa */}
          <div className="relative bg-noir rounded-sm overflow-hidden aspect-[4/5] lg:aspect-[4/4]">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(197,160,89,0.15) 0%, transparent 60%), linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 100%)",
              }}
              aria-hidden="true"
            />
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 w-full h-full"
              aria-label="Mapa de la República Dominicana"
            >
              {/* Silueta estilizada de RD */}
              <path
                d="M 180 80 Q 220 75 250 100 Q 280 130 290 180 Q 295 220 280 260 Q 270 290 250 310 Q 230 330 220 370 Q 215 400 200 420 Q 180 430 160 410 Q 140 380 130 340 Q 120 290 125 240 Q 130 180 145 130 Q 160 95 180 80 Z"
                fill="none"
                stroke="oklch(0.78 0.1 75)"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <path
                d="M 260 150 Q 280 160 290 180 Q 295 200 285 220 Q 270 230 255 225 Q 245 210 250 180 Q 252 160 260 150 Z"
                fill="none"
                stroke="oklch(0.78 0.1 75)"
                strokeWidth="1.5"
                opacity="0.6"
              />

              {/* Marcadores de ciudades */}
              {[
                { x: 230, y: 220, label: "La Romana" },
                { x: 250, y: 200, label: "Higüey" },
                { x: 200, y: 160, label: "Samaná" },
                { x: 160, y: 200, label: "Santiago" },
                { x: 150, y: 140, label: "Puerto Plata" },
                { x: 220, y: 270, label: "San Pedro" },
                { x: 210, y: 240, label: "El Seibo" },
              ].map((c) => (
                <g key={c.label}>
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r="5"
                    fill="oklch(0.78 0.1 75)"
                    opacity="0.9"
                  />
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r="10"
                    fill="none"
                    stroke="oklch(0.78 0.1 75)"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <text
                    x={c.x + 12}
                    y={c.y + 4}
                    fill="white"
                    fontSize="10"
                    fontFamily="ui-sans-serif, system-ui"
                  >
                    {c.label}
                  </text>
                </g>
              ))}
            </svg>

            <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-gold/60 text-gold text-xs font-serif">
              N
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-noir/90 backdrop-blur border border-white/10 rounded-sm p-3">
              <p className="text-xs text-white/80">
                <span className="text-gold font-semibold">★ La Romana</span> —
                Sede principal · Cobertura nacional + traslados a Haití
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Heart,
  Flower2,
  ChevronRight,
  Search,
} from "lucide-react";
import { obituaries } from "@/lib/site-config";

export function ObituariosExplorer() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return obituaries;
    return obituaries.filter(
      (o) =>
        o.name.toLowerCase().includes(q) ||
        o.location.toLowerCase().includes(q) ||
        o.schedule.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nombre, sala o fecha…"
              className="w-full rounded-sm border border-border bg-card pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
              aria-label="Buscar obituarios"
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}
            {query && ` para "${query}"`}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-serif text-2xl text-foreground mb-2">
              No encontramos resultados
            </p>
            <p className="text-sm text-muted-foreground">
              Pruebe con otro nombre o revise los obituarios anteriores
              contactándonos directamente.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((o) => (
              <article
                key={o.id}
                className="bg-card border border-border rounded-sm overflow-hidden shadow-sm hover:shadow-md hover:border-gold transition-all"
              >
                <div className="p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-noir text-white font-serif text-lg font-semibold">
                      {o.initials}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold text-foreground leading-tight">
                        {o.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {o.age} años · Falleció el {o.deathDate}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-sm bg-red-700/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-red-700">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-700 animate-pulse" />
                      En curso
                    </span>
                  </div>

                  <blockquote className="mt-5 pl-4 border-l-2 border-gold/50 italic text-sm text-foreground/85 leading-relaxed">
                    “{o.quote}”
                  </blockquote>

                  <div className="mt-6 space-y-2.5 text-sm">
                    <p className="flex items-start gap-2.5 text-foreground/85">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <span>{o.location}</span>
                    </p>
                    <p className="flex items-start gap-2.5 text-foreground/85">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <span>{o.schedule}</span>
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Heart className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                      {o.condolences} condolencias
                    </span>
                    <Link
                      href={`/tienda?velatorio=${encodeURIComponent(o.velatorioId)}`}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 -mx-1 rounded-sm text-foreground font-semibold hover:bg-foreground hover:text-background transition-colors"
                    >
                      <Flower2 className="h-3.5 w-3.5" aria-hidden="true" />
                      Enviar flores
                    </Link>
                    <button
                      className="flex items-center gap-1 text-gold font-medium hover:underline"
                      type="button"
                    >
                      Ver detalles
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

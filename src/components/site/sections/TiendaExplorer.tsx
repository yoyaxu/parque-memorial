"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, Search, ShoppingBag, MapPin, Flower2 } from "lucide-react";
import {
  products,
  productCategories,
  velatorios,
  formatPrice,
  type ProductCategory,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Filter = "todos" | ProductCategory;

export function TiendaExplorer() {
  const [filter, setFilter] = useState<Filter>("todos");
  const [query, setQuery] = useState("");

  // Velatorio pre-seleccionado (llega desde el obituario vía ?velatorio=<id>)
  const searchParams = useSearchParams();
  const velatorioId = searchParams.get("velatorio") ?? "";
  const preselectedVelatorio = velatorioId
    ? velatorios.find((v) => v.id === velatorioId)
    : undefined;
  const velatorioQS = velatorioId
    ? `?velatorio=${encodeURIComponent(velatorioId)}`
    : "";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = filter === "todos" || p.category === filter;
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [filter, query]);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Aviso de velatorio pre-seleccionado desde el obituario */}
        {preselectedVelatorio && (
          <div className="mb-8 rounded-sm border border-foreground/15 bg-foreground text-background p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <Flower2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <p className="text-sm sm:text-base">
                Pedido para el velatorio:{" "}
                <span className="font-serif font-semibold">
                  {preselectedVelatorio.name}
                </span>
                {preselectedVelatorio.city !== "—" && (
                  <span className="text-background/70">
                    {" · "}{preselectedVelatorio.city}
                  </span>
                )}
              </p>
            </div>
            <Link
              href="/tienda"
              className="text-[10px] uppercase tracking-wider text-background/60 hover:text-gold underline-offset-2 hover:underline shrink-0"
              aria-label="Quitar velatorio pre-seleccionado"
            >
              (cambiar)
            </Link>
          </div>
        )}

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-10">
          {/* Filtros por categoría */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilter("todos")}
              className={cn(
                "rounded-sm border px-4 py-2 text-[12px] font-medium uppercase tracking-wider transition-colors",
                filter === "todos"
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-foreground/70 hover:border-gold hover:text-gold"
              )}
            >
              Todos
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "rounded-sm border px-4 py-2 text-[12px] font-medium uppercase tracking-wider transition-colors",
                  filter === cat.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground/70 hover:border-gold hover:text-gold"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar productos…"
              className="w-full rounded-sm border border-border bg-card pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
              aria-label="Buscar productos"
            />
          </div>
        </div>

        <p className="mb-8 text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "producto" : "productos"}
          {filter !== "todos" &&
            ` en ${productCategories.find((c) => c.id === filter)?.label}`}
        </p>

        {/* Grid de productos */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground/40 mb-4" />
            <p className="font-serif text-2xl text-foreground mb-2">
              No encontramos productos
            </p>
            <p className="text-sm text-muted-foreground">
              Pruebe con otra búsqueda o categoría.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => {
              const href = `/tienda/${p.slug}${velatorioQS}`;
              return (
                <article
                  key={p.id}
                  className="group bg-card border border-border rounded-sm overflow-hidden shadow-sm hover:shadow-md hover:border-gold transition-all"
                >
                  <Link
                    href={href}
                    className="block aspect-square overflow-hidden bg-cream-200"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-5">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-gold">
                      {productCategories.find((c) => c.id === p.category)?.label}
                    </span>
                    <h3 className="mt-1.5 font-serif text-lg font-semibold text-foreground leading-tight">
                      <Link
                        href={href}
                        className="hover:text-gold transition-colors"
                      >
                        {p.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-[13px] text-muted-foreground line-clamp-2">
                      {p.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-serif text-lg font-semibold text-foreground">
                        {formatPrice(p.price, p.currency)}
                      </span>
                      <Link
                        href={href}
                        className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-gold hover:underline"
                      >
                        Ver detalle
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Nota inferior sobre velatorios */}
        <div className="mt-14 rounded-sm border border-border bg-cream-100 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                ¿Cómo funciona la entrega en velatorios?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Al seleccionar cualquier producto, podrá elegir el velatorio
                de destino (Sala Principal, Sala 2, Capilla La Atarraya,
                Cementerio No.1 u otro). Nuestro equipo coordina la entrega
                directamente con el servicio funerario en curso, normalmente
                en un plazo de 2 a 4 horas dentro de La Romana.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                ¿Dudas? Llámenos al{" "}
                <a
                  href="tel:+18098134076"
                  className="text-gold font-medium hover:underline"
                >
                  (809) 813-4076
                </a>{" "}
                o escríbanos por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

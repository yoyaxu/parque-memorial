"use client";

import { useState } from "react";
import {
  ShoppingBag,
  MapPin,
  Check,
  Phone,
  MessageCircle,
  Truck,
  ShieldCheck,
  ChevronRight,
  Flower2,
} from "lucide-react";
import {
  velatorios,
  formatPrice,
  siteConfig,
  type Product,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ProductPurchase({
  product,
  preselectedVelatorio = "",
}: {
  product: Product;
  preselectedVelatorio?: string;
}) {
  const [velatorioId, setVelatorioId] = useState(preselectedVelatorio);
  const [quantity, setQuantity] = useState(1);
  const [dedicatoria, setDedicatoria] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedVelatorio = velatorios.find((v) => v.id === velatorioId);
  const subtotal = product.price * quantity;

  const isValid =
    velatorioId && buyerName.trim() && buyerPhone.trim().length >= 8;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid || !selectedVelatorio) return;

    const lines = [
      `*Pedido — Tienda Funeraria Romana*`,
      ``,
      `*Producto:* ${product.name}`,
      `*Cantidad:* ${quantity}`,
      `*Precio unitario:* ${formatPrice(product.price, product.currency)}`,
      `*Subtotal:* ${formatPrice(subtotal, product.currency)}`,
      ``,
      `*Velatorio de destino:* ${selectedVelatorio.name}`,
      `*Dirección:* ${selectedVelatorio.address}`,
      selectedVelatorio.phone ? `*Teléfono velatorio:* ${selectedVelatorio.phone}` : null,
      ``,
      dedicatoria.trim() ? `*Dedicatoria:*` : null,
      dedicatoria.trim() ? dedicatoria.trim() : null,
      dedicatoria.trim() ? `` : null,
      `*Datos del comprador:*`,
      `Nombre: ${buyerName.trim()}`,
      `Teléfono: ${buyerPhone.trim()}`,
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join("\n"));
    const url = `${siteConfig.whatsappHref}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <>
      {/* Aviso de velatorio pre-seleccionado desde el obituario */}
      {preselectedVelatorio && selectedVelatorio && (
        <div className="mb-8 rounded-sm border border-foreground/15 bg-foreground text-background p-4 sm:p-5 flex flex-wrap items-center gap-3">
          <Flower2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <p className="text-sm sm:text-base flex-1 min-w-0">
            Este arreglo se enviará al velatorio:{" "}
            <span className="font-serif font-semibold">
              {selectedVelatorio.name}
            </span>
            {selectedVelatorio.city !== "—" && (
              <span className="text-background/70">
                {" · "}{selectedVelatorio.city}
              </span>
            )}
          </p>
          <span className="text-[10px] uppercase tracking-wider text-background/60 shrink-0">
            Pre-seleccionado del obituario
          </span>
        </div>
      )}

      <div className="grid lg:grid-cols-5 gap-10">
      {/* ===== Columna izquierda — galería + info ===== */}
      <div className="lg:col-span-3">
        {/* Imagen principal */}
        <div className="aspect-square rounded-sm overflow-hidden bg-cream-200 border border-border">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Features */}
        <div className="mt-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Características
          </h2>
          <ul className="space-y-2.5">
            {product.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2.5 text-sm text-foreground/85"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Descripción extendida */}
        <div className="mt-8">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
            Descripción
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Trust badges */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-sm border border-border bg-cream-100 p-4">
            <Truck className="h-5 w-5 text-gold mb-2" />
            <p className="text-xs font-semibold text-foreground">
              Entrega en 2-4 h
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">
              La Romana y alrededores
            </p>
          </div>
          <div className="rounded-sm border border-border bg-cream-100 p-4">
            <ShieldCheck className="h-5 w-5 text-gold mb-2" />
            <p className="text-xs font-semibold text-foreground">
              Flores frescas
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">
              Garantía de calidad
            </p>
          </div>
          <div className="rounded-sm border border-border bg-cream-100 p-4">
            <Phone className="h-5 w-5 text-gold mb-2" />
            <p className="text-xs font-semibold text-foreground">
              Coordinación directa
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">
              24 horas, 365 días
            </p>
          </div>
        </div>
      </div>

      {/* ===== Columna derecha — formulario de compra ===== */}
      <div className="lg:col-span-2">
        <form
          onSubmit={handleSubmit}
          className="sticky top-32 rounded-sm border border-border bg-card p-6 sm:p-7"
        >
          {/* Precio */}
          <div className="flex items-baseline justify-between pb-4 border-b border-border">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Precio
              </p>
              <p className="font-serif text-3xl font-semibold text-foreground mt-1">
                {formatPrice(product.price, product.currency)}
              </p>
            </div>
            <span
              className={cn(
                "rounded-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider",
                product.inStock
                  ? "bg-green-700/10 text-green-700"
                  : "bg-red-700/10 text-red-700"
              )}
            >
              {product.inStock ? "Disponible" : "Agotado"}
            </span>
          </div>

          {/* Selector de velatorio */}
          <div className="mt-5">
            <label
              htmlFor="velatorio"
              className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-foreground mb-2"
            >
              <MapPin className="h-3.5 w-3.5 text-gold" />
              Velatorio de destino
              <span className="text-red-700">*</span>
            </label>
            <select
              id="velatorio"
              value={velatorioId}
              onChange={(e) => setVelatorioId(e.target.value)}
              required
              className="w-full rounded-sm border border-border bg-cream px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
            >
              <option value="">Seleccione un velatorio…</option>
              {velatorios.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
            {selectedVelatorio && (
              <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
                {selectedVelatorio.address}
                {selectedVelatorio.city !== "—" && ` · ${selectedVelatorio.city}`}
              </p>
            )}
          </div>

          {/* Cantidad */}
          <div className="mt-4">
            <label
              htmlFor="cantidad"
              className="block text-[12px] font-semibold uppercase tracking-wider text-foreground mb-2"
            >
              Cantidad
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="h-10 w-10 rounded-sm border border-border text-foreground hover:border-gold hover:text-gold"
                aria-label="Disminuir cantidad"
              >
                −
              </button>
              <input
                id="cantidad"
                type="number"
                min={1}
                max={20}
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(1, Math.min(20, parseInt(e.target.value) || 1))
                  )
                }
                className="w-16 text-center rounded-sm border border-border bg-cream px-2 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                className="h-10 w-10 rounded-sm border border-border text-foreground hover:border-gold hover:text-gold"
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>
          </div>

          {/* Dedicatoria */}
          <div className="mt-4">
            <label
              htmlFor="dedicatoria"
              className="block text-[12px] font-semibold uppercase tracking-wider text-foreground mb-2"
            >
              Dedicatoria <span className="text-muted-foreground normal-case tracking-normal">(opcional)</span>
            </label>
            <textarea
              id="dedicatoria"
              value={dedicatoria}
              onChange={(e) => setDedicatoria(e.target.value)}
              rows={3}
              maxLength={300}
              placeholder="Mensaje que acompañará el arreglo floral…"
              className="w-full rounded-sm border border-border bg-cream px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold resize-none"
            />
            <p className="mt-1 text-[10px] text-muted-foreground text-right">
              {dedicatoria.length}/300
            </p>
          </div>

          {/* Datos del comprador */}
          <div className="mt-4 space-y-3">
            <div>
              <label
                htmlFor="buyer-name"
                className="block text-[12px] font-semibold uppercase tracking-wider text-foreground mb-2"
              >
                Su nombre <span className="text-red-700">*</span>
              </label>
              <input
                id="buyer-name"
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                required
                placeholder="Nombre completo"
                className="w-full rounded-sm border border-border bg-cream px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
              />
            </div>
            <div>
              <label
                htmlFor="buyer-phone"
                className="block text-[12px] font-semibold uppercase tracking-wider text-foreground mb-2"
              >
                Su teléfono <span className="text-red-700">*</span>
              </label>
              <input
                id="buyer-phone"
                type="tel"
                value={buyerPhone}
                onChange={(e) => setBuyerPhone(e.target.value)}
                required
                placeholder="(809) 000-0000"
                className="w-full rounded-sm border border-border bg-cream px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
              />
            </div>
          </div>

          {/* Resumen */}
          <div className="mt-6 pt-4 border-t border-border space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Subtotal ({quantity} × {formatPrice(product.price, product.currency)})
              </span>
              <span className="font-medium text-foreground">
                {formatPrice(subtotal, product.currency)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Entrega local</span>
              <span className="font-medium text-green-700">Incluida</span>
            </div>
            <div className="flex items-center justify-between pt-2 mt-2 border-t border-border">
              <span className="font-serif text-lg font-semibold text-foreground">
                Total
              </span>
              <span className="font-serif text-2xl font-semibold text-foreground">
                {formatPrice(subtotal, product.currency)}
              </span>
            </div>
          </div>

          {/* CTA WhatsApp */}
          <button
            type="submit"
            disabled={!isValid || !product.inStock}
            className={cn(
              "mt-5 w-full flex items-center justify-center gap-2 rounded-sm px-5 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors",
              isValid && product.inStock
                ? "bg-foreground text-background hover:bg-gold hover:text-white"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            )}
          >
            <MessageCircle className="h-4 w-4" />
            {product.inStock ? "Coordinar por WhatsApp" : "Producto agotado"}
          </button>

          {submitted && (
            <p className="mt-3 text-xs text-green-700 text-center">
              ✓ Pedido enviado. Le contactaremos por WhatsApp para confirmar.
            </p>
          )}

          <p className="mt-3 text-[11px] text-muted-foreground text-center leading-relaxed">
            No se cobra online. El pago se coordina al entregar o por WhatsApp.
            Para compras con tarjeta, contáctenos directamente.
          </p>
        </form>
      </div>
    </div>
    </>
  );
}

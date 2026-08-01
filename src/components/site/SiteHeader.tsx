"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Flame,
  ChevronDown,
  Clock,
  MapPin,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { siteConfig, navItems } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* ===== Top bar — utilitario, fuera del header principal ===== */}
      <div className="hidden md:block bg-noir text-white/85">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="tracking-wide">
              {siteConfig.hoursShort} · Servicio disponible ahora
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/#obituarios" className="hover:text-gold-soft transition-colors">
              Obituarios en vivo
            </Link>
            <Link href="/#pre-arreglos" className="hover:text-gold-soft transition-colors">
              Pre-Arreglos
            </Link>
            <span className="flex items-center gap-1 text-white/60">
              <MapPin className="h-3 w-3" />
              La Romana, RD
            </span>
          </div>
        </div>
      </div>

      {/* ===== Header principal — translúcido con blur ===== */}
      <header className="header-glass border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Funeraria Romana — Inicio"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold bg-card">
              <Flame className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-base font-semibold tracking-tight text-foreground">
                Funeraria Romana
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-gold">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop nav — 4 ítems primarios con dropdowns */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Navegación principal"
          >
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-sm px-3 py-2 text-[12px] font-medium uppercase tracking-wider text-foreground/80 transition-colors",
                      "hover:text-gold"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180" />
                  </Link>
                  {/* Dropdown */}
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="min-w-[280px] rounded-lg border border-border/70 bg-card p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-start justify-between gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-cream-100"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[13px] font-medium text-foreground">
                                {child.label}
                              </span>
                              {child.badge && (
                                <span className="rounded-sm bg-red-700/90 px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-white">
                                  <span className="mr-1 inline-block h-1 w-1 rounded-full bg-white align-middle" />
                                  {child.badge}
                                </span>
                              )}
                            </div>
                            {child.description && (
                              <p className="mt-0.5 text-[11px] text-muted-foreground">
                                {child.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-sm px-3 py-2 text-[12px] font-medium uppercase tracking-wider text-foreground/80 transition-colors",
                    "hover:text-gold"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA group */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/tienda"
              className={cn(
                "flex items-center gap-1.5 rounded-sm border border-border px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-foreground transition-colors",
                "hover:border-gold hover:text-gold"
              )}
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Tienda
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 rounded-sm bg-foreground px-4 py-2 text-[12px] font-semibold uppercase tracking-wider text-background transition-colors hover:bg-gold hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              Llamar 24/7
            </a>
          </div>

          {/* Mobile trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-foreground hover:bg-cream-100"
                aria-label="Abrir menú"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] sm:w-[360px] bg-cream text-foreground border-l border-border"
            >
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold">
                    <Flame className="h-4 w-4" />
                  </div>
                  <span className="font-serif text-base font-semibold">
                    Funeraria Romana
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:bg-cream-100"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav
                className="flex flex-col gap-1"
                aria-label="Navegación móvil"
              >
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.href} className="flex flex-col">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-sm px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-foreground"
                      >
                        {item.label}
                      </Link>
                      <div className="ml-3 border-l border-border pl-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between rounded-sm px-3 py-2 text-[13px] text-muted-foreground hover:text-gold"
                          >
                            <span>{child.label}</span>
                            {child.badge && (
                              <span className="rounded-sm bg-red-700/90 px-1.5 py-0.5 text-[9px] font-bold text-white">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-sm px-3 py-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-cream-100 hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                <Link
                  href="/tienda"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-sm border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:border-gold hover:text-gold"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Tienda
                </Link>
                <Button
                  asChild
                  className="w-full bg-foreground text-background hover:bg-gold hover:text-white"
                >
                  <a href={siteConfig.phoneHref}>
                    <Phone className="mr-2 h-4 w-4" />
                    Llamar 24/7 · {siteConfig.phone}
                  </a>
                </Button>
                <div className="mt-2 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {siteConfig.hoursShort}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}

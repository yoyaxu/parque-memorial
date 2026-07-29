"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { siteConfig, navItems } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-noir text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Funeraria Romana — Inicio">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold">
            <Flame className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-base font-semibold tracking-tight">
              Funeraria Romana
            </span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-gold/80">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-sm px-2.5 py-2 text-[12px] font-medium uppercase tracking-wider text-white/85 transition-colors",
                "hover:text-gold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Phone */}
        <div className="hidden lg:flex items-center">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 rounded-sm border border-white/20 px-3 py-2 text-sm font-medium text-white hover:border-gold hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="font-mono">{siteConfig.phone}</span>
          </a>
        </div>

        {/* Mobile trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10 hover:text-gold"
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-noir text-white border-l border-white/10">
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold">
                  <Flame className="h-4 w-4" />
                </div>
                <span className="font-serif text-base font-semibold">Funeraria Romana</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="text-white hover:bg-white/10"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col gap-0.5" aria-label="Navegación móvil">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-3 py-3 text-sm font-medium uppercase tracking-wider text-white/85 hover:bg-white/5 hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-2">
              <Button asChild className="w-full bg-gold text-black hover:bg-gold/90">
                <a href={siteConfig.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { siteConfig, navItems } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
            <TreePine className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-base font-semibold tracking-tight">
              Parque Memorial
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Funeraria · La Romana
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors",
                "hover:bg-secondary hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <a href={siteConfig.phoneHref}>
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Llamar
            </a>
          </Button>
          <Button asChild size="sm">
            <Link href="/parque-memorial#reservar">Reservar</Link>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif text-lg font-semibold">Menú</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-2">
              <Button asChild variant="outline" className="w-full">
                <a href={siteConfig.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </Button>
              <Button asChild className="w-full" onClick={() => setOpen(false)}>
                <Link href="/parque-memorial#reservar">Reservar Parque Memorial</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

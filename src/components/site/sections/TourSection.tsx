"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1593098878007-3c2c4c8c8d44?auto=format&fit=crop&w=1400&q=80",
    alt: "Fachada principal de Funeraria Romana",
    label: "Fachada principal",
  },
  {
    src: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1000&q=80",
    alt: "Capilla de cremación",
    label: "Capilla de cremación",
  },
  {
    src: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=1000&q=80",
    alt: "Oficina de atención",
    label: "Oficina de atención",
  },
  {
    src: "https://images.unsplash.com/photo-1593130283090-0cfd4c1ed8c6?auto=format&fit=crop&w=1000&q=80",
    alt: "Sala de velación principal",
    label: "Sala de velación principal",
  },
];

export function TourSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="tour"
      aria-labelledby="tour-heading"
      className="bg-noir text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="section-divider text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            Galería
          </p>
          <h2
            id="tour-heading"
            className="mt-4 font-serif text-3xl sm:text-4xl font-semibold"
          >
            Conozca nuestras instalaciones
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-white/75 leading-relaxed">
            Recorra nuestras instalaciones desde la comodidad de su hogar. Cada
            espacio fue diseñado para ofrecer confort, intimidad y respeto en
            los momentos más delicados.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Imagen principal */}
          <div className="lg:col-span-2 relative aspect-[4/3] rounded-sm overflow-hidden bg-noir-deep">
            <Image
              src={galleryImages[active].src}
              alt={galleryImages[active].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 bg-noir/80 backdrop-blur text-gold text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm">
              {galleryImages[active].label}
            </div>
            <button
              type="button"
              onClick={() =>
                setActive((p) => (p - 1 + galleryImages.length) % galleryImages.length)
              }
              aria-label="Imagen anterior"
              className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-black transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setActive((p) => (p + 1) % galleryImages.length)}
              aria-label="Imagen siguiente"
              className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-black transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Miniaturas */}
          <div className="flex flex-col">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-4">
              Galería de escenas
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 flex-1">
              {galleryImages.map((img, i) => (
                <button
                  key={img.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative aspect-[16/10] rounded-sm overflow-hidden border-2 transition-colors ${
                    active === i ? "border-gold" : "border-transparent hover:border-white/40"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white drop-shadow">
                    {img.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA visita */}
        <div className="mt-12 text-center bg-noir-deep border border-white/10 rounded-sm p-8">
          <p className="font-serif text-xl sm:text-2xl text-white">
            ¿Desea visitar nuestras instalaciones en persona?
          </p>
          <p className="mt-2 text-sm text-white/70">
            Le recibimos con gusto, sin compromiso.
          </p>
          <Button asChild className="mt-5 bg-white text-black hover:bg-white/90">
            <a href="#contacto">
              <Calendar className="mr-2 h-4 w-4" />
              Agendar visita
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

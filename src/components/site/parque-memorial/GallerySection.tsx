import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  span?: "wide" | "tall" | "default";
};

const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    alt: "Vista panorámica del parque memorial con áreas verdes y senderos",
    caption: "Áreas verdes y senderos",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Nichos verticales modernos en un entorno tranquilo",
    caption: "Nichos verticales",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Capilla ecuménica con luz natural",
    caption: "Capilla ecuménica",
  },
  {
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Jardín memorial con árboles y bancas",
    caption: "Jardín memorial",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Sendero peatonal arbolado dentro del parque",
    caption: "Senderos peatonales",
  },
  {
    src: "https://images.unsplash.com/photo-1444930694458-01babe71870c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    alt: "Área de descanso con bancas y jardines",
    caption: "Áreas de descanso",
    span: "wide",
  },
];

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="py-20 sm:py-24 bg-background"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Galería
          </span>
          <h2
            id="gallery-heading"
            className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Un vistazo al Parque Memorial
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Renders y referencias visuales del proyecto. Las imágenes reales se
            actualizarán conforme avance la construcción.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px]">
          {galleryItems.map((item, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border ${
                item.span === "wide"
                  ? "sm:col-span-2"
                  : item.span === "tall"
                  ? "sm:row-span-2"
                  : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-base font-semibold text-white">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground text-center">
          ¿Quieres una visita guiada al sitio?{" "}
          <a href="#reservar" className="text-primary font-medium hover:underline">
            Reserva una cita
          </a>{" "}
          con un asesor.
        </p>
      </div>
    </section>
  );
}

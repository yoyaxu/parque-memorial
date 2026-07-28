import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tourItems = [
  {
    src: "https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Entrada y recepción",
    description: "Recepción amplia y climatizada para recibir a las familias.",
  },
  {
    src: "https://images.unsplash.com/photo-1519162526231-a0b7f0b0c7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Sala de velación",
    description: "Capacidad para 80 personas, con servicio de café incluido.",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Capilla privada",
    description: "Espacio íntimo para ceremonias religiosas privadas.",
  },
  {
    src: "https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Capilla de cremación",
    description: "Equipamiento moderno y certificado, proceso transparente.",
  },
];

export function TourSection() {
  return (
    <section id="tour" className="py-20 sm:py-24 bg-background" aria-labelledby="tour-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Tour virtual
            </span>
            <h2
              id="tour-heading"
              className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight"
            >
              Conoce nuestras instalaciones
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Un recorrido por los espacios que ponemos a disposición de las
              familias en todo momento.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tourItems.map((item, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/parque-memorial">
              Ver Parque Memorial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

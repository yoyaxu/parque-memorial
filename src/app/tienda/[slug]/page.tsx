import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ProductPurchase } from "@/components/site/sections/ProductPurchase";
import {
  products,
  velatorios,
  getProductBySlug,
  getAllProductSlugs,
  formatPrice,
  productCategories,
} from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ velatorio?: string }> };

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };

  return {
    title: `${product.name} | Tienda — Funeraria Romana`,
    description: product.shortDescription,
    alternates: { canonical: `/tienda/${product.slug}` },
  };
}

export default async function ProductoPage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const { velatorio } = await searchParams;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  // Velatorio pre-seleccionado (llega desde el obituario vía ?velatorio=<id>)
  const preselectedVelatorio =
    velatorio && velatorios.some((v) => v.id === velatorio)
      ? velatorio
      : "";
  const velatorioQS = preselectedVelatorio
    ? `?velatorio=${encodeURIComponent(preselectedVelatorio)}`
    : "";

  const category = productCategories.find((c) => c.id === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Tienda · ${category?.label}`}
        title={product.name}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Tienda", href: "/tienda" },
          { label: category?.label ?? "Producto", href: "/tienda" },
          { label: product.name },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-serif text-2xl font-semibold text-foreground">
            {formatPrice(product.price, product.currency)}
          </span>
          <span className="text-sm text-muted-foreground">
            {product.shortDescription}
          </span>
        </div>
      </PageHero>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <ProductPurchase product={product} preselectedVelatorio={preselectedVelatorio} />

          {/* Productos relacionados */}
          {related.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                También en {category?.label}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/tienda/${p.slug}${velatorioQS}`}
                    className="group bg-card border border-border rounded-sm overflow-hidden hover:border-gold transition-colors shadow-sm hover:shadow-md"
                  >
                    <div className="aspect-square overflow-hidden bg-cream-200">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-gold transition-colors">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {p.shortDescription}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="font-serif text-base font-semibold text-foreground">
                          {formatPrice(p.price, p.currency)}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-gold">
                          Ver
                          <ChevronRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

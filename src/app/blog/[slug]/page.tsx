import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Clock,
  ChevronRight,
  ChevronLeft,
  Calendar,
  User,
  Check,
} from "lucide-react";
import {
  articles,
  getArticleBySlug,
  getAllArticleSlugs,
  siteConfig,
} from "@/lib/site-config";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {
      title: "Artículo no encontrado",
    };
  }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Funeraria Romana`,
      description: article.excerpt,
      type: "article",
      locale: "es_DO",
      images: [{ url: article.coverImage, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-DO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Artículos relacionados (excluyendo el actual)
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-noir text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8">
            <Link href="/" className="hover:text-gold">
              Inicio
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog" className="hover:text-gold">
              Blog
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80 truncate max-w-[200px]">
              {article.title}
            </span>
          </nav>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-gold transition-colors mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver al blog
          </Link>

          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold mb-3">
            {article.category}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold" />
              {formatDate(article.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" />
              {article.readTime} de lectura
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4 text-gold" />
              {article.author}
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="bg-noir">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-12">
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Intro */}
          <p className="font-serif text-xl sm:text-2xl text-foreground leading-relaxed italic mb-10 pl-4 border-l-2 border-gold">
            {article.intro}
          </p>

          {/* Sections */}
          {article.sections.map((section, idx) => (
            <section key={idx} className="mt-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground leading-tight">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[16px] leading-[1.75] text-foreground/85"
                  >
                    {p}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[15px] text-foreground/85 leading-relaxed"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold mt-0.5">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Conclusion */}
          {article.conclusion && (
            <section className="mt-12 p-7 bg-cream rounded-sm border-l-4 border-gold">
              <p className="font-serif text-lg italic text-foreground/90 leading-relaxed">
                {article.conclusion}
              </p>
            </section>
          )}

          {/* CTA */}
          <section className="mt-12 bg-noir text-white p-8 rounded-sm text-center">
            <h3 className="font-serif text-xl font-semibold">
              ¿Necesita asesoría sobre este tema?
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Estamos disponibles 24 horas para acompañarle, sin compromiso.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center bg-gold text-black font-semibold px-5 py-2.5 rounded-sm text-sm hover:bg-gold/90 transition-colors"
              >
                Llamar al {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-5 py-2.5 rounded-sm text-sm hover:bg-white hover:text-black transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </section>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-cream border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
              Artículos relacionados
            </h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {related.map((a) => (
                <article
                  key={a.id}
                  className="group bg-card border border-border/80 rounded-sm overflow-hidden hover:border-gold transition-colors flex flex-col sm:flex-row"
                >
                  <Link
                    href={`/blog/${a.slug}`}
                    className="block relative aspect-[16/10] sm:w-40 sm:shrink-0 bg-noir overflow-hidden"
                  >
                    <Image
                      src={a.coverImage}
                      alt={a.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 160px"
                      className="object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                    />
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                      {a.category}
                    </p>
                    <h3 className="mt-1.5 font-serif text-base font-semibold text-foreground leading-snug">
                      <Link
                        href={`/blog/${a.slug}`}
                        className="group-hover:text-gold transition-colors"
                      >
                        {a.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground flex-1 line-clamp-2">
                      {a.excerpt}
                    </p>
                    <Link
                      href={`/blog/${a.slug}`}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold hover:gap-2 transition-all"
                    >
                      Leer
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("bg-cream-100 border-b border-border", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Migas de pan"
            className="mb-5 flex items-center gap-1.5 text-[12px] text-muted-foreground"
          >
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="hover:text-gold transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground/70">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 opacity-50" />
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </span>
        )}

        <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-foreground">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-2xl text-[15px] sm:text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

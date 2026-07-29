import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://funeraria-romana.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Funeraria Romana — La Funeraria del Pueblo · La Romana, RD",
    template: "%s | Funeraria Romana",
  },
  description:
    "Servicios funerarios en La Romana, República Dominicana. Velatorio, pre-arreglos, cremación, traslados nacionales e internacionales. 24 horas, 365 días.",
  keywords: [
    "funeraria La Romana",
    "funeraria Romana",
    "servicios funerarios",
    "velatorio La Romana",
    "cremación",
    "pre-arreglos funerarios",
    "traslados a Haití",
    "planes funerarios",
    "República Dominicana",
  ],
  authors: [{ name: "Funeraria Romana" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Funeraria Romana — La Funeraria del Pueblo",
    description:
      "Servicios funerarios en La Romana, RD. Velatorio, pre-arreglos, cremación y traslados. 24 horas, 365 días.",
    url: siteUrl,
    siteName: "Funeraria Romana",
    type: "website",
    locale: "es_DO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funeraria Romana",
    description:
      "Servicios funerarios en La Romana, RD. 24 horas, 365 días.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <SiteHeader />
        {/* Barra de dirección bajo header */}
        <div className="bg-noir-deep text-white/70 text-center text-xs py-2 px-4 border-b border-white/10">
          <p className="font-medium tracking-wide">
            {siteConfig.address} ·{" "}
            <span className="text-gold">{siteConfig.hoursShort}</span>
          </p>
        </div>
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
        <Toaster />
      </body>
    </html>
  );
}

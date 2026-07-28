import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://parque-memorial.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Funeraria & Parque Memorial — Servicios Funerarios en La Romana",
    template: "%s | Funeraria & Parque Memorial",
  },
  description:
    "Servicios funerarios integrales en La Romana, República Dominicana. Sala de velación, capillas privadas, cremación y Parque Memorial con nichos, parcelas y mausoleo familiar.",
  keywords: [
    "funeraria La Romana",
    "parque memorial",
    "cementerio La Romana",
    "servicios funerarios",
    "cremación",
    "nichos",
    "mausoleo familiar",
    "República Dominicana",
  ],
  authors: [{ name: "Parque Memorial" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Funeraria & Parque Memorial — Servicios en La Romana",
    description:
      "Servicios funerarios integrales y Parque Memorial en La Romana, RD.",
    url: siteUrl,
    siteName: "Parque Memorial",
    type: "website",
    locale: "es_DO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funeraria & Parque Memorial",
    description:
      "Servicios funerarios integrales y Parque Memorial en La Romana, RD.",
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
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}

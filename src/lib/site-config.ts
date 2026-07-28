// Configuración central del sitio
export const siteConfig = {
  name: "Funeraria & Parque Memorial",
  shortName: "Parque Memorial",
  description:
    "Servicios funerarios integrales y Parque Memorial en La Romana, República Dominicana.",
  phone: "+1 809-555-0100",
  phoneHref: "tel:+18095550100",
  whatsapp: "+1 809-555-0100",
  whatsappHref: "https://wa.me/18095550100",
  email: "contacto@parquememorial.do",
  emailHref: "mailto:contacto@parquememorial.do",
  address: "Carretera La Romana - Higüeral, La Romana, República Dominicana",
  hours: "Disponibles 24 horas, los 7 días de la semana",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://parque-memorial.vercel.app",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
};

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Parque Memorial", href: "/parque-memorial" },
  { label: "Tour", href: "/#tour" },
  { label: "Contacto", href: "/#contacto" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "velacion",
    title: "Sala de Velación",
    description:
      "Sala principal climatizada con capacidad para 80 personas, ambientada para un despedir digno y tranquilo. Incluye servicio de café y agua, silletería completa y baños privados.",
    icon: "Building2",
  },
  {
    id: "capilla-privada",
    title: "Capilla Privada",
    description:
      "Espacio íntimo para familias que desean una despedida más recogida. Capacidad para 25 personas, ideal para ceremonias religiosas privadas y velorios reducidos.",
    icon: "Heart",
  },
  {
    id: "cremacion",
    title: "Capilla de Cremación",
    description:
      "Capilla equipada con horno crematorio moderno y certificado. Proceso digno, transparente y respetuoso, con entrega de cenizas en urna de calidad dentro de 24-48 horas.",
    icon: "Flame",
  },
  {
    id: "traslados",
    title: "Traslados Nacionales e Internacionales",
    description:
      "Coordinación completa de traslados dentro y fuera del país, con carroza fúnebre climatizada y personal especializado. Gestión de permisos y documentación.",
    icon: "Car",
  },
  {
    id: "parque-memorial",
    title: "Parque Memorial",
    description:
      "Próximamente: nichos verticales, parcelas tradicionales, mausoleo familiar y jardín memorial en un entorno natural de paz y respeto. Reservas abiertas.",
    icon: "Trees",
  },
  {
    id: "asesoria",
    title: "Asesoría Preneed",
    description:
      "Planificación anticipada con planes de pago flexibles. Protege a tu familia de decisiones difíciles en momentos de dolor. Asesoría gratuita y sin compromiso.",
    icon: "ClipboardList",
  },
];

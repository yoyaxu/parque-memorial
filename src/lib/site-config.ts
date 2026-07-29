// Configuración central del sitio — Funeraria Romana
export const siteConfig = {
  name: "Funeraria Romana",
  shortName: "Funeraria Romana",
  tagline: "LA FUNERARIA DEL PUEBLO",
  description:
    "Servicios funerarios en La Romana, República Dominicana. Velatorio, pre-arreglos, cremación, traslados nacionales e internacionales. Servicio 24 horas, 365 días.",
  phone: "(809) 813-4076",
  phoneHref: "tel:+18098134076",
  whatsapp: "(809) 399-4382",
  whatsappHref: "https://wa.me/18093994382",
  emergencyPhone: "(809) 813-4076",
  emergencyHref: "tel:+18098134076",
  email: "funeraria.romana@gmail.com",
  emailHref: "mailto:funeraria.romana@gmail.com",
  address:
    "Calle Juan Pablo Duarte #45, frente al Cementerio No.1 La Romana, RD",
  addressShort: "Calle Juan Pablo Duarte #45, La Romana, RD",
  hours: "Servicio disponible 24 horas, los 365 días del año",
  hoursShort: "24 horas · 365 días",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://funeraria-romana.vercel.app",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
};

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Planes", href: "/#planes" },
  { label: "Obituarios", href: "/#obituarios" },
  { label: "Tour 360°", href: "/#tour" },
  { label: "Cementerio", href: "/parque-memorial" },
  { label: "Cobertura", href: "/#cobertura" },
  { label: "Blog", href: "/#blog" },
  { label: "Contacto", href: "/#contacto" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

// 3 servicios principales (hero inferior)
export const services: Service[] = [
  {
    id: "velatorio",
    title: "Velatorio",
    description:
      "Salas principales y privadas para acompañar a su ser querido con dignidad. Ambientación completa, silletería, café y agua para los familiares.",
    icon: "Building2",
  },
  {
    id: "pre-arreglos",
    title: "Pre-Arreglos Funerarios",
    description:
      "Planifique hoy con calma lo que mañana será inevitable. Congele el precio, defina sus deseos y proteja a su familia de decisiones difíciles.",
    icon: "ClipboardList",
  },
  {
    id: "cremacion",
    title: "Cremación",
    description:
      "Capilla de cremación propia con tecnología moderna. Proceso digno y transparente, con entrega de cenizas en urna de calidad.",
    icon: "Flame",
  },
];

// Servicios adicionales (3 columnas)
export const additionalServices = {
  col1: {
    title: "Trámites y transporte",
    items: [
      "A partir de 7 años de experiencia",
      "Trámites legales completos",
      "Cobertura nacional e internacional",
      "Transporte especializado",
    ],
  },
  col2: {
    title: "Traslados",
    items: [
      "Gestión de permisos para traslados internacionales",
      "Cobertura nacional completa",
      "Traslados a Haití",
      "Servicio 24 horas",
      "Flota de carros fúnebres modernos",
    ],
  },
  col3: {
    title: "Servicios adicionales",
    items: [
      "Servicio VIP en cementerio",
      "Arreglos florales personalizados",
      "Esquelas en periódicos",
      "Llaves y recordatorios",
    ],
  },
};

// Planes funerarios (3 visibles en el boceto)
export type Plan = {
  id: string;
  tier: string;
  tierIcon: string;
  name: string;
  subtitle: string;
  description: string;
  coffin: string;
  features: string[];
  extras?: string[];
  highlighted?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    id: "gold",
    tier: "PREMIUM",
    tierIcon: "Crown",
    name: "Plan GOLD",
    subtitle: "Especial — La máxima distinción",
    description:
      "Nuestro plan más completo. Ataúd de primera línea, atención VIP y todos los servicios opcionales incluidos para una despedida verdaderamente memorable.",
    coffin: "Sarcófago especial de primera línea",
    features: [
      "Ataúd especial de cedro",
      "Carpa y sillería premium",
      "Carro fúnebre de lujo",
      "Candelabros ornamentales",
      "Transporte ejecutivo para familia",
      "Velatorio en sala principal",
    ],
    extras: ["Refrigerio completo", "Servicio VIP en cementerio"],
    highlighted: true,
    cta: "Solicitar este plan",
  },
  {
    id: "royal",
    tier: "SEMI PREMIUM",
    tierIcon: "Star",
    name: "Plan ROYAL",
    subtitle: "Semi Especial — Elegancia y calidez",
    description:
      "Equilibrio perfecto entre distinguido y cálido. Ataúd semi-especial con todos los servicios esenciales para honrar a su ser querido con dignidad.",
    coffin: "Sarcófago semi-especial",
    features: [
      "Ataúd semi-especial",
      "Carpa y sillería estándar",
      "Carro fúnebre moderno",
      "Candelabros clásicos",
      "Transporte para familia",
      "Velatorio en sala estándar",
    ],
    extras: ["Refrigerio básico"],
    cta: "Solicitar este plan",
  },
  {
    id: "plan-a",
    tier: "ESENCIAL",
    tierIcon: "Cross",
    name: "Plan A",
    subtitle: "Servicio digno y completo con apoyo",
    description:
      "Servicio completo con ataúd cuadrado especial, ideal para familias que buscan lo esencial con calidad y respeto.",
    coffin: "Ataúd cuadrado especial",
    features: [
      "Ataúd cuadrado especial",
      "Carpa y sillería",
      "Carro fúnebre",
      "Velatorio estándar",
      "Transporte al cementerio",
    ],
    cta: "Solicitar este plan",
  },
];

// Obituarios (ejemplo)
export type Obituary = {
  id: string;
  initials: string;
  name: string;
  age: number;
  deathDate: string;
  quote: string;
  location: string;
  schedule: string;
  condolences: number;
};

export const obituaries: Obituary[] = [
  {
    id: "1",
    initials: "ME",
    name: "María Elena Rodríguez",
    age: 78,
    deathDate: "26 de julio de 2026",
    quote:
      "Querida madre y abuela, descansó en paz rodeada de su familia. Su legado de amor y fe perdurará en quienes la recuerdan.",
    location: "Sala Principal — Funeraria Romana",
    schedule: "Hoy 4:00 PM — Capilla La Atarraya",
    condolences: 24,
  },
  {
    id: "2",
    initials: "JR",
    name: "José Ramón Feliz",
    age: 65,
    deathDate: "26 de julio de 2026",
    quote:
      "Padre ejemplar y amigo fiel. Su partida deja un vacío en su familia y en la comunidad de La Romana.",
    location: "Sala 2 — Funeraria Romana",
    schedule:
      "Hoy 6:00 PM — Salida mañana 10:00 AM al Cementerio No.1",
    condolences: 18,
  },
];

// Blog
export type Article = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export const articles: Article[] = [
  {
    id: "1",
    category: "Guías prácticas",
    title: "Pre-arreglos funerarios: una decisión serena y responsable",
    excerpt:
      "Por qué planificar tu propio servicio funerario es un acto de amor hacia tu familia y cómo hacerlo sin estrés.",
    readTime: "5 min",
  },
  {
    id: "2",
    category: "Espiritualidad",
    title: "Ritos de despedida: por qué son importantes y cómo personalizarlos",
    excerpt:
      "El ser humano ha necesitado siempre rituales para despedir a sus muertos. Entiende por qué son sanadores y cómo hacerlos únicos.",
    readTime: "7 min",
  },
  {
    id: "3",
    category: "Trámites legales",
    title: "Trámites legales tras un fallecimiento en República Dominicana",
    excerpt:
      "Una guía clara de los documentos y gestiones necesarias cuando ocurre un fallecimiento, en hospitales, hogares y vías públicas.",
    readTime: "8 min",
  },
];

// FAQ
export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: "1",
    question: "¿Están disponibles 24 horas?",
    answer:
      "Sí. Funeraria Romana ofrece servicio las 24 horas, los 365 días del año. Llámanos al (809) 813-4076 o escríbenos por WhatsApp al (809) 399-4382 y te atenderemos inmediatamente, sin importar la hora.",
  },
  {
    id: "2",
    question: "¿Qué documentos necesito cuando ocurre un fallecimiento?",
    answer:
      "Generalmente se requiere el acta de defunción expedida por un médico o autoridad competente, el documento de identidad del fallecido y, en algunos casos, documentos adicionales según el lugar del fallecimiento (hospital, hogar, vía pública). Nuestro equipo gestiona todos los trámites legales por usted.",
  },
  {
    id: "3",
    question: "¿Cuál es la diferencia entre los planes GOLD, ROYAL y los básicos?",
    answer:
      "El plan GOLD incluye ataúd de primera línea, atención VIP, transporte ejecutivo y todos los servicios opcionales. El plan ROYAL ofrece ataúd semi-especial y servicios esenciales con elegancia. Los planes básicos (Plan A) cubren lo esencial con calidad y respeto, ideal para familias que buscan dignidad sin extras.",
  },
  {
    id: "4",
    question: "¿Los pre-arreglos son transferibles?",
    answer:
      "Sí, nuestros pre-arreglos funerarios son transferibles a otros miembros de la familia. Esto le permite planificar con calma y, si las circunstancias cambian, reasignar el plan a un ser querido que lo necesite.",
  },
  {
    id: "5",
    question: "¿Hacen traslados a Haití?",
    answer:
      "Sí. Contamos con cobertura nacional completa y realizamos traslados internacionales a Haití. Gestionamos todos los permisos, documentación y transporte especializado necesarios para garantizar un traslado digno y sin contratiempos.",
  },
  {
    id: "6",
    question: "¿Ofrecen servicio de cremación?",
    answer:
      "Sí, contamos con capilla de cremación propia y tecnología moderna. El proceso es digno y transparente, con entrega de cenizas en urna de calidad dentro de las 24 a 48 horas siguientes al servicio.",
  },
  {
    id: "7",
    question: "¿Cómo puedo pagar un plan funerario?",
    answer:
      "Aceptamos efectivo, tarjetas de crédito y débito, transferencias bancarias y ofrecemos planes de financiación flexible a su medida. Para pre-arreglos, puede congelar el precio actual y pagar en cuotas cómodas.",
  },
  {
    id: "8",
    question: "¿Puedo personalizar el servicio?",
    answer:
      "Por supuesto. Cada despedida es única. Ofrecemos personalización en música, arreglos florales, esquelas, recordatorios, elección de ataúd o urna, y cualquier detalle que honre los deseos del fallecido y su familia.",
  },
  {
    id: "9",
    question: "¿Es verdad que pronto tendrán su propio cementerio?",
    answer:
      "Sí. Próximamente abriremos el Parque Memorial Romana, un cementerio moderno de más de 40,000 m² desarrollado en alianza con el Ayuntamiento de La Romana bajo modelo APP. Si desea enterarse primero, puede dejar sus datos en nuestra sección del Parque Memorial.",
  },
];

// Cobertura por regiones
export const coverageRegions = [
  {
    region: "Este",
    label: "NACIONAL",
    cities: ["La Romana", "Higüey", "El Seibo", "Hato Mayor", "Bayahibe"],
    note: "Cobertura completa y respuesta inmediata.",
  },
  {
    region: "Noreste",
    label: "NACIONAL",
    cities: ["Samaná", "Nagua", "Sánchez", "Sabana de la Mar"],
    note: "Cobertura completa y respuesta inmediata.",
  },
  {
    region: "Norte",
    label: "NACIONAL",
    cities: ["Santiago", "Puerto Plata", "Moca", "La Vega"],
    note: "Cobertura completa y respuesta inmediata.",
  },
  {
    region: "Sur",
    label: "NACIONAL",
    cities: ["San Pedro de Macorís", "Boca Chica", "San Cristóbal"],
    note: "Cobertura completa y respuesta inmediata.",
  },
];

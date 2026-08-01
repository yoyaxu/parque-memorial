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

// Navegación primaria — solo 4 ítems + CTA (regla de Miller)
// Los sub-items viven en dropdowns para reducir carga cognitiva
export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string; badge?: string }[];
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/#servicios",
    children: [
      { label: "Velatorio", href: "/#servicios", description: "Salas principales y privadas" },
      { label: "Cremación", href: "/#servicios", description: "Capilla propia y moderna" },
      { label: "Pre-Arreglos", href: "/#pre-arreglos", description: "Congele el precio hoy" },
      { label: "Traslados", href: "/#servicios", description: "Nacional e internacional" },
      { label: "Planes GOLD · ROYAL · A", href: "/#planes", description: "Tres niveles de servicio" },
    ],
  },
  { label: "Parque Memorial", href: "/parque-memorial" },
  {
    label: "Recursos",
    href: "/#blog",
    children: [
      { label: "Obituarios", href: "/#obituarios", description: "Servicios en curso", badge: "EN VIVO" },
      { label: "Blog & Guías", href: "/blog", description: "Artículos y recursos" },
      { label: "Tour 360°", href: "/#tour", description: "Recorre nuestras instalaciones" },
      { label: "Preguntas Frecuentes", href: "/#faq", description: "Respuestas a dudas comunes" },
    ],
  },
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
  /** ID del velatorio en `velatorios` al que se enviarán las flores */
  velatorioId: string;
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
    velatorioId: "funeraria-romana-principal",
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
    velatorioId: "funeraria-romana-sala-2",
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
export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string; // ISO date string
  author: string;
  coverImage: string;
  intro: string;
  sections: ArticleSection[];
  conclusion?: string;
};

export const articles: Article[] = [
  {
    id: "1",
    slug: "pre-arreglos-funerarios-decision-serena",
    category: "Guías prácticas",
    title: "Pre-arreglos funerarios: una decisión serena y responsable",
    excerpt:
      "Por qué planificar tu propio servicio funerario es un acto de amor hacia tu familia y cómo hacerlo sin estrés.",
    readTime: "5 min",
    publishedAt: "2026-07-15",
    author: "Equipo Funeraria Romana",
    coverImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Hablar de la propia despedida no es fácil. Sin embargo, decidir con anticipación cómo queremos ser honrados es uno de los actos más amorosos que podemos hacer por quienes nos acompañan. En este artículo explicamos qué son los pre-arreglos funerarios, por qué congelan el precio contra la inflación y cómo dar el primer paso sin presión.",
    sections: [
      {
        heading: "¿Qué es un pre-arreglo funerario?",
        paragraphs: [
          "Un pre-arreglo funerario es un acuerdo previo entre una persona y la funeraria, en el que se definen con calma todos los detalles del servicio que se prestará el día de mañana: tipo de ataúd o urna, sala de velación, ceremonia, traslado, música, esquelas, recordatorios y más. La funeraria documenta todo por escrito y la familia solo necesita llamar el día del fallecimiento para activar el servicio.",
          "A diferencia de un servicio contratado en el momento del duelo, el pre-arreglo permite tomar decisiones sin urgencia, comparar opciones con calma y evitar que los familiares tengan que adivinar qué habría querido el ser querido. Es, en esencia, dejar todo listo para que el día más difícil sea también el más sereno.",
        ],
      },
      {
        heading: "Beneficios concretos para tu familia",
        paragraphs: [
          "Los pre-arreglos no son solo un asunto emocional; también tienen beneficios económicos y prácticos muy concretos. Estos son los más importantes que debes conocer antes de decidir:",
        ],
        bullets: [
          "Precio congelado a perpetuidad: lo que acuerdas hoy es lo que pagas, sin importar cuánto suba la inflación.",
          "Planes transferibles: si las circunstancias cambian, puedes reasignar el plan a otro miembro de la familia.",
          "Financiación flexible: pagos en cuotas cómodas que se ajustan a tu presupuesto.",
          "Sin costo de consulta: la asesoría es gratuita y sin compromiso de contratación.",
          "Tres niveles disponibles (GOLD, ROYAL y básicos) para distintos presupuestos y deseos.",
        ],
      },
      {
        heading: "Cómo dar el primer paso",
        paragraphs: [
          "El proceso es más sencillo de lo que imaginas. Lo ideal es agendar una asesoría sin compromiso, donde conversamos sobre tus deseos, te explicamos las opciones y respondemos todas tus preguntas. No se requiere ningún pago inicial para esta primera conversación.",
          "Una vez que decidas avanzar, documentamos cada detalle en un acuerdo claro y transparente. Tú conservas una copia, la familia puede estar informada si así lo deseas, y nosotros nos encargamos de mantener todo archivado y disponible para cuando se necesite, sin importar si eso ocurre en dos meses o en veinte años.",
        ],
      },
    ],
    conclusion:
      "Un pre-arreglo funerario no es anticipar la tristeza; es todo lo contrario: es quitarle peso del corazón a quienes más amas. Si deseas conversar sobre tus opciones, nuestro equipo está disponible 24 horas para asesorarte con calma y sin compromiso.",
  },
  {
    id: "2",
    slug: "ritos-de-despedida-como-personalizarlos",
    category: "Espiritualidad",
    title: "Ritos de despedida: por qué son importantes y cómo personalizarlos",
    excerpt:
      "El ser humano ha necesitado siempre rituales para despedir a sus muertos. Entiende por qué son sanadores y cómo hacerlos únicos.",
    readTime: "7 min",
    publishedAt: "2026-07-08",
    author: "Equipo Funeraria Romana",
    coverImage:
      "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Desde los albores de la humanidad, las comunidades han honrado a sus difuntos con rituales. No importa la cultura ni la época: el ser humano necesita despedirse. En este artículo exploramos por qué los ritos funerarios son sanadores y cómo personalizarlos para que honren de verdad la vida de quien partió.",
    sections: [
      {
        heading: "La función sanadora del ritual",
        paragraphs: [
          "Un rito funerario no es solo una formalidad. Es el espacio simbólico donde la familia y la comunidad se reúnen para reconocer que algo importante ha terminado, para compartir el peso del dolor y para comenzar, juntos, el camino del duelo. Estudios de psicología del duelo coinciden en que los rituales estructurados ayudan a procesar la pérdida de manera más sana que el silencio o la negación.",
          "Cuando hay un lugar, un horario y una manera esperada de honrar al ser querido, el cerebro encuentra anclas. Sabe qué hacer, qué decir, dónde estar. Esa estructura, aparentemente pequeña, es lo que permite que las emociones fluyan sin desbordarse. Por eso, aún hoy, en una sociedad cada vez más secular, los ritos funerarios siguen siendo universales.",
        ],
      },
      {
        heading: "Elementos que puedes personalizar",
        paragraphs: [
          "Cada vida es única y la despedida debería reflejarla. Atrás quedó el tiempo en que todos los servicios eran idénticos: hoy es posible —y recomendable— personalizar cada detalle. Estos son los elementos que más se adaptan a la historia y los deseos del difunto:",
        ],
        bullets: [
          "Música: canciones favoritas, himnos religiosos, piezas clásicas o melodías que marcaron su vida.",
          "Arreglos florales: con flores significativas, colores favoritos o temáticas especiales.",
          "Esquelas y programas: con textos, poemas, fotos y citas que reflejen su personalidad.",
          "Ceremonia: religiosa, ecuménica, laica o mixta; con sacerdote, pastor, oficiante o un ser querido.",
          "Recordatorios: llaves, estampas, libritos, semillas de árbol o cualquier objeto que la familia quiera regalar.",
          "Discurso: intervención de familiares, amigos o compañeros de trabajo que compartieron su vida.",
        ],
      },
      {
        heading: "Cómo conversarlo con la familia",
        paragraphs: [
          "Personalizar una despedida requiere conversar antes, no después. Si el ser querido aún está vivo, pregúntale qué le gustaría. Es un diálogo difícil pero profundamente sanador: muchas personas se sienten aliviadas al poder expresar sus deseos y saber que serán respetados. Si ya partió, reúne a la familia en un espacio tranquilo y compartan recuerdos: de ahí surgirán los detalles que harán la ceremonia auténtica.",
          "Nuestro equipo en Funeraria Romana está entrenado para guiar esta conversación con sensibilidad. No imponemos un guion; ayudamos a encontrar el que corresponde a cada familia. Ya sea una misa tradicional, una ceremonia laica con canciones favoritas o un servicio íntimo en capilla privada, lo importante es que la despedida sea verdaderamente suya.",
        ],
      },
    ],
    conclusion:
      "Los ritos de despedida son el último regalo que hacemos a quien partió y el primer paso del duelo para quienes se quedan. Personalizarlos no es un lujo: es una manera de honrar una vida que merece ser recordada a su manera.",
  },
  {
    id: "3",
    slug: "tramites-legales-fallecimiento-republica-dominicana",
    category: "Trámites legales",
    title: "Trámites legales tras un fallecimiento en República Dominicana",
    excerpt:
      "Una guía clara de los documentos y gestiones necesarias cuando ocurre un fallecimiento, en hospitales, hogares y vías públicas.",
    readTime: "8 min",
    publishedAt: "2026-07-01",
    author: "Equipo Funeraria Romana",
    coverImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Cuando ocurre un fallecimiento, además del dolor emocional, surge una serie de trámites legales que deben cumplirse en plazos específicos. Conocerlos con anticipación evita contratiempos y permite enfocarse en lo realmente importante: despedir al ser querido. Esta guía resume los documentos y gestiones esenciales en República Dominicana.",
    sections: [
      {
        heading: "El acta de defunción",
        paragraphs: [
          "El documento central tras cualquier fallecimiento es el acta (o certificado) de defunción. La emite un médico certificado o, en algunos casos, una autoridad competente como el fiscal. Sin este documento no puede iniciarse ningún trámite funerario ni civil. Por eso, lo primero que debe hacerse —en hospital, hogar o vía pública— es conseguir que un profesional autorizado lo firme.",
          "El acta debe contener la fecha, hora y causa del fallecimiento, además de los datos de identificación del difunto. Con ella en mano, la funeraria puede proceder con el traslado, la velación y, eventualmente, la inhumación o cremación. La oficina del Registro Civil correspondiente es la encargada de inscribir la defunción y emitir copias certificadas para los demás trámites.",
        ],
      },
      {
        heading: "Según el lugar del fallecimiento",
        paragraphs: [
          "El procedimiento varía dependiendo de dónde ocurrió el deceso. Conocer la diferencia evita confusiones y demoras:",
        ],
        bullets: [
          "En hospital: el personal médico emite el certificado de defunción. La funeraria coordina el traslado directamente con el centro.",
          "En el hogar: se debe llamar a un médico para que certifique el deceso. Si el fallecimiento fue natural y esperado, el proceso es sencillo; si hubo dudas, puede requerirse intervención del médico legista.",
          "En vía pública: interviene la autoridad competente (Policía Nacional, fiscal o médico legista) y se levanta un acta. Hasta que se autorice, el cuerpo no puede ser trasladado.",
          "Traslado internacional: se requieren permisos adicionales del consulado, certificados sanitarios y, en algunos casos, embalsamamiento.",
        ],
      },
      {
        heading: "Otros documentos y gestiones posteriores",
        paragraphs: [
          "Una vez asegurada la defunción y el servicio funerario, quedan gestiones civiles que la familia deberá completar en los días y semanas siguientes. Aunque no son urgentes el mismo día, conviene tenerlas presentes para evitar olvidos que después complican la herencia o los beneficios.",
        ],
        bullets: [
          "Inscripción de la defunción en el Registro Civil (la funeraria suele ayudar a coordinar).",
          "Solicitud de copias certificadas del acta: se necesitan para banco, pensión, seguro, herencia y otras gestiones.",
          "Notificación al empleador, si el difunto trabajaba: para trámites de prestaciones laborales y seguro de vida.",
          "Notificación a la Tesorería de la Seguridad Social (TSS) para pensión de sobrevivientes.",
          "Gestiones bancarias: presentación del acta para liberar o transferir cuentas.",
          "Trámite sucesorio ante un notario público cuando hay bienes.",
        ],
      },
      {
        heading: "Cómo Funeraria Romana te ayuda",
        paragraphs: [
          "Sabemos que en medio del duelo los trámites pueden resultar abrumadores. Por eso, nuestro equipo acompaña a las familias en cada paso: desde la coordinación del certificado de defunción hasta la orientación sobre los trámites civiles posteriores. No tienes que enfrentar este proceso solo.",
          "Si tienes preguntas específicas sobre tu caso, llámanos al (809) 813-4076 o escríbenos por WhatsApp al (809) 399-4382. Estamos disponibles 24 horas, los 365 días del año, para orientarte sin compromiso.",
        ],
      },
    ],
    conclusion:
      "Los trámites legales tras un fallecimiento pueden parecer muchos, pero con la guía adecuada son manejables. Lo más importante es contar con el acta de defunción y dejarse acompañar por profesionales que conozcan el proceso. El resto es tiempo, papel y paciencia; el duelo merece toda tu atención.",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

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

// ============================================================
// TIENDA — Velatorios y productos
// ============================================================

export type Velatorio = {
  id: string;
  name: string;
  shortName: string;
  address: string;
  city: string;
  phone?: string;
};

// Velatorios disponibles para entrega de arreglos florales
export const velatorios: Velatorio[] = [
  {
    id: "funeraria-romana-principal",
    name: "Funeraria Romana — Sala Principal",
    shortName: "Sala Principal",
    address: "Calle Juan Pablo Duarte #45, La Romana",
    city: "La Romana",
    phone: "(809) 813-4076",
  },
  {
    id: "funeraria-romana-sala-2",
    name: "Funeraria Romana — Sala 2",
    shortName: "Sala 2",
    address: "Calle Juan Pablo Duarte #45, La Romana",
    city: "La Romana",
    phone: "(809) 813-4076",
  },
  {
    id: "funeraria-romana-capilla-la-atarraya",
    name: "Capilla La Atarraya",
    shortName: "Capilla La Atarraya",
    address: "Calle Juan Pablo Duarte #45, La Romana",
    city: "La Romana",
    phone: "(809) 813-4076",
  },
  {
    id: "funeraria-romana-sala-privada",
    name: "Funeraria Romana — Sala Privada",
    shortName: "Sala Privada",
    address: "Calle Juan Pablo Duarte #45, La Romana",
    city: "La Romana",
    phone: "(809) 813-4076",
  },
  {
    id: "cementerio-la-romana-1",
    name: "Cementerio No. 1 La Romana",
    shortName: "Cementerio No. 1",
    address: "Calle Juan Pablo Duarte, La Romana",
    city: "La Romana",
  },
  {
    id: "otro-velatorio",
    name: "Otro velatorio (especificar al coordinar)",
    shortName: "Otro velatorio",
    address: "Especificar al coordinar la entrega",
    city: "—",
  },
];

export type ProductCategory = "coronas" | "arreglos" | "urnas" | "recordatorios";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  currency: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
  gallery?: string[];
  featured?: boolean;
  inStock: boolean;
};

export const productCategories: {
  id: ProductCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "coronas",
    label: "Coronas",
    description: "Coronas fúnebres tradicionales y modernas",
  },
  {
    id: "arreglos",
    label: "Arreglos florales",
    description: "Ramos, centros y arreglos diversos",
  },
  {
    id: "urnas",
    label: "Urnas",
    description: "Urnas para cenizas y recordatorios",
  },
  {
    id: "recordatorios",
    label: "Recordatorios",
    description: "Llaves, estampas y programas",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "corona-gladiolos-rosas",
    name: "Corona de Gladiolos y Rosas",
    category: "coronas",
    price: 8500,
    currency: "DOP",
    shortDescription: "Corona clásica con gladiolos blancos y rosas rojas.",
    description:
      "Una corona fúnebre tradicional elaborada con gladiolos blancos frescos y rosas rojas de primera calidad. Simboliza el respeto, el amor eterno y la pureza del homenaje. Apropiada para velatorios en sala principal y servicios en capilla.",
    features: [
      "Gladiolos blancos frescos",
      "Rosas rojas premium",
      "Base estructural reforzada",
      "Cinta negra con dedicatoria personalizable",
      "Tamaño aproximado: 80 cm de diámetro",
    ],
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1525164286253-04e68b9c4a45?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    inStock: true,
  },
  {
    id: "2",
    slug: "corona-claveles-blancos",
    name: "Corona de Claveles Blancos",
    category: "coronas",
    price: 7200,
    currency: "DOP",
    shortDescription: "Corona elegante totalmente en claveles blancos.",
    description:
      "Corona fúnebre en claveles blancos, símbolo de pureza e inocencia. Una opción sobria y elegante para honrar a seres queridos. Elaborada con claveles frescos de primera selección sobre base circular reforzada.",
    features: [
      "Claveles blancos frescos",
      "Densidad alta de flores",
      "Base circular reforzada",
      "Cinta con dedicatoria opcional",
      "Tamaño aproximado: 70 cm de diámetro",
    ],
    image:
      "https://images.unsplash.com/photo-1525164286253-04e68b9c4a45?auto=format&fit=crop&w=900&q=80",
    featured: true,
    inStock: true,
  },
  {
    id: "3",
    slug: "corona-mixta-premium",
    name: "Corona Mixta Premium",
    category: "coronas",
    price: 12500,
    currency: "DOP",
    shortDescription: "Corona premium con variedad de flores de temporada.",
    description:
      "Nuestra corona más distinguida. Combina gladiolos, rosas, claveles, lirios y follaje verde de temporada para crear una pieza de homenaje impactante y memorable. Ideal para servicios VIP y homenajes especiales.",
    features: [
      "Mezcla premium de flores de temporada",
      "Gladiolos, rosas, claveles y lirios",
      "Follaje verde denso",
      "Cinta negra premium con dedicatoria",
      "Tamaño aproximado: 90 cm de diámetro",
    ],
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=900&q=80",
    featured: true,
    inStock: true,
  },
  {
    id: "4",
    slug: "arreglo-centro-mesa",
    name: "Centro de Mesa Floral",
    category: "arreglos",
    price: 3800,
    currency: "DOP",
    shortDescription: "Centro de mesa con flores blancas y verdes.",
    description:
      "Centro de mesa floral elegante para acompañar el velatorio. Combina flores blancas con follaje verde sobre base baja. Apropiado para mesas principales, altar y áreas comunes del velatorio.",
    features: [
      "Flores blancas frescas",
      "Follaje verde decorativo",
      "Base baja estable",
      "Duración aproximada: 5-7 días",
      "Tamaño aproximado: 40 cm de diámetro",
    ],
    image:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
  {
    id: "5",
    slug: "arreglo-ramo-condolencias",
    name: "Ramo de Condolencias",
    category: "arreglos",
    price: 2200,
    currency: "DOP",
    shortDescription: "Ramo pequeño para enviar a la familia.",
    description:
      "Ramo de flores frescas para enviar como muestra de condolencia a la familia del difunto. Opción íntima y económica, ideal cuando se desea acompañar de cerca sin enviar una corona completa.",
    features: [
      "Flores frescas de temporada",
      "Envoltorio elegante",
      "Tarjeta con dedicatoria personalizable",
      "Tamaño aproximado: 30 cm",
    ],
    image:
      "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
  {
    id: "6",
    slug: "urna-madera-cedro",
    name: "Urna de Madera de Cedro",
    category: "urnas",
    price: 6500,
    currency: "DOP",
    shortDescription: "Urna tallada a mano en cedro dominicano.",
    description:
      "Urna artesanal elaborada en cedro dominicano, tallada a mano por artesanos locales. Acabado pulido con tapa hermética. Apropiada para conservar las cenizas con dignidad y belleza.",
    features: [
      "Madera de cedro dominicano",
      "Tallado artesanal a mano",
      "Tapa hermética sellada",
      "Capacidad: 200 pulgadas cúbicas",
      "Incluye caja protectora",
    ],
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
  {
    id: "7",
    slug: "urna-metalica-bronce",
    name: "Urna Metálica en Bronce",
    category: "urnas",
    price: 8900,
    currency: "DOP",
    shortDescription: "Urna metálica con acabado en bronce pulido.",
    description:
      "Urna metálica de alta calidad con acabado en bronce pulido. Diseño elegante y permanente, con tapa roscada hermética. Apropiada para conservación a largo plazo o para colocar en nicho.",
    features: [
      "Metal con acabado bronce",
      "Tapa roscada hermética",
      "Base con fieltro protector",
      "Capacidad: 200 pulgadas cúbicas",
      "Incluye estuche de presentación",
    ],
    image:
      "https://images.unsplash.com/photo-1611712347356-10f219e4f0f4?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
  {
    id: "8",
    slug: "recordatorios-llaves",
    name: "Llaves Recordatorias (paquete x 50)",
    category: "recordatorios",
    price: 1800,
    currency: "DOP",
    shortDescription: "Paquete de 50 llaves recordatorias personalizadas.",
    description:
      "Paquete de 50 llaves recordatorias con foto, nombre y fechas del difunto. Detalle tradicional en los servicios funerarios dominicanos. Entregadas en sobre individual para repartir entre los asistentes.",
    features: [
      "50 llaves impresas a color",
      "Foto, nombre y fechas",
      "Sobre individual incluido",
      "Diseño personalizable",
      "Entrega en 24-48 horas",
    ],
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function formatPrice(amount: number, currency = "DOP"): string {
  const formatted = new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return formatted;
}

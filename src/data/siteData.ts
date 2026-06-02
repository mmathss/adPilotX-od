export const SITE_DATA = {
  video_demo: {
    videoUrl: "", // URL de video real (.mp4, etc.) o vacío para fallback SaaS
    thumbnailUrl: "", // Imagen de miniatura
    badge: "DEMO DE PLATAFORMA",
    version: "adpilotx_dashboard_v1.4",
    status: "Optimizando 24/7",
    crumb: "Campañas / Escala Proactiva",
    budget: "$450.00",
    roas: "5.2x",
    cpl: "$8.12",
    chartPercentage: "+42.8% este mes"
  },
  ticker: [
    "A/B Testing Continuo",
    "Optimización 24/7",
    "Meta Ads Partner",
    "Escala Predictiva",
    "CPA Minimizado",
    "ROAS Proactivo"
  ],
  problem_grid: {
    cards: [
      {
        title: "Presupuestos que se esfuman",
        desc: "Anuncios repetitivos que cansan a tu audiencia y segmentación manual deficiente que hace que pagues de más por cada cliente."
      },
      {
        title: "Proceso lento",
        desc: "Días enteros esperando que un diseñador o agencia configure y suba tus anuncios."
      },
      {
        title: "Agencias carísimas",
        desc: "Cobros recurrentes exorbitantes por tareas operativas automatizables."
      },
      {
        title: "Campañas desatendidas",
        desc: "Si no vigilas tus anuncios a diario, pierden efectividad. Las agencias revisan una vez a la semana; la IA optimiza cada 10 minutos."
      },
      {
        title: "Falta de claridad",
        desc: "Reportes confusos y métricas de vanidad que ocultan el retorno de inversión real."
      },
      {
        title: "Pérdida de tiempo",
        desc: "Reuniones infinitas y correos interminables explicando tu negocio a diseñadores y agencias que no entienden tu producto."
      }
    ]
  },
  comparative: {
    features: [
      { aspect: "Velocidad", ai: "1 Minuto", human: "3-5 Días" },
      { aspect: "Optimización", ai: "24/7 Tiempo Real", human: "Semanal" },
      { aspect: "Costo", ai: "$65/mes", human: "$500+/mes" },
      { aspect: "Variantes", ai: "Ilimitadas", human: "Limitadas" },
      { aspect: "Tasa de Error", ai: "0% Error", human: "Frecuente" }
    ]
  },
  examples_carousel: {
    cards: [
      {
        avatar: "DS",
        name: "Dental Studio",
        tag: "ODONTOLOGÍA",
        title: "Sonríe sin complejos.",
        subtitle: "Implantes Premium",
        meta: "Tecnología 3D indolora",
        text: "Recupera tu sonrisa con nuestro tratamiento de implantes de última generación.",
        cta: "RESERVAR CITA"
      },
      {
        avatar: "GL",
        name: "Glow Lab",
        tag: "ESTÉTICA",
        title: "Piel radiante en solo 3 sesiones.",
        subtitle: "Tratamiento Glow Up",
        meta: "100% no invasivo",
        text: "Piel radiante en solo 3 sesiones. Descubre nuestro nuevo peeling facial.",
        cta: "VER PROMOCIÓN"
      },
      {
        avatar: "BB",
        name: "Burger Bistro",
        tag: "GASTRONOMÍA",
        title: "¿Hambre de la smash definitiva?",
        subtitle: "2x1 en toda la carta",
        meta: "Solo por este fin de semana",
        text: "La Smash Burger definitiva está aquí. 2x1 solo por este fin de semana.",
        cta: "PEDIR AHORA"
      },
      {
        avatar: "UT",
        name: "Urban Tech",
        tag: "ECOMMERCE",
        title: "Minimalismo en tu setup.",
        subtitle: "Envíos Express Gratis",
        meta: "Garantía de 2 años",
        text: "Gadgets que transforman tu espacio de trabajo. Envíos gratis hoy.",
        cta: "COMPRAR"
      },
      {
        avatar: "PR",
        name: "Prime Realty",
        tag: "INMOBILIARIA",
        title: "Tu nuevo hogar te espera.",
        subtitle: "Zonas Exclusivas",
        meta: "Financiación flexible",
        text: "Encuentra la casa de tus sueños en las mejores zonas de la ciudad.",
        cta: "VER PROPIEDADES"
      },
      {
        avatar: "FC",
        name: "Fit Core",
        tag: "GIMNASIOS",
        title: "Entrena con los mejores del sector.",
        subtitle: "Matrícula 100% Gratis",
        meta: "Acceso ilimitado 24/7",
        text: "Entrena con los mejores. Matrícula gratis este mes. ¡Apúntate!",
        cta: "ME INTERESA"
      }
    ]
  },
  testimonials: [
    {
      stars: 5,
      quote: "Pasamos de un ROAS de 1.5 a 4.2 en menos de un mes. La IA de AdPilotX gestiona mejor que nuestra agencia anterior.",
      avatar: "JD",
      name: "Javier Domínguez",
      company: "CEO en Estética Pro"
    },
    {
      stars: 5,
      quote: "Lo que más valoro es la velocidad. Respondemos al brief y en minutos tenemos campañas corriendo y optimizándose.",
      avatar: "ML",
      name: "Marta López",
      company: "Marketing Manager, FoodieHub"
    },
    {
      stars: 5,
      quote: "La optimización 24/7 es real. He visto cómo apaga anuncios que no rinden mientras yo duermo, cuidando mi presupuesto.",
      avatar: "RC",
      name: "Roberto Carlos",
      company: "Fundador de UrbanTech"
    },
    {
      stars: 5,
      quote: "Increíble ver cómo la IA identifica patrones de compra que a nosotros nos tomaba meses descubrir. 100% recomendado.",
      avatar: "SF",
      name: "Sofía Ferrer",
      company: "Directora de Growth, Prime Realty"
    }
  ],
  pricing_plans: {
    plans: [
      {
        name: "Plan Base",
        price: "$65",
        period: "/mes",
        features: [
          "Campañas ilimitadas",
          "Optimización automática",
          "Soporte vía chat"
        ],
        cta: "Activar Plan Base",
        featured: false
      },
      {
        name: "Plan Premium",
        price: "$110",
        period: "/mes",
        features: [
          "Todo lo del Plan Base",
          "Generación de imágenes IA",
          "Soporte prioritario 24/7"
        ],
        cta: "Activar Premium",
        featured: true
      }
    ]
  },
  faqs: {
    list: [
      {
        q: "¿Necesito experiencia técnica?",
        a: "No. El sistema te guía mediante un brief estratégico y se encarga de toda la implementación técnica de tus anuncios de forma automática."
      },
      {
        q: "¿Se integra con mi cuenta de Meta?",
        a: "Sí, conectamos de forma 100% segura utilizando la API oficial de Meta para gestionar y optimizar tus campañas publicitarias."
      }
    ]
  },
  guideMessages: {
    hero: "¡Hola! Descubre cómo AdPilotX automatiza la optimización de Meta Ads en tiempo real.",
    problemas: "Evita la fatiga de anuncios. Nuestra IA redistribuye el presupuesto hacia las variantes de mayor ROAS automáticamente.",
    pasos: "Conecta tu cuenta publicitaria mediante la API segura, ingresa tu brief de negocio y activa campañas en producción.",
    ejemplos: "Estos creativos se generan y rotan de forma dinámica en base al rendimiento real de cada sector.",
    comparativa: "Automatizamos las tareas operativas diarias reduciendo el tiempo de despliegue a minutos y el CPA en promedio un 14.2%.",
    resultados: "Métricas obtenidas mediante integraciones oficiales: ROAS predictivo y reportes de conversión unificados.",
    precios: "Selecciona el plan de escala y mantén el control completo de tu presupuesto sin contratos ni permanencia.",
    faq: "Nos integramos de forma 100% segura mediante Meta Graph API con tokens encriptados de acceso."
  },
  nichesData: {
    dental: {
      domain: "adpilotx.ai/dental",
      log: [
        "[SISTEMA] Escaneando pacientes potenciales en tu ciudad...",
        "[ANALIZADOR] Segmentación: Personas de 25 a 55 años buscando odontólogos locales.",
        "[COPIADO] Creando anuncios persuasivos para tu clínica...",
        "[A/B TESTING] Variante B ganadora: 'Sonríe sin complejos'.",
        "[OPTIMIZADOR] Costo por reserva de cita médica reducido en un 14.2%."
      ],
      meta: "Tecnología 3D indolora",
      caption: "Recupera tu sonrisa con nuestro tratamiento de implantes de última generación. Tecnología 3D indolora.",
      name: "Dental Studio",
      roas: "4.18x",
      cta: "RESERVAR CITA",
      gradient: "var(--ad-creative-bg-dental)",
      cpa: "-14.2%",
      subtitle: "Implantes Premium",
      title: "Sonríe sin complejos.",
      avatar: "D",
      tag: "ODONTOLOGÍA"
    },
    beauty: {
      domain: "glowlab.es/promo",
      log: [
        "[SISTEMA] Localizando clientes interesados en skin care...",
        "[ANALIZADOR] Audiencia ideal activa: Personas interesadas en belleza y cuidado facial.",
        "[COPIADO] Diseñando copies con testimonios reales...",
        "[A/B TESTING] Variante A ganadora (mejor CTR): 'Glow Up facial'.",
        "[OPTIMIZADOR] Ventas del tratamiento escaladas x5 veces este mes."
      ],
      meta: "100% no invasivo",
      caption: "Piel radiante en solo 3 sesiones. Descubre nuestro nuevo peeling facial regenerativo no invasivo.",
      name: "Glow Lab",
      roas: "5.42x",
      cta: "VER PROMOCIÓN",
      gradient: "var(--ad-creative-bg-beauty)",
      cpa: "-22.1%",
      subtitle: "Tratamiento Glow Up",
      title: "Piel radiante en solo 3 sesiones.",
      avatar: "G",
      tag: "ESTÉTICA"
    },
    restaurant: {
      domain: "burgerbistro.net/pedir",
      log: [
        "[SISTEMA] Mapeando clientes con hambre a 5km a la redonda...",
        "[ANALIZADOR] Audiencia óptima: Jóvenes buscando opciones de comida rápida.",
        "[COPIADO] Escribiendo anuncios con urgencia de fin de semana...",
        "[A/B TESTING] Variante C (Promo 2x1) elegida como favorita.",
        "[OPTIMIZADOR] Pedidos aumentados un 40% durante las horas pico."
      ],
      meta: "Solo por este fin de semana",
      caption: "La Smash Burger definitiva está aquí. 2x1 solo por este fin de semana en pedidos Web y App.",
      name: "Burger Bistro",
      roas: "3.95x",
      cta: "PEDIR AHORA",
      gradient: "var(--ad-creative-bg-restaurant)",
      cpa: "-18.6%",
      subtitle: "2x1 en toda la carta",
      title: "¿Hambre de la smash definitiva?",
      avatar: "B",
      tag: "GASTRONOMÍA"
    },
    ecommerce: {
      domain: "urbantech.io/setup",
      log: [
        "[SISTEMA] Vinculando inventario de tu tienda online...",
        "[ANALIZADOR] Audiencia: Profesionales en teletrabajo y setup de escritorio.",
        "[COPIADO] Generando copies sobre envíos gratis y garantía...",
        "[A/B TESTING] Variante B ganadora: 'Envíos Express Gratis'.",
        "[OPTIMIZADOR] Costo por venta web reducido un 20.4% en 48hs."
      ],
      meta: "Garantía de 2 años",
      caption: "Gadgets y accesorios premium que transforman por completo tu espacio de trabajo. Envíos gratis hoy.",
      name: "Urban Tech",
      roas: "4.86x",
      cta: "COMPRAR AHORA",
      gradient: "var(--ad-creative-bg-ecommerce)",
      cpa: "-20.4%",
      subtitle: "Envíos Express Gratis",
      title: "Minimalismo en tu setup.",
      avatar: "U",
      tag: "ECOMMERCE"
    },
    realty: {
      domain: "primerealty.com/zonas",
      log: [
        "[SISTEMA] Buscando compradores de vivienda calificados...",
        "[ANALIZADOR] Audiencia: Familias buscando reubicación y estabilidad.",
        "[COPIADO] Creando anuncios sobre confianza y financiación...",
        "[A/B TESTING] Variante A de prestigio seleccionada automáticamente.",
        "[OPTIMIZADOR] Filtrado de consultas basura activado para ahorrar presupuesto."
      ],
      meta: "Financiación flexible",
      caption: "Encuentra la casa de tus sueños en las zonas residenciales más exclusivas de la ciudad. Financiación flexible.",
      name: "Prime Realty",
      roas: "6.12x",
      cta: "VER CASAS",
      gradient: "var(--ad-creative-bg-realty)",
      cpa: "-26.5%",
      subtitle: "Zonas Exclusivas",
      title: "Tu nuevo hogar te espera.",
      avatar: "P",
      tag: "INMOBILIARIA"
    }
  }
};

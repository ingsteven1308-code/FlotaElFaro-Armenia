export const COMPANY = {
  name: 'Flota El Faro',
  tagline: 'Taxi seguro, rápido y confiable en Armenia',
  address: 'Cl 13 #23-30, Armenia Quindío',
  phones: ['6067466000', '6067368922', '3122039996'],
  whatsapp: '573122039996',
  whatsappMsg: 'Hola, necesito un taxi por favor.',
  email: 'flotaelfaro@gmail.com',
  hours: '24 horas, 7 días a la semana',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.4!2d-75.6814!3d4.5339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFlota+El+Faro!5e0!3m2!1ses!2sco!4v1700000000000',
  social: {
    facebook: 'https://facebook.com/flotaelfaro',
    instagram: 'https://instagram.com/flotaelfaro',
    twitter: '#',
  }
}

export const WHATSAPP_URL = (msg = COMPANY.whatsappMsg) =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`

export const SERVICES = [
  {
    id: 'urbano',
    title: 'Servicio Urbano',
    description: 'Transporte rápido y seguro dentro de Armenia. Llegamos a tu puerta en minutos.',
    icon: 'FaCar',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
    whatsappMsg: 'Hola, necesito un taxi urbano en Armenia.',
  },
  {
    id: 'aeropuerto',
    title: 'Servicio Aeropuerto',
    description: 'Traslados puntuales al Aeropuerto El Edén. Seguimiento de vuelos incluido.',
    icon: 'FaPlane',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
    whatsappMsg: 'Hola, necesito taxi al aeropuerto El Edén de Armenia.',
  },
  {
    id: 'empresarial',
    title: 'Taxi Empresarial',
    description: 'Transporte corporativo con facturación, vehículos confortables y atención prioritaria.',
    icon: 'FaBriefcase',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80',
    whatsappMsg: 'Hola, necesito información sobre el servicio de taxi empresarial.',
  },
  {
    id: '24-horas',
    title: 'Servicio 24/7',
    description: 'Disponibles a cualquier hora del día o de la noche. Siempre hay un conductor para ti.',
    icon: 'FaClock',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
    whatsappMsg: 'Hola, necesito un taxi ahora.',
  },
  {
    id: 'envios',
    title: 'Envíos y Mensajería',
    description: 'Enviamos tus paquetes y documentos de forma rápida y segura por toda la ciudad.',
    icon: 'FaBox',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&q=80',
    whatsappMsg: 'Hola, necesito hacer un envío o encomienda.',
  },
  {
    id: 'reservas',
    title: 'Reservas Programadas',
    description: 'Agenda tu taxi con anticipación. Garantizamos puntualidad en todas tus reservas.',
    icon: 'FaCalendarCheck',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80',
    whatsappMsg: 'Hola, quiero hacer una reserva programada.',
  },
  {
    id: 'turistico',
    title: 'Transporte Turístico',
    description: 'Recorre el Eje Cafetero con comodidad. Parque del Café, fincas cafeteras y más.',
    icon: 'FaMountain',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    whatsappMsg: 'Hola, necesito transporte turístico por el Eje Cafetero.',
  },
  {
    id: 'eventos',
    title: 'Transporte para Eventos',
    description: 'Bodas, reuniones, graduaciones y eventos especiales. Servicio elegante y puntual.',
    icon: 'FaStar',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    whatsappMsg: 'Hola, necesito transporte para un evento especial.',
  },
]

export const BENEFITS = [
  {
    title: 'Conductores Verificados',
    description: 'Todos nuestros conductores cuentan con antecedentes verificados, licencia vigente y capacitación continua.',
    icon: 'FaUserCheck',
  },
  {
    title: 'Atención 24/7',
    description: 'Servicio disponible las 24 horas del día, los 7 días de la semana, incluyendo festivos.',
    icon: 'FaClock',
  },
  {
    title: 'Cobertura Amplia',
    description: 'Cubrimos Armenia y sus municipios vecinos: Calarcá, Circasia, Montenegro, La Tebaida y más.',
    icon: 'FaMapMarkedAlt',
  },
  {
    title: 'Respuesta Rápida',
    description: 'Tiempo de respuesta mínimo. Contamos con una flota amplia para atenderte de inmediato.',
    icon: 'FaBolt',
  },
  {
    title: 'Seguridad Garantizada',
    description: 'Vehículos con SOAT, revisión técnico-mecánica y GPS activo en todos los recorridos.',
    icon: 'FaShieldAlt',
  },
  {
    title: 'Vehículos Afiliados',
    description: 'Flota de vehículos modernos, cómodos y en perfecto estado mecánico.',
    icon: 'FaCar',
  },
  {
    title: 'Facturación Empresarial',
    description: 'Emitimos facturas para personas jurídicas. Convenios y tarifas especiales para empresas.',
    icon: 'FaFileInvoice',
  },
  {
    title: 'Precio Justo',
    description: 'Tarifas transparentes y competitivas. Sin cobros ocultos ni sorpresas al final.',
    icon: 'FaTag',
  },
]

export const COVERAGE_AREAS = [
  { name: 'Armenia', description: 'Cobertura total en toda la ciudad', icon: 'FaCity' },
  { name: 'Aeropuerto El Edén', description: 'Traslados puntuales y seguimiento de vuelos', icon: 'FaPlane' },
  { name: 'Calarcá', description: 'Servicio regular hacia y desde Calarcá', icon: 'FaMapMarkerAlt' },
  { name: 'Circasia', description: 'Cobertura en el municipio de Circasia', icon: 'FaMapMarkerAlt' },
  { name: 'Montenegro', description: 'Servicio disponible en Montenegro', icon: 'FaMapMarkerAlt' },
  { name: 'La Tebaida', description: 'Cobertura completa en La Tebaida', icon: 'FaMapMarkerAlt' },
  { name: 'Parque del Café', description: 'Traslados al parque temático del café', icon: 'FaCoffee' },
  { name: 'Hoteles y Turismo', description: 'Fincas cafeteras, hoteles y sitios turísticos', icon: 'FaHotel' },
]

export const TESTIMONIALS = [
  {
    name: 'Carlos Martínez',
    role: 'Viajero frecuente',
    text: 'Excelente servicio. Siempre puntuales y los conductores son muy amables. Los uso cada vez que llego al aeropuerto.',
    rating: 5,
    avatar: 'CM',
  },
  {
    name: 'Laura Gómez',
    role: 'Empresaria',
    text: 'Tenemos convenio con Flota El Faro para nuestros empleados. El servicio es impecable, siempre a tiempo y con factura.',
    rating: 5,
    avatar: 'LG',
  },
  {
    name: 'Andrés Valencia',
    role: 'Turista',
    text: 'Nos llevaron a recorrer el Eje Cafetero. El conductor conocía perfectamente los sitios turísticos. 100% recomendados.',
    rating: 5,
    avatar: 'AV',
  },
  {
    name: 'María Sánchez',
    role: 'Cliente frecuente',
    text: 'Los llamo a las 4am para mi turno y nunca me han fallado. Conductores seguros y profesionales. ¡Los recomiendo!',
    rating: 5,
    avatar: 'MS',
  },
  {
    name: 'Jorge Ospina',
    role: 'Médico',
    text: 'Trabajo en urgencias y necesito transporte seguro a cualquier hora. Flota El Faro siempre está disponible cuando más los necesito.',
    rating: 5,
    avatar: 'JO',
  },
]

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    alt: 'Taxi en Armenia',
    category: 'ciudad',
  },
  {
    src: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80',
    alt: 'Taxi amarillo',
    category: 'taxi',
  },
  {
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    alt: 'Aeropuerto El Edén',
    category: 'aeropuerto',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    alt: 'Conductor profesional',
    category: 'conductor',
  },
  {
    src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    alt: 'Ciudad de Armenia',
    category: 'ciudad',
  },
  {
    src: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
    alt: 'Servicio corporativo',
    category: 'empresarial',
  },
  {
    src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    alt: 'Eje Cafetero',
    category: 'turismo',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    alt: 'Evento especial',
    category: 'eventos',
  },
]

export const STATS = [
  { number: '15+', label: 'Años de experiencia' },
  { number: '50+', label: 'Conductores activos' },
  { number: '24/7', label: 'Disponibilidad' },
  { number: '5★', label: 'Calificación promedio' },
]

import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaClock, FaWhatsapp, FaPhone, FaMoon, FaSun, FaShieldAlt } from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL } from '../data'
import WhatsAppCTA from '../components/sections/WhatsAppCTA'

const hours = [
  { period: 'Mañana', time: '5:00 AM - 12:00 PM', icon: FaSun, available: true },
  { period: 'Tarde', time: '12:00 PM - 8:00 PM', icon: FaSun, available: true },
  { period: 'Noche', time: '8:00 PM - 5:00 AM', icon: FaMoon, available: true },
  { period: 'Festivos', time: 'Todo el día', icon: FaClock, available: true },
]

export default function Taxi24Hours() {
  return (
    <>
      <Helmet>
        <title>Taxi 24 Horas Armenia Quindío | Flota El Faro - Disponible Siempre</title>
        <meta name="description" content="Taxi 24 horas en Armenia Quindío. Servicio nocturno, madrugada, festivos. Conductores disponibles a toda hora. Llame: 606-746-6000 o WhatsApp." />
        <meta name="keywords" content="taxi 24 horas armenia, taxi nocturno armenia, taxi madrugada armenia, taxi festivos armenia" />
        <link rel="canonical" href="https://flotaelfaro.com/taxi-24-horas-armenia" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 bg-brand-darker">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85"
            alt="Ciudad Armenia de noche"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/70 to-transparent" />
        </div>
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/30 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-brand-yellow text-sm font-semibold">Disponible ahora</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-xl">
              Taxi 24 horas en Armenia Quindío
            </h1>
            <p className="text-gray-300 text-lg max-w-lg mb-8">
              A cualquier hora del día o de la noche, siempre hay un conductor disponible para ti.
              Servicio ininterrumpido los 365 días del año.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL('Hola, necesito un taxi ahora mismo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-7 py-4"
              >
                <FaWhatsapp size={20} />
                Pedir Taxi Ahora
              </a>
              <a href={`tel:${COMPANY.phones[0]}`} className="btn-primary text-base px-7 py-4">
                <FaPhone size={18} />
                {COMPANY.phones[0]}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Availability */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-10">Siempre <span className="text-brand-yellow">disponibles</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {hours.map((h, i) => (
              <motion.div
                key={h.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-gray-light rounded-2xl p-5 text-center border border-gray-100"
              >
                <div className="bg-brand-yellow/15 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <h.icon className="text-brand-yellow text-xl" />
                </div>
                <h3 className="font-bold text-brand-dark text-sm mb-1">{h.period}</h3>
                <p className="text-brand-gray text-xs">{h.time}</p>
                <span className="inline-block mt-2 bg-green-100 text-green-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Disponible
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why night service */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Seguridad <span className="text-brand-yellow">nocturna</span> garantizada
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Viajar de noche requiere mayor confianza. Nuestros conductores nocturnos están certificados,
                los vehículos cuentan con GPS activo y nuestra central monitorea cada viaje en tiempo real.
              </p>
              <div className="space-y-3">
                {[
                  'Conductores verificados con antecedentes',
                  'GPS activo en todos los vehículos',
                  'Central de comunicaciones activa 24/7',
                  'SOAT y revisión técnico-mecánica al día',
                  'Rutas registradas y monitoreadas',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <FaShieldAlt className="text-brand-yellow flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-yellow/10 border border-brand-yellow/20 rounded-2xl p-8 text-center">
              <FaClock className="text-brand-yellow text-6xl mx-auto mb-4" />
              <p className="text-brand-yellow text-5xl font-extrabold mb-2">24/7</p>
              <p className="text-white font-semibold text-xl mb-1">365 días al año</p>
              <p className="text-gray-400 text-sm">Incluyendo Navidad, Año Nuevo y todos los festivos</p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </>
  )
}

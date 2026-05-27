import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaBriefcase, FaWhatsapp, FaPhone, FaFileInvoice, FaHandshake, FaStar, FaClock } from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL } from '../data'
import WhatsAppCTA from '../components/sections/WhatsAppCTA'

const plans = [
  {
    name: 'Básico',
    desc: 'Para empresas con necesidades puntuales de transporte',
    features: ['Hasta 10 viajes/mes', 'Facturación mensual', 'Atención prioritaria', 'Conductores verificados'],
    cta: 'Solicitar plan básico',
  },
  {
    name: 'Empresarial',
    desc: 'Para empresas con transporte frecuente de personal',
    features: ['Viajes ilimitados', 'Facturación quincenal', 'Ejecutivo asignado', 'Vehículos exclusivos', 'Reportes mensuales'],
    cta: 'Solicitar plan empresarial',
    featured: true,
  },
  {
    name: 'Corporativo',
    desc: 'Para grandes empresas con múltiples sedes',
    features: ['Flota dedicada', 'Facturación personalizada', 'Gerente de cuenta', 'Cobertura regional', 'Dashboard de viajes'],
    cta: 'Solicitar cotización',
  },
]

export default function CorporateTaxi() {
  return (
    <>
      <Helmet>
        <title>Taxi Empresarial Armenia Quindío | Flota El Faro - Convenios Corporativos</title>
        <meta name="description" content="Servicio de taxi empresarial en Armenia Quindío. Facturación, convenios, atención prioritaria. Transporte corporativo para su empresa. Contáctenos: 606-746-6000." />
        <meta name="keywords" content="taxi empresarial armenia, transporte corporativo armenia, convenio taxi armenia, taxi con factura armenia" />
        <link rel="canonical" href="https://flotaelfaro.com/taxi-empresarial" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-16 pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85"
            alt="Taxi empresarial Armenia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/85 to-brand-dark/40" />
        </div>
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/30 rounded-full px-4 py-1.5 mb-4">
              <FaBriefcase className="text-brand-yellow text-sm" />
              <span className="text-brand-yellow text-sm font-semibold">Taxi Empresarial</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-2xl">
              Transporte corporativo para su empresa en Armenia
            </h1>
            <p className="text-gray-300 text-lg max-w-lg mb-8">
              Facturación, convenios especiales y atención prioritaria para empresas de todos los tamaños.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL('Hola, estoy interesado en el servicio de taxi empresarial de Flota El Faro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-7 py-4"
              >
                <FaWhatsapp size={20} />
                Solicitar convenio
              </a>
              <a href={`tel:${COMPANY.phones[0]}`} className="btn-primary text-base px-7 py-4">
                <FaPhone size={18} />
                {COMPANY.phones[0]}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Beneficios del <span className="text-brand-yellow">servicio empresarial</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaFileInvoice, title: 'Facturación', desc: 'Factura electrónica a su empresa o NIT. Sin complicaciones contables.' },
              { icon: FaHandshake, title: 'Convenios', desc: 'Tarifas negociadas y condiciones especiales según volumen.' },
              { icon: FaStar, title: 'Prioridad', desc: 'Atención prioritaria para clientes empresariales.' },
              { icon: FaClock, title: 'Disponibilidad', desc: 'Servicio 24/7 para todos sus colaboradores.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-gray-light rounded-2xl p-6 border border-gray-100 text-center"
              >
                <div className="bg-brand-yellow/15 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-brand-yellow text-2xl" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-gray text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Planes <span className="text-brand-yellow">corporativos</span></h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-7 border-2 ${
                  plan.featured
                    ? 'bg-brand-dark border-brand-yellow shadow-xl scale-105'
                    : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                {plan.featured && (
                  <span className="inline-block bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Más popular
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-brand-dark'}`}>{plan.name}</h3>
                <p className={`text-sm mb-5 ${plan.featured ? 'text-gray-400' : 'text-brand-gray'}`}>{plan.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.featured ? 'text-gray-300' : 'text-brand-gray'}`}>
                      <span className="text-brand-yellow">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL(`Hola, estoy interesado en el plan ${plan.name} de taxi empresarial.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-colors ${
                    plan.featured
                      ? 'bg-brand-yellow hover:bg-brand-yellow-dark text-brand-dark'
                      : 'bg-brand-dark hover:bg-gray-800 text-white'
                  }`}
                >
                  <FaWhatsapp size={16} />
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </>
  )
}

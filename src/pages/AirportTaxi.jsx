import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaPlane, FaWhatsapp, FaPhone, FaClock, FaShieldAlt, FaSuitcase, FaCheckCircle } from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL } from '../data'
import WhatsAppCTA from '../components/sections/WhatsAppCTA'
import Testimonials from '../components/sections/Testimonials'

const features = [
  { icon: FaClock, title: 'Seguimiento de vuelos', desc: 'Monitoreamos tu vuelo en tiempo real para garantizar puntualidad.' },
  { icon: FaShieldAlt, title: 'Conductor esperándote', desc: 'Tu conductor estará en la terminal cuando aterrices, sin esperas.' },
  { icon: FaSuitcase, title: 'Espacio para equipaje', desc: 'Vehículos con maletero amplio para todo tu equipaje.' },
  { icon: FaPlane, title: 'Vuelos nocturnos', desc: 'Disponibles 24/7 incluyendo llegadas y salidas nocturnas.' },
]

export default function AirportTaxi() {
  return (
    <>
      <Helmet>
        <title>Taxi Aeropuerto Armenia El Edén | Flota El Faro - 606-746-6000</title>
        <meta name="description" content="Taxi al aeropuerto El Edén de Armenia Quindío. Servicio puntual 24/7, seguimiento de vuelos, conductor esperándote. Reserva: 606-746-6000 o WhatsApp." />
        <meta name="keywords" content="taxi aeropuerto armenia, taxi aeropuerto el eden, traslado aeropuerto armenia quindio" />
        <link rel="canonical" href="https://flotaelfaro.com/taxi-aeropuerto-armenia" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=85"
            alt="Aeropuerto El Edén Armenia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/80 to-brand-dark/50" />
        </div>
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/30 rounded-full px-4 py-1.5 mb-4">
              <FaPlane className="text-brand-yellow" />
              <span className="text-brand-yellow text-sm font-semibold">Taxi Aeropuerto</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-xl">
              Taxi al Aeropuerto El Edén en Armenia
            </h1>
            <p className="text-gray-300 text-lg max-w-lg mb-8">
              Traslados puntuales y seguros hacia y desde el Aeropuerto El Edén. Seguimiento de vuelos incluido.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL('Hola, necesito taxi al aeropuerto El Edén de Armenia.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-7 py-4"
              >
                <FaWhatsapp size={20} />
                Reservar por WhatsApp
              </a>
              <a href={`tel:${COMPANY.phones[0]}`} className="btn-primary text-base px-7 py-4">
                <FaPhone size={18} />
                {COMPANY.phones[0]}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">¿Por qué elegirnos para <span className="text-brand-yellow">el aeropuerto?</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-gray-light rounded-2xl p-6 text-center border border-gray-100"
              >
                <div className="bg-brand-yellow/15 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <f.icon className="text-brand-yellow text-2xl" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{f.title}</h3>
                <p className="text-brand-gray text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-custom max-w-3xl">
          <h2 className="section-title text-center mb-10">¿Cómo funciona? <span className="text-brand-yellow">Simple</span></h2>
          <div className="space-y-4">
            {[
              'Contáctanos por WhatsApp o llámanos con tu vuelo y horario',
              'Confirmamos la reserva y asignamos tu conductor',
              'El día del viaje monitoreamos tu vuelo en tiempo real',
              'Tu conductor te espera en el aeropuerto con tu nombre',
              'Llegas cómodo y puntual a tu destino',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                <div className="bg-brand-yellow text-brand-dark font-extrabold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-brand-dark font-medium pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <WhatsAppCTA />
    </>
  )
}

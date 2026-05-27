import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaMountain, FaWhatsapp, FaPhone, FaCoffee, FaCamera, FaRoute } from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL } from '../data'
import WhatsAppCTA from '../components/sections/WhatsAppCTA'

const destinations = [
  { name: 'Parque del Café', desc: 'El parque temático más icónico del Eje Cafetero', img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80' },
  { name: 'Fincas Cafeteras', desc: 'Recorridos por haciendas cafeteras tradicionales', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80' },
  { name: 'Montenegro', desc: 'Centro histórico y arquitectura colonial', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80' },
  { name: 'Salento', desc: 'Pueblo patrimonio del Quindío con Valle de Cocora', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
  { name: 'Valle de Cocora', desc: 'Las palmas de cera más altas del mundo', img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80' },
  { name: 'Circasia', desc: 'Arte urbano y tradición cafetera', img: 'https://images.unsplash.com/photo-1535916707207-35f97e0b74f1?w=600&q=80' },
]

export default function TouristService() {
  return (
    <>
      <Helmet>
        <title>Transporte Turístico Armenia Eje Cafetero | Flota El Faro</title>
        <meta name="description" content="Transporte turístico en Armenia y el Eje Cafetero. Parque del Café, Salento, Valle de Cocora, fincas cafeteras. Reserva: 606-746-6000 o WhatsApp." />
        <meta name="keywords" content="transporte turistico armenia, taxi eje cafetero, taxi parque del cafe, taxi salento armenia, tour eje cafetero" />
        <link rel="canonical" href="https://flotaelfaro.com/servicio-turistico" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=85"
            alt="Eje Cafetero turismo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/80 to-brand-dark/30" />
        </div>
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/30 rounded-full px-4 py-1.5 mb-4">
              <FaMountain className="text-brand-yellow text-sm" />
              <span className="text-brand-yellow text-sm font-semibold">Turismo Eje Cafetero</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-2xl">
              Descubre el Eje Cafetero con transporte seguro
            </h1>
            <p className="text-gray-300 text-lg max-w-lg mb-8">
              Conductores que conocen cada rincón del Quindío y el Eje Cafetero para que disfrutes al máximo tu visita.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL('Hola, necesito transporte turístico por el Eje Cafetero.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-7 py-4"
              >
                <FaWhatsapp size={20} />
                Planear mi recorrido
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
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16 text-center">
            {[
              { icon: FaRoute, title: 'Rutas personalizadas', desc: 'Diseñamos el recorrido según tus intereses y tiempo disponible.' },
              { icon: FaCoffee, title: 'Guía local', desc: 'Conductores que conocen la historia y los mejores sitios del Eje Cafetero.' },
              { icon: FaCamera, title: 'Paradas a tu ritmo', desc: 'Paramos en todos los sitios fotográficos y de interés que desees.' },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-gray-light rounded-2xl p-6 border border-gray-100"
              >
                <div className="bg-brand-yellow/15 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <f.icon className="text-brand-yellow text-xl" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{f.title}</h3>
                <p className="text-brand-gray text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Destinations */}
          <h2 className="section-title text-center mb-10">Destinos <span className="text-brand-yellow">populares</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-white font-bold">{dest.name}</h3>
                    <p className="text-gray-300 text-xs">{dest.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </>
  )
}

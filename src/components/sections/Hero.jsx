import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaStar, FaShieldAlt, FaClock } from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL, STATS } from '../../data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85"
          alt="Armenia ciudad"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darker/95 via-brand-dark/85 to-brand-darker/70" />
        {/* Yellow accent overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-yellow" />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-24 pb-16 flex flex-col items-start justify-center min-h-screen">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-brand-yellow text-sm font-semibold">Disponible ahora · 24/7</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
          >
            Taxi seguro, rápido y{' '}
            <span className="text-brand-yellow">confiable</span>
            <br />en Armenia
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8"
          >
            Servicio 24/7 &bull; Conductores profesionales &bull; Cobertura en toda la ciudad y alrededores
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <a
              href={WHATSAPP_URL('Hola, necesito un taxi por favor. 🚖')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-7 py-4"
            >
              <FaWhatsapp size={20} />
              Pedir Taxi por WhatsApp
            </a>
            <a
              href={`tel:${COMPANY.phones[0]}`}
              className="btn-primary text-base px-7 py-4"
            >
              <FaPhone size={18} />
              Llamar Ahora
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap gap-5 mb-12"
          >
            {[
              { icon: FaShieldAlt, text: 'Conductores verificados' },
              { icon: FaClock, text: 'Respuesta en minutos' },
              { icon: FaStar, text: '5 estrellas promedio' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-gray-300 text-sm">
                <Icon className="text-brand-yellow" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl font-extrabold text-brand-yellow">{stat.number}</p>
                <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
      >
        <span className="text-xs">Desliza</span>
        <div className="w-px h-8 bg-white/20" />
      </motion.div>
    </section>
  )
}

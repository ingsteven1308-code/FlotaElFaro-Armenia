import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL } from '../../data'

export default function WhatsAppCTA() {
  return (
    <section className="py-20 bg-brand-yellow relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -left-16 -top-16 w-64 h-64 bg-black/10 rounded-full" />
      <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-black/10 rounded-full" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex bg-black/10 rounded-full p-4 mb-5">
            <FaWhatsapp className="text-brand-dark text-4xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            ¿Necesitas un taxi ahora?
          </h2>
          <p className="text-brand-dark/70 text-lg mb-8">
            Contáctanos por WhatsApp y tendrás un conductor en camino en minutos.
            Disponibles las 24 horas, todos los días del año.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL('Hola! Necesito un taxi ahora por favor. 🚖')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-gray-900 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-xl"
            >
              <FaWhatsapp size={22} />
              Pedir Taxi por WhatsApp
            </a>
            <a
              href={`tel:${COMPANY.phones[0]}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-brand-dark font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-xl border-2 border-brand-dark/10"
            >
              <FaPhone size={18} />
              {COMPANY.phones[0]}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

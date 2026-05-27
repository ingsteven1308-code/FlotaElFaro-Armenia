import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaCar, FaPlane, FaBriefcase, FaClock,
  FaBox, FaCalendarCheck, FaMountain, FaStar,
} from 'react-icons/fa'
import { SERVICES, WHATSAPP_URL } from '../../data'
import { FaWhatsapp } from 'react-icons/fa'

const iconMap = {
  FaCar, FaPlane, FaBriefcase, FaClock,
  FaBox, FaCalendarCheck, FaMountain, FaStar,
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-brand-yellow/15 text-brand-yellow-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
            Nuestros Servicios
          </span>
          <h2 className="section-title">
            Todo el transporte que necesitas
            <br />
            <span className="text-brand-yellow">en un solo lugar</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Desde traslados urbanos hasta transporte turístico por el Eje Cafetero.
            Contamos con el servicio ideal para cada ocasión.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || FaCar
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 card-hover"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/80 via-transparent to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-3 right-3 bg-brand-yellow p-2 rounded-xl shadow-lg">
                    <Icon className="text-brand-dark text-base" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-brand-dark text-base mb-2">{service.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed mb-4">{service.description}</p>
                  <a
                    href={WHATSAPP_URL(service.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors w-full justify-center"
                  >
                    <FaWhatsapp size={16} />
                    Solicitar servicio
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

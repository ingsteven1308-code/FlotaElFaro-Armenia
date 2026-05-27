import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaUserCheck, FaClock, FaMapMarkedAlt, FaBolt,
  FaShieldAlt, FaCar, FaFileInvoice, FaTag,
} from 'react-icons/fa'
import { BENEFITS } from '../../data'

const iconMap = {
  FaUserCheck, FaClock, FaMapMarkedAlt, FaBolt,
  FaShieldAlt, FaCar, FaFileInvoice, FaTag,
}

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" className="section-padding bg-brand-gray-light">
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
            ¿Por qué elegirnos?
          </span>
          <h2 className="section-title">
            La empresa de taxis de confianza
            <br />
            <span className="text-brand-yellow">en Armenia</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Más de 15 años siendo el servicio de taxi preferido por los armenios.
            Calidad, seguridad y puntualidad garantizadas.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] || FaCar
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 card-hover group"
              >
                <div className="bg-brand-yellow/10 group-hover:bg-brand-yellow w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="text-brand-yellow group-hover:text-brand-dark text-xl transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-brand-dark text-base mb-2">{benefit.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

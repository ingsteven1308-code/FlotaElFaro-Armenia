import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaCity, FaPlane, FaMapMarkerAlt, FaCoffee, FaHotel,
} from 'react-icons/fa'
import { COVERAGE_AREAS } from '../../data'

const iconMap = {
  FaCity, FaPlane, FaMapMarkerAlt, FaCoffee, FaHotel,
}

export default function Coverage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cobertura" className="section-padding bg-brand-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-brand-yellow/20 text-brand-yellow font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                Zona de cobertura
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cubrimos toda la región{' '}
                <span className="text-brand-yellow">Cafetera</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Desde el centro de Armenia hasta los municipios vecinos y los atractivos turísticos
                del Eje Cafetero. Siempre hay un conductor cercano para ti.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COVERAGE_AREAS.map((area, i) => {
                  const Icon = iconMap[area.icon] || FaMapMarkerAlt
                  return (
                    <motion.div
                      key={area.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-colors"
                    >
                      <Icon className="text-brand-yellow text-lg flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold text-sm">{area.name}</p>
                        <p className="text-gray-500 text-xs">{area.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-96 lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63637.54399581958!2d-75.72139617031249!3d4.535965000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38877ad8f50001%3A0x30f1cce9a7ef24e4!2sArmenia%2C%20Quind%C3%ADo!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cobertura Flota El Faro - Armenia Quindío"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

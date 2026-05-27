import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaBriefcase, FaFileInvoice, FaStar, FaHandshake,
  FaClock, FaWhatsapp,
} from 'react-icons/fa'
import { WHATSAPP_URL } from '../../data'

const features = [
  {
    icon: FaBriefcase,
    title: 'Transporte Corporativo',
    desc: 'Servicio exclusivo para empresas con vehículos cómodos y conductores profesionales.',
  },
  {
    icon: FaFileInvoice,
    title: 'Facturación Electrónica',
    desc: 'Facturamos a su empresa o NIT. Ideal para gastos de representación y contabilidad.',
  },
  {
    icon: FaStar,
    title: 'Atención Prioritaria',
    desc: 'Los clientes empresariales tienen prioridad en la asignación de vehículos.',
  },
  {
    icon: FaHandshake,
    title: 'Convenios Especiales',
    desc: 'Tarifas negociadas y condiciones especiales para contratos de largo plazo.',
  },
  {
    icon: FaClock,
    title: 'Disponibilidad Permanente',
    desc: 'Cobertura 24/7 para sus empleados y ejecutivos en cualquier momento.',
  },
]

export default function Companies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="empresas" className="section-padding bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-brand-dark to-brand-darker rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative h-64 lg:h-auto min-h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Servicios empresariales"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/60" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex bg-brand-yellow p-4 rounded-2xl mb-4">
                    <FaBriefcase className="text-brand-dark text-4xl" />
                  </div>
                  <h3 className="text-white text-2xl font-bold">Para Empresas</h3>
                  <p className="text-gray-300 mt-2 text-sm">Soluciones de transporte corporativo</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-8 md:p-12" ref={ref}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-brand-yellow/20 text-brand-yellow font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                  Empresas / Convenios
                </span>
                <h2 className="text-3xl font-bold text-white mb-3">
                  Transporte corporativo{' '}
                  <span className="text-brand-yellow">a su medida</span>
                </h2>
                <p className="text-gray-400 mb-7 leading-relaxed">
                  Somos el aliado estratégico de transporte para empresas en Armenia y el Eje Cafetero.
                  Contamos con convenios activos con empresas de distintos sectores.
                </p>

                <div className="space-y-4 mb-8">
                  {features.map((f, i) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <div className="bg-brand-yellow/15 p-2 rounded-lg flex-shrink-0 mt-0.5">
                        <f.icon className="text-brand-yellow text-sm" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{f.title}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{f.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL('Hola, estoy interesado en un convenio empresarial con Flota El Faro.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-dark font-bold px-7 py-3.5 rounded-xl transition-colors text-sm"
                >
                  <FaWhatsapp size={18} />
                  Solicitar convenio empresarial
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

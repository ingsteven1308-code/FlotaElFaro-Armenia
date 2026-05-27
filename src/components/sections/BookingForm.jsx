import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaUser, FaPhone } from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL } from '../../data'

export default function BookingForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({
    nombre: '',
    origen: '',
    destino: '',
    hora: '',
    telefono: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const buildWhatsAppMessage = () => {
    const lines = [
      '🚖 *Solicitud de Taxi - Flota El Faro*',
      '',
      `👤 *Nombre:* ${form.nombre}`,
      `📍 *Origen:* ${form.origen}`,
      `🏁 *Destino:* ${form.destino}`,
      `🕐 *Hora:* ${form.hora}`,
      `📱 *Teléfono:* ${form.telefono}`,
    ]
    return lines.join('\n')
  }

  const handleWhatsApp = (e) => {
    e.preventDefault()
    const msg = buildWhatsAppMessage()
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const fields = [
    { name: 'nombre', label: 'Tu nombre', placeholder: 'Ej: Juan García', icon: FaUser, type: 'text' },
    { name: 'origen', label: 'Lugar de origen', placeholder: 'Ej: Centro Armenia', icon: FaMapMarkerAlt, type: 'text' },
    { name: 'destino', label: 'Destino', placeholder: 'Ej: Aeropuerto El Edén', icon: FaMapMarkerAlt, type: 'text' },
    { name: 'hora', label: 'Hora de recogida', placeholder: 'Ej: 08:30 AM', icon: FaClock, type: 'text' },
    { name: 'telefono', label: 'Tu teléfono', placeholder: 'Ej: 312 203 9996', icon: FaPhone, type: 'tel' },
  ]

  return (
    <section id="reserva" className="section-padding bg-brand-gray-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-yellow/15 text-brand-yellow-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              Reserva tu Taxi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Reserva fácil y{' '}
              <span className="text-brand-yellow">en segundos</span>
            </h2>
            <p className="text-brand-gray text-lg leading-relaxed mb-8">
              Completa el formulario y te enviaremos automáticamente al WhatsApp de nuestra central.
              Confirmamos tu taxi en minutos.
            </p>

            <div className="space-y-4">
              {[
                '✅ Confirmación inmediata por WhatsApp',
                '✅ Sin costo de reserva',
                '✅ Conductor asignado en minutos',
                '✅ Disponible 24 horas al día',
              ].map((item) => (
                <p key={item} className="text-brand-gray flex items-center gap-2 text-sm">
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-8 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-xs text-brand-gray uppercase font-semibold tracking-wide mb-3">O llámanos directamente:</p>
              <div className="space-y-2">
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 text-brand-dark font-bold hover:text-brand-yellow transition-colors"
                  >
                    <span className="text-brand-yellow">📞</span>
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7">
              <h3 className="text-xl font-bold text-brand-dark mb-6">Solicita tu taxi ahora</h3>
              <form onSubmit={handleWhatsApp} className="space-y-4">
                {fields.map(({ name, label, placeholder, icon: Icon, type }) => (
                  <div key={name}>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      {label}
                    </label>
                    <div className="relative">
                      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 focus:border-brand-yellow transition-colors bg-gray-50 hover:bg-white"
                      />
                    </div>
                  </div>
                ))}

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full btn-whatsapp py-4 text-base"
                  >
                    <FaWhatsapp size={20} />
                    Enviar solicitud por WhatsApp
                  </button>
                  <a
                    href={`tel:${COMPANY.phones[0]}`}
                    className="w-full btn-dark py-3.5 text-sm block text-center"
                  >
                    <FaPhone className="inline mr-2" size={15} />
                    O llamar directamente
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

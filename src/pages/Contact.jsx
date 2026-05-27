import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock,
  FaFacebook, FaInstagram,
} from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL } from '../data'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contacto | Flota El Faro - Armenia Quindío</title>
        <meta name="description" content="Contacta a Flota El Faro en Armenia Quindío. Teléfonos: 606-746-6000, 606-736-8922, 312-203-9996. WhatsApp disponible 24/7. Cl 13 #23-30, Armenia." />
        <meta name="keywords" content="contacto flota el faro, taxi armenia telefono, taxi armenia whatsapp, direccion taxi armenia" />
        <link rel="canonical" href="https://flotaelfaro.com/contacto" />
      </Helmet>

      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Contáctanos
            </h1>
            <p className="text-gray-400 text-lg">
              Estamos disponibles 24/7 para atenderte. Elije la forma de contacto que prefieras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                icon: FaWhatsapp,
                label: 'WhatsApp',
                value: '+57 312 203 9996',
                href: WHATSAPP_URL(),
                color: 'bg-green-50 border-green-200',
                iconColor: 'text-green-500',
                external: true,
              },
              {
                icon: FaPhone,
                label: 'Teléfono 1',
                value: '606-746-6000',
                href: `tel:${COMPANY.phones[0]}`,
                color: 'bg-brand-yellow/10 border-brand-yellow/30',
                iconColor: 'text-brand-yellow-dark',
              },
              {
                icon: FaPhone,
                label: 'Teléfono 2',
                value: '606-736-8922',
                href: `tel:${COMPANY.phones[1]}`,
                color: 'bg-brand-yellow/10 border-brand-yellow/30',
                iconColor: 'text-brand-yellow-dark',
              },
              {
                icon: FaMapMarkerAlt,
                label: 'Dirección',
                value: 'Cl 13 #23-30, Armenia',
                href: 'https://maps.google.com/?q=Cl+13+23-30+Armenia+Quindio',
                color: 'bg-blue-50 border-blue-200',
                iconColor: 'text-blue-500',
                external: true,
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${item.color} border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow block`}
              >
                <item.icon className={`${item.iconColor} text-3xl mx-auto mb-3`} />
                <p className="text-brand-gray text-xs uppercase font-semibold tracking-wide mb-1">{item.label}</p>
                <p className="text-brand-dark font-bold text-sm">{item.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Map + Info */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Información de contacto</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/10 p-3 rounded-xl">
                    <FaMapMarkerAlt className="text-brand-yellow text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">Dirección</p>
                    <p className="text-brand-gray text-sm">{COMPANY.address}</p>
                    <p className="text-brand-gray text-sm">Armenia, Quindío, Colombia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/10 p-3 rounded-xl">
                    <FaPhone className="text-brand-yellow text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">Teléfonos</p>
                    {COMPANY.phones.map((p) => (
                      <a key={p} href={`tel:${p}`} className="block text-brand-gray text-sm hover:text-brand-yellow transition-colors">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-xl">
                    <FaWhatsapp className="text-green-500 text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">WhatsApp</p>
                    <a
                      href={WHATSAPP_URL()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gray text-sm hover:text-green-500 transition-colors"
                    >
                      +57 312 203 9996
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/10 p-3 rounded-xl">
                    <FaClock className="text-brand-yellow text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">Horario</p>
                    <p className="text-brand-gray text-sm">24 horas, 7 días a la semana</p>
                    <p className="text-brand-gray text-sm">Incluyendo festivos y temporadas</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-brand-gray text-sm font-semibold uppercase tracking-wide mb-4">Síguenos en</p>
                <div className="flex gap-3">
                  <a
                    href={COMPANY.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  >
                    <FaFacebook />
                    Facebook
                  </a>
                  <a
                    href={COMPANY.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  >
                    <FaInstagram />
                    Instagram
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 bg-brand-gray-light rounded-2xl p-6 border border-gray-200">
                <p className="text-brand-dark font-bold mb-3">¿Necesitas un taxi ahora?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WHATSAPP_URL()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp flex-1 justify-center"
                  >
                    <FaWhatsapp size={17} />
                    WhatsApp
                  </a>
                  <a href={`tel:${COMPANY.phones[0]}`} className="btn-primary flex-1 justify-center">
                    <FaPhone size={15} />
                    Llamar
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[500px] border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.3762452897147!2d-75.68140682426536!3d4.533923695445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38878a700d9dbb%3A0xe13ee4e4bbd39fa!2sCl.%2013%20%2323-30%2C%20Armenia%2C%20Quind%C3%ADo!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Flota El Faro Armenia"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

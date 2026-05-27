import { Link } from 'react-router-dom'
import { FaCar, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL } from '../../data'

const footerLinks = [
  { label: 'Taxi Aeropuerto', to: '/taxi-aeropuerto-armenia' },
  { label: 'Taxi 24 Horas', to: '/taxi-24-horas-armenia' },
  { label: 'Taxi Empresarial', to: '/taxi-empresarial' },
  { label: 'Servicio Turístico', to: '/servicio-turistico' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-darker text-gray-400">
      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-brand-yellow p-2 rounded-lg">
                <FaCar className="text-brand-dark text-xl" />
              </div>
              <div>
                <span className="block text-white font-bold text-lg leading-none">Flota El Faro</span>
                <span className="block text-brand-yellow text-xs">Armenia · Quindío</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Empresa de transporte público individual con más de 15 años brindando servicio seguro,
              rápido y confiable en Armenia y el Eje Cafetero.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-brand-yellow hover:text-brand-dark text-gray-400 p-2.5 rounded-lg transition-all"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-brand-yellow hover:text-brand-dark text-gray-400 p-2.5 rounded-lg transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={WHATSAPP_URL()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-500 hover:text-white text-gray-400 p-2.5 rounded-lg transition-all"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 uppercase tracking-wide text-sm">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-brand-yellow transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-brand-yellow rounded-full flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 uppercase tracking-wide text-sm">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
              {COMPANY.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 text-sm hover:text-brand-yellow transition-colors"
                  >
                    <FaPhone className="text-brand-yellow flex-shrink-0" />
                    <span>{phone}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-green-400 transition-colors"
                >
                  <FaWhatsapp className="text-green-400 flex-shrink-0" />
                  <span>+57 312 203 9996</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaClock className="text-brand-yellow flex-shrink-0" />
                <span>Atención 24/7 todos los días</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 uppercase tracking-wide text-sm">
              Ubicación
            </h3>
            <div className="rounded-xl overflow-hidden h-44 bg-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.3762452897147!2d-75.68140682426536!3d4.533923695445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38878a700d9dbb%3A0xe13ee4e4bbd39fa!2sCl.%2013%20%2323-30%2C%20Armenia%2C%20Quind%C3%ADo!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Flota El Faro"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center">
            © {year} Flota El Faro. Todos los derechos reservados. Armenia, Quindío, Colombia.
          </p>
          <a
            href={WHATSAPP_URL()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
          >
            <FaWhatsapp size={14} />
            Pedir Taxi por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}

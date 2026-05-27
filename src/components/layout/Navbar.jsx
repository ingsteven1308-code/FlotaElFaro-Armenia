import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCar, FaBars, FaTimes, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL } from '../../data'

const navLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Reserva tu Taxi', href: '/#reserva' },
  { label: 'Cobertura', href: '/#cobertura' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Empresas', href: '/#empresas' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '')
      if (location.pathname !== '/') {
        window.location.href = href
        return
      }
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-brand-dark shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-yellow p-2 rounded-lg group-hover:bg-brand-yellow-dark transition-colors">
              <FaCar className="text-brand-dark text-xl" />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-bold text-base md:text-lg leading-none">
                Flota El Faro
              </span>
              <span className="block text-brand-yellow text-xs font-medium">
                Armenia · Quindío
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-gray-300 hover:text-brand-yellow px-3 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY.phones[0]}`}
              className="flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-dark font-bold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <FaPhone className="text-sm" />
              <span>Llamar</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-white hover:text-brand-yellow transition-colors"
            aria-label="Menú"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-brand-dark border-t border-gray-800"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="block text-gray-300 hover:text-brand-yellow hover:bg-gray-800 px-4 py-3 rounded-lg text-sm font-medium transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 grid grid-cols-2 gap-3">
                <a
                  href={WHATSAPP_URL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  <FaWhatsapp size={18} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${COMPANY.phones[0]}`}
                  className="flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-dark font-bold py-3 rounded-lg transition-colors"
                >
                  <FaPhone size={16} />
                  <span>Llamar</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

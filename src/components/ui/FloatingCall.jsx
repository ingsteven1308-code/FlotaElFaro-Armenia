import { motion } from 'framer-motion'
import { FaPhone } from 'react-icons/fa'
import { COMPANY } from '../../data'

export default function FloatingCall() {
  return (
    <motion.a
      href={`tel:${COMPANY.phones[0]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-4 md:bottom-8 md:right-24 z-50 flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-dark font-bold rounded-full shadow-2xl transition-colors px-4 py-3 md:px-5"
      aria-label="Llamar ahora"
    >
      <FaPhone size={18} className="animate-bounce-slow" />
      <span className="text-sm hidden sm:inline">Llamar Ahora</span>
      <span className="text-sm sm:hidden">{COMPANY.phones[0]}</span>
    </motion.a>
  )
}

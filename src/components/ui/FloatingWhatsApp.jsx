import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { WHATSAPP_URL } from '../../data'

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            className="bg-white rounded-xl shadow-2xl p-4 w-64 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-full p-1.5">
                  <FaWhatsapp className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-brand-dark font-bold text-sm">Flota El Faro</p>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-500 text-xs">En línea ahora</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-gray-400 hover:text-gray-600 ml-2"
              >
                <FaTimes size={14} />
              </button>
            </div>
            <p className="text-gray-600 text-xs mb-3">
              ¡Hola! ¿Necesitas un taxi? Escríbenos y te respondemos de inmediato. 🚖
            </p>
            <a
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2.5 px-4 rounded-lg text-center transition-colors"
            >
              Chatear ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
        <FaWhatsapp size={28} />
      </motion.button>
    </div>
  )
}

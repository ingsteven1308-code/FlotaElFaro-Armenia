import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExpand } from 'react-icons/fa'
import { GALLERY_IMAGES } from '../../data'

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="galeria" className="section-padding bg-brand-gray-light">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-brand-yellow/15 text-brand-yellow-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
            Galería
          </span>
          <h2 className="section-title">
            Conoce nuestra{' '}
            <span className="text-brand-yellow">flota y equipo</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                i === 0 || i === 4 ? 'col-span-2 row-span-1' : ''
              }`}
              style={{ aspectRatio: i === 0 || i === 4 ? '2/1' : '1/1' }}
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-darker/0 group-hover:bg-brand-darker/40 transition-all duration-300 flex items-center justify-center">
                <FaExpand className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full rounded-2xl max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
              >
                <FaTimes size={18} />
              </button>
              <p className="text-white/70 text-sm text-center mt-3">{selected.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

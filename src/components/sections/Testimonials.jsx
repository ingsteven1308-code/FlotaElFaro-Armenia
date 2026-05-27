import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { TESTIMONIALS } from '../../data'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-brand-yellow/15 text-brand-yellow-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
            Testimonios
          </span>
          <h2 className="section-title">
            Lo que dicen nuestros{' '}
            <span className="text-brand-yellow">clientes</span>
          </h2>
          <p className="section-subtitle mx-auto mt-3 text-center">
            La satisfacción de nuestros clientes es nuestro mayor orgullo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="bg-brand-gray-light rounded-2xl p-6 h-full border border-gray-100">
                  {/* Quote icon */}
                  <FaQuoteLeft className="text-brand-yellow text-2xl mb-4 opacity-60" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} className="text-brand-yellow text-sm" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-brand-gray text-sm leading-relaxed mb-5">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center font-bold text-brand-dark text-sm flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-brand-dark font-semibold text-sm">{t.name}</p>
                      <p className="text-brand-gray text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

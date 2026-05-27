import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import WhyUs from '../components/sections/WhyUs'
import Coverage from '../components/sections/Coverage'
import Companies from '../components/sections/Companies'
import BookingForm from '../components/sections/BookingForm'
import Testimonials from '../components/sections/Testimonials'
import Gallery from '../components/sections/Gallery'
import WhatsAppCTA from '../components/sections/WhatsAppCTA'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Flota El Faro | Taxi en Armenia Quindío - Servicio 24/7</title>
        <meta
          name="description"
          content="Empresa de taxis en Armenia Quindío. Servicio 24/7, conductores verificados, taxi aeropuerto El Edén, taxi empresarial y turístico. Llame: 606-746-6000"
        />
        <meta name="keywords" content="taxi armenia, taxi aeropuerto armenia, empresa taxis armenia, taxi 24 horas armenia, flota el faro" />
        <link rel="canonical" href="https://flotaelfaro.com/" />
      </Helmet>

      <Hero />
      <Services />
      <WhyUs />
      <Coverage />
      <Companies />
      <BookingForm />
      <Testimonials />
      <Gallery />
      <WhatsAppCTA />
    </>
  )
}

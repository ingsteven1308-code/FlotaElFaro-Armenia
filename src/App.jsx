import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'
import FloatingCall from './components/ui/FloatingCall'
import Home from './pages/Home'
import AirportTaxi from './pages/AirportTaxi'
import Taxi24Hours from './pages/Taxi24Hours'
import CorporateTaxi from './pages/CorporateTaxi'
import TouristService from './pages/TouristService'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/taxi-aeropuerto-armenia" element={<AirportTaxi />} />
            <Route path="/taxi-24-horas-armenia" element={<Taxi24Hours />} />
            <Route path="/taxi-empresarial" element={<CorporateTaxi />} />
            <Route path="/servicio-turistico" element={<TouristService />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingCall />
      </div>
    </Router>
  )
}

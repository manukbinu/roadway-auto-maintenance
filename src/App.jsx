import useSmoothScroll from './hooks/useSmoothScroll'
import useGlobalScrollProgress from './hooks/useGlobalScrollProgress'
import useCameraStops from './hooks/useCameraStops'
import CanvasStage from './components/three/CanvasStage'
import Navbar from './components/ui/Navbar'
import Footer from './components/sections/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyChoose from './components/sections/WhyChoose'
import Process from './components/sections/Process'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

function App() {
  useSmoothScroll()
  useGlobalScrollProgress()
  useCameraStops()

  return (
    <>
      <CanvasStage />
      <div className="noise-overlay" />
      <div className="vignette" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App

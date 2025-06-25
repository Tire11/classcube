
import DashboardPrev from './components/DashboardPrev'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const App = () => {
  return (
    <>

      <div className='relative'>
        <div>
          <img src="/dots.png" alt="Online Learning" className="absolute lg:w-[810px] lg:h-[750px] right-0 opacity-100 z-0" />
        </div>
      </div>
      <Navbar />
      <Hero />
      <DashboardPrev />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
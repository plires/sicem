import Header from './components/Header'
import Hero from '@/pages/Landing/components/Hero'
import ProductCarousel from '@/pages/Landing/components/ProductCarousel'
import AboutSection from '@/pages/Landing/components/AboutSection'
import CustomizeSection from '@/pages/Landing/components/CustomizeSection'
import CTASection from '@/pages/Landing/components/CTASection'
import Footer from '@/pages/Landing/components/Footer'

import { getProducts } from '@/utils/dataUtils.js'

import { ToastContainer } from 'react-toastify'

import './Landing.css'

const Landing = () => {
  const products = getProducts('products')
  return (
    <>
      <ToastContainer />
      <Header scrollThreshold={100} />

      {/* Resto del contenido */}
      <main style={{ marginTop: '120px' }}>
        <Hero
          title='Ascensores y Montacargas'
          subtitle='a medida para cada proyecto'
          description='Diseñamos soluciones integrales en ascensores electromecánicos e hidráulicos.'
        />
        <ProductCarousel products={products} />
        <AboutSection
          title='Diseñamos ascensores, construimos confianza'
          subtitle='En Sicem SRL somos líderes en soluciones de equipos de elevación, especializados en el diseño y fabricación de ascensores innovadores.'
          description='Hace 75 años hemos estado comprometidos con la innovación, ofreciendo ascensores, cabinas personalizadas y accesorios de alta calidad que transforman la movilidad en edificios residenciales, comerciales e industriales.'
          bgColor='var(--primary-color)'
        />
        <CustomizeSection />
        <CTASection
          title='Más de 70 años de experiencia en soluciones verticales'
          description='Confianza, experiencia y soluciones eficientes en ascensores y sistemas de elevación. Hablá con nuestro equipo y encontrá la mejor opción para tu proyecto.'
          buttonText='CONTACTANOS'
          targetId='contact-form'
        />

        <Footer
          phone='011 4709 1961'
          email='sicemsrl@sicemsrl.com.ar'
          address='Perú 436, Villa Martelli, Buenos Aires.'
          schedule={{
            days: 'Lunes a viernes',
            hours: '8 am a 12:30 am | 13:00 pm a 16:00 pm',
          }}
        />
      </main>
    </>
  )
}

export default Landing

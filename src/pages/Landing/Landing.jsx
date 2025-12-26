import Header from './components/Header'
import Hero from '@/pages/Landing/components/Hero'
import ProductCarousel from '@/pages/Landing/components/ProductCarousel'
import AboutSection from '@/pages/Landing/components/AboutSection'
import CustomizeSection from '@/pages/Landing/components/CustomizeSection'

import { getProducts } from '@/utils/dataUtils.js'

import { ToastContainer } from 'react-toastify'

import logoLarge from '@/assets/img/landing/logo-large.svg'
import logoSmall from '@/assets/img/landing/logo-small.svg'
import videoBackground from '@/assets/video/ascensor.mp4'

import './Landing.css'

const Landing = () => {
  const products = getProducts('products')
  return (
    <>
      <ToastContainer />
      <Header
        logoLarge={logoLarge}
        logoSmall={logoSmall}
        scrollThreshold={100}
      />

      {/* Resto del contenido */}
      <main style={{ marginTop: '120px' }}>
        <Hero
          videoSrc={videoBackground}
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
      </main>
    </>
  )
}

export default Landing

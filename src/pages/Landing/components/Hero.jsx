// Hero.jsx
import { useRef, useEffect } from 'react'
import './Hero.css'
import ContactForm from './ContactForm'

const Hero = ({ videoSrc, title, subtitle, description }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Asegurar que el video se reproduzca en loop
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Error al reproducir video:', err)
      })
    }
  }, [])

  return (
    <section className='hero'>
      {/* Video de fondo */}
      <div className='hero__video-container'>
        <video
          ref={videoRef}
          className='hero__video'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type='video/mp4' />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      {/* Contenido */}
      <div className='hero__content'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 text-center mb-4 mb-lg-5'>
              <h1 className='hero__title' data-aos='fade-up'>
                {title}
              </h1>
              <h2
                className='hero__subtitle'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                {subtitle}
              </h2>
              <p
                className='hero__description'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                {description}
              </p>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div
              className='col-12 col-lg-8 col-xl-6'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

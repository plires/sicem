import Video from '@/components/home/Video'
import Card from '@/components/commons/Card'
import Carrusel from '@/components/home/Carrusel'
import Sistemas from '@/components/home/Sistemas'
import Caratula from '@/components/commons/Caratula'
import CarruselAccesorios from '@/components/home/CarruselAccesorios'

import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <Video />
      <Card
        title='DETRÁS DE LOS ASCENSORES'
        description='En Sicem somos líderes en soluciones de <span>equipos de elevación, </span> especializados en el diseño y fabricación de  <span>ascensores innovadores.</span> Desde nuestra empresa, hemos estado comprometidos con la innovación, ofreciendo ascensores, cabinas personalizadas y accesorios de alta calidad que transforman la movilidad en edificios residenciales, comerciales e industriales.'
        withButton='true'
        txtButton='Sobre la empresa'
        typeButton='light'
        sizeButton='medium'
        img={'fabricacion-ascensores.jpg'}
        imgOpt={'fabricacion-ascensores.webp'}
      />

      <Carrusel />
      <Sistemas />
      <Caratula
        image='fondo-faja.jpg'
        imageTransparentOpt='obrero.webp'
        imageTransparen='obrero.png'
        title='DISEÑOS <br />ESPECIALIZADOS <br />A MEDIDA'
        btnData={{
          to: '/contacto',
          size: 'medium',
          type: 'secondary',
          txt: 'Quiero consultar',
        }}
      />
      <CarruselAccesorios />
    </section>
  )
}

export default Home

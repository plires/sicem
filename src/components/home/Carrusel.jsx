import { Link } from 'react-router-dom'
import Plus from '@/components/commons/Plus'
import CustomNextArrow from '@/components/commons/CustomNextArrow'
import CustomPrevArrow from '@/components/commons/CustomPrevArrow'

import { getImageURL, getCabinas } from '@/utils/dataUtils'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './carrusel.module.css'

const Carrusel = () => {
  const cabinas = getCabinas('cabinas')

  const settings = {
    autoplay: false,
    className: 'center',
    pauseOnHover: true,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    dots: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  }
  return (
    <section data-aos='fade-up' className={`${styles.carruselProductos}`}>
      <>
        {cabinas.length > 0 ? (
          <Slider {...settings}>
            {cabinas.map(cabina => (
              <Link
                key={cabina.id}
                to='/productos'
                className={`${styles.content}`}
              >
                <div className={`${styles.overlay}`}></div>
                <picture>
                  <source
                    srcSet={getImageURL(cabina.img_src_opt)}
                    type='image/webp'
                  />
                  <source
                    srcSet={getImageURL(cabina.img_src)}
                    type='image/jpg'
                  />
                  <img
                    className='img-fluid transition'
                    src={getImageURL(cabina.img_src)}
                    alt={cabina.img_alt}
                  />
                </picture>
                <div className={`${styles.data}`}>
                  <h3 className='transition'>{cabina.title}</h3>
                  <Plus type='light' />
                </div>
              </Link>
            ))}
          </Slider>
        ) : (
          <>
            <h4 className={`${styles.sinCabinas}`}>
              En este momento no hay cabinas disponibles para mostrar
            </h4>
            <br />
          </>
        )}
      </>
    </section>
  )
}
export default Carrusel

import { Link } from 'react-router-dom'
import Plus from '@/components/commons/Plus'

import Slider from 'react-slick'
import { getAccesorios, getImageURL } from '@/utils/dataUtils'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './carrusel-accesorios.module.css'

const CarruselAccesorios = () => {
  const accesorios = getAccesorios('accesorios')
  const settings = {
    autoplay: false,
    infinite: true,
    className: 'center',
    pauseOnHover: true,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    dots: false,
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
    <section
      data-aos='fade-up'
      className={`${styles.carruselAccesorios} carruselAccesorios`}
    >
      <Slider {...settings}>
        {accesorios.map(item => (
          <Link className='transition' to='/accesorios' key={item.id}>
            <div className={`${styles.content}`}>
              <picture>
                <source
                  srcSet={getImageURL(item.img_src_opt)}
                  type='image/webp'
                />
                <source srcSet={getImageURL(item.img_src)} type='image/png' />

                <img
                  className={`transition img-fluid ${styles.img_accesorios}`}
                  src={getImageURL(item.img_src)}
                  alt={item.img_alt}
                />
                <h3 className='transition'>{item.title}</h3>
                <Plus className='transition' type='dark' />
              </picture>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  )
}
export default CarruselAccesorios

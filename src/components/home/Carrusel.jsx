import { Link } from 'react-router-dom'
import Plus from '@/components/commons/Plus'
import CustomNextArrow from '@/components/commons/CustomNextArrow'
import CustomPrevArrow from '@/components/commons/CustomPrevArrow'

import Slider from 'react-slick'
import imageSlideA from '@/assets/img/slide-ascensores-a.jpg'
import imageSlideB from '@/assets/img/slide-ascensores-b.jpg'
import imageSlideC from '@/assets/img/slide-ascensores-c.jpg'
import imageSlideD from '@/assets/img/slide-ascensores-d.jpg'
import imageSlideE from '@/assets/img/slide-ascensores-e.jpg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './carrusel.module.css'

const Carrusel = () => {
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
      <Slider {...settings}>
        <Link to='/productos' className={`${styles.content}`}>
          <div className={`${styles.overlay}`}></div>
          <img className='img-fluid transition' src={imageSlideA} alt='alt' />
          <div className={`${styles.data}`}>
            <h3 className='transition'>CABINA CAMERINO</h3>
            <Plus type='light' />
          </div>
        </Link>
        <Link to='/productos' className={`${styles.content}`}>
          <div className={`${styles.overlay}`}></div>
          <img className='img-fluid transition' src={imageSlideB} alt='alt' />
          <div className={`${styles.data}`}>
            <h3 className='transition'>MONTAVEHÍCULOS</h3>
            <Plus type='light' />
          </div>
        </Link>
        <Link to='/productos' className={`${styles.content}`}>
          <div className={`${styles.overlay}`}></div>
          <img className='img-fluid transition' src={imageSlideC} alt='alt' />
          <div className={`${styles.data}`}>
            <h3 className='transition'>cabina montecarlo</h3>
            <Plus type='light' />
          </div>
        </Link>
        <Link to='/productos' className={`${styles.content}`}>
          <div className={`${styles.overlay}`}></div>
          <img className='img-fluid transition' src={imageSlideD} alt='alt' />
          <div className={`${styles.data}`}>
            <h3 className='transition'>montacargas</h3>
            <Plus type='light' />
          </div>
        </Link>
        <Link to='/productos' className={`${styles.content}`}>
          <div className={`${styles.overlay}`}></div>
          <img className='img-fluid transition' src={imageSlideE} alt='alt' />
          <div className={`${styles.data}`}>
            <h3 className='transition'>cabina panorámica</h3>
            <Plus type='light' />
          </div>
        </Link>
      </Slider>
    </section>
  )
}
export default Carrusel

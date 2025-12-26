// ProductCarousel.jsx
import { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import ProductCard from './ProductCard'

import { getProducts } from '@/utils/dataUtils.js'

import './ProductCarousel.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ProductCarousel = () => {
  const products = getProducts('products')

  const [expandedCard, setExpandedCard] = useState(null)
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: expandedCard === null,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const handleToggleCard = index => {
    if (expandedCard === index) {
      // Cerrar la card
      setExpandedCard(null)
    } else {
      // Abrir la card y pausar el carrusel
      setExpandedCard(index)
      if (sliderRef.current) {
        sliderRef.current.slickPause()
      }
    }
  }

  useEffect(() => {
    // Reanudar el carrusel cuando se cierra una card
    if (expandedCard === null && sliderRef.current) {
      sliderRef.current.slickPlay()
    }
  }, [expandedCard])

  return (
    <section className='product-carousel'>
      <div className='container'>
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, index) => (
            <div key={index} className='product-carousel__slide'>
              <ProductCard
                product={product}
                isExpanded={expandedCard === index}
                onToggle={() => handleToggleCard(index)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default ProductCarousel

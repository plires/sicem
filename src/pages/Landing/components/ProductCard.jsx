// ProductCard.jsx
import { useState } from 'react'
import { getImageURL } from '@/utils/dataUtils.js'
import './ProductCard.css'

const ProductCard = ({ product, isExpanded, onToggle }) => {
  const { title, image, features } = product

  return (
    <div className='product-card'>
      <div
        className={`product-card__content ${isExpanded ? 'product-card__content--expanded' : ''}`}
      >
        {/* Imagen de fondo */}
        <div
          className='product-card__image'
          style={{ backgroundImage: `url(${getImageURL(image)})` }}
        >
          <div className='product-card__overlay'>
            <h3 className='product-card__title'>{title}</h3>
            <button
              className='product-card__toggle'
              onClick={onToggle}
              aria-label={isExpanded ? 'Cerrar' : 'Expandir'}
            >
              {isExpanded ? '−' : '+'}
            </button>
          </div>
        </div>

        {/* Panel de información */}
        <div className='product-card__info'>
          <div className='product-card__info-header'>
            <h3 className='product-card__info-title'>{title}</h3>
            <button
              className='product-card__toggle product-card__toggle--info'
              onClick={onToggle}
              aria-label='Cerrar'
            >
              −
            </button>
          </div>

          <div className='product-card__features'>
            {features.map((feature, index) => (
              <div key={index} className='product-card__feature'>
                <span className='product-card__feature-text'>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

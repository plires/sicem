import { useState } from 'react'
import Plus from '@/components/commons/Plus'
import { RiCloseCircleLine } from 'react-icons/ri'

import { getAccesoriosSection, getImageURL } from '@/utils/dataUtils'

import styles from './card-accesorios.module.css'

const CardAccesorios = () => {
  const accesorios = getAccesoriosSection('accesorios')
  const [openId, setOpenId] = useState(null)

  const handleBtnOpen = id => {
    setOpenId(id) // Establece el ID del artículo que debe estar abierto
  }

  const handleBtnClose = () => {
    setOpenId(null) // Limpia el estado para cerrar todos los artículos
  }

  return (
    <>
      {accesorios.map(item => (
        <article
          data-aos='fade-up'
          key={item.id}
          className={`${styles.cardAccesorio} ${item.type_card === 'small' ? 'col-lg-4' : 'col-lg-6'} `}
        >
          <div className={`${styles.contentArticle}`}>
            <div className={`${styles.contentData}`}>
              <Plus
                btnClick={handleBtnOpen}
                elementId={item.id}
                className={`${styles.btnOpen} transition`}
                type='dark'
              />
              <h3
                className='transition'
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
            </div>
            <picture>
              <source
                srcSet={getImageURL(item.img_src_opt)}
                type='image/webp'
              />
              <source srcSet={getImageURL(item.img_src)} type='image/png' />

              <img
                data-aos='fade-up'
                className={`img-fluid transition ${styles.accImg}`}
                src={getImageURL(item.img_src)}
                alt={item.img_alt}
              />
            </picture>
            <div
              className={`${styles.description} transition ${openId === item.id ? styles.show : ''}`}
            >
              <RiCloseCircleLine
                className={`${styles.btnClose} transition`}
                onClick={() => handleBtnClose()}
              />
              {item.description}
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

export default CardAccesorios

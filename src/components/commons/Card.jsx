import Btn from '@/components/commons/Btn'
import noImage from '@/assets/img/no-image.gif'
import { getImageURL } from '@/utils/dataUtils'

import styles from './card.module.css'

const Card = ({
  title = false,
  description,
  withButton = false,
  txtButton = false,
  typeButton = false,
  sizeButton = false,
  img = false,
  imgOpt = false,
}) => {
  return (
    <section className={`container-fluid content_card ${styles.content_card}`}>
      <div className={`${styles.pattern}`}></div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-lg-10 offset-lg-1'>
            <div className='row'>
              <div className={`col-md-4 ${styles.content_img}`}>
                {img ? (
                  <picture>
                    <source srcSet={getImageURL(imgOpt)} type='image/webp' />
                    <source srcSet={getImageURL(img)} type='image/jpg' />

                    <img
                      data-aos='fade-up'
                      className={`img-fluid ${styles.imgPrincipal}`}
                      src={getImageURL(img)}
                      alt='imagen principal faja ascensores sicem'
                    />
                  </picture>
                ) : (
                  <img className='img-fluid' src={noImage} alt='mo image' />
                )}
              </div>
              <div className={`col-md-8 ${styles.data}`}>
                <div className={`${styles.content}`}>
                  {title && <h2 data-aos='fade-up'>{title}</h2>}
                  <p
                    data-aos='fade-up'
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></p>

                  {withButton && (
                    <div className={`${styles.content_btn}`}>
                      <Btn
                        data-aos='fade-up'
                        size={sizeButton}
                        type={typeButton}
                        txt={txtButton}
                        to='/empresa'
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card

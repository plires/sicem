import Btn from '@/components/commons/Btn'
import { getImageURL } from '@/utils/dataUtils'

import styles from './caratula.module.css'

const Caratula = ({
  image,
  imageTransparentOpt,
  imageTransparent,
  title,
  btnData,
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${getImageURL(image)})`, // Aquí se pasa la imagen como parámetro dinámico
      }}
      className={`${styles.caratula}`}
    >
      <div className='container-fluid'>
        <div className={`row ${styles.content}`}>
          <div className={`col-md-7 ${styles.contentImg}`}>
            <picture>
              <source
                srcSet={getImageURL(imageTransparentOpt)}
                type='image/webp'
              />
              <source srcSet={getImageURL(imageTransparent)} type='image/png' />

              <img
                data-aos='fade-up'
                className={`img-fluid ${styles.imgPrincipal}`}
                src={getImageURL(imageTransparent)}
                alt='imagen principal faja ascensores sicem'
              />
            </picture>
          </div>
          <div className={`col-md-3 ${styles.contentData}`}>
            <h3
              data-aos='fade-up'
              dangerouslySetInnerHTML={{ __html: title }}
            ></h3>
            <Btn
              data-aos='fade-up'
              to={btnData.to}
              size={btnData.size}
              type={btnData.type}
              txt={btnData.txt}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.background}`}></div>
    </section>
  )
}

export default Caratula

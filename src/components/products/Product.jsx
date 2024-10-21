import { getImageURL } from '@/utils/dataUtils'
import styles from './product.module.css'

const Product = ({
  order = null,
  title,
  description,
  imageProdOpt,
  imageProd,
  altImage,
}) => {
  return (
    <section className={`container-fluid ${styles.contentProduct}`}>
      <div className='row'>
        <div className={`col-md-6 ${order !== null ? styles.order : ''}`}>
          <div className={`${styles.contentData}`}>
            <h2 data-aos='fade-up' className='bebas'>
              {title}
            </h2>
            <p
              data-aos='fade-up'
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>
        <div className='col-md-6 ps-0 pe-0'>
          <picture>
            <source srcSet={getImageURL(imageProdOpt)} type='image/webp' />
            <source srcSet={getImageURL(imageProd)} type='image/jpg' />

            <img
              data-aos='fade-up'
              className={`img-fluid ${styles.imgPrincipal}`}
              src={getImageURL(imageProd)}
              alt={altImage}
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
export default Product

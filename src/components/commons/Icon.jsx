import { getImageURL } from '@/utils/dataUtils'
import styles from './icon.module.css'

const Icon = ({ size = 'col-md-12', imgIcon, title = false }) => {
  return (
    <article className={`${size} ${styles.contentIcon}`}>
      <img
        data-aos='fade-up'
        className='img-fluid'
        src={getImageURL(imgIcon)}
        alt='header empresa sicem ascensores'
      />
      {title && (
        <h3 data-aos='fade-up' dangerouslySetInnerHTML={{ __html: title }}></h3>
      )}
    </article>
  )
}

export default Icon

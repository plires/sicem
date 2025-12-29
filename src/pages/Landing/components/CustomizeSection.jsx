// CustomizeSection.jsx

import { getImageURL } from '@/utils/dataUtils.js'

import styles from './CustomizeSection.module.css'

const CustomizeSection = ({}) => {
  return (
    <section className={`container-fluid ${styles.customizeSection}`}>
      <div className='row'>
        <div className='col-md-12'>
          <h2 className={`title ${styles.title}`}>CUSTOMIZÁ TU CABINA</h2>
        </div>
      </div>

      <div className={`row ${styles.backgroundImg}`}>
        <div className='col-md-10 offset-md-1'>
          <div className='row'>
            <div className={`col-12 col-lg-6 ${styles.contentImg}`}>
              <img
                src={`${getImageURL('landing/accesorios.webp')}`}
                alt='cabina'
                className={`img-fluid ${styles.imgAccesorios}`}
              />
            </div>

            <div className={`col-12 col-lg-6 ${styles.data}`}>
              <h2 className={`title ${styles.titleWhite}`}>
                OPTIMIZÁ TU ASCENSOR
              </h2>
              <p className={`${styles.subtitle}`}>
                Contamos con una gama amplia de accesorios para tu equipo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomizeSection

// CustomizeSection.jsx

import { getImageURL } from '@/utils/dataUtils.js'

import styles from './CustomizeSection.module.css'

const CustomizeSection = ({}) => {
  return (
    <section className='container-fluid p-0'>
      <div className='row'>
        <div className='col-md-12'>
          <h2 className='title'>CUSTOMIZÁ TU CABINA</h2>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${getImageURL('fondo-azul.jpg')})`,
        }}
        className='row'
      >
        <div className='col-lg-10 offset-md-1'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <img
                src={`${getImageURL('guias.webp')}`}
                alt='cabina'
                className='img-fluid'
              />
            </div>

            <div className='col-12 col-lg-6'>
              <h2 className='title'>OPTIMIZÁ TU ASCENSOR</h2>
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

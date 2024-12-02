import sistemaHidraulicoMobile from '@/assets/img/sistema-hidraulico-mobile.gif'
import sistemaElectromecanicoMobile from '@/assets/img/sistema-electromecanico-mobile.gif'

import sistemaHidraulicoDesktop from '@/assets/img/ascensor-sistema-hidraulico.gif'
import sistemaElectromecanicoDesktop from '@/assets/img/ascensor-sistema-electromecanico.gif'

import styles from './sitemas.module.css'

const Sistemas = () => {
  return (
    <>
      <section className={`container ${styles.sistemasMobile}`}>
        <div className='row'>
          <div className='col-md-12'>
            <h2 data-aos='fade-up' className='title'>
              Tipo de sistemas de ascensores
            </h2>
          </div>
        </div>

        <div className='row'>
          <div className={`col-sm-12 col-md-6 ${styles.separador}`}>
            <div className={`${styles.content}`}>
              <h3 data-aos='fade-up'>
                sistema <br />
                hidráulico
              </h3>
              <picture>
                <source
                  media='(min-width:1600px)'
                  srcSet={sistemaHidraulicoDesktop}
                />
                <source
                  media='(min-width:100px)'
                  srcSet={sistemaHidraulicoMobile}
                />
                <img
                  data-aos='fade-up'
                  className='img-fluid'
                  src={sistemaHidraulicoDesktop}
                  alt='sistema de ascensores hidraulico - detalles'
                />
              </picture>
            </div>
            <div data-aos='fade-up' className={`${styles.data}`}>
              <ul>
                <li>
                  <span>1</span> - CABINA
                </li>
                <li>
                  <span>2</span> - PISTÓN HIDRÁULICO
                </li>
                <li>
                  <span>3</span> - AMORTIGUADORES
                </li>
                <li>
                  <span>4</span> - GRUPO HIDRÁULICO
                </li>
                <li>
                  <span>5</span> - CUADRO ELECTRÓNICO DE MANDO
                </li>
              </ul>
            </div>
          </div>

          <div className='col-sm-12 col-md-6'>
            <div className={`${styles.content}`}>
              <h3 data-aos='fade-up'>
                sistema <br />
                electromecánico
              </h3>
              <picture>
                <source
                  media='(min-width:1600px)'
                  srcSet={sistemaElectromecanicoDesktop}
                />
                <source
                  media='(min-width:100px)'
                  srcSet={sistemaElectromecanicoMobile}
                />
                <img
                  data-aos='fade-up'
                  className='img-fluid'
                  src={sistemaElectromecanicoDesktop}
                  alt='sistema de ascensores electromecánico - detalles'
                />
              </picture>
            </div>
            <div data-aos='fade-up' className={`${styles.data}`}>
              <ul>
                <li>
                  <span>1</span> - POLEAS
                </li>
                <li>
                  <span>2</span> - MOTOR ELÉCTRICO
                </li>
                <li>
                  <span>3</span> - CABINA
                </li>
                <li>
                  <span>4</span> - AMORTIGUADORES
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Sistemas

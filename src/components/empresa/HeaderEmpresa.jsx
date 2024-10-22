import imgPrincipal from '@/assets/img/header-empresa.jpg'
import imgPrincipalOpt from '@/assets/img/header-empresa.webp'

import styles from './header-empresa.module.css'

const HeaderEmpresa = () => {
  return (
    <section className={`container-fluid ${styles.headerEmpresa}`}>
      <div className='row'>
        <div className='col-md-12 p-0'>
          <h1 className='bebas'>
            NUESTRA <br />
            EMPRESA
          </h1>
        </div>
      </div>
      <div className={`${styles.background}`}></div>
    </section>
  )
}
export default HeaderEmpresa

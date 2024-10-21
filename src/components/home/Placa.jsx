import logo from '@/assets/img/logo.svg'
import styles from './placa.module.css'

const Placa = () => {
  return (
    <section className={`${styles.placa}`}>
      <div className={`${styles.overlay}`}></div>
      <img
        className={`${styles.logo}`}
        src={logo}
        alt='logo sicem elevadores'
      />
      <div className={`${styles.content}`}>
        <h1>Nuevo sitio en construcción...</h1>
        <a
          className={`transition`}
          target='_blank'
          rel='noopener'
          href='mailto:info@sicemsrl.com.ar'
        >
          Contactanos
        </a>
      </div>
    </section>
  )
}

export default Placa

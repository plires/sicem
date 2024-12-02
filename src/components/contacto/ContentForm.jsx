import { Link } from 'react-router-dom'
import imgOpt from './../../assets/img/background-form-contacto.webp'
import imgNormal from './../../assets/img/background-form-contacto.jpg'
import iconMail from './../../assets/img/contacto-icono-mail.svg'
import iconWhatsapp from './../../assets/img/contacto-icono-whatsapp.svg'
import iconPhone from './../../assets/img/contacto-icono-telefono.svg'
import Formulario from '@/components/contacto/Formulario'

import styles from './content-form.module.css'

const ContentForm = () => {
  return (
    <div className={`${styles.contentFormulario}`}>
      <div className={`${styles.formaCalada}`}>
        <h2>contactanos</h2>
      </div>

      <p>
        Si tenes alguna pregunta o queres ponerte en contacto con nosotros,
        completá el formularioy nuestro equipo te responderá a la brevedad.
      </p>
      <Formulario />
      <div data-aos='fade-up' className={`${styles.imagenInferior}`}>
        <picture>
          <source srcSet={imgOpt} type='image/webp' />
          <source srcSet={imgNormal} type='image/jpg' />

          <img
            className={`img-fluid transition`}
            src={imgNormal}
            alt='{item.img_alt}'
          />
        </picture>
        <div className={`${styles.background}`}></div>
      </div>
      <div data-aos='fade-up' className={`${styles.contentFooter}`}>
        <Link
          className='transition'
          to={`mailto:${import.meta.env.VITE_MAIL_TO_SEND}`}
        >
          <img src={iconMail} alt='icono mail' />
          {import.meta.env.VITE_MAIL_CONTACTO}
        </Link>
        <Link
          target='_blank'
          rel='noopener'
          className='transition'
          to={`${import.meta.env.VITE_WHATSAPP_TO_SEND}`}
        >
          <img src={iconWhatsapp} alt='icono whatsapp' />
          {import.meta.env.VITE_WHATSAPP_TO_SHOW}
        </Link>
        <Link
          className='transition'
          to={`tel:${import.meta.env.VITE_TEL_TO_SEND}`}
        >
          <img src={iconPhone} alt='icono phone' />
          {import.meta.env.VITE_TEL_TO_SHOW}
        </Link>
      </div>
    </div>
  )
}
export default ContentForm

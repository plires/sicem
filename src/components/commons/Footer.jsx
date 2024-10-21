import { Link } from 'react-router-dom'

import iconPhone from '@/assets/img/telefono.svg'
import iconMail from '@/assets/img/mail.svg'
import iconLocation from '@/assets/img/location.svg'
import iconHorario from '@/assets/img/horario.svg'

import './footer.css'

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 data'>
            <Link
              className='item transition'
              to={`tel:${import.meta.env.VITE_TEL_TO_SEND}`}
            >
              <img className='img-fluid' src={iconPhone} alt='icono telefono' />
              <span>{import.meta.env.VITE_TEL_TO_SHOW}</span>
            </Link>

            <Link
              className='item transition'
              to={`mailto:${import.meta.env.VITE_MAIL_TO_SEND}`}
            >
              <img className='img-fluid' src={iconMail} alt='icono mail' />
              <span>{import.meta.env.VITE_MAIL_TO_SHOW}</span>
            </Link>

            <Link
              target='_blank'
              rel='noreferrer'
              className='item transition'
              to={import.meta.env.VITE_ADDRESS_TO_SEND}
            >
              <img
                className='img-fluid'
                src={iconLocation}
                alt='icono direccion'
              />
              <span>{import.meta.env.VITE_ADDRESS_TO_SHOW}</span>
            </Link>

            <div className='item'>
              <img
                className='img-fluid'
                src={iconHorario}
                alt='icono direccion'
              />
              <span>{import.meta.env.VITE_OPENING_HOURS_TO_SHOW}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

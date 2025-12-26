// Footer.jsx
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import logoFooter from '@/assets/img/landing/logo-large.svg'
import './Footer.css'

const Footer = ({ phone, email, address, schedule }) => {
  return (
    <footer className='footer'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-10 offset-lg-1'>
            <div className='row align-items-center'>
              {/* Columna del Logo */}
              <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
                <div className='footer__logo-container'>
                  <img
                    src={logoFooter}
                    alt='Sicem - Tecnología en Ascenso'
                    className='footer__logo'
                  />
                </div>
              </div>

              {/* Columna de Información de Contacto */}
              <div className='col-12 col-lg-6'>
                <div className='footer__contact'>
                  {/* Teléfono */}
                  {phone && (
                    <div className='footer__contact-item'>
                      <FiPhone className='footer__icon' />
                      <a
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className='footer__link'
                      >
                        {phone}
                      </a>
                    </div>
                  )}

                  {/* Email */}
                  {email && (
                    <div className='footer__contact-item'>
                      <FiMail className='footer__icon' />
                      <a href={`mailto:${email}`} className='footer__link'>
                        {email}
                      </a>
                    </div>
                  )}

                  {/* Dirección */}
                  {address && (
                    <div className='footer__contact-item'>
                      <FiMapPin className='footer__icon' />
                      <span className='footer__text'>{address}</span>
                    </div>
                  )}

                  {/* Horarios */}
                  {schedule && (
                    <div className='footer__contact-item'>
                      <FiClock className='footer__icon' />
                      <div className='footer__schedule'>
                        <span className='footer__text'>{schedule.days}</span>
                        <span className='footer__text'>{schedule.hours}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright (opcional) */}
      <div className='footer__bottom'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <p className='footer__copyright'>
                © {new Date().getFullYear()} Sicem SRL. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

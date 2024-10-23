import ContentForm from '@/components/contacto/ContentForm'

import './contacto.css'

const Contacto = () => {
  return (
    <section className='contacto'>
      <div className='contentImg'>
        <div className='container '>
          <div className='background'></div>
          <div className='row'>
            <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
              <ContentForm />
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 p-0'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13145.053335145514!2d-58.5054791!3d-34.5468874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6d9228501f5%3A0x40136b7d7e49a1a3!2sSicem%20SRL!5e0!3m2!1ses!2sar!4v1729624829433!5m2!1ses!2sar'
              width='100%'
              height='600'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto

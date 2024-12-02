import Caratula from '@/components/commons/Caratula'
import CardAccesorios from '@/components/accesorios/CardAccesorios'

import './accesorios.css'

const Accesorios = () => {
  return (
    <section className='accesorios'>
      <Caratula
        image='fondo-faja-accesorios.jpg'
        imageTransparentOpt='accesorios.webp'
        imageTransparen='accesorios.jpg'
        title='oPTIMIZÁ <br />TU ASCENSOR '
        btnData={{
          to: '/contacto',
          size: 'medium',
          type: 'secondary',
          txt: 'Quiero consultar',
        }}
      />

      <section className='grilla container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='title'>
              contamos con una gama amplia <br />
              de accesorios para tu ascensor
            </h2>
          </div>
        </div>

        <div className='row'>
          <CardAccesorios />
        </div>
      </section>
    </section>
  )
}

export default Accesorios

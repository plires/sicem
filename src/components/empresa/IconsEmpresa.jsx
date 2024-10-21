import iconTrayectoria from '@/assets/img/icon-trayectoria.svg'
import iconInstalaciones from '@/assets/img/icon-instalaciones.svg'
import iconPresencia from '@/assets/img/icon-presencia.svg'

const IconsEmpresa = () => {
  return (
    <section className='container iconsEmpresa'>
      <div className='row'>
        <div className='col-md-4'>
          <img
            data-aos='fade-up'
            className='img-fluid'
            src={iconTrayectoria}
            alt='header empresa sicem ascensores'
          />
          <h3>
            74 años <br />
            de trayectoria
          </h3>
        </div>
        <div className='col-md-4'>
          <img
            data-aos='fade-up'
            className='img-fluid'
            src={iconInstalaciones}
            alt='header empresa sicem ascensores'
          />
          <h3>
            + 3000 <br /> instalaciones
          </h3>
        </div>
        <div className='col-md-4'>
          <img
            data-aos='fade-up'
            className='img-fluid'
            src={iconPresencia}
            alt='header empresa sicem ascensores'
          />
          <h3>
            Presencia <br />
            en 5 países
          </h3>
        </div>
      </div>
    </section>
  )
}
export default IconsEmpresa

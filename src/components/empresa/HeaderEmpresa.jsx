import imgPrincipal from '@/assets/img/header-empresa.jpg'
import imgPrincipalOpt from '@/assets/img/header-empresa.webp'

const HeaderEmpresa = () => {
  return (
    <section className='container-fluid headerEmpresa'>
      <div className='row'>
        <div className='col-md-12 p-0'>
          <picture>
            <source srcSet={imgPrincipalOpt} type='image/webp' />
            <source srcSet={imgPrincipal} type='image/png' />

            <img
              data-aos='fade-up'
              className='img-fluid'
              src={imgPrincipal}
              alt='header empresa sicem ascensores'
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
export default HeaderEmpresa

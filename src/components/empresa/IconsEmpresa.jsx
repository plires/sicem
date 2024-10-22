import Icon from '@/components/commons/Icon'

import styles from '@/components/empresa/icons-empresa.module.css'

const IconsEmpresa = () => {
  return (
    <section className={`container ${styles.iconsEmpresa}`}>
      <div className='row'>
        <h2 data-aos='fade-up' className={`title`}>
          sicem en numeros
        </h2>
      </div>

      <div className='row'>
        <Icon
          title='74 años <br />de trayectoria'
          size='col-sm-4'
          imgIcon={'icon-trayectoria.svg'}
        />
        <Icon
          title='+ 3000 <br /> instalaciones'
          size='col-sm-4'
          imgIcon={'icon-instalaciones.svg'}
        />
        <Icon
          title='Presencia <br />en 5 países'
          size='col-sm-4'
          imgIcon={'icon-presencia.svg'}
        />
      </div>
    </section>
  )
}
export default IconsEmpresa

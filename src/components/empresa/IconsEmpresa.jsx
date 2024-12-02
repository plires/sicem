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
          prefix=''
          suffix=' años <br />de trayectoria'
          value='76'
          title={true}
          size='col-sm-4'
          imgIcon={'icon-trayectoria.svg'}
        />
        <Icon
          prefix='+ '
          suffix=' <br /> instalaciones'
          value='3000'
          title={true}
          size='col-sm-4'
          imgIcon={'icon-instalaciones.svg'}
        />
        <Icon
          prefix='Presencia <br />en '
          suffix=' países'
          value='5'
          title={true}
          size='col-sm-4'
          imgIcon={'icon-presencia.svg'}
        />
      </div>
    </section>
  )
}
export default IconsEmpresa

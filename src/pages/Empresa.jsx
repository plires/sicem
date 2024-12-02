import Card from '@/components/commons/Card'
import HeaderEmpresa from '@/components/empresa/HeaderEmpresa'
import IconsEmpresa from '@/components/empresa/IconsEmpresa'
import CarruselEmpresa from '@/components/empresa/CarruselEmpresa'

import './empresa.css'

const Empresa = () => {
  return (
    <section className={`empresa`}>
      <HeaderEmpresa />
      <Card
        description='Sicem SRL, fundada en 1948 por Itálico Cignola, es una empresa familiar con 76 años de experiencia en la <span>fabricación de ascensores</span> y sus componentes. Iniciando con motores para ascensores, la empresa ahora ofrece ascensores completos, adaptados 
        a las necesidades de arquitectos, constructores y ascensoristas. Sicem es representante exclusiva de marcas como Gem en Argentina y Latinoamérica. También es distribuidora de IPH y otras prestigiosas marcas como Automac SA y Avaxon SRL. Además, cuenta con un banco de prueba para ensayos de motores eléctricos y capacidad tecnológica para <span>trabajos especiales y reparaciones de motores y máquinas.</span>'
        withButton={false}
        img={'empresa.jpg'}
        imgOpt={'empresa.webp'}
      />
      <IconsEmpresa />
      <CarruselEmpresa />
    </section>
  )
}

export default Empresa

import Caratula from '@/components/commons/Caratula'
import Product from '@/components/products/Product'

const Productos = () => {
  return (
    <section className='productos'>
      <Caratula
        image='fondo-faja-productos.jpg'
        imageTransparentOpt='cabina-faja-productos.webp'
        imageTransparen='cabina-faja-productos.png'
        title='DISEÑOS <br />ESPECIALIZADOS <br />A MEDIDA'
        btnData={{
          to: '/contacto',
          size: 'medium',
          type: 'secondary',
          txt: 'Quiero consultar',
        }}
      />
      <Product
        order='initial'
        title='cabina montecarlo'
        description='Sólida, sobria y elegante, realizada en acero inoxidable esmerilado en su parte inferior con espejo en las tres caras en su parte superior. Posee una botonera de paño entero, con indicador de piso color, zócalo, pasamanos y marco de techo suspendido en acero inoxidable, techo de acero perforado al tono que permite pasar delicadamente la luz y piso de mármol. Todo el conjunto resulta ideal para espacios de alto tránsito, tales como hoteles y oficinas.'
        imageProdOpt='cabina-montecarlo.webp'
        imageProd='cabina-montecarlo.jpg'
        altImage='cabina de ascensor montecarlo'
      />
      <Product
        title='cabina panorámico'
        description='Totalmente vidriada, con estructura, zócalo, pasamanos y marco de techo suspendido en acero inoxidable esmerilado, con detalles de categoría, tales como la botonera de paño entero de acero inox, con indicador color y techo de acero inoxidable perforado o decorado, así como también el piso de mármol, dando una lujosa sensación de libertad y contacto con el exterior.'
        imageProdOpt='cabina-panoramica.webp'
        imageProd='cabina-panoramica.jpg'
        altImage='cabina de ascensor panoramica'
      />
      <Product
        order='initial'
        title='cabina camerino'
        description='Cabina totalmente realizada en espejo clásico o fumee, con zócalo, pasamanos y marco de techo suspendido en acero inoxidable, posee además una botonera de paño entero con indicador color, y piso de mármol que completa un espacio muy elegante, ideal para edificios de categoría.'
        imageProdOpt='cabina-camerino.webp'
        imageProd='cabina-camerino.jpg'
        altImage='cabina de ascensor camerino'
      />
      <Product
        title='montavehículos'
        description='Realizada en chapa, con todos los controles y elementos de seguridad que requiere este tipo de elevadores, optimizando el espacio y el accionar del estacionamiento Se ofrece en la versión electromecánica o Hidráulica, brindando una gama de opciones que responde a las necesidades del cliente.'
        imageProdOpt='montavehiculos.webp'
        imageProd='montavehiculos.jpg'
        altImage='montavehiculos'
      />
      <Product
        order='initial'
        title='montacargas'
        description='Se realiza según las necesidades de transporte del cliente. Está diseñado solo para carga y utiliza botoneras de llamada y envío.'
        imageProdOpt='montacargas.webp'
        imageProd='montacargas.jpg'
        altImage='montacargas'
      />
    </section>
  )
}

export default Productos

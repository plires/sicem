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
        description='Realizada en acero inoxidable esmerilado| Medio paño en las tres caras en espejo | Botonera de paño entero | indicador de piso a color | zócalo, pasamanos y marco de techo | techo de chapa perforada | piso de mármol ideal para ascensores de alto transito, como hoteles y oficinas.'
        imageProdOpt='cabina-montecarlo.webp'
        imageProd='cabina-montecarlo.jpg'
        altImage='cabina de ascensor montecarlo'
      />
      <Product
        title='cabina panorámica'
        description='Cabina realizada en espejo clásico o fumee | zócalo | pasamanos | marco de techo.  <br /><br />Suspendido en acero inoxidable | botonera de paño entero con indicador color | piso de mármol.'
        imageProdOpt='cabina-panoramica.webp'
        imageProd='cabina-panoramica.jpg'
        altImage='cabina de ascensor panoramica'
      />
      <Product
        order='initial'
        title='cabina camerino'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, asperiores cupiditate! Expedita, accusantium optio earum impedit veritatis sapiente a aut, ipsam labore repellendus repudiandae illo esse.'
        imageProdOpt='cabina-camerino.webp'
        imageProd='cabina-camerino.jpg'
        altImage='cabina de ascensor camerino'
      />
      <Product
        title='montavehículos'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, asperiores cupiditate! Expedita, accusantium optio earum impedit veritatis sapiente a aut, ipsam labore repellendus repudiandae illo esse.'
        imageProdOpt='montavehiculos.webp'
        imageProd='montavehiculos.jpg'
        altImage='montavehiculos'
      />
      <Product
        order='initial'
        title='montacargas'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, asperiores cupiditate! Expedita, accusantium optio earum impedit veritatis sapiente a aut, ipsam labore repellendus repudiandae illo esse.'
        imageProdOpt='montacargas.webp'
        imageProd='montacargas.jpg'
        altImage='montacargas'
      />
    </section>
  )
}

export default Productos

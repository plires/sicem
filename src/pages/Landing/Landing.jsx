import Header from './components/Header'
import Hero from '@/pages/Landing/components/Hero'
import ProductCarousel from '@/pages/Landing/components/ProductCarousel'
import AboutSection from '@/pages/Landing/components/AboutSection'

import { getProducts } from '@/utils/dataUtils.js'

import { ToastContainer } from 'react-toastify'

import logoLarge from '@/assets/img/landing/logo-large.svg'
import logoSmall from '@/assets/img/landing/logo-small.svg'
import videoBackground from '@/assets/video/ascensor.mp4'

import './Landing.css'

const Landing = () => {
  const products = getProducts('products')
  return (
    <>
      <ToastContainer />
      <Header
        logoLarge={logoLarge}
        logoSmall={logoSmall}
        scrollThreshold={100}
      />

      {/* Resto del contenido */}
      <main style={{ marginTop: '120px' }}>
        <Hero
          videoSrc={videoBackground}
          title='Ascensores y Montacargas'
          subtitle='a medida para cada proyecto'
          description='Diseñamos soluciones integrales en ascensores electromecánicos e hidráulicos.'
        />
        <ProductCarousel products={products} />
        <AboutSection
          title='Diseñamos ascensores, construimos confianza'
          subtitle='En Sicem SRL somos líderes en soluciones de equipos de elevación, especializados en el diseño y fabricación de ascensores innovadores.'
          description='Hace 75 años hemos estado comprometidos con la innovación, ofreciendo ascensores, cabinas personalizadas y accesorios de alta calidad que transforman la movilidad en edificios residenciales, comerciales e industriales.'
          bgColor='var(--primary-color)'
        />
        <h2 className='title'>sadsadsad</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        perferendis reiciendis iure ipsum aut numquam aperiam cum quos alias
        quis laudantium exercitationem aliquam recusandae voluptatem voluptatum
        modi, unde necessitatibus. Error. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Corporis nihil recusandae excepturi
        deserunt laboriosam officiis quas reprehenderit minima fugit optio sit
        exercitationem quod at, veritatis accusamus magni. Aliquid incidunt nam
        fuga quae aperiam eius itaque natus, minima asperiores nihil blanditiis
        et similique sit laborum provident assumenda ratione, nisi culpa!
        Beatae, amet. Aliquam maxime porro earum eveniet voluptates, ut facere
        magni, debitis quod impedit qui eos praesentium consequuntur! Minus unde
        reprehenderit repudiandae ratione fugit quam illum, error sapiente
        blanditiis tenetur harum quos earum? Eos reiciendis qui temporibus nam
        doloremque consequuntur recusandae ex facilis neque, ipsa, repudiandae
        mollitia corporis expedita numquam, veniam obcaecati provident in odit
        rerum? Repellat optio dolore sequi illo officiis quam exercitationem
        laudantium rem, fugiat vel obcaecati unde minima laborum nulla ab
        tenetur dignissimos ex ipsum, provident corporis? Recusandae labore vero
        voluptatum voluptates, quas explicabo ipsum mollitia architecto aut
        quasi reiciendis quod incidunt natus a, fugiat blanditiis aliquam sequi
        sapiente sit voluptas? Quibusdam dolore sapiente, error odit, vero
        voluptatum iure mollitia suscipit id officia voluptatibus iste aliquid
        earum architecto reiciendis corporis ex autem similique in porro quaerat
        nihil ducimus inventore fuga! Quis nobis qui voluptate sed tempora fuga
        nisi omnis tempore culpa, nostrum ipsa! Molestias commodi voluptatem,
        inventore reiciendis itaque natus eius magni libero deserunt omnis
        laudantium? Ex aut tempore iusto quisquam eum fuga, nesciunt cupiditate
        exercitationem accusantium voluptate perferendis temporibus eius labore
        magni autem reprehenderit modi eaque facilis esse. Assumenda possimus
        laudantium fuga iure. Fugiat assumenda voluptatem ducimus sunt impedit
        voluptates officia eveniet. Ratione assumenda ipsa quos eos voluptas
        iste neque libero incidunt magni excepturi. Totam, doloremque! Officiis
        ratione ullam animi quas commodi, quidem iste, aspernatur sequi mollitia
        voluptatem provident illo qui deleniti non dolorem. At, voluptate vel
        veniam nihil, molestias omnis quia optio esse hic illo blanditiis
        laboriosam saepe, maxime quidem! Quidem in voluptates tenetur harum
        beatae, ut ab, necessitatibus consequatur aspernatur assumenda omnis
        ipsum sequi non architecto, quibusdam provident cupiditate numquam? Hic
        sint ad est repellat odit placeat cupiditate nulla autem eos delectus.
        Explicabo aut excepturi laborum aliquid optio aperiam corporis ipsa
        fugit labore asperiores? Velit quidem illum quam perspiciatis. Ipsa
        aliquid soluta dolore qui deleniti officia, quos veniam porro dicta
        eaque velit labore distinctio illum tenetur sed et cum odio molestiae
        voluptas error perferendis ipsam. Obcaecati voluptatum tempora, natus,
        sapiente eligendi quae earum nobis impedit quaerat non facilis quas quia
        at quo! Enim sit esse necessitatibus id perspiciatis, corporis veniam
        pariatur doloribus odio recusandae, tempora tenetur dolorum excepturi,
        optio qui dolorem consectetur accusamus culpa? Provident iusto inventore
        nam facilis obcaecati earum necessitatibus nulla, nesciunt explicabo
        consequatur beatae quidem magni veniam blanditiis pariatur ipsam quae
        dignissimos asperiores quibusdam. Assumenda amet pariatur ab eaque
        minima sequi omnis officia unde, vero iste totam impedit voluptatem
        nihil accusantium expedita libero dignissimos ut, velit laboriosam
        reprehenderit quia eos perferendis odio. Officia, nulla. Quo, aperiam.
        Nisi recusandae ducimus odit saepe officiis repudiandae? Nulla, quaerat
        sint fugit, animi sequi nihil blanditiis eligendi similique modi ducimus
        illum a ipsa aliquam reprehenderit dolor odit iusto eius tempora dolores
        asperiores magni qui praesentium earum? Non, voluptatem! Blanditiis
        sapiente dolores autem veniam natus vitae error ipsum assumenda aliquam
        ipsa consectetur distinctio dolore nesciunt harum, expedita vel
        molestias culpa alias corporis velit ab nemo! Temporibus quas labore
        facilis voluptas voluptatum! Qui, architecto dolore, esse cum dolorum
        aspernatur nulla suscipit nam soluta quisquam provident obcaecati fuga
        aliquam dicta magnam! Sapiente asperiores, odio ipsam molestiae quam
        quos facere dolore voluptatem rerum iste deserunt alias cupiditate ipsum
        quidem. Ducimus animi distinctio in vel aliquid ipsa sapiente doloremque
        nemo ut enim numquam, eaque, necessitatibus sunt voluptatem. Suscipit
        inventore perferendis ratione, excepturi illum quae autem nam vero porro
        dolorem libero, veritatis aliquid, deleniti cum iusto hic asperiores
        voluptatem voluptates! Sit omnis repudiandae quo a hic quibusdam ipsam.
        Laborum blanditiis inventore ratione repellendus incidunt reiciendis
        aspernatur facere dicta similique, doloremque dignissimos laudantium
        nesciunt laboriosam quidem? Est accusantium minus quibusdam, a ullam
        neque explicabo non vel id optio maxime repellendus amet illo debitis
        deleniti, cupiditate similique facilis totam dolores quisquam veniam.
        Rerum est facilis asperiores magni. Molestias, cum? Repudiandae ad enim,
        possimus officiis atque recusandae magnam fuga tempora veritatis itaque!
        Optio at inventore suscipit saepe libero quo voluptates harum quibusdam
        quis, totam quam ratione incidunt quisquam quod et molestias placeat
        corporis cumque reiciendis non perspiciatis voluptate soluta? Voluptates
        debitis aperiam labore, obcaecati iure architecto rerum fuga veritatis?
        Ipsum quis illum delectus, nemo officiis at placeat itaque maiores
        cumque optio! Quia voluptatum repellendus maiores sequi nihil iste, quo
        placeat quisquam repellat amet atque maxime praesentium fugit sunt cum.
        Reiciendis maiores ipsa mollitia provident dolorem consectetur, ducimus
        nulla animi, nemo architecto ad. Obcaecati dolor voluptate natus non
        sint temporibus quibusdam libero provident nulla corrupti numquam nemo
        veritatis saepe quae magnam, doloribus, eligendi sequi est incidunt
        eaque. Reiciendis, saepe doloribus aliquam, laboriosam officia atque
        eius qui illo dolor doloremque debitis quos, quam dolorum perspiciatis!
        Et, perspiciatis nulla recusandae assumenda quam asperiores voluptates
        praesentium nostrum fuga qui. Reiciendis, delectus accusantium totam
        dolorum animi odit? Repellat, laudantium molestias. Praesentium eaque
        modi eveniet possimus impedit pariatur eius, similique sapiente ipsum
        illum, quam incidunt ipsa asperiores expedita doloremque, doloribus at
        laborum et totam repudiandae ducimus est in nihil neque! Id debitis
        voluptate exercitationem alias iusto, corporis saepe nobis, voluptatem
        corrupti blanditiis a. Omnis fuga eum repellat inventore fugit, sit,
        corrupti dolor blanditiis dolorum ipsam at odit quae saepe unde nostrum
        autem voluptas. Nam aperiam inventore a reprehenderit, ipsam quasi nisi?
        Facere voluptatum praesentium ut quae porro accusantium, recusandae
        omnis odio? Expedita tenetur sint asperiores eaque recusandae aut
        suscipit. Molestias aperiam eligendi eveniet, ab sapiente sed libero in
        delectus et quibusdam, quis numquam necessitatibus, adipisci
        voluptatibus aliquid eaque cum blanditiis tempore. Aut natus quos quo
        doloribus dolores, iusto nemo! Ipsum quaerat, quibusdam cupiditate
        dolores velit non blanditiis magni perferendis, magnam voluptas corrupti
        error ipsam? Quibusdam rem iure eaque excepturi perspiciatis veritatis
        molestias eos. Minus modi corrupti, ea dolores ducimus vero, animi
        nihil, necessitatibus aliquid inventore nemo illum veritatis nisi culpa
        harum neque? Hic vero ex dolore, aut aperiam molestias iure consequuntur
        officiis quasi architecto quam earum ipsa est harum veniam tenetur esse
        unde praesentium recusandae, distinctio, voluptatibus eaque explicabo?
        Eligendi soluta omnis architecto nesciunt voluptate, ullam fugiat
        voluptas quia deserunt enim quos exercitationem non adipisci minus hic
        molestiae ut veniam ipsam beatae, temporibus quod nihil rem aspernatur
        qui. Deleniti sapiente quam modi voluptatum recusandae voluptatibus,
        tempora est voluptates. Accusamus deserunt reiciendis possimus corporis
        ducimus? Amet voluptatibus, provident consectetur excepturi porro
        molestias ad iusto modi quae sapiente esse consequatur vero debitis
        alias magnam asperiores reprehenderit hic quas laboriosam sit quibusdam
        explicabo quisquam. Voluptates fugit dicta earum quas cumque dolores
        minima ipsa, iste impedit sunt, sapiente aspernatur ex officiis animi
        beatae quo. A distinctio nemo quae soluta sed accusantium est, libero
        accusamus quos nulla at qui placeat eligendi natus laboriosam odio ab
        nesciunt culpa reprehenderit voluptates iure provident possimus.
        Dignissimos recusandae aspernatur aliquid quo aut, eveniet aliquam
        omnis, natus doloribus neque, earum culpa voluptate explicabo nam nihil
        aperiam eum corrupti sint ea cum totam quis. Deserunt praesentium
        ratione facilis, aspernatur ad quidem inventore culpa sunt laborum!
        Obcaecati quis autem soluta, culpa atque aperiam. Doloremque, nisi
        perspiciatis enim fuga ex, consequatur maiores et nesciunt aperiam hic
        cumque architecto alias. Voluptates illo debitis odit sint sunt quisquam
        veniam tenetur delectus assumenda, inventore vel doloribus blanditiis
        ipsam libero ab similique repudiandae qui saepe fugit voluptatibus
        nulla? Ullam dolore obcaecati consequatur vitae tempora quibusdam
        temporibus eum ratione, perferendis totam accusamus, saepe provident
        inventore necessitatibus quam qui. Sed quaerat laboriosam eveniet
        officia a eligendi sapiente labore id at rem, quod aspernatur? Cum,
        accusamus vel voluptate quo culpa esse error recusandae nesciunt
        molestiae soluta, ipsa unde modi magni magnam iste? Quod recusandae
        blanditiis, libero rem culpa illum a numquam ratione dolore eveniet
        quasi sequi inventore iste, hic iusto dolorem eos? Ipsum voluptates modi
        consectetur tenetur officiis mollitia aut architecto, nulla perferendis
        minus aliquid libero voluptate animi atque incidunt repudiandae? Atque
        nesciunt corrupti, est voluptas, maiores accusamus reprehenderit
        repellat tenetur praesentium quibusdam saepe nihil dolorem sapiente eius
        possimus cum adipisci vero tempora ipsam. Laboriosam ea quo perferendis
        corporis corrupti eligendi, at consequatur. Ut distinctio reiciendis
        provident fugit consequuntur eligendi accusamus molestias dolorum
        repudiandae qui? Voluptatibus cupiditate sequi vero veritatis minima
        nihil quo distinctio quos recusandae ducimus perferendis atque quisquam
        corrupti consequatur accusamus placeat hic, aut fugit soluta sint
        doloribus. Itaque quidem explicabo modi omnis, tempora repudiandae sed,
        aspernatur id vel voluptas et architecto ea cupiditate delectus facilis
        labore eveniet fugit quo deserunt dolore? Nulla, voluptatem
        voluptatibus. Itaque temporibus ipsa magnam eos. Est ab nam doloremque
        magnam ducimus laudantium. Laboriosam perspiciatis et eligendi
        explicabo, ex doloribus, animi iure neque quae odio dicta omnis
        asperiores inventore porro temporibus iusto consequuntur quos quasi
        corporis ut fugiat? Illum, eaque sed nobis itaque ex incidunt saepe,
        adipisci eius perferendis quisquam tempore dolore, ipsa architecto cum
        culpa tempora qui. Magnam magni aperiam quos harum provident numquam
        quibusdam voluptate placeat doloremque iure! Praesentium labore,
        recusandae, veniam eius nisi illo ipsa dolore beatae mollitia iusto fuga
        ea ab? Possimus, odio aliquid consectetur excepturi nobis, id illo cum
        beatae sit ad facere tempore molestias perspiciatis atque dolore dolorem
        corrupti recusandae.
      </main>
    </>
  )
}

export default Landing

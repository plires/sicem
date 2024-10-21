import { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Test = () => {
  const [posts, setPosts] = useState(false)
  const [description, setDescription] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPosts(['pepe ', 'juan ', 'pedro '])
    }, '1000')

    setTimeout(() => {
      setDescription(
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, fugiat adipisci? Quisquam, quidem? Explicabo, quos? Molestias, recusandae animi dolore voluptatum, laboriosam nam architecto, odio repudiandae deserunt adipisci veniam eos ea magni delectus non fugit sint sit dignissimos. Ducimus quia ullam deserunt placeat tempore temporibus et, qui iusto unde quaerat atque enim? Debitis cupiditate illum, nostrum, doloribus doloremque est inventore dignissimos delectus placeat quasi officiis fugiat fuga maxime dolorem quis veritatis error cumque! Consequatur beatae vitae odio id! Eligendi, aliquam. Quis ullam nostrum voluptas et ratione cupiditate tempora, labore ipsa eligendi, incidunt tenetur. Minima quisquam, ut iusto ipsam sit delectus nobis possimus? Velit eligendi quos at similique vero non tempore inventore, temporibus aliquam odit odio doloremque qui repudiandae commodi cupiditate. Aperiam nulla similique voluptas modi, voluptatum optio neque cumque tenetur? Laborum commodi natus accusamus dicta? Numquam assumenda necessitatibus voluptate delectus modi! Nisi, autem impedit maxime velit obcaecati quae et officia aut?',
      )
    }, '2000')
  }, [])

  return (
    <div>
      <SkeletonTheme baseColor='#f5f5f5' highlightColor='#c8c8c8'>
        <h1>{posts || <Skeleton />}</h1>
        {description || <Skeleton count={10} height={30} />}
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>
    </div>
  )
}

export default Test

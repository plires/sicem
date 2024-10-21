import { FaPlus } from 'react-icons/fa6'
import styles from './plus.module.css'

const Plus = ({ type = null, btnClick = null, elementId = null }) => {
  let typeSpan

  switch (type) {
    case 'light':
      typeSpan = styles.light
      break
    case 'dark':
      typeSpan = styles.dark
      break
    default:
      typeSpan = ''
      break
  }

  return (
    <span
      onClick={btnClick && elementId ? () => btnClick(elementId) : null}
      className={`${styles.symbol} ${typeSpan}  transition`}
    >
      <FaPlus />
    </span>
  )
}

export default Plus

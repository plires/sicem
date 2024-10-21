import { Link } from 'react-router-dom'
import styles from './btn.module.css'

const Btn = ({ size = 'medium', type = 'light', txt = '', to = '#' }) => {
  return (
    <Link to={to} className={`btn ${styles[size]} ${styles[type]}`}>
      {txt}
    </Link>
  )
}

export default Btn

import { getImageURL } from '@/utils/dataUtils'
import CountUp from 'react-countup'

import styles from './icon.module.css'

const getCount = (prefix, suffix, value) => {
  return (
    <CountUp
      prefix={prefix}
      suffix={suffix}
      end={value}
      enableScrollSpy={true}
      separator='.'
    />
  )
}

const Icon = ({
  size = 'col-md-12',
  imgIcon,
  title = false,
  prefix = '',
  suffix = '',
  value = '',
}) => {
  return (
    <article className={`${size} ${styles.contentIcon}`}>
      <img
        data-aos='fade-up'
        className='img-fluid'
        src={getImageURL(imgIcon)}
        alt='header empresa sicem ascensores'
      />
      {title && <h3 data-aos='fade-up'>{getCount(prefix, suffix, value)}</h3>}
    </article>
  )
}

export default Icon

import { useState, useEffect } from 'react'

import logoLarge from '@/assets/img/landing/logo-large.svg'
import logoSmall from '@/assets/img/landing/logo-small.svg'

import './Header.css'

const Header = ({ scrollThreshold = 100 }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollThreshold])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className='header__container'>
        <div
          className={`header__logo ${isScrolled ? 'header__logo--small' : ''}`}
        >
          <img
            src={isScrolled ? logoSmall : logoLarge}
            alt='Logo'
            className='header__logo-img'
          />
        </div>
      </div>
    </header>
  )
}

export default Header

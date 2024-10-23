import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import logoLarge from '@/assets/img/logo-large.svg'
import logoSmall from '@/assets/img/logo-small.svg'
import IconHumberguer from '@/components/commons/IconHumberguer'
import CloseHumberguer from '@/components/commons/CloseHumberguer'

import '@/components/commons/header.css'

const Header = () => {
  const headerElement = useRef()
  const navElement = useRef()

  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false)
  const [navMobile, setNavMobile] = useState(IconHumberguer)
  const [logo, setLogo] = useState(logoLarge)

  const changeIconMobile = () => {
    if (isNavMobileOpen) {
      setNavMobile(IconHumberguer)
      setIsNavMobileOpen(false)
      navElement.current.classList.remove('open')
    } else {
      setNavMobile(CloseHumberguer)
      setIsNavMobileOpen(true)
      navElement.current.classList.add('open')
    }
  }

  const closeNavMobile = () => {
    setIsNavMobileOpen(false)
    setNavMobile(IconHumberguer)
    navElement.current.classList.remove('open')
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > 100) {
        headerElement.current.classList.add('fixed')
        setLogo(logoSmall)
      } else {
        headerElement.current.classList.remove('fixed')
        setLogo(logoLarge)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className='transition' ref={headerElement}>
      <ToastContainer />
      <div className='content_logo'>
        <Link to='/' onClick={() => closeNavMobile()}>
          <img
            className='logo transition img-fluid'
            src={logo}
            alt='logo sicem ascensores'
          />
        </Link>
      </div>
      <nav className='transition' ref={navElement}>
        <ul>
          <li>
            <NavLink
              onClick={() => changeIconMobile()}
              className='transition'
              to='/empresa'
            >
              EMPRESA
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition'
              to='/productos'
              onClick={() => changeIconMobile()}
            >
              PRODUCTOS
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition'
              to='/accesorios'
              onClick={() => changeIconMobile()}
            >
              ACCESORIOS
            </NavLink>
          </li>
          <li>
            <NavLink
              className='transition'
              to='/contacto'
              onClick={() => changeIconMobile()}
            >
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </nav>
      <span onClick={() => changeIconMobile()}>{navMobile}</span>
    </header>
  )
}

export default Header

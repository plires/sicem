import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from '@/context/app'
import ScrollToTop from '@/utils/scrollToTop'

import Header from '@/components/commons/Header'

import Home from '@/pages/Home'
import Empresa from '@/pages/Empresa'
import Productos from '@/pages/Productos'
import Accesorios from '@/pages/Accesorios'
import Contacto from '@/pages/Contacto'
import NotFound from '@/pages/NotFound'

import Footer from '@/components/commons/Footer'

import '@/assets/css/app.css'

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <main className='page'>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/empresa' element={<Empresa />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/accesorios' element={<Accesorios />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AppProvider>
  )
}

export default App

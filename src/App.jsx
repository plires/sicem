import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from '@/context/app'
import ScrollToTop from '@/utils/scrollToTop'

import MainLayout from '@/layouts/MainLayout'

import Home from '@/pages/Home'
import Empresa from '@/pages/Empresa'
import Productos from '@/pages/Productos'
import Accesorios from '@/pages/Accesorios'
import Contacto from '@/pages/Contacto'
import Landing from '@/pages/Landing/Landing'
import NotFound from '@/pages/NotFound'

import '@/assets/css/app.css'

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />{' '}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/empresa' element={<Empresa />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/accesorios' element={<Accesorios />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<NotFound />} />
          </Route>

          <Route path='/landing' element={<Landing />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App

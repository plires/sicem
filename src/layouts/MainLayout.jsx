import { Outlet } from 'react-router-dom' // 1. Importar Outlet
import Header from '@/components/commons/Header'
import Footer from '@/components/commons/Footer'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className='page'>
        <Outlet /> {/* Aquí se renderizarán las hijas (Home, Empresa, etc) */}
      </main>
      <Footer />
    </>
  )
}
export default MainLayout

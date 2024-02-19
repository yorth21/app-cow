import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { LayoutProvider } from './context/layoutContext'

function Layout () {
  return (
    <LayoutProvider>
      <div className='min-h-screen'>
        <Menu />

        <div className='p-4 xl:ml-80'>
          <Navbar />

          <Outlet />
        </div>
      </div>
    </LayoutProvider>
  )
}

export default Layout

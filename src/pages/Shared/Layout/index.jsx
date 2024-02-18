import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

function Layout () {
  return (
    <div className='min-h-screen'>
      <Menu />

      <div className='p-4 xl:ml-80'>
        <Navbar />

        <Outlet />
      </div>
    </div>

  )
}

export default Layout

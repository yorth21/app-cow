import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'

function Layout () {
  return (
    <div className='min-h-screen bg-neutral-200'>
      <Menu />

      <div className='p-4 xl:ml-80'>
        <Outlet />
      </div>
    </div>

  )
}

export default Layout

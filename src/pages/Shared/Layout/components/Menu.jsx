import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHouse, FaCow } from 'react-icons/fa6'

const OPCIONS = [
  { name: 'Home', href: '/', icon: FaHouse },
  { name: 'Cows', href: '/cows', icon: FaCow }
]

function Menu () {
  return (
    <aside className='bg-white shadow-sm -translate-x-80 fixed inset-0 z-50 my-4 ml-4 w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border'>
      <div className='m-4 text-center'>
        <Link to='/' className='text-2xl font-bold text-slate-700'>
          Cows Udenar
        </Link>
      </div>
      <div className='m-4'>
        <ul className='mb-4 flex flex-col gap-2'>
          {OPCIONS.map((opcion) => (
            <li key={opcion.name}>
              <NavLink
                to={opcion.href}
                className={({ isActive }) =>
                  `align-middle font-bold text-center transition-all py-3 rounded-lg w-full flex items-center gap-4 px-4 capitalize ${
                    isActive
                      ? 'bg-gradient-to-tr from-slate-900 to-slate-800 text-white shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-slate-900/20 active:opacity-[0.85]'
                      : 'text-slate-800 hover:bg-slate-200 active:opacity-[0.85]'
                  }`}
              >
                {opcion.icon && <opcion.icon className='text-xl' />}
                {opcion.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Menu

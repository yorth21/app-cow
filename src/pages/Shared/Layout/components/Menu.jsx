import React from 'react'

function Menu () {
  return (
    <aside className='bg-white shadow-sm -translate-x-80 fixed inset-0 z-50 my-4 ml-4 w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border'>
      <div className='m-4 text-center'>
        <a href='#'>Cows Udenar</a>
      </div>
      <div className='m-4'>
        <ul className='mb-4 flex flex-col gap-1'>
          <li>
            <a
              href='#'
              className='align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#'
              className='align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize'
            >
              Cows
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Menu

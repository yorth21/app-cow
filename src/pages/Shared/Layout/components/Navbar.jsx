import React from 'react'

function Navbar () {
  return (
    <nav className='bg-blue-200 block w-full max-w-full px-0 py-1'>
      <div className='flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center'>
        <div className='capitalize'>
          <nav className='w-max'>
            <ol className='flex flex-wrap items-center w-full'>
              <li className='flex item-center antialiased text-sm cursor-pointer'>
                <a href=''>/</a>
              </li>
              <li>
                <a href=''>home</a>
              </li>
            </ol>
          </nav>
          <h6 className='block antialiased tracking-normal text-base font-semibold leading-relaxed'>
            home
          </h6>
        </div>
        <div>
          <button>
            Menu
          </button>
          <button>
            Salir
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

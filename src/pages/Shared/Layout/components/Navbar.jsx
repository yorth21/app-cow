import Breadcrumbs from './Breadcrumbs'

function Navbar () {
  return (
    <nav className='block w-full max-w-full px-0 py-1'>
      <div className='flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center'>
        <div className='capitalize'>
          <Breadcrumbs />
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

import { FaBars, FaArrowRightToBracket } from 'react-icons/fa6'
import Breadcrumbs from './Breadcrumbs'
import useLayoutContext from '../hooks/useLayoutContext'

function Navbar () {
  const { openMenu, setOpenMenu } = useLayoutContext()

  return (
    <nav className='block w-full max-w-full px-0 py-1 mb-4'>
      <div className='flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center'>
        <div className='capitalize'>
          <Breadcrumbs />
        </div>
        <div className='flex gap-2 text-xl'>
          <button
            className={`
            ${
              openMenu ? 'bg-slate-200' : ''
            } text-center p-2.5 rounded-lg flex items-center transition-all hover:bg-slate-200 xl:hidden`}
            aria-label='Menu'
            onClick={() => setOpenMenu(!openMenu)}
          >
            <FaBars />
          </button>
          <button
            className='text-center p-2.5 rounded-lg flex items-center transition-all hover:bg-slate-200'
            aria-label='Cerrar sesion'
          >
            <FaArrowRightToBracket />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

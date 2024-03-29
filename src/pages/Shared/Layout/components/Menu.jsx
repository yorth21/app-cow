import { Link, NavLink } from 'react-router-dom'
import { FaHouse, FaCow, FaUser } from 'react-icons/fa6'
import useLayoutContext from '../hooks/useLayoutContext'
import { PATHS } from '@/routes/paths'
import useAuthContext from '@/hooks/useAuthContext'

const OPCIONS = [
  {
    name: 'Home',
    href: PATHS.HOME,
    icon: FaHouse,
    roles: ['USER_ROLE', 'ADMIN_ROLE']
  },
  {
    name: 'Cows',
    href: PATHS.COWS,
    icon: FaCow,
    roles: ['USER_ROLE', 'ADMIN_ROLE']
  },
  {
    name: 'Users',
    href: PATHS.USERS,
    icon: FaUser,
    roles: ['ADMIN_ROLE']
  }
]

function Menu () {
  const { user } = useAuthContext()
  const { openMenu } = useLayoutContext()

  return (
    <aside
      className={`
      ${
        openMenu ? 'translate-x-0' : '-translate-x-80'
      } bg-white shadow-sm fixed inset-0 z-50 my-4 ml-4 w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-slate-600/20`}
    >
      <div className='m-4 text-center'>
        <Link to='/' className='text-2xl font-bold text-slate-700'>
          Cows Udenar
        </Link>
      </div>
      <div className='m-4'>
        <ul className='mb-4 flex flex-col gap-2'>
          {OPCIONS.map((opcion) => (
            opcion.roles.includes(user.role) && (
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
            )
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Menu

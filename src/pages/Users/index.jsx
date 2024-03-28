import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPencil, FaTrashCan, FaPlus } from 'react-icons/fa6'
import { get } from './services/users.service'

function Users () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const res = await get()
      setUsers(res.data)
    } catch (error) {}
  }

  return (
    <div>
      <div className='flex justify-between mb-3'>
        <h2 className='text-xl font-semibold'>Users</h2>

        <Link to='create' className='bg-slate-800 flex justify-center items-center gap-2 text-white font-semibold rounded-lg py-1 px-4 hover:bg-slate-900 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'>
          <FaPlus /> Add User
        </Link>
      </div>

      <div className=''>
        <table className='table-auto border-separate border-spacing-2 -mx-2'>
          <thead className='text-left'>
            <tr>
              <th className='bg-white rounded-lg px-4 py-2 w-1/4'>Username</th>
              <th className='bg-white rounded-lg px-4 py-2 w-2/4'>Email</th>
              <th className='bg-white rounded-lg px-4 py-2 w-1/4'>Role</th>
              <th className='bg-white rounded-lg px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.username}>
                <td className='px-4 py-1'>{user.username}</td>
                <td className='px-4 py-1'>{user.email}</td>
                <td className='px-4 py-1'>{
                  user.role === 'ADMIN_ROLE'
                    ? (<span className='bg-green-600 text-sm text-white font-semibold py-0.5 px-2 rounded-lg'>Admin</span>)
                    : (<span className='bg-blue-600 text-sm text-white font-semibold py-0.5 px-2 rounded-lg'>User</span>)
                }
                </td>
                <td className='px-4 py-1 flex gap-2'>
                  <Link to={`edit/${user.username}`} aria-label='Edit' className='text-center p-2 rounded-lg transition-colors hover:bg-slate-200'>
                    <FaPencil />
                  </Link>
                  <button aria-label='Delete' className='text-center text-rose-600 p-2 rounded-lg transition-colors hover:bg-rose-200'>
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users

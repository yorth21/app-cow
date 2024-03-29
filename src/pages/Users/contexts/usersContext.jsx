import { createContext, useEffect, useState } from 'react'
import { deleteUser, getAllUsers, updateUser } from '../services/users.service'
import toast from 'react-hot-toast'

const UsersContext = createContext()

function UsersProvider ({ children }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const res = await getAllUsers()
      setUsers(res.data)
    } catch (error) {}
  }

  const getUserByUsername = async (username) => {
    try {
      console.log('getUserByUsername', username)
      // const user = users.find(user => user.username === username)
      // return user
    } catch (error) {}
  }

  const putUser = async (user) => {
    try {
      const res = await updateUser(user.username, user)
      toast.success(res.data.message)
      getUsers()
    } catch (error) {}
  }

  const delUser = async (username) => {
    try {
      const res = await deleteUser(username)
      toast.success(res.data.message)
      getUsers()
    } catch (error) {}
  }

  return (
    <UsersContext.Provider value={{
      users,
      getUsers,
      getUserByUsername,
      putUser,
      delUser
    }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export { UsersContext, UsersProvider }

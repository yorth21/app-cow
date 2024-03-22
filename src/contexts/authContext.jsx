import { createContext, useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'
import { authLogin } from '@/services/auth.service'

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const [token, setToken] = useLocalStorage('token', '')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = async (credentials) => {
    setLoading(true)
    try {
      const res = await authLogin(credentials)
      setUser(credentials.username)
      setToken(res.data.token)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setToken('')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }

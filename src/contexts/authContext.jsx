import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'
import { authLogin, authReconnect } from '@/services/auth.service'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import LoadingPage from '@/components/LoadingPage'

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const navigate = useNavigate()
  const [token, setToken] = useLocalStorage('token', '')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    reconnect()
  }, [])

  const reconnect = async () => {
    if (!token) return logout()

    setLoading(true)
    try {
      const res = await authReconnect()
      setUser(res.data.username)
      setToken(res.data.token)
    } catch (error) {
      toast.error('Session expired, please login again.')
      logout()
    } finally {
      setLoading(false)
    }
  }

  const login = async (credentials) => {
    try {
      const res = await authLogin(credentials)
      setUser(credentials.username)
      setToken(res.data.token)
      navigate('/')
    } catch (error) {}
  }

  const logout = () => {
    setToken('')
    setUser(null)
  }

  if (loading && user === null) return <LoadingPage />

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }

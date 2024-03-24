import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'
import { authLogin, authReconnect } from '@/services/auth.service'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const navigate = useNavigate()
  const [token, setToken] = useLocalStorage('token', '')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (token) reconnect()
  }, [])

  const reconnect = async () => {
    setLoading(true)
    try {
      const res = await authReconnect()
      setUser(res.data.username)
      setToken(res.data.token)
    } catch (error) {
      logout()
      console.error('Error reconnecting user.')
    } finally {
      setLoading(false)
    }
  }

  const login = async (credentials) => {
    setLoading(true)
    try {
      const res = await authLogin(credentials)
      setUser(credentials.username)
      setToken(res.data.token)
      navigate('/')
    } catch (error) {
      console.log('Error logging in.')
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setToken('')
    setUser(null)
  }

  if (loading) return <h1>Loading...</h1>

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

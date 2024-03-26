import { BrowserRouter, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import renderRoutes from './routes'
import { AuthProvider } from '@/contexts/authContext'
import { AxiosInterceptor } from './interceptors/axios.interceptor'

function App () {
  AxiosInterceptor()

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

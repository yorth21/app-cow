import { HashRouter, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import renderRoutes from './routes'
import { AuthProvider } from '@/contexts/authContext'

function App () {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </AuthProvider>
    </HashRouter>
  )
}

export default App

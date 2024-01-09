import { HashRouter, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import renderRoutes from './routes'

function App () {
  return (
    <HashRouter>
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </HashRouter>
  )
}

export default App

import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | Pizzashop' />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
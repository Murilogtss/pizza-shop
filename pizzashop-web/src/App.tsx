import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from './components/ui/sonner'

function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | Pizzashop' />
      <RouterProvider router={router} />
      <Toaster richColors />
    </HelmetProvider>
  )
}

export default App
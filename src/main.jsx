import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainLayout from './layouts/MainLayout.jsx'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

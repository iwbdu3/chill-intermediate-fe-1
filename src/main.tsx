import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './ui/pages/Login.tsx'
import Register from './ui/pages/Register.tsx'
import Home from './ui/pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {index: true, Component: Home},
    ]
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/register',
    Component: Register,
  },
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)

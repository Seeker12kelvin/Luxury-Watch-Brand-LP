import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Not Found</div>
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default routes
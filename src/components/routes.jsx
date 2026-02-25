import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import DetailsPage from '../Details Page/DetailsPage'
import PrivateListForm from '../pages/Private List/PrivateListForm'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Not Found</div>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/details-page',
    element: <DetailsPage />
  },
  {
    path: 'private-list',
    element: <PrivateListForm />
  }
])

export default routes
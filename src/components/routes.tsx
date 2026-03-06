import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import { createBrowserRouter } from 'react-router-dom'
import DetailsPage from '../pages/Details Page/DetailsPage'
import PrivateListForm from '../pages/Private List/PrivateListForm'

const routes: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
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
    path: '/private-list',
    element: <PrivateListForm />
  }
])

export default routes
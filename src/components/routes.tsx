import Home from '../pages/Home/Home'
import { createBrowserRouter } from 'react-router-dom'
import DetailsPage from '../pages/Details Page/DetailsPage'

const routes: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Not Found</div>
  },
  {
    path: '/details-page',
    element: <DetailsPage />
  }
])

export default routes
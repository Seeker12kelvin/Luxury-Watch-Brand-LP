import { RouterProvider } from 'react-router-dom'
import routes from './components/routes'
import UserContext from './components/userContext'
import { useState } from 'react'
import SmoothScroll from './components/SmoothScroll'

function App() {

  const [displayProgress, setDisplayProgress] = useState(0)

  return (
    <>
      <UserContext.Provider value={{ displayProgress, setDisplayProgress }}>
        {/* You can set the user context value here */}
        <SmoothScroll>
          <RouterProvider router={routes}/>
        </SmoothScroll>
      </UserContext.Provider>
    </>
  )
}

export default App

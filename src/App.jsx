import { RouterProvider } from 'react-router-dom'
import routes from './components/routes'
import UserContext from './components/userContext'
import { useState } from 'react'
import SmoothScroll from './components/SmoothScroll'

function App() {

  const [displayProgress, setDisplayProgress] = useState(0)
  const [opacity, setOpacity] = useState(1)

  if (displayProgress >= 100 && opacity > 0) {
    setTimeout(() => {
      setOpacity(0)
    }, 500)
  }

  return (
    <>
      <UserContext.Provider value={{ displayProgress, setDisplayProgress, opacity }}>
        {/* You can set the user context value here */}

        <RouterProvider router={routes}/>

      </UserContext.Provider>
    </>
  )
}

export default App

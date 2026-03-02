import { JSX, useState } from 'react'
import routes from './components/routes'
import { RouterProvider } from 'react-router-dom'
import UserContext from './components/userContext'

function App(): JSX.Element {

  const [displayProgress, setDisplayProgress] = useState<number>(0)
  const [opacity, setOpacity] = useState<number>(1)

  if (displayProgress >= 100 && opacity > 0) {
    setTimeout(() => {
      setOpacity(0)
    }, 500)
  }

  return (
    <>
      <UserContext.Provider value={{ displayProgress, setDisplayProgress, opacity }}>

        <RouterProvider router={routes}/>

      </UserContext.Provider>
    </>
  )
}

export default App

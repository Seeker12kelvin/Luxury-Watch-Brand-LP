import { JSX, useRef, useState } from 'react'
import routes from './components/routes'
import { RouterProvider } from 'react-router-dom'
import UserContext from './components/userContext'
import LoadingScreen from './components/LoadingScreen'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

function App(): JSX.Element {

  const [displayProgress, setDisplayProgress] = useState<number>(0)
  
  const [opacity, setOpacity] = useState<number>(1)

  const [selectedImage, setSelectedImage] = useState<string | undefined>('')

  const [modal, setModal] = useState<boolean>(false)

  const [contactModal, setContactModal] = useState<boolean>(false)

  if (displayProgress >= 100 && opacity > 0) {
    setTimeout(() => {
      setOpacity(0)
    }, 500)
  }

  function payUp(image : string | undefined): void {
    setSelectedImage(image)
    setModal(true)
  }

  const sectionRef = useRef<HTMLElement | null>(null)

  const handleScrolling = (): void => {
    sectionRef.current?.scrollIntoView({behavior: 'smooth'})
  }


  return (
      <UserContext.Provider value={{ 
        displayProgress,
        setDisplayProgress,
        opacity,
        selectedImage,
        setSelectedImage,
        payUp,
        modal,
        setModal,
        contactModal,
        setContactModal,
        handleScrolling,
        sectionRef,
      }}>

        {displayProgress < 100
        ?
        <LoadingScreen />
        :
        <RouterProvider router={routes}/>}

      </UserContext.Provider>
  )
}

export default App

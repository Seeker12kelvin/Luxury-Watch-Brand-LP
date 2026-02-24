import React, { useContext } from 'react'
import HeroSection from '../Hero Section/HeroSection'
import SlideShowSection from '../Slide Show Section/SlideShowSection'
import NewestWatchSection from '../Newest Watch Section/NewestWatchSection'
import BestSellerSection from '../Best Seller Section/BestSellerSection'
import ShowCaseSection from '../Show Case Section/ShowCaseSection'
import Footer from '../Footer/Footer'
import ImageGallery from '../Image Gallery/ImageGallery'
import LoadingScreen from '../../components/LoadingScreen'
import UserContext from '../../components/userContext'

const Home = () => {

  const { displayProgress } = useContext(UserContext)

  return (
      displayProgress < 100
      ? 
      <LoadingScreen /> 
      :
      <main className='h-full flex flex-col items-center w-full'>
        <HeroSection />
        
        <SlideShowSection />
        
        <NewestWatchSection />
        
        <BestSellerSection />
        
        <ShowCaseSection />

        <ImageGallery />

        <Footer />
      </main>
  )
}

export default Home
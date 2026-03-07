import Footer from '../Footer/Footer';
import React, { JSX, useContext } from 'react';
import HeroSection from '../Hero Section/HeroSection';
import UserContext from '../../components/userContext';
import { AnimatePresence, motion } from 'framer-motion';
import ImageGallery from '../Image Gallery/ImageGallery';
import LoadingScreen from '../../components/LoadingScreen';
import PrivateListForm from '../Private List/PrivateListForm';
import ShowCaseSection from '../Show Case Section/ShowCaseSection';
import SlideShowSection from '../Slide Show Section/SlideShowSection';
import BestSellerSection from '../Best Seller Section/BestSellerSection';
import NewestWatchSection from '../Newest Watch Section/NewestWatchSection';

const Home = (): JSX.Element | null => {

  const context = useContext(UserContext)
  if(!context){
    return null
  }
  const { modal, displayProgress } = context


  return (
      displayProgress < 100
      ?
      <LoadingScreen />
      :
      <main className='h-full flex flex-col items-center w-full justify-self-center'>
        <AnimatePresence mode="wait">
          {modal && <PrivateListForm />}
        </AnimatePresence>
        
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

import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import HeroSection from '../Hero Section/HeroSection';
import UserContext from '../../components/userContext';
import ImageGallery from '../Image Gallery/ImageGallery';
import LoadingScreen from '../../components/LoadingScreen';
import ShowCaseSection from '../Show Case Section/ShowCaseSection';
import SlideShowSection from '../Slide Show Section/SlideShowSection';
import BestSellerSection from '../Best Seller Section/BestSellerSection';
import NewestWatchSection from '../Newest Watch Section/NewestWatchSection';

const Home = () => {

  const { displayProgress } = useContext(UserContext)

  return (
      displayProgress < 100
      ?
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 3.5, delay: 0, ease: 'easeIn' }}
      >
        <LoadingScreen />
      </motion.div>
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
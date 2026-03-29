import Footer from '../Footer/Footer';
import { JSX, useContext } from 'react';
import HeroSection from '../Hero Section/HeroSection';
import UserContext from '../../components/userContext';
import { AnimatePresence, motion } from 'framer-motion';
import ImageGallery from '../Image Gallery/ImageGallery';
import PrivateListForm from '../Private List/PrivateListForm';
import ContactRvysion from '../Contact Rvysion/ContactRvysion';
import ShowCaseSection from '../Show Case Section/ShowCaseSection';
import SlideShowSection from '../Slide Show Section/SlideShowSection';
import BestSellerSection from '../Best Seller Section/BestSellerSection';
import NewestWatchSection from '../Newest Watch Section/NewestWatchSection';
import useWindowSize from '../../hooks/windowSize';

const Home = (): JSX.Element | null => {

  const context = useContext(UserContext)
  if(!context){
    return null
  }
  const { modal, contactModal } = context

  const { width } = useWindowSize()

  return (
      <main className=''>
        <AnimatePresence mode="wait">
          {modal && <PrivateListForm />}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {contactModal && <ContactRvysion />}
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

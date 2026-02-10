import { useState } from 'react'
import styles from './HeroSection.module.css'
import Header from '../../components/Header'
import HeroFooter from './Content/HeroFooter';
import VideoBackground from './Content/VideoBackground';
import HeroProductPopUp from './Content/HeroProductPopUp';
import { AnimatePresence } from 'framer-motion';
import HeroInfo from './Content/HeroInfo';

const HeroSection = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const open = () => setIsOpen(false)
  const close = () => setIsOpen(true)

  return (
    <>
      <section className={`${styles['video-background-container']}`}>
        
        <VideoBackground />

        <div 
          className={`${styles['content-overlay']} flex flex-col gap-70 px-50 pb-10 w-full h-full `}>

          <Header />

          <div className='h-full w-full flex flex-col gap-40'>
            <HeroInfo />

            <HeroFooter closeDiv={close} />
          </div>

          <AnimatePresence>
            {isOpen && <HeroProductPopUp isOpen={isOpen} open={open} />}
          </AnimatePresence>

        </div>
      </section>
    </>
  )
}

export default HeroSection
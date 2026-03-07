import { JSX, useState } from 'react';
import HeroInfo from './Content/HeroInfo';
import Header from '../../components/Header';
import styles from './HeroSection.module.css';
import HeroFooter from './Content/HeroFooter';
import { AnimatePresence } from 'framer-motion';
import VideoBackground from './Content/VideoBackground';
import HeroProductPopUp from './Content/HeroProductPopUp';

const HeroSection = (): JSX.Element => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const open: () => void = () => setIsOpen(false)
  const close: () => void = () => setIsOpen(true)

  return (
    <>
      <section className={`${styles['video-background-container']}`}>
        
        <VideoBackground />

        <div 
          className={`${styles['content-overlay']} flex flex-col gap-70 px-50 pb-10 w-full h-full max-sm:px-5 max-sm:w-screen max-sm:gap-50`}>

          <Header />

          <div className='h-full w-full flex flex-col gap-40 max-sm:h-full max-sm:justify-between max-sm:gap-60'>
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
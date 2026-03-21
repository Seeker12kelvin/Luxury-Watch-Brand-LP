import Slider from './Content/Slider';
import type { WatchItem } from '../../data';
import { watchCollection } from '../../data';
import Background from './Content/Background';
import { AnimatePresence } from 'framer-motion';
import styles from './SlideShowSection.module.css';
import useWindowSize from '../../hooks/windowSize';
import SlideShowInfo from './Content/SlideShowInfo';
import { JSX, useContext, useEffect, useState } from 'react';
import UserContext, { UserContextType } from '../../components/userContext';

const SlideShowSection = (): JSX.Element | null => {

  const [bg, setBg] = useState<WatchItem | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(-1)

  const nextSlide = () => {
    setActiveIndex(prev => prev < 0 ? 0 : (prev + 1) % watchCollection.length)
  }

  const prevSlide = () => {
    setActiveIndex(prev =>  prev <= 0 ? watchCollection.length - 1 : prev - 1)
  }

  useEffect(() => {
    function setData() {
      if (activeIndex < 0 || activeIndex >= watchCollection.length) {
        setBg(null)
      } else {
        const currentBg: WatchItem | null = watchCollection[activeIndex]
        setBg(currentBg)
      }
    }
    return setData()
  }, [activeIndex])

  const { height } = useWindowSize()

  const context = useContext<UserContextType | undefined>(UserContext)

  if(!context){
    return null
  }

  const { payUp, setSelectedImage, setModal } = context
  
  return (
    <section className={`h-245 max-sm:h-{${height} w-full overflow-hidden max-sm:w-full border bg-black relative`}>
      
      <Background bg={bg} />

      <AnimatePresence mode="wait">

        <div className={`${styles['content-overlay']} w-full h-full flex flex-col justify-between gap-8 absolute bg-linear-to-b from-[#0C0C0C] to-[#ffffff00]`}>

          <SlideShowInfo data={{bg, activeIndex, setActiveIndex, nextSlide, prevSlide, payUp, setSelectedImage, setModal}} />

          <Slider data={{activeIndex}}/>

        </div>
        
      </AnimatePresence>
      
    </section>
  )
}

export default SlideShowSection

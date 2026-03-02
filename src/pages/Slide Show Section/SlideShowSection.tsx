import Slider from './Content/Slider';
import type { WatchItem } from '../../data';
import { watchCollection } from '../../data';
import Background from './Content/Background';
import { AnimatePresence } from 'framer-motion';
import { JSX, useEffect, useState } from 'react';
import styles from './SlideShowSection.module.css';
import SlideShowInfo from './Content/SlideShowInfo';

const SlideShowSection = (): JSX.Element => {

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
        const currentBg: WatchItem = watchCollection[activeIndex]
        setBg(currentBg)
      }
    }
    return setData()
  }, [activeIndex])

  return (
    <section className='h-245 w-360 border bg-black relative'>
      
      <Background bg={bg} />

      <AnimatePresence mode="wait">

        <div className={`${styles['content-overlay']} w-full h-full flex flex-col justify-between gap-8 absolute bg-linear-to-b from-[#0C0C0C] to-[#ffffff00]`}>

          <SlideShowInfo data={{bg, activeIndex, setActiveIndex, nextSlide, prevSlide}} />

          <Slider data={{activeIndex}}/>

        </div>
        
      </AnimatePresence>
      
    </section>
  )
}

export default SlideShowSection

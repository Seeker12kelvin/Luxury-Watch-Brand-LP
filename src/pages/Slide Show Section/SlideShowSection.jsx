import React, { use, useEffect, useState } from 'react'
import { watchCollection } from '../../data'
import styles from './SlideShowContent.module.css'
import Background from './Content/Background'
import SlideShowInfo from './Content/SlideShowInfo'
import Slider from './Content/Slider'
import { AnimatePresence } from 'framer-motion'

const SlideShowSection = () => {

  const [bg, setBg] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)

  const nextSlide = () => {
    setActiveIndex(prev => prev > watchCollection.length - 1 ? 0 : prev + 1)
  }

  const prevSlide = () => {
    setActiveIndex(prev =>  prev - 1 < 0 ? watchCollection.length - 1 : prev - 1)
    setBg(watchCollection[activeIndex - 1] || watchCollection[watchCollection.length - 1])
  }

  useEffect(() => {
    function setData() {
      setBg(watchCollection[activeIndex] || watchCollection[0])
    }
    return setData()
  }, [activeIndex])

  return (
    <section className='h-245 w-full border bg-black relative'>
      
      <Background bg={bg} />

      <AnimatePresence mode="wait">
        <div className={`${styles['content-overlay']} overflow-hidden w-full h-full flex flex-col justify-between gap-8 absolute bg-linear-to-b from-[#0C0C0C] to-[#ffffff00]`}>
          <SlideShowInfo data={{bg, activeIndex, setActiveIndex, nextSlide, prevSlide}} />

          <Slider data={{activeIndex}}/>
        </div>
      </AnimatePresence>
      
    </section>
  )
}

export default SlideShowSection
import { useState } from 'react';
import { motion } from 'framer-motion';
import { imageGalleryInfo } from '../../../data';
import bg_dark_blue_brantium from '../../../images/Second-Slider-Dark-Blue.png';

const SecondSlide = () => {
  const [bg, setBg] = useState(
    {
      color: '#285F97',
      backgroundImage: bg_dark_blue_brantium,
      header: 'CHRONOGRAPH',
      description: 'A precision-engineered steel chronograph that combines bold style with modern sport-luxury. Featuring robust Swiss movements and brushed steel design, it is perfect for making a confident statement.',
      price: '$6,849.99'
    }
  )
  
  const buttons = [
    {buttons: '#285F97'},
    {buttons: '#146B40'},
    {buttons: '#000'}
  ]

  const handleBgInfo = (color) => {
    const getInfo = imageGalleryInfo.find(data => data.color == color)
    setBg(getInfo)
  }

  const textVariants = {
    initial: {
      clipPath: 'inset(0 0 100% 0)',
      opacity: 0,
      y: 20
    },
    animate: {
      clipPath: 'inset(0 0 0% 0)',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    },
    exit: {
      clipPath: 'inset(100% 0 0 0)',
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6 * 0.7,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div
      className='h-full w-1/2 relative overflow-hidden flex'>

      <img src={bg?.backgroundImage} className='absolute z-10 h-281.25 aspect-167/181 object-cover' />

      <div className='absolute z-20 h-[79%] top-1/10 left-[10%] flex flex-col justify-between self-stretch text-[#FFF]'>

        <div className='flex flex-col gap-2.5'>

          <motion.h1
            key={`${bg?.color}1-badge`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
            className='text-[64px] font-semibold leading-16 tracking-[-0.04rem]'>
              THE <br/> {bg?.header}
          </motion.h1>

          <motion.p
            key={`${bg?.color}2-badge`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
            className='text-[1rem] max-w-150 w-112.5 font-light leading-[1.3rem] tracking-[-0.02rem]'>
            {bg?.description}
          </motion.p>

        </div>

        <div className='flex flex-col gap-8'>

          <div className='flex gap-4 items-center'>

            {buttons.map((data, index) => (
              <button
                key={index}
                onClick={() => handleBgInfo(data.buttons)} 
                className={`w-6 h-6 ${bg?.color === data.buttons ? 'border-2 border-white' : ''} rounded-full`}
                style={{backgroundColor: data.buttons}}>
              </button>
            ))}

          </div>

          <motion.h3
            key={`${bg?.color}3-badge`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
            className='text-[64px] font-semibold leading-16 tracking-[-0.04rem]'>
              {bg?.price}
          </motion.h3>

        </div>
      </div>
    </div>
  )
}

export default SecondSlide
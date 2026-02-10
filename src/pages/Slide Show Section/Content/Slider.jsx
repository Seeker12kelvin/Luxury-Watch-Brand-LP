import React from 'react'
import { motion } from 'framer-motion'
import { watchCollection } from '../../../data'

const Slider = ({data}) => {

  const { activeIndex } = data
  const buttonWidth = 400
  const divWidth =  watchCollection.length * buttonWidth

  function widthOfDiv() {
    const offset = activeIndex * buttonWidth; // Calculate the offset based on the active index
    const finalOffset = Math.min(1440, offset)

    

    return `-${finalOffset}px`; // Return the negative finalOffset to move the div left
  }

  return (
    <motion.div
      initial={{opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className='flex items-center relative h-fit overflow-hidden'
      style={{
        width: divWidth
      }}>
      
      <motion.div
        animate={{  }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`border-[0.875rem] border-[#FFFFFF1A] w-100 h-full z-10 absolute`}>

      </motion.div>


      {watchCollection.map(data => (
        <motion.button
          animate={{ x: widthOfDiv() }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          key={data.id}
          className='h-100 w-100'>
          <img
            src={data.img}
            alt={`A picture of ${data.title}`}
            className='h-full w-full object-cover' />
        </motion.button>
      ))}
    </motion.div>
  )
}

export default Slider
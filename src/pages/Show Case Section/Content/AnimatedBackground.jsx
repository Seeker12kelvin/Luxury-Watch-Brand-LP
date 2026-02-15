import React from 'react'
import { motion } from 'framer-motion'
import fill_background from '../../../images/Fill-Background.svg'

const AnimatedBackground = ({controls}) => {

  const animatedBackground = {
    hidden: {
      y: '100%',
    },

    show: {
      y: 0,
      transition: {
        duration: 5,
        ease: 'easeIn',
      }
    }
  }

  return (
    <motion.img
      variants={animatedBackground}
      initial='hidden'
      animate={controls}
      className='absolute bottom-0 w-full bg-white z-10 rounded-t-full'
      src={fill_background}

      
    />
  )
}

export default AnimatedBackground
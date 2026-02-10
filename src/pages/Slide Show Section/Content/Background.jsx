import React from 'react'
import { motion } from 'framer-motion'
import styles from '../SlideShowContent.module.css'

const Background = ({bg}) => {

  const backgroundAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeIn'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6 * 0.7,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.div
      key={`${bg?.id}-background`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={backgroundAnimation}
      transition={{ delay: 2, duration: 1.6 }}
      className={`${styles['video-element']} bg-black text-white`}
      style={bg ? { 
        backgroundImage: `url(${bg.img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}
        :
        {}
      }
    >
    </motion.div>
  )
}

export default Background
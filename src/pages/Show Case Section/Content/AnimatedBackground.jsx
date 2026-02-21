import React from 'react'
import { motion, useTransform } from 'framer-motion'
import fill_background from '../../../images/Fill-Background.svg'

const AnimatedBackground = ({scrollYProgress}) => {

  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1000;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  )

  return (
    <motion.img
      style={{translateY: y}}
      className='absolute left-0 right-0 bottom-0 w-full mix-blend-difference bg-blac z-[-1] rounded-t-full'
      src={fill_background}

      
    />
  )
}

export default AnimatedBackground
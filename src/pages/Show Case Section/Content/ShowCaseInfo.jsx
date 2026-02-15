import React from 'react'
import Dark_Watch from '../../../images/Dark-Watch.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { motion, scale } from 'framer-motion'

const ShowCaseInfo = ({controls}) => {

  const textAnim = {
    hidden: {
      y: 100,
      clipPath: "inset(0 0 100% 0)",
      color: "#000",
    },
    show: {
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      color: "#000",
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
    // invert: {
    //   color: "#fff",
    //   transition: {
    //     duration: 1,
    //     ease: "easeInOut",
    //   },
    // },
  }

  const darkWatch = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: 'easeIn',
      },
    },
  }

  const appearBtn = {
    hidden: {
      opacity: 0
    },
    appear: {
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: 'easeIn',
      }
    }
  }

  return (
    <div className='py-25 px-50 w-full h-full flex flex-col justify-between items-center bg-white'>

      <div className='h-full w-full relative'>

        <div className='w-full uppercase text-[8.75rem] text-center font-semibold leading-35 tracking-[-0.0875rem] z-10'>
          <motion.h1
            variants={textAnim}
            initial='hidden'
            animate={controls}>
            Crafted with
          </motion.h1>
          
          <motion.h1
            variants={textAnim}
            initial='hidden'
            animate={controls}>
            precision
          </motion.h1>
        </div>

        <motion.img
          variants={darkWatch}
          initial='hidden'
          animate={controls}
          className='h-202.5 w-360 absolute object-cover aspect-video -mt-32 z-20'
          src={Dark_Watch}
          alt='Picture of a wrist watch'
        />
      
      </div>

      <motion.div
        variants={appearBtn}
        initial='hidden'
        animate={controls}
        className='flex items-center gap-1'>

        <button
          className='uppercase bg-black py-2.5 px-3.5 text-white'>
          add to watchlist
        </button>

        <button
          className='bg-black flex items-center justify-center h-full w-10.5 text-white'>

          <IoIosArrowRoundForward 
            className='w-6 h-6 shrink-0'
          />

        </button>

      </motion.div>

    </div>
  )
}

export default ShowCaseInfo
import React from 'react'
import Dark_Watch from '../../../images/Dark-Watch.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { motion, scale } from 'framer-motion'

const ShowCaseInfo = ({controls}) => {

  const textAnim = {
    hidden: {
      y: 100,
      clipPath: "inset(0 0 100% 0)",
    },
    show: {
      y: 0,
      clipPath: "inset(0 0 0% 0)",
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
    <div className='py-25 px-50 w-full h-full flex flex-col justify-between items-center z-20 absolute mix-blend-difference bg-white top-0'>

      <div className='h-full w-full relative text-black bg-transparent'>

        <div className='w-full uppercase text-[8.75rem] text-center font-semibold leading-35 tracking-[-0.0875rem] z-30 bg-transparent'>
          <motion.h1
            variants={textAnim}
            initial='hidden'
            animate={controls}
            className=''>
            Crafted with
          </motion.h1>
          
          <motion.h1
            variants={textAnim}
            initial='hidden'
            animate={controls}
            className=''>
            precision
          </motion.h1>
        </div>

        <motion.img
          variants={darkWatch}
          initial='hidden'
          animate={controls}
          className='h-202.5 w-360 absolute object-cover aspect-video -mt-30 z-40'
          src={Dark_Watch}
          alt='Picture of a wrist watch'
        />
      
      </div>

      <div
        className='flex items-center gap-1 mix-blend-difference text-black bg-transparent'>

        <motion.button
          variants={appearBtn}
          initial='hidden'
          animate={controls}
          className='uppercase bg-white py-2.5 px-3.5'>
          add to watchlist
        </motion.button>

        <motion.button
          variants={appearBtn}
          initial='hidden'
          animate={controls}
          className='bg-white flex items-center justify-center h-full w-10.5'>

          <IoIosArrowRoundForward 
            className='w-6 h-6 shrink-0'
          />

        </motion.button>

      </div>

    </div>
  )
}

export default ShowCaseInfo
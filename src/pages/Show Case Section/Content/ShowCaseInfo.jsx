import React from 'react'
import Dark_Watch from '../../../images/Dark-Watch.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { motion, scale, useTransform } from 'framer-motion'

const ShowCaseInfo = ({scrollYProgress}) => {
  
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 0.2],
    [100, 0]
  )

  const watchScale = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, 1]
  )

  return (
    <div className='w-full h-full flex flex-col justify-between gap-21.25 items-center mix-blend-difference text-white'>

      <div className='h-237.5 w-full relative'>

        <div className='w-full uppercase text-[8.75rem] text-center font-semibold leading-35 tracking-[-0.0875rem]'>
          <motion.h1
            style={{clipPath, y}}
            className='mix-blend-difference text-white'>
            Crafted with
          </motion.h1>
          
          <motion.h1
            style={{clipPath, y}}
            className='mix-blend-difference text-white'>
            precision
          </motion.h1>
        </div>

        <motion.img
          style={{scale: watchScale, opacity: watchScale}}
          className='absolute h-202.5 w-360 object-cover top-40'
          src={Dark_Watch}
          alt='Picture of a wrist watch'
        />
      
      </div>

      <div
        className='flex items-center gap-1 mix-blend-difference text-black'>

        <motion.button
          style={{opacity: watchScale}}
          className='uppercase bg-white h-9.5 py-2.5 px-3.5'>
          add to watchlist
        </motion.button>

        <motion.button
          style={{opacity: watchScale}}
          className='bg-white flex items-center justify-center h-9.5 w-10.5'>

          <IoIosArrowRoundForward 
            className='w-6 h-6 shrink-0'
          />

        </motion.button>

      </div>

    </div>
  )
}

export default ShowCaseInfo
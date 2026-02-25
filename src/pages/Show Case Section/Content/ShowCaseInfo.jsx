import React from 'react'
import Dark_Watch from '../../../images/Dark-Watch.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { motion, scale, useTransform } from 'framer-motion'

const ShowCaseInfo = ({scrollYProgress, setBg}) => {
  
  const firstTextClip = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.45],
    [
      "inset(0 0 100% 0)", 
      "inset(0 0 0% 0)",   
      "inset(0 0 0% 0)",   
      "inset(100% 0 0 0)" 
    ]
  )

  const secondTextClip = useTransform(
    scrollYProgress,
    [0.45, 0.65, 0.7],
    [
      "inset(0 0 100% 0)", 
      "inset(0 0 0% 0)", 
      "inset(100% 0 0 0)"    
    ]
  )

  const thirdTextClip = useTransform(
    scrollYProgress,
    [0.7, 0.8, 1],
    [
      "inset(0 0 100% 0)", 
      "inset(0 0 0% 0)", 
      "inset(0 0 0% 0)"    
    ]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 0.35, 0.45],
    [100, 0, -280]
  )

  const secondY = useTransform(
    scrollYProgress,
    [0.1, 0.45, 0.55],
    [100, 0, -280]
  )

  const thirdY = useTransform(
    scrollYProgress,
    [0.2, 0.55, 0.65],
    [100, 0, -280]
  )

  const watchScale = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, 1]
  )

  return (
    <div className='w-full h-full flex flex-col justify-between gap-21.25 items-center mix-blend-difference text-white'>

      <div className='h-237.5 w-full relative'>

        <div className='w-full overflow-hidden uppercase text-[8.75rem] text-center font-semibold leading-35 tracking-[-0.0875rem]'>
          <motion.h1
            style={{clipPath: firstTextClip}}
            className='mix-blend-difference text-white'>
            Crafted with
          </motion.h1>
          
          <motion.h1
            style={{clipPath: firstTextClip}}
            className='mix-blend-difference text-white'>
            precision
          </motion.h1>
          
          <motion.div
            style={{ clipPath: firstTextClip }}
            className="absolute inset-0"
          >
            <h1>Crafted with</h1>
            <h1>precision</h1>
          </motion.div>
          
          <motion.div
            style={{ clipPath: secondTextClip }}
            className="absolute inset-0"
          >
            <h1>Brantium</h1>
            <h1>Argent Prime</h1>
          </motion.div>

          <motion.div
            style={{ clipPath: thirdTextClip }}
            className="absolute inset-0"
          >
            <h1>$94,499.99</h1>
          </motion.div>
        </div>

        <motion.img
          style={{scale: watchScale, opacity: watchScale}}
          className='absolute h-202.5 w-360 object-cover top-40'
          src={Dark_Watch}
          alt='Picture of a wrist watch'
        />
      
      </div>

      <div className='gap-2 bg-[#FFFFFF1A] p-1.5 rounded-[2.5rem] flex items-center'>
        <button onClick={() => setBg("white")} className='h-6 w-6 bg-white rounded-full'></button>
        <button onClick={() => setBg("black")} className='h-6 w-6 bg-black rounded-full'></button>
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
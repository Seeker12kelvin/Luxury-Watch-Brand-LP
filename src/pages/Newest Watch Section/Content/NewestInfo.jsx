import React from 'react'
import NewReleaseBadge from '../../../components/NewReleaseDiv'
import { motion, useTransform } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'
import { IoIosArrowRoundForward } from 'react-icons/io'


const NewestInfo = ({scrollYProgress}) => {

  const date = new Date().getFullYear()

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]
  )

  return (
    <div className='flex flex-col justify-between z-20 gap-145 mix-blend-difference bg-transparent'>
      <div className='flex flex-col items-start self-stretch gap-2.5'>

        <motion.div style={{clipPath}}>
          <NewReleaseBadge text={`${date} RELEASE`} textColor={'black'} borderColor={'black'} />
        </motion.div>

        <motion.h1
          style={{clipPath}}
          className='uppercase text-[4rem] text-white font-semibold not-italic leading-[4.8rem] w-260'>
          The Brantium Grand
        </motion.h1>

        <motion.h1
          style={{clipPath}}
          className='uppercase text-[4rem] text-white font-semibold not-italic leading-[4.8rem] w-260'>
          Complication No. 1
        </motion.h1>

        <motion.p
          style={{clipPath}}
          className='w-155 self-stretch text-[1rem] text-white font-light not-italic leading-[1.3rem] tracking-[-0.02rem]'>
          An ultra-exclusive mechanical masterpiece engineered for elite collectors and long-term investors. Hand-assembled, individually numbered, and produced in strictly limited quantities.
        </motion.p>

      </div>
      
      <motion.p
        style={{clipPath}}
        className='w-155 text-white self-stretch text-[1rem] font-light not-italic leading-[1.3rem] tracking-[-0.02rem]'>
        Featuring a Swiss high-complication automatic movement, precious metal casework, and exhibition finishing reserved for haute horlogerie ateliers. Designed as a generational collector’s asset.
      </motion.p>
    </div>
  )
}

export default NewestInfo
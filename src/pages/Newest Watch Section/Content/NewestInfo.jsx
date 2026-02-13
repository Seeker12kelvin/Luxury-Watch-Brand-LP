import React from 'react'
import NewReleaseBadge from '../../../components/NewReleaseDiv'
import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'
import { IoIosArrowRoundForward } from 'react-icons/io'


const NewestInfo = ({controls}) => {

  const date = new Date().getFullYear()

  const textVariants = {
    hidden: {
      clipPath: "inset(0 0 100% 0)",
      color: "#000",
    },
    show: {
      clipPath: "inset(0 0 0% 0)",
      color: "#000",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
    invert: {
      color: "#fff",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className='flex flex-col justify-between relative z-20 gap-130'>
      <div className='flex flex-col items-start self-stretch gap-2.5'>

        <NewReleaseBadge text={`${date} RELEASE`} textColor={'black'} borderColor={'black'} />

        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className='uppercase text-[4rem] text-black mix-blend-difference font-semibold not-italic leading-[4.8rem] w-260'>
          The Brantium Grand <br/> Complication No. 1
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className='w-155 self-stretch text-[1rem] text-black mix-blend-difference font-light not-italic leading-[1.3rem] tracking-[-0.02rem]'>
          An ultra-exclusive mechanical masterpiece engineered for elite collectors and long-term investors. Hand-assembled, individually numbered, and produced in strictly limited quantities.
        </motion.p>

      </div>
      
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate={controls}
        className='w-155 text-black mix-blend-difference self-stretch text-[1rem] font-light not-italic leading-[1.3rem] tracking-[-0.02rem]'>
        Featuring a Swiss high-complication automatic movement, precious metal casework, and exhibition finishing reserved for haute horlogerie ateliers. Designed as a generational collector’s asset.
      </motion.p>
    </div>
  )
}

export default NewestInfo
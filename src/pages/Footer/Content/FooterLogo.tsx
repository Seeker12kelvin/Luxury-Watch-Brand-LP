import React, { JSX } from 'react'
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Comp_Logo from '../../../images/Footer-Logo-Container.svg';

const FooterLogo = (): JSX.Element => {
  return (
    <div className='w-full h-[276.28px] max-[481px]:h-50 flex flex-col gap-10 items-center justify-end'>
    
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 1.2, ease: 'easeIn'}}}
        viewport={{once: true}}
        className='flex items-center gap-2.5'>

        <div className='py-2 px-4.5 rounded-[20px] bg-[#FFFFFF1A] flex items-center gap-2.5 w-fit text-[#FFFFFF]'>
          <p className='font-light'>Built by</p>
          <IoIosArrowRoundForward className='font-light text-[#FFF]' />
        </div>

        <img
          className='w-28.75 h-10'
          src={Comp_Logo} 
          alt='Rvysion Logo' />

      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 1.2, ease: 'easeIn'}}}
        viewport={{once: true}}
        className='flex items-center h-53.5 gap-2 w-full justify-center'>

        <motion.h1
          initial={{scale: 1}}
          whileHover={{scale: 1.1}}
          className='text-[20vw] font-light tracking-[-0.32px] text-[#181818]'>
          B
        </motion.h1>

        <motion.h1
          initial={{scale: 1}}
          whileHover={{scale: 1.1}}
          className='text-[20vw] font-light tracking-[-0.32px] text-[#181818]'>
          R
        </motion.h1>

        <motion.h1
          initial={{scale: 1}}
          whileHover={{scale: 1.1}}
          className='text-[20vw] font-light tracking-[-0.32px] text-[#181818]'>
          A
        </motion.h1>

        <motion.h1
          initial={{scale: 1}}
          whileHover={{scale: 1.1}}
          className='text-[20vw] font-light tracking-[-0.32px] text-[#181818]'>
          N
        </motion.h1>

        <motion.h1
          initial={{scale: 1}}
          whileHover={{scale: 1.1}}
          className='text-[20vw] font-light tracking-[-0.32px] text-[#181818]'>
          T
        </motion.h1>

        <motion.h1
          initial={{scale: 1}}
          whileHover={{scale: 1.1}}
          className='text-[20vw] font-light tracking-[-0.32px] text-[#181818]'>
          I
        </motion.h1>

        <motion.h1
          initial={{scale: 1}}
          whileHover={{scale: 1.1}}
          className='text-[20vw] font-light tracking-[-0.32px] text-[#181818]'>
          U
        </motion.h1>

        <motion.h1
          initial={{scale: 1}}
          whileHover={{scale: 1.1}}
          className='text-[20vw] font-light tracking-[-0.32px] text-[#181818]'>
          M
        </motion.h1>

      </motion.div>

    </div>
  )
}

export default FooterLogo
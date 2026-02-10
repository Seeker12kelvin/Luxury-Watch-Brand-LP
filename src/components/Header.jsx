import React from 'react'
import Logo_Icon from '../assets/Subtract-Icon.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import styles from './Header.module.css'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.nav
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.6}}
      className='flex w-full py-3 justify-between items-center'>
        <div className='flex justify-center items-center gap-2 text-sm'>
          <img 
            className='h-5' 
            src={Logo_Icon} 
            alt='Logo'
          />
          <span className={`${styles['nav-logo']}`}>BRANTIUM</span>
        </div>

      <div className='flex gap-1 items-center'>
        <button 
          className='bg-[#FEFEFE] text-[#111111] text-sm py-2.5 px-3.5'>
            JOIN THE WAITLIST
        </button>
        <button
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 2, ease: 'easeIn' }}
          className='bg-[#FEFEFE] flex items-center h-full w-fit text-[#111111] text-sm py-3 px-3.5'>
          <IoIosArrowRoundForward className='h-full w-full scale-150' />
        </button>
      </div>
    </motion.nav>
  )
}

export default Header
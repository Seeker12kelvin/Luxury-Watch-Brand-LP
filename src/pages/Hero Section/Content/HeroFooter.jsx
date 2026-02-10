import React from 'react'
import Watch_Btn from '../../../images/Watch-Button.png'
import { motion } from 'framer-motion'
import { IoIosArrowDown } from 'react-icons/io'


const HeroFooter = ({closeDiv}) => {
  return (
    <div className='w-full flex items-end justify-between'>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ delay: 2, duration: 1.6 }}
        className='flex items-center gap-2 text-sm'>
        <IoIosArrowDown />
        <p>SCROLL DOWN</p>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ delay: 3, duration: 1.6 }}
        onClick={() => closeDiv()}
        className='flex flex-col gap-4'>
        <div className={`relative inline-block h-30 w-30`}>
          <div
            className="relative px-1 py-1 text-white rounded-sm">

            <img
              className='h-30 w-30 object-cover'
              src={Watch_Btn} 
              alt='A picture of a watch' />

            <span className="absolute top-0 left-0 w-2 h-2
                              border-t border-l border-white" />

            <span className="absolute top-0 right-0 w-2 h-2
                              border-t border-r border-white" />

            <span className="absolute bottom-0 left-0 w-2 h-2
                              border-b border-l border-white" />

            <span className="absolute bottom-0 right-0 w-2 h-2
                              border-b border-r border-white" />
          </div>
        </div>

        <div className='flex justify-between items-center text-sm'>
          <span className='underline'>01</span>
          <span>$5,499.99</span>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroFooter
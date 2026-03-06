import React, { JSX } from 'react';
import { WatchItem } from '../data';
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';

type WatchListButtonProps = {
  onClick: () => void,
  bg?: WatchItem | any,
  variants?: any,
  extraStyle?: string
}

const WatchListButton = ({onClick, bg, variants, extraStyle = ''}:WatchListButtonProps): JSX.Element => {
  return (
    <div className={`flex w-full ${extraStyle} gap-1 items-center`}>

      <motion.button
        onClick={onClick}
        whileTap={{scale: 0.7, opacity: 0.7}}
        key={`${bg?.id}-join-button`}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
        exit="exit"
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={`bg-[#FEFEFE] text-[#111111] text-sm py-2.5 px-3.5 ${extraStyle}`}>
          ADD TO WATCHLIST
      </motion.button>



      <motion.button
        onClick={() => onClick()}
        whileTap={{scale: 0.7, opacity: 0.7}}
        key={`${bg?.id}-arrow-button`}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
        exit="exit"
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className='bg-[#FEFEFE] flex items-center h-fit w-fit text-[#111111] text-sm py-2 px-2'>
        <IoIosArrowRoundForward className='text-2xl' />
      </motion.button>

    </div>
  )
}

export default WatchListButton
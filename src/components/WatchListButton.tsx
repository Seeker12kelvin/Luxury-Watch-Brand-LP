import React, { JSX, useContext } from 'react';
import { WatchItem } from '../data';
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';
import UserContext, { UserContextType } from './userContext';

type WatchListButtonProps = {
  bg?: WatchItem | any,
  variants?: any,
  extraStyle?: string
}

const WatchListButton = ({bg, variants, extraStyle = ''}:WatchListButtonProps): JSX.Element => {

  const { setSelectedImage, setModal } = useContext<UserContextType | undefined>(UserContext)

  return (
    <div className={`flex ${extraStyle} gap-1 items-center`}>

      <motion.button
        onClick={():void => {
          setSelectedImage(bg)
          setModal(true)
        }}
        whileTap={{scale: 0.9, opacity: 0.9}}
        key={`man-join-button`}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
        exit="exit"
        transition={{ duration: 0.5, type: "spring", stiffness: 400, damping: 10 }}
        className={`bg-[#FEFEFE] ${extraStyle} text-[#111111] text-sm py-2.5 px-3.5`}>
          ADD TO WATCHLIST
      </motion.button>



      <motion.button
        onClick={():void => {
          setSelectedImage(bg)
          setModal(true)
        }}
        whileTap={{scale: 0.9, opacity: 0.9}}
        key={`man-arrow-button`}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
        exit="exit"
        transition={{ duration: 0.5, type: "spring", stiffness: 400, damping: 10 }}
        className='bg-[#FEFEFE] flex items-center h-fit w-fit text-[#111111] text-sm py-2 px-2'>
        <IoIosArrowRoundForward className='text-2xl' />
      </motion.button>

    </div>
  )
}

export default WatchListButton
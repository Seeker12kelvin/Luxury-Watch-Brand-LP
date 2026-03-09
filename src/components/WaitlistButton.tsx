import React, { JSX, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';
import UserContext from './userContext';

type WaitlistButtonProps = {
  variants?: any,
  extraStyling?: any,
  textColor?: any
}

const WaitlistButton = ({variants, extraStyling = 'white', textColor = '[#111111]'}: WaitlistButtonProps): JSX.Element | null => {

  const context = useContext(UserContext)
  if(!context){
    return null
  }
  const { setContactModal } = context

  return (
    <div className='flex gap-1 items-center'>
      <motion.button
        onClick={(): void => setContactModal(true)}
        whileTap={{scale: 0.9, opacity: 0.9}}
        transition={{ duration: 0.5, type: "spring", stiffness: 400, damping: 10 }}
        variants={variants}
        initial="hidden"
        animate="show"
        className={`uppercase bg-${extraStyling} text-${textColor} h-9.5 py-2.5 px-3.5`}>
          JOIN THE WAITLIST
      </motion.button>
      <motion.button
        onClick={(): void => setContactModal(true)}
        whileTap={{scale: 0.9, opacity: 0.9}}
        transition={{ duration: 0.5, type: "spring", stiffness: 400, damping: 10 }}
        variants={variants}
        initial="hidden"
        animate="show"
        className={`bg-${extraStyling} flex items-center text-${textColor} justify-center h-9.5 w-10.5`}>
        <IoIosArrowRoundForward
          className='w-6 h-6 shrink-0'
        />
      </motion.button>
    </div>
  )
}

export default WaitlistButton
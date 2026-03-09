import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import styles from '../HeroSection.module.css';
import { IoIosArrowRoundForward } from 'react-icons/io';
import WaitlistButton from '../../../components/WaitlistButton';

const HeroInfo = (): JSX.Element => {

  const revealY: any = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    show: {
      clipPath: "inset(0 0 0% 0)",
      transition: { delay: 0.5, duration: 1, ease: 'easeIn' }
    }
  }

  return (
    <div id='hero-section' className={`h-52.75 w-fit text-white flex flex-col gap-6 max-sm:items-center max-sm:w-full max-sm:h-fit`}>
      <div className='flex flex-col gap-2.5 max-sm:text-center max-sm:w-full max-sm:h-full max-sm:gap-4'>
        <motion.h1
          variants={revealY}
          initial="hidden"
          animate="show"
          className={`text-[4.8rem] max-sm:w-full max-sm:text-[46px] max-sm:font-bold max-sm:text-center w-283.25 ${styles['animated-block-h1']}`}>
            A MOMENT FROZE IN TIME
        </motion.h1>

        <motion.p
          variants={revealY}
          initial="hidden"
          animate="show"
          className={`${styles['animated-block']}`}>
            Explore our latest collection of luxury men’s and women’s timepieces—Swiss-made, precision-engineered, and crafted with the same heritage found in icons like Rolex, Patek Philippe, and Audemars Piguet.
        </motion.p>
      </div>
      
      <WaitlistButton variants={revealY} />

    </div>
  )
}

export default HeroInfo
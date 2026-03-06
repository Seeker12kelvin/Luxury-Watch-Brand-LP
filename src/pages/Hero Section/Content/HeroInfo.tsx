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
    <div id='hero-section' className={`h-52.75 w-fit text-white flex flex-col gap-6`}>
      <div className='flex flex-col gap-2.5'>
        <motion.h1
          variants={revealY}
          initial="hidden"
          animate="show"
          className={`text-[4.8rem] w-283.25 ${styles['animated-block-h1']}`}>
            A MOMENT FROZE IN TIME
        </motion.h1>

        <motion.p
          variants={revealY}
          initial="hidden"
          animate="show"
          className={`${styles['animated-block']} max-w-150 text-[1rem]`}>
            Explore our latest collection of luxury men’s and women’s timepieces—Swiss-made, precision-engineered, and crafted with the same heritage found in icons like Rolex, Patek Philippe, and Audemars Piguet.
        </motion.p>
      </div>

      <div className='flex items-center gap-1'>
        <motion.button
          variants={revealY}
          initial="hidden"
          animate="show">
          <WaitlistButton />
        </motion.button>
      </div>
    </div>
  )
}

export default HeroInfo
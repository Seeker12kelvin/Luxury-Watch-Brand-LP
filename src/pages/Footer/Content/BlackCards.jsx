import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Footer.module.css';
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const BlackCards = ({clipPath}) => {
  
  return (
    <div className='flex items-start gap-5 w-full h-58.25'>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 text-[#FFF] ${styles['footer-black-cards']}`}>
        <motion.p
          variants={clipPath}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          className='flex-1 opacity-[0.5] text-[1rem]'>PRODUCT OFFERINGS</motion.p>

        <div className='flex flex-col gap-4 w-full'>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            The New Series
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            The Brantium Grand Complication No. 1
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            The Chronograph
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            The Classic
          </motion.p>
          
        </div>
      </div>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 text-[#FFF] ${styles['footer-black-cards']}`}>
        <motion.p
          variants={clipPath}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          className='flex-1 opacity-[0.5] text-[1rem]'>SERVICES</motion.p>

        <div className='flex flex-col gap-4 w-full'>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            Reach out to the Rvysion Team
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            Join the waitlist
          </motion.p>
          
        </div>
      </div>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 text-[#FFF] ${styles['footer-black-cards']}`}>
        <motion.p
          variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
          className='flex-1 opacity-[0.5] text-[1rem]'>SOCIALS</motion.p>

        <div className='flex flex-col gap-4 w-full'>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem] flex items-center gap-2.5 font-light leading-[20.8px] tracking-[-0.32px]'>
            <RiInstagramFill />  Instagram
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem] flex items-center gap-2.5 font-light leading-[20.8px] tracking-[-0.32px]'>
            <FaPinterest />  Pinterest
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem] flex items-center gap-2.5 font-light leading-[20.8px] tracking-[-0.32px]'>
            <FaYoutube />  YouTube
          </motion.p>
          
        </div>
      </div>

    </div>
  )
}

export default BlackCards
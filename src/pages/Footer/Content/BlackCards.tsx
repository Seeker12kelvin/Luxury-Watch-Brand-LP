import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import styles from '../Footer.module.css';
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

type Props = {
  clipPath: any
}

const BlackCards = ({clipPath}: Props): JSX.Element => {
  
  return (
    <div className='h-58.25 flex flex-nowrap items-start gap-5 w-full max-[837px]:h-fit max-[706px]:flex-col max-[706px]:items-center max-[706px]:gap-20'>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 max-[955px]:px-4 text-[#FFF] ${styles['footer-black-cards']}`}>
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
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            The New Series
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            The Brantium Grand Complication No. 1
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            The Chronograph
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            The Classic
          </motion.p>
          
        </div>
      </div>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 max-[955px]:px-4 text-[#FFF] ${styles['footer-black-cards']}`}>
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
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            Reach out to the Rvysion Team
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            Join the waitlist
          </motion.p>
          
        </div>
      </div>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 max-[955px]:px-4 text-[#FFF] ${styles['footer-black-cards']}`}>
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
            className='flex-1 text-[1rem] flex items-center gap-2.5 font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            <RiInstagramFill />  Instagram
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem] flex items-center gap-2.5 font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            <FaPinterest />  Pinterest
          </motion.p>

          <motion.p
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='flex-1 text-[1rem] flex items-center gap-2.5 font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            <FaYoutube />  YouTube
          </motion.p>
          
        </div>
      </div>

    </div>
  )
}

export default BlackCards
import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import styles from '../Footer.module.css';
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

type Props = {
  ref: any
}

const BlackCards = ({ref}: Props): JSX.Element => {
  
  return (
    <div ref={ref} className='h-58.25 flex flex-nowrap items-start gap-5 w-full max-[837px]:h-fit max-[706px]:flex-col max-[706px]:items-center max-[706px]:gap-20'>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 max-[955px]:px-4 text-[#FFF] ${styles['footer-black-cards']}`}>
        <p className='flex-1 opacity-[0.5] text-[1rem] box'>PRODUCT OFFERINGS</p>

        <div className='flex flex-col gap-4 w-full'>

          <p className='flex-1 text-[1rem] box font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            The New Series
          </p>

          <p className='flex-1 text-[1rem] box font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            The Brantium Grand Complication No. 1
          </p>

          <p className='flex-1 text-[1rem] box font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            The Chronograph
          </p>

          <p className='flex-1 text-[1rem] box font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            The Classic
          </p>
          
        </div>
      </div>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 max-[955px]:px-4 text-[#FFF] ${styles['footer-black-cards']}`}>
        <p className='flex-1 opacity-[0.5] text-[1rem] box'>SERVICES</p>

        <div className='flex flex-col gap-4 w-full'>

          <p className='flex-1 text-[1rem] box font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            Reach out to the Rvysion Team
          </p>

          <p className='flex-1 text-[1rem] box font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            Join the waitlist
          </p>
          
        </div>
      </div>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 max-[955px]:px-4 text-[#FFF] ${styles['footer-black-cards']}`}>
        <p className='flex-1 opacity-[0.5] text-[1rem] box'>SOCIALS</p>

        <div className='flex flex-col gap-4 w-full'>

          <p className='flex-1 text-[1rem] flex items-center box gap-2.5 font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            <RiInstagramFill />  Instagram
          </p>

          <p className='flex-1 text-[1rem] flex items-center box gap-2.5 font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            <FaPinterest />  Pinterest
          </p>

          <p className='flex-1 text-[1rem] flex items-center box gap-2.5 font-light leading-[20.8px] tracking-[-0.32px] max-[1077px]:text-[0.9rem] max-[837px]:text-[0.8rem] max-[706px]:text-[0.9rem]'>
            <FaYoutube />  YouTube
          </p>
          
        </div>
      </div>

    </div>
  )
}

export default BlackCards
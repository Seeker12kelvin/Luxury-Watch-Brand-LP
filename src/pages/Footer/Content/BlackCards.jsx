import React from 'react'
import styles from '../Footer.module.css'
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const BlackCards = () => {
  return (
    <div className='flex items-start gap-5 w-full h-58.25'>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 text-[#FFF] ${styles['footer-black-cards']}`}>
        <p className='flex-1 opacity-[0.5] text-[1rem]'>PRODUCT OFFERINGS</p>

        <div className='flex flex-col gap-4 w-full'>

          <p className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            The New Series
          </p>

          <p className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            The Brantium Grand Complication No. 1
          </p>

          <p className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            The Chronograph
          </p>

          <p className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            The Classic
          </p>
          
        </div>
      </div>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 text-[#FFF] ${styles['footer-black-cards']}`}>
        <p className='flex-1 opacity-[0.5] text-[1rem]'>SERVICES</p>

        <div className='flex flex-col gap-4 w-full'>

          <p className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            Reach out to the Rvysion Team
          </p>

          <p className='flex-1 text-[1rem]  font-light leading-[20.8px] tracking-[-0.32px]'>
            Join the waitlist
          </p>
          
        </div>
      </div>

      <div className={`flex flex-col gap-10 w-85 flex-1 py-5 px-8 text-[#FFF] ${styles['footer-black-cards']}`}>
        <p className='flex-1 opacity-[0.5] text-[1rem]'>SOCIALS</p>

        <div className='flex flex-col gap-4 w-full'>

          <p className='flex-1 text-[1rem] flex items-center gap-2.5 font-light leading-[20.8px] tracking-[-0.32px]'>
            <RiInstagramFill />  Instagram
          </p>

          <p className='flex-1 text-[1rem] flex items-center gap-2.5 font-light leading-[20.8px] tracking-[-0.32px]'>
            <FaPinterest />  Pinterest
          </p>

          <p className='flex-1 text-[1rem] flex items-center gap-2.5 font-light leading-[20.8px] tracking-[-0.32px]'>
            <FaYoutube />  YouTube
          </p>
          
        </div>
      </div>

    </div>
  )
}

export default BlackCards
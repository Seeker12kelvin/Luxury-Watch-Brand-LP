import React from 'react';
import Clock from './Clock';
import BlackCards from './BlackCards';
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';
import NewReleaseBadge from '../../../components/NewReleaseDiv';
import Comp_Logo from '../../../images/Footer-Logo-Container.svg';

const FooterInfo = () => {

  const clipPath = {
    hidden: {
      clipPath: "inset(0 0 100% 0)"
    },
    show: {
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: 1, ease: 'easeIn' }
    }
  }

  return (
    <div className={`z-10 w-full h-full flex flex-col justify-between pt-25 px-50 overflow-hidden`}>

      <div className='flex justify-between items-start w-full'>

        <div className='flex flex-col justify-between w-121.25 h-84'>

          <div className='flex flex-col gap-8'>

            <div className='text-white w-full flex flex-col gap-2.5'>
              
              <motion.div
                variants={clipPath}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className='h-fit w-fit'>

                <NewReleaseBadge text={'FOOTER'} textColor={'white'} borderColor={'white'} />

              </motion.div>

              <motion.h1
                variants={clipPath}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className='text-[64px] font-semibold leading-16 tracking-[-0.64px]'>
                
                STAY IN TIME

              </motion.h1>

              <motion.p
                variants={clipPath}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className='text-[1rem] font-light max-w-105 self-stretch tracking-[-0.32px] leading-[20.8px]'>

                Be the first to receive private previews, new releases, and early access to upcoming collections.

              </motion.p>

            </div>

            <motion.div
              variants={clipPath}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              className='flex items-start gap-2.5 w-full'>

              <div className="relative h-full max-w-[320px] w-full inline-block">

                <div className={`relative py-4 px-6.5 bg-[#FFFFFF0D] rounded-sm`}>
          
                  <input
                    className='text-[#FFF] w-full flex-1 border-none outline-none'
                    placeholder='Enter your email'
                  />
          
                  {/* Top-left */}
                  <span className={`absolute top-0 left-0 w-1 h-1 border-t-2 border-l-2 border-white`} />
          
                  {/* Top-right */}
                  <span className={`absolute top-0 right-0 w-1 h-1 border-t-2 border-r-2 border-white`} />
          
                  {/* Bottom-left */}
                  <span className={`absolute bottom-0 left-0 w-1 h-1 border-b-2 border-l-2 border-white`} />
          
                  {/* Bottom-right */}
                  <span className={`absolute bottom-0 right-0 w-1 h-1 border-b-2 border-r-2 border-white`} />

                </div>

              </div>

              <button className='py-4 px-6.5 bg-white text-[1rem] tracking-[-0.32px]'>
                SUBSCRIBE
              </button>

            </motion.div>

          </div>

          <motion.div
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='text-white flex items-center justify-between'>

            <ul className='flex gap-2 items-center'>

              <li className='underline'>
                EN
              </li>

              <li className='opacity-50'>
                ES
              </li>

              <li className='opacity-50'>
                AR
              </li>

            </ul>

            <p className='text-[1rem]'>
              © 2026 Brantium. All rights reserved.
            </p>

          </motion.div>

        </div>

        <Clock />
      </div>

      <BlackCards clipPath={clipPath} />

      <div className='w-full h-[276.28px] flex flex-col gap-10 items-center justify-end'>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1, transition: {duration: 1.2, ease: 'easeIn'}}}
          viewport={{once: true}}
          className='flex items-center gap-2.5'>

          <div className='py-2 px-4.5 rounded-[20px] bg-[#FFFFFF1A] flex items-center gap-2.5 w-fit text-[#FFFFFF]'>
            <p className='font-light'>Built by</p>
            <IoIosArrowRoundForward className='font-light text-[#FFF]' />
          </div>

          <img
            className='w-28.75 h-10'
            src={Comp_Logo} 
            alt='Rvysion Logo' />

        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1, transition: {duration: 1.2, ease: 'easeIn'}}}
          viewport={{once: true}}
          className='flex items-center h-53.5 gap-2 w-full justify-center'>

          <motion.h1
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            className='text-[18rem] font-light tracking-[-0.32px] text-[#181818]'>
            B
          </motion.h1>

          <motion.h1
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            className='text-[18rem] font-light tracking-[-0.32px] text-[#181818]'>
            R
          </motion.h1>

          <motion.h1
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            className='text-[18rem] font-light tracking-[-0.32px] text-[#181818]'>
            A
          </motion.h1>

          <motion.h1
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            className='text-[18rem] font-light tracking-[-0.32px] text-[#181818]'>
            N
          </motion.h1>

          <motion.h1
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            className='text-[18rem] font-light tracking-[-0.32px] text-[#181818]'>
            T
          </motion.h1>

          <motion.h1
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            className='text-[18rem] font-light tracking-[-0.32px] text-[#181818]'>
            I
          </motion.h1>

          <motion.h1
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            className='text-[18rem] font-light tracking-[-0.32px] text-[#181818]'>
            U
          </motion.h1>

          <motion.h1
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            className='text-[18rem] font-light tracking-[-0.32px] text-[#181818]'>
            M
          </motion.h1>

        </motion.div>

      </div>

    </div>
  )
}

export default FooterInfo
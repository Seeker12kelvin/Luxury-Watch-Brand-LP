import React, { JSX } from 'react';
import Clock from './Clock';
import BlackCards from './BlackCards';
import { motion } from 'framer-motion';
import NewReleaseBadge from '../../../components/NewReleaseDiv';
import FooterLogo from './FooterLogo';

const FooterInfo = (): JSX.Element => {

  const clipPath: any = {
    hidden: {
      clipPath: "inset(0 0 100% 0)"
    },
    show: {
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: 1, ease: 'easeIn' }
    }
  }

  return (
    <div className={`z-10 w-full h-full flex flex-col justify-between pt-25 px-50 overflow-hidden max-[1453px]:px-30 max-[1077px]:px-15 max-[955px]:px-10 max-[910px]:px-5 max-[837px]:gap-10 max-[480px]:px-0`}>

      <div className='flex justify-between items-start w-full max-[837px]:flex-col max-[837px]:items-center max-[837px]:gap-10 max-[381px]:gap-15'>

        <div className='flex flex-col justify-between w-121.25 h-84 max-[865px]:w-110 max-[837px]:w-[80%] max-[381px]:gap-4'>

          <div className='flex flex-col gap-8'>

            <div className='text-white w-full flex flex-col gap-2.5 max-[837px]:items-center'>
              
              <motion.div
                variants={clipPath}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className='h-fit w-fit max-[837px]:self-start'>

                <NewReleaseBadge text={'FOOTER'} textColor={'white'} borderColor={'white'} />

              </motion.div>

              <motion.h1
                variants={clipPath}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className='text-[64px] font-semibold leading-16 tracking-[-0.64px] max-[865px]:text-[55px]'>
                
                STAY IN TIME

              </motion.h1>

              <motion.p
                variants={clipPath}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className='text-[1rem] font-light max-w-105 self-stretch tracking-[-0.32px] leading-[20.8px] max-[865px]:text-[0.9rem] max-[837px]:max-w-full max-[837px]:w-full max-[837px]:text-center'>

                Be the first to receive private previews, new releases, and early access to upcoming collections.

              </motion.p>

            </div>

            <motion.div
              variants={clipPath}
              initial="hidden"
              whileInView="show"
              viewport={{once: true}}
              className='flex items-start gap-2.5 w-full max-[837px]:justify-center max-[381px]:flex-col max-[381px]:gap-4'>

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

              <button className='py-4 px-6.5 bg-white text-[1rem] tracking-[-0.32px] max-[381px]:w-full'>
                SUBSCRIBE
              </button>

            </motion.div>

          </div>

          <motion.div
            variants={clipPath}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className='text-white flex items-center justify-between text-[1rem] max-[865px]:text-[0.9rem] max-[430px]:text-[0.8rem]'>

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

            <p className=''>
              © 2026 Brantium. All rights reserved.
            </p>

          </motion.div>

        </div>

        <Clock />
      </div>

      <BlackCards clipPath={clipPath} />

      <FooterLogo />

    </div>
  )
}

export default FooterInfo
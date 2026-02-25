import React from 'react'
import styles from './Login.module.css'
import Comp_Logo from '../../images/Comp_Logo.svg'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'


const Login = () => {
  return (
    <main className='w-screen h-screen flex items-center place-content-center bg-[black]'>
      <form className={`${styles['login-form']}`}>
        <div className={`${styles['first-section']} flex-1 border-b-[0.5px] border-[#00000066] justify-between`}>
          <div className={`${styles['first-section-text']}`}>
            <p>Get in touch with the</p>
            <img src={Comp_Logo} alt='Rvysion Logo' />
            <p>team</p>
          </div>
          <button type='button' className='bg-[#E6E6E6] w-10.5 h-10.5 flex items-center justify-center text-2xl'>
            <MdClose />
          </button>
        </div>

        <div className={`${styles['second-section']}`}>
          <div className={`gap-[2.02rem] flex flex-col h-full px-8 py-4 w-full`}>

            <div className='flex gap-5 justify-between w-full'>
              <label>
                Your name
                <input name="user-name" required placeholder='Collins Donye' type="text"/>
              </label>
              
              <label>
                Brand or product name
                <input name="product-name" required placeholder='Rvysion Studios' type="text"/>
              </label>
            </div>
            
            <label className='flex-1'>
              Message
              <textarea placeholder='Enter your message here'>

              </textarea>
            </label>
            
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="flex gap-1 items-center w-full">
              
              <motion.button
                variants={{
                  rest: {
                    width: '100%',
                    opacity: 1,
                    backgroundColor: '#111111',
                    color: '#ffffff'
                  },
                  hover: {
                    width: 'fit-content',
                    opacity: 0.7,
                    backgroundColor: '#ffffff',
                    color: '#000000'
                  }
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="origin-left h-12 px-3.5 w-full text-sm font-extralight overflow-hidden">
                REQUEST ACCESS
              </motion.button>

              <motion.button
                variants={{
                  rest: { backgroundColor: '#000000', color: '#ffffff' },
                  hover: { backgroundColor: '#ffffff', color: '#000000' }
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-10.5 h-12 shrink-0 flex items-center justify-center">
                <IoIosArrowRoundForward className='text-2xl' />
              </motion.button>
            
            </motion.div>


            <div className='flex gap-4 items-start bg-[#1111110A] p-4'>
              <div className='rounded-[4.8px] bg-[black] text-white h-10 w-10 flex items-center justify-center'>
                <span>Cal</span>
              </div>
              <div className='flex w-full flex-col items-start'>

                <div className='flex items-center justify-between w-full'>
                  <h4 className='text-[1rem] font-normal tracking-[-0.14px] text-[#111]' >Book a 1 on 1 call with us</h4>
                  <IoIosArrowRoundForward className='text-3xl' />
                </div>
                <p className='text-[0.875rem] font-light'>Schedule a 30-minute call to share your project goals and learn how we can craft a tailored exploration for your product or brand.</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}

export default Login
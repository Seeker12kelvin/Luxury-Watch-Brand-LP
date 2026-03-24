import { motion } from 'framer-motion';
import { JSX, useContext } from 'react';
import styles from './ContactRvysion.module.css';
import { MdClose } from 'react-icons/md';
import Comp_Logo from '../../images/Comp_Logo.svg';
import UserContext from '../../components/userContext';
import { IoIosArrowRoundForward } from 'react-icons/io';


const ContactRvysion = (): JSX.Element | null=> {

  const divVariants: any = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {duration: 0.2, ease: 'easeIn'}
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.2, ease: 'easeOut'}
    }
  }

  const formVariants: any = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 1,
      transition: {duration: 0.4, ease: 'easeIn'}
    },
    exit: {
      scale: 0,
      transition: {duration: 0.4, ease: 'easeOut'}
    }
  }

  const context = useContext(UserContext)
  if(!context){
    return null
  }
  const { setContactModal } = context
  
  return (
    <motion.div
      variants={divVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className='h-full w-full fixed z-100 mx-auto top-0 bg-[#0000005f] flex items-center justify-center max-[481px]:h-screen max-[481px]:max-w-screen'>
      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`${styles['login-form']}`}>
        <div className={`${styles['first-section']} flex-1 border-b-[0.5px] border-[#00000066] justify-between`}>
          <div className={`${styles['first-section-text']}`}>
            <p>Get in touch with the</p>
            <img src={Comp_Logo} alt='Rvysion Logo' />
            <p>team</p>
          </div>
          <button
            onClick={() => setContactModal(false)}
            type='button'
            className='bg-[#E6E6E6] w-10.5 h-10.5 flex items-center justify-center text-2xl'>
            <MdClose />
          </button>
        </div>

        <div className={`${styles['second-section']}`}>
          <div className={`gap-[2.02rem] flex flex-col h-full px-8 py-4 w-full max-[422px]:px-4`}>

            <div className='flex gap-5 justify-between w-full max-[481px]:flex-col'>
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
                className="origin-left h-12 px-0 w-full text-sm font-extralight overflow-hidden">
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
      </motion.form>
    </motion.div>
  )
}

export default ContactRvysion
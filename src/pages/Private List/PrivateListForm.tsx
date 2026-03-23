import { motion } from 'framer-motion';
import { JSX, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import Logo from '../../components/Logo';
import styles from './PrivateListForm.module.css';
import UserContext from '../../components/userContext';
import { IoIosArrowRoundForward } from 'react-icons/io';

const PrivateListForm = (): JSX.Element | null => {

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
  const { setModal, selectedImage } = context

  return (

    <motion.div
      variants={divVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className='h-full w-full fixed z-100 mx-auto top-0 bg-[#0000005f] flex items-center justify-center'>
      
      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`${styles['private-form']} w-150 h-fit bg-[#FFF]`}>
        <div className={`${styles['private-section']} flex-1 border-b-[0.5px] border-[#00000066] justify-between`}>
          <div className={`${styles['private-section-text']}`}>
            <p>Join the</p>
            <span className='mix-blend-difference text-white'>
              <Logo />
            </span>
            <p>private release list</p>
          </div>
          <button
            onClick={() => setModal(false)}
            type="button"
            className='bg-[#E6E6E6] w-10.5 h-10.5 flex items-center justify-center text-2xl'>
            <MdClose />
          </button>
        </div>

        <div className='py-4 px-8 w-full flex flex-col gap-8 max-[421px]:px-4'>

          <p className='text-sm font-light tracking-[-0.14px] leading-5.25 text-[#111]'>
            Selected Brantium timepieces are currently in production. Early access is offered to a limited group of collectors and prospective owners.
          </p>
          
          <div className='flex flex-col gap-5'>

            <div className='flex flex-col gap-2.5'>

              <h4 className='text-sm font-normal tracking-[-0.14px] leading-5.25 text-[#111] opacity-[0.5]'>
                Selected product:
              </h4>

              <img
                className='object-cover w-25 h-25'
                src={selectedImage}
                alt='Selected item'
              />

            </div>

            <div className='flex gap-5 justify-between w-full'>
              <label>
                Email address
                <input name="user-name" required placeholder='your@email.com' type="email"/>
              </label>
              
              <label>
                Area of interest
                <input name="product-name" required placeholder='Select an option' type="text"/>
              </label>
            </div>

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
                transition={{ duration: 0.25, ease: 'easeIn' }}
                className="origin-left h-12 w-full text-sm font-extralight overflow-hidden">
                REQUEST ACCESS
              </motion.button>

              <motion.button
                variants={{
                  rest: { background: 'linear-gradient(to bottom, rgb(0, 0, 0) 100%, rgb(225, 225, 225) 0%)', color: '#ffffff' },
                  hover: { background: 'linear-gradient(to bottom, black 0%, white 0%)', color: '#000000' }
                }}
                transition={{ duration: 0.25, ease: 'easeIn' }}
                className="w-10.5 h-12 shrink-0 flex items-center justify-center">
                <IoIosArrowRoundForward size={24} />
              </motion.button>
            
            </motion.div>

          </div>

          <div className='flex gap-2 items-start bg-[#1111110A] p-4'>
            <IoIosArrowRoundForward className='text-3xl' />

            <p className='text-sm text-[#111] flex-1 font-light tracking-[-0.14px] leading-5.25'>
              Your information is kept strictly confidential.
              <br />
              No advertising. No third-party sharing. Private communication only.
            </p>
          </div>

        </div>

      </motion.form>
    </motion.div>
  )
};

export default PrivateListForm;

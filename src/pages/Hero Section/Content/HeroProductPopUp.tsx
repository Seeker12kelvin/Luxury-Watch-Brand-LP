import { motion } from 'framer-motion';
import { JSX, useContext } from 'react';
import { aleteir } from '../../../data';
import styles from '../HeroSection.module.css';
import { MdClose, MdStar } from 'react-icons/md';
import UserContext from '../../../components/userContext';
import NewReleaseBadge from '../../../components/NewReleaseDiv';
import WatchListButton from '../../../components/WatchListButton';

type HeroProductPopUpProps = {
  isOpen: boolean;
  open: () => void;
}

const HeroProductPopUp = ({isOpen, open}: HeroProductPopUpProps): JSX.Element | null => { 
  
  const context = useContext(UserContext)
  if(!context){
    return null
  }

  const { payUp } = context

  return isOpen ?
  (
    <motion.div
      role="dialog"
      initial={{ opacity: 0, scale: 0.2, y: 330, x: 420 }}
      animate={{ opacity: 1, scale: 1, y: 70, x: 50 }}
      exit={{ opacity: 0, scale: 0.2, y: 330, x: 420 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        ${styles['Hero-Section-product']} 
        flex justify-end gap-10 sm:mx-auto py-20 px-5 max-sm:flex-col max-sm:-left-12.5 max-sm:top-0 max-sm:translate-y-0  max-sm:translate-x-0`
      }>
      <div
        className='h-180 w-140 max-sm:hidden z-20'
        style={{backgroundImage: `url(${aleteir.img}`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      </div>

      <div className='flex gap-2.5 self-stretch items-center w-full max-sm:w-fit max-sm:h-full h-full flex-1'>

        <div className='flex flex-col justify-between gap-15.25 items-start self-stretch h-full w-110.75 max-sm:w-full max-sm:text-center'>

          <div className='w-full flex flex-col gap-5'>

            <NewReleaseBadge background={'[#FFFFFF14]'} />
            
            <div className='flex flex-col gap-2.5 w-full'>

              <h1 id='product-title' className='text-[4rem] font-semibold leading-[76.8px] tracking-[-0.64px] max-sm:text-[3rem]'>{aleteir.title}</h1>

              <div className='flex items-center gap-1 max-sm:mx-auto'>

                <MdStar size={20} className='text-white'/>

                <span className='opacity-[0.5]'>{aleteir.rating}</span>

              </div>

              <div className='flex gap-2.5 items-center w-full max-sm:flex-col'>

                <h3 className='font-medium text-[1rem] opacity-50 leading-[20.8px] tracking-[-0.32px] text-[#FAFAFA] max-sm:text-[1rem]'>PRODUCT DESCRIPTION</h3>

                <hr className='border border-[#ffffff7c] flex-1 max-sm:w-full'/>

              </div>

              <p className='text-[15.5px] text-[#FAFAFA] font-light self-stretch leading-6 tracking-[-0.32px]'>{aleteir.description}</p>

            </div>

          </div>

          <div className='flex flex-col gap-5 w-full'>

            <div className='flex flex-col gap-2.5'>

              <h4 className='text-[16px] opacity-50'>COLOUR:</h4>
              
              <div className='bg-[#9B421A] border-2 rounded-full w-5 h-5 max-sm:mx-auto'></div>

            </div>

            <div className='flex flex-col'>

              <h4 className='text-[16px] opacity-50'>AMOUNT:</h4>

              <p className={`${styles['product-price']}`}>{aleteir.price}</p>

            </div>
            
            <div className='flex w-full items-center gap-2'>

              <WatchListButton bg={aleteir.img} extraStyle={'w-full'}/>

            </div>

          </div>

        </div>

      </div>

      <div className='absolute top-0 right-0'>

        <button
          onClick={() => open()}
          className='bg-[#515151] relative px-2 py-2 cursor-pointer w-12 h-12 flex justify-center items-center'>

          <MdClose className='text-2xl' />

          <span 
            className="absolute bottom-0 left-0 w-1 h-1
            border-b-2 border-l-2 border-white" />

        </button>

      </div>

    </motion.div>
  )
  :
  null
}

export default HeroProductPopUp
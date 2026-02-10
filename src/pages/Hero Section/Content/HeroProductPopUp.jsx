import styles from '../HeroSection.module.css'
import { aleteir } from '../../../data'
import NewReleaseBadge from '../../../components/NewReleaseDiv'
import { MdClose, MdStar } from 'react-icons/md'
import { motion } from 'framer-motion'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const HeroProductPopUp = ({isOpen, open}) => { 
  return isOpen ?
  (
    <motion.div
      role="dialog"
      initial={{ opacity: 0, scale: 0.2, y: 330, x: 420 }}
      animate={{ opacity: 1, scale: 1, y: 70, x: 50 }}
      exit={{ opacity: 0, scale: 0.2, y: 330, x: 420 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${styles['Hero-Section-product']} mx-auto pt-20 bg-[#0c0c0ce6]`}>
      <div className='flex gap-10 px-5'>
        <img
          className='w-140'
          src={aleteir.img}
          alt={aleteir.title}
        />

        <div className='flex flex-col gap-15 items-start leading-10.08 self-stretch w-110.75'>
          <div>
            <NewReleaseBadge />

            <h1 id='product-title' className='text-[4rem]'>{aleteir.title}</h1>
            <div className='flex items-center gap-5'>
              <MdStar className='text-white'/>
              <span>{aleteir.rating}</span>
            </div>

            <div className='flex justify-between items-center w-full mb-1.5'>
              <h3 className='font-light text-[#ffffff7d]'>PRODUCT DESCRIPTION</h3>
              <hr className='border border-[#ffffff7c] w-[55%]'/>
            </div>

            <p className='text-[1rem] text-[#FAFAFA] font-light w-[27.688rem] leading-6 tracking-[-0.02rem]'>{aleteir.description}</p>
          </div>

          <div className='flex flex-col gap-5 w-full'>
            <div className='flex flex-col gap-2.5'>
              <h3>COLOUR:</h3>
              <div className='bg-[#9B421A] border-2 rounded-full w-5 h-5'></div>
            </div>

            <div className='flex flex-col'>
              <h3>AMOUNT:</h3>
              <p className={`${styles['product-price']}`}>{aleteir.price}</p>
            </div>
            
            <div className='flex w-full items-center gap-2'>
              <Link to={'/login'} className='bg-[#FEFEFE] w-full text-[#111111] text-sm py-2 px-3.5'>
                ADD TO WATCHLIST
              </Link>
              <button className='bg-[#FEFEFE] flex items-center h-full w-fit text-[#111111] text-sm py-3 px-3.5'>
                <IoIosArrowRoundForward className='h-full w-full scale-150' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-0'>
        <button
          onClick={() => open()}
          className='bg-[#515151] relative px-2 py-2 cursor-pointer'>
          <MdClose />
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
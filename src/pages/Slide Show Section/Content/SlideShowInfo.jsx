import { motion, AnimatePresence } from 'framer-motion'
import NewReleaseBadge from '../../../components/NewReleaseDiv'
import { IoIosArrowRoundForward } from 'react-icons/io'
import styles from '../SlideShowContent.module.css'
import LeftArrow from '../../../images/LeftArrow.svg'
import RightArrow from '../../../images/RightArrow.svg'
import { watchCollection } from '../../../data'

const SlideShowInfo = ({data}) => {
  
  const { bg, nextSlide, prevSlide, setActiveIndex, activeIndex} = data

  const textVariants = {
    initial: {
      clipPath: 'inset(0 0 100% 0)',
      opacity: 0,
      y: 20
    },
    animate: {
      clipPath: 'inset(0 0 0% 0)',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    },
    exit: {
      clipPath: 'inset(100% 0 0 0)',
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6 * 0.7,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className='h-[60%] w-full flex flex-col justify-between pt-25 px-50'>
      <div className='w-260 flex flex-col gap-[0.6rem]'>
          <motion.div
            key={`${bg?.id}-badge`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
          >
            <NewReleaseBadge text={bg?.release} />
          </motion.div>



          <motion.h1
            key={`${bg?.id}-title`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className='text-[4rem] font-semibold'>
            {bg?.title || 'INTRODUCING THE NEW SERIES'}
          </motion.h1>



          <motion.p
            key={`${bg?.id}-description`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`${styles['slide-description']} w-150 text-[1rem] leading-[1.3rem] tracking-tight font-extralight`}>
            {bg?.description || 'Our newest series blends contemporary engineering with traditional haute horlogerie. Every model features a Swiss-made automatic movement, refined finishing, and the presence expected from a grail-level timepiece'}
          </motion.p>
      </div>

      <div className='flex flex-col w-full'>
        {bg && (
            <div className='flex justify-between items-center self-stretch flex-1'>
              <motion.h2
                key={`${bg?.id}-price`}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className='text-[4rem]'>
                {bg.price.toUpperCase()}
              </motion.h2>


              <div className='flex gap-1 items-center'>
                <motion.button
                  key={`${bg?.id}-join-button`}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className='bg-[#FEFEFE] text-[#111111] text-sm py-2.5 px-3.5'>
                    JOIN THE WAITLIST
                </motion.button>



                <motion.button
                  key={`${bg?.id}-arrow-button`}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className='bg-[#FEFEFE] flex items-center h-fit w-fit text-[#111111] text-sm py-2 px-2'>
                  <IoIosArrowRoundForward className='text-2xl' />
                </motion.button>
              </div>
            </div>
          )}

        <div className='flex justify-between items-end-safe self-stretch'>

          <div className='flex gap-2.5'>

            <button
              onClick={() => setActiveIndex(0)}
              className={`${activeIndex === 0 ? 'w-20 bg-[#FFFFFF]': ' w-5 bg-[#FFFFFF66]'} h-2`}></button>

            <button
              onClick={() => setActiveIndex(watchCollection.length / 2)}
              className={`${activeIndex === 3 ? 'w-20 bg-[#FFFFFF]': ' w-5 bg-[#FFFFFF66]'} h-2`}></button>

            <button
              onClick={() => setActiveIndex(watchCollection.length - 1)}
              className={`${activeIndex === watchCollection.length - 1 ? 'w-20 bg-[#FFFFFF]': ' w-5 bg-[#FFFFFF66]'} h-2`}></button>

          </div>

          <div className='flex items-start gap-2 '>
            <button
              onClick={() => {
                prevSlide()
              }}
              className='w-9 h-2 opacity-50'>
              <img src={LeftArrow} alt='Left arrow' />
            </button>

            <button
              onClick={() => {
                nextSlide()
              }}
              className='w-9 h-2'>
              <img src={RightArrow} alt='Right arrow' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideShowInfo
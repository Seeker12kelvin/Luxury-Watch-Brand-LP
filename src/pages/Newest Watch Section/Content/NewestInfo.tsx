import { JSX } from 'react';
import { watchCollection } from '../../../data';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Watch from '../../../images/NewestInfo-Watch.png';
import NewReleaseBadge from '../../../components/NewReleaseDiv';
import WatchListButton from '../../../components/WatchListButton';
import { AnimatePresence, motion, MotionValue, useTransform } from 'framer-motion';

type NewestInfoProps = {
  scrollYProgress: MotionValue<number>,
}

const NewestInfo = ({scrollYProgress}: NewestInfoProps): JSX.Element => {

  const date = new Date().getFullYear()

  const clipPath: any = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["inset(0 0 100% 0)", "inset(0 0 0% 0)"],
  )

  return (
    <div className='h-full w-full flex flex-col justify-between mix-blend-difference z-10 text-[#0C0C0C]'>
      <div className='flex flex-col items-start self-stretch gap-2.5 max-[923px]:text-center max-[923px]:w-full max-[666px]:gap-1 max-[495px]:gap-1'>

        <motion.div style={{clipPath}}>
          <NewReleaseBadge text={`${date} RELEASE`} textColor={'white'} borderColor={'white'} background={'[#0A0A0A14]'}/>
        </motion.div>

        <motion.h1
          style={{clipPath}}
          className='uppercase text-[4rem] mix-blend-difference text-white font-semibold not-italic leading-[4.8rem] w-260 max-[923px]:w-full max-[819px]:text-[3rem] max-[666px]:text-[2.5rem] max-[819px]:leading-12 max-[446px]:text-[2rem]'>
          The Brantium Grand
        </motion.h1>

        <motion.h1
          style={{clipPath}}
          className='uppercase text-[4rem] mix-blend-difference text-white font-semibold not-italic leading-[4.8rem] w-260 max-[923px]:w-full max-[819px]:text-[3rem] max-[666px]:text-[2.5rem] max-[819px]:leading-12 max-[446px]:text-[2rem]'>
          Complication No. 1
        </motion.h1>

        <motion.p
          style={{clipPath}}
          className='w-155 self-stretch text-[1rem] mix-blend-difference text-white font-light not-italic leading-[1.3rem] tracking-[-0.02rem] max-[923px]:w-full max-[923px]:text-lg max-[923px]:leading-6 max-[819px]:text-[1rem] max-[495px]:leading-5 max-[446px]:text-[0.9rem]'>
          An ultra-exclusive mechanical masterpiece engineered for elite collectors and long-term investors. Hand-assembled, individually numbered, and produced in strictly limited quantities.
        </motion.p>

      </div>

      <div className='flex justify-between items-start max-[861px]:flex-col max-[861px]:items-center max-[861px]:text-center max-[861px]:gap-5 z-50'>

        <motion.p
          style={{clipPath}}
          className='w-155 mix-blend-difference text-white self-end text-[1rem] font-light not-italic leading-[1.3rem] tracking-[-0.02rem] max-[997px]:w-100 max-[861px]:w-full max-[446px]:text-[0.9rem]'>
          Featuring a Swiss high-complication automatic movement, precious metal casework, and exhibition finishing reserved for haute horlogerie ateliers. Designed as a generational collector’s asset.
        </motion.p>

        <div
          className='flex flex-col items-end gap-5 max-[861px]:w-full max-[861px]:items-center'>
          
          <WatchListButton bg={Watch} extraStyle={'justify-end'}/>

          <h3 className='text-[4rem] font-semibold leading-16 tracking-[-0.04rem] mix-blend-difference text-white max-[923px]:text-[3rem]'>$145,999.99</h3>
        </div>

      </div>
      
    </div>
  )
}

export default NewestInfo
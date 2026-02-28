import { motion, useTransform } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';
import NewReleaseBadge from '../../../components/NewReleaseDiv';


const NewestInfo = ({scrollYProgress}) => {

  const date = new Date().getFullYear()

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["inset(0 0 100% 0)", "inset(0 0 0% 0)"],
  )

  const priceAnim = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]
  )

  return (
    <div className='flex flex-col justify-between z-10 gap-145 mix-blend-difference text-[#0C0C0C]'>
      <div className='flex flex-col items-start self-stretch gap-2.5'>

        <motion.div style={{clipPath}}>
          <NewReleaseBadge text={`${date} RELEASE`} textColor={'white'} borderColor={'white'} background={'[#0A0A0A14]'}/>
        </motion.div>

        <motion.h1
          style={{clipPath}}
          className='uppercase text-[4rem] mix-blend-difference text-white font-semibold not-italic leading-[4.8rem] w-260'>
          The Brantium Grand
        </motion.h1>

        <motion.h1
          style={{clipPath}}
          className='uppercase text-[4rem] mix-blend-difference text-white font-semibold not-italic leading-[4.8rem] w-260'>
          Complication No. 1
        </motion.h1>

        <motion.p
          style={{clipPath}}
          className='w-155 self-stretch text-[1rem] mix-blend-difference text-white font-light not-italic leading-[1.3rem] tracking-[-0.02rem]'>
          An ultra-exclusive mechanical masterpiece engineered for elite collectors and long-term investors. Hand-assembled, individually numbered, and produced in strictly limited quantities.
        </motion.p>

      </div>

      <div className='flex justify-between items-start'>

        <motion.p
          style={{clipPath}}
          className='w-155 mix-blend-difference text-white self-end text-[1rem] font-light not-italic leading-[1.3rem] tracking-[-0.02rem]'>
          Featuring a Swiss high-complication automatic movement, precious metal casework, and exhibition finishing reserved for haute horlogerie ateliers. Designed as a generational collector’s asset.
        </motion.p>

        <motion.div
          style={{priceAnim}}
          className='flex flex-col items-end gap-5'>

          <div

            className='flex gap-1 items-center'>
            <motion.button
              className='bg-[#FEFEFE] text-[#111111] text-sm py-2.5 px-3.5'>
                ADD TO WATCHLIST
            </motion.button>



            <motion.button

              className='bg-[#FEFEFE] flex items-center h-fit w-fit text-[#111111] text-sm py-2 px-2'>
              <IoIosArrowRoundForward className='text-2xl' />            </motion.button>
          </div>

          <h3 className='text-[4rem] font-semibold leading-16 tracking-[-0.04rem] mix-blend-difference text-white'>$145,999.99</h3>
        </motion.div>

      </div>
      
    </div>
  )
}

export default NewestInfo
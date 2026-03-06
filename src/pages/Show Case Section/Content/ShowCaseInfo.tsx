import { JSX } from 'react';
import Dark_Watch from '../../../images/Dark-Watch.png';
import Light_Watch from '../../../images/Light_Watch.png';
import { motion, MotionValue, useTransform } from 'framer-motion';
import WatchListButton from '../../../components/WatchListButton';

type AnimatedBackgroundProps = {
  scrollYProgress: MotionValue<number>,
  setBg: React.Dispatch<React.SetStateAction<string>>,
  bg: string,
  payUp: (image : string | undefined) => void
}

const ShowCaseInfo = ({scrollYProgress, setBg, bg, payUp}: AnimatedBackgroundProps): JSX.Element => {
  
  const firstTextClip: any = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.4],
    [
      "inset(0 0 100% 0)",
      "inset(0 0 0% 0)",
      "inset(0 0 0% 0)",
      "inset(100% 0 0 0)"
    ]
  )

  const secondTextClip: any = useTransform(
    scrollYProgress,
    [0.4, 0.65, 0.7],
    [
      "inset(0 0 100% 0)",
      "inset(0 0 0% 0)",
      "inset(100% 0 0 0)"
    ]
  )

  const thirdTextClip: any = useTransform(
    scrollYProgress,
    [0.7, 1],
    [
      "inset(0 0 100% 0)",
      "inset(0 0 0% 0)" 
    ]
  )

  const y: any = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.4],
    [100, 0, 0, -100]
  )

  const secondY: any = useTransform(
    scrollYProgress,
    [0.4, 0.65, 0.7],
    [100, 0, -100]
  )

  const thirdY: any = useTransform(
    scrollYProgress,
    [0.7, 1],
    [100, -100]
  )

  const watchScale: any = useTransform(
    scrollYProgress,
    [0, 0.05],
    [0, 1]
  )

  const firstWatchClip: any = useTransform(
    scrollYProgress,
    [0.05, 0.1515],
    [
      "inset(0 0 0% 0)",
      "inset(0 0 100% 0)"
    ]
  )

  const secondWatchClip: any = useTransform(
    scrollYProgress,
    [0.05, 0.1515],
    [
      "inset(0 0 0% 0)",
      "inset(0 0 100% 0)"
    ]
  )

  return (
    <div className='z-10 w-full h-full flex flex-col justify-between gap-21.25 items-center'>

      <div className='h-237.5 w-full relative'>

        <div className='w-full overflow-hidden uppercase text-[8.75rem] text-center font-semibold leading-35 tracking-[-0.0875rem]'>
          
          <motion.div
            style={{ clipPath: firstTextClip, y: y }}
            className="absolute inset-0 text-white mix-blend-difference"
          >
            <h1>Crafted with</h1>
            <h1>precision</h1>
          </motion.div>
          
          <motion.div
            style={{ clipPath: secondTextClip, y: secondY }}
            className="absolute inset-0 text-white mix-blend-difference"
          >
            <h1>Brantium</h1>
            <h1>Argent Prime</h1>
          </motion.div>

          <motion.div
            style={{ clipPath: thirdTextClip, y: thirdY }}
            className="absolute inset-0 text-white mix-blend-difference"
          >
            <h1>$94,499.99</h1>
          </motion.div>
        </div>

        <div>

          <motion.img
            style={{scale: watchScale, opacity: watchScale, clipPath: bg === "#0C0C0C" ? firstWatchClip : ''}}
            className='absolute h-202.5 w-360 object-cover top-40 z-10'
            src={Dark_Watch}
            alt='Picture of a wrist watch'
          />

          <motion.img
            style={{scale: watchScale, opacity: watchScale}}
            className='absolute h-202.5 w-360 object-cover top-40'
            src={Light_Watch}
            alt='Picture of a wrist watch'
          />

        </div>
      </div>

      <div className='gap-2 bg-[#FFFFFF1A] p-1.5 rounded-[2.5rem] flex items-center'>
        <button onClick={() => setBg("white")} className='h-6 w-6 bg-white rounded-full'></button>
        <button onClick={() => setBg("#0C0C0C")} className='h-6 w-6 bg-black rounded-full'></button>
      </div>

      <div
        className='flex items-center gap-1 text-black'>

        <WatchListButton onClick={(): void => payUp(Dark_Watch)}/>

      </div>

    </div>
  )
}

export default ShowCaseInfo
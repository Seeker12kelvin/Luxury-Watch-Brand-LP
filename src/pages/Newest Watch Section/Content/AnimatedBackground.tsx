import { JSX } from 'react';
import { useTransform } from 'framer-motion';
import Bg from '../../../images/NewestBg.jpg';
import styles from '../NewestWatchSection.module.css'
import { motion, MotionValue } from 'framer-motion';
import Watch from '../../../images/NewestInfo-Watch.png';
import useWindowSize from '../../../hooks/windowSize';

type AnimatedBackgroundProps = {
  scrollYProgress: MotionValue<number>
}

const WIDTH_OF_DIV = 1440
const HEIGHT_OF_DIV = 1115

const AnimatedBackground = ({scrollYProgress}: AnimatedBackgroundProps): JSX.Element => {

  const { width } = useWindowSize()

  const maxHeight: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [460, HEIGHT_OF_DIV],
    
  )
  
  const maxWidth: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [1040, width],
    
  )
  
  const widthOfDiv: MotionValue<number | string> = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [ width < 1025 ? width - 200 : "100%", width],
  )

  const scaleWatch: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [0.6, 1.4]
  )
  
  const divOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.2, 0.25],
    [0, 1]
  )

  const watchOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.7],
    [0, 1, 0]
  )

  const borderRadius: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [20, 0],
    
  );

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [-650, -1055],
    
  )

  const x: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [0, width < 1025 ? -128 : -200],
  )

  const watchBgOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 0.71],
    [0, 0, 0, 1,]
  )

  return (
    <motion.div
      style={{translateY: y, translateX: x, width: widthOfDiv, maxWidth: maxWidth, maxHeight: maxHeight, height: maxHeight, opacity: divOpacity, borderRadius}}
      className={`${styles['expand-animated-div']} bg-white mix-blend-difference will-change-transform h-full w-full max-w-260 z-[-1] py-[3.88rem] absolute bg-center flex justify-center items-center self-stretch`}>
      
      <motion.img
        style={{scale: scaleWatch, opacity: watchOpacity}}
        className='object-cover mix-blend-difference' src={Watch} alt='A picture of a brantium watch'/>

      
      <motion.div
        style={{opacity: watchBgOpacity, background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${Bg}) lightgray 50% / cover no-repeat`}}
        className='absolute top-0 w-full h-full mix-blend-difference'>
        
      </motion.div>

    </motion.div>
  )
}

export default AnimatedBackground
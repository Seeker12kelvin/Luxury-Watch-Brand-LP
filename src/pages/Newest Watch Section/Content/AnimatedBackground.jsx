import Watch from '../../../images/NewestInfo-Watch.png'
import { motion } from 'framer-motion'
import Bg from '../../../images/NewestBg.jpg'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useTransform } from 'framer-motion'


const WIDTH_OF_DIV = 1440
const HEIGHT_OF_DIV = 1200

const AnimatedBackground = ({scrollYProgress}) => {

  // const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1000;
  // const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1000;

  const maxHeight = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [460, HEIGHT_OF_DIV],
    
  )
  
  const maxWidth = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [1040, WIDTH_OF_DIV],
    
  )

  const scale = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [1, 1.2]
  )

  const scaleWatch = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [0.6, 1.4]
  )
  
  const divOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.25],
    [0, 1]
  )

  const watchOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.8],
    [0, 1, 0]
  )

  const borderRadius = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [20, 0],
    
  );

  const y = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [-650, -1050],
    
  )

  const x = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [0, -200],
  )

  const watchBgOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 0.805],
    [0, 0, 0, 1,]
  )

  return (
    <motion.div
      style={{translateY: y, translateX: x, maxWidth: maxWidth, maxHeight: maxHeight, opacity: divOpacity, borderRadius}}
      className="bg-white mix-blend-difference will-change-transform h-full max-w-260 max-h-278.75 w-full z-[0] py-[3.88rem] absolute bg-center flex justify-center items-center self-stretch">
      
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
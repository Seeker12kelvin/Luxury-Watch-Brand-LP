import Watch from '../../../images/NewestInfo-Watch.png'
import { motion } from 'framer-motion'
import Bg from '../../../images/NewestBg.jpg'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useTransform } from 'framer-motion'


const WIDTH_OF_DIV = 1440
const HEIGHT_OF_DIV = 1115

const AnimatedBackground = ({scrollYProgress}) => {

  // const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1000;
  // const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1000;

  const height = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [460, HEIGHT_OF_DIV]
  )
  
  const width = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [1040, WIDTH_OF_DIV]
  )
  
  const divOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    [0, 1]
  )

  const watchOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5],
    [0, 1]
  )

  const paddingBlock = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [62.08, 93]
  )

  const y = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [0, 0]
  )

  const borderRadius = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [20, 0]
  );

  const bottom = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [180, 0]
  )

  const x = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [0, -200]
  )

  const watchWidth = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [186, 524]
  )

  const watchHeight = useTransform(
    scrollYProgress,
    [0.5, 0.9],
    [336, 949]
  )

  return (
    <motion.div
      style={{opacity: divOpacity, height, width, translateY: y, translateX: x, bottom, borderRadius, paddingTop: paddingBlock}}
      className="bg-white mix-blend-difference -z-[1] absolute bg-center flex justify-center items-center self-stretch">
      
      <motion.img style={{opacity: watchOpacity, height: watchHeight, width: watchWidth}} className='object-cover mix-blend-difference' src={Watch} alt='A picture of a brantium watch'/>

    </motion.div>
  )
}

export default AnimatedBackground
import { JSX } from 'react';
import useWindowSize from '../../../hooks/windowSize';
import { motion, MotionValue, useTransform } from 'framer-motion';
import fill_background from '../../../images/Fill-Background.svg';

type AnimatedBackgroundProps = {
  scrollYProgress: MotionValue<number>,
  bg: string
}

const AnimatedBackground = ({scrollYProgress, bg}: AnimatedBackgroundProps): JSX.Element => {

  const { width } = useWindowSize()

  const y: any = useTransform(
    scrollYProgress,
    [0,  0.4],
    ["100%", "0%"]
  )

  return (
    <motion.img
      style={{translateY: y}}
      className={`absolute left-0 right-0 bottom-0 w-full bg-[${bg}] z-[-1] rounded-t-full`}
      src={fill_background}
    />
  )
}

export default AnimatedBackground
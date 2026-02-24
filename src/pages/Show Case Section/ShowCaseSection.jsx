import React, { useRef } from 'react'
import './ShowCaseSection.module.css'
import ShowCaseInfo from './Content/ShowCaseInfo'
import { useScroll, useSpring } from 'framer-motion';
import AnimatedBackground from './Content/AnimatedBackground';

const ShowCaseSection = () => {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.8
  })

  return (
    <section ref={ref} className='h-[500vh] w-360 relative bg-white'>
      <div className='sticky top-0 px-50 py-25 mix-blend-difference'>
        <ShowCaseInfo scrollYProgress={smoothScroll} />
        <AnimatedBackground scrollYProgress={smoothScroll} />
      </div>
    </section>
  )
}

export default ShowCaseSection
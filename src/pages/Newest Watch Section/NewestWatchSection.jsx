import React, { useEffect, useRef } from 'react'
import './NewestWatchSection.module.css'
import NewestInfo from './Content/NewestInfo'
import AnimatedBackground from './Content/AnimatedBackground'
import { useAnimationControls, useInView, useScroll, useSpring } from 'framer-motion'

const NewestWatchSection = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"] 
  })

  return (
    <section ref={ref} className='relative h-[900vh] w-360 bg-black'>
      <div className='sticky overflow-clip top-0 px-50 py-15 w-full bg-white'>
        <NewestInfo scrollYProgress={scrollYProgress} />
        <AnimatedBackground scrollYProgress={scrollYProgress}/>
      </div>
    </section>
  )
}

export default NewestWatchSection
import React, { useEffect, useRef } from 'react'
import './NewestWatchSection.module.css'
import NewestInfo from './Content/NewestInfo'
import AnimatedBackground from './Content/AnimatedBackground'
import { useAnimationControls, useInView, useScroll } from 'framer-motion'

const NewestWatchSection = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"] 
  })


  return (
    <section ref={ref} className='relative h-[300vh] w-360 bg-white'>
      <div className='sticky top-0 px-50 py-15 w-full mix-blend-difference'>
        <NewestInfo scrollYProgress={scrollYProgress} />
        <AnimatedBackground scrollYProgress={scrollYProgress}/>
      </div>
    </section>
  )
}

export default NewestWatchSection
import React, { useRef } from 'react'
import './ShowCaseSection.module.css'
import ShowCaseInfo from './Content/ShowCaseInfo'
import { useScroll } from 'framer-motion';
import AnimatedBackground from './Content/AnimatedBackground';

const ShowCaseSection = () => {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={ref} className='h-[300vh] w-full relative bg-white'>
      <div className='sticky top-0 px-50 py-25 mix-blend-difference'>
        <ShowCaseInfo scrollYProgress={scrollYProgress} />
        <AnimatedBackground scrollYProgress={scrollYProgress} />
      </div>
    </section>
  )
}

export default ShowCaseSection
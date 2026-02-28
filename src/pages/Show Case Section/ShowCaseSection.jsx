import './ShowCaseSection.module.css';
import { useRef, useState } from 'react';
import ShowCaseInfo from './Content/ShowCaseInfo';
import { useScroll, useSpring } from 'framer-motion';
import AnimatedBackground from './Content/AnimatedBackground';

const ShowCaseSection = () => {

  const ref = useRef(null)
  const [bg, setBg] = useState("[#0C0C0C]")

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
    <section ref={ref} className='h-[1100vh] w-360 relative'>
      <div className='sticky top-0 px-50 py-25 bg-white mix-blend-difference'>
        <ShowCaseInfo setBg={setBg} scrollYProgress={smoothScroll} />
        <AnimatedBackground scrollYProgress={smoothScroll} bg={bg} />
      </div>
    </section>
  )
}

export default ShowCaseSection
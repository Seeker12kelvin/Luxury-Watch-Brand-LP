import { useRef } from 'react';
import './NewestWatchSection.module.css';
import { useScroll } from 'framer-motion';
import NewestInfo from './Content/NewestInfo';
import AnimatedBackground from './Content/AnimatedBackground';

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
import { JSX, useRef } from 'react';
import { useScroll } from 'framer-motion';
import NewestInfo from './Content/NewestInfo';
import styles from './NewestWatchSection.module.css';
import AnimatedBackground from './Content/AnimatedBackground';

const NewestWatchSection = (): JSX.Element => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={ref} className='relative h-[800vh] w-full max-w-screen bg-black snap-start'>
      <div className={`${styles['sticky-div']} sticky h-278.75 overflow-clip top-0 px-50 py-15 w-full bg-white`}>
        <NewestInfo scrollYProgress={scrollYProgress}/>
        <AnimatedBackground scrollYProgress={scrollYProgress}/>
      </div>
    </section>
  )
}

export default NewestWatchSection
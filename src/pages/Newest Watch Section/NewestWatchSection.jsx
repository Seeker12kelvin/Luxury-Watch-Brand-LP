import React, { useEffect, useRef } from 'react'
import './NewestWatchSection.module.css'
import NewestInfo from './Content/NewestInfo'
import AnimatedBackground from './Content/AnimatedBackground'
import { useAnimationControls, useInView } from 'framer-motion'

const NewestWatchSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimationControls();

  useEffect(() => {
    if (!isInView) return;

    const runSequence = async () => {
      // 1️⃣ Text comes in
      await controls.start("show");

      // 2️⃣ Background fades in
      await controls.start("visible");

      // 3️⃣ Background expands + text inverts
      controls.start("expanded");
      controls.start("invert");
      controls.start("expand");
    };

    runSequence();
  }, [isInView]);


  return (
    <section ref={ref} className='h-full w-full bg-white relative px-50 py-25 overflow-hidden'>
      <AnimatedBackground controls={controls} />
      
      <NewestInfo controls={controls} />
    </section>
  )
}

export default NewestWatchSection
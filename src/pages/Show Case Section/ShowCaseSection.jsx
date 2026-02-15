import React, { useEffect, useRef } from 'react'
import './ShowCaseSection.module.css'
import ShowCaseInfo from './Content/ShowCaseInfo'
import { useAnimationControls, useInView, useScroll } from 'framer-motion';
import AnimatedBackground from './Content/AnimatedBackground';

const ShowCaseSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimationControls();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    if (!isInView) return;

    const runSequence = async () => {

      // 1️⃣ Background fades and expands in
      await controls.start("visible");

      // Button fades in
      await controls.start("appear");

      // 2️⃣ Text comes in
      await controls.start("show");

      // 3️⃣ Background expands + text inverts
      // controls.start("invert");
      // controls.start("expand");
    };

    runSequence();
  }, [isInView]);

  return (
    <section ref={ref} className='h-320.25 w-full relative mix-blend-difference bg-black overflow-hidden'>
      <ShowCaseInfo controls={controls} />
      <AnimatedBackground controls={controls} />
    </section>
  )
}

export default ShowCaseSection
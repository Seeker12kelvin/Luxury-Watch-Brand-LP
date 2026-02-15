import React, { useEffect, useRef } from 'react'
import './ShowCaseSection.module.css'
import ShowCaseInfo from './Content/ShowCaseInfo'
import { useAnimationControls, useInView } from 'framer-motion';

const ShowCaseSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimationControls();

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
    <section ref={ref} className='h-320.25 w-full relative'>
      <ShowCaseInfo controls={controls} />
    </section>
  )
}

export default ShowCaseSection
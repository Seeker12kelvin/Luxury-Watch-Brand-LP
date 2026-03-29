import { motion } from 'framer-motion';
import styles from './BestSellerSection.module.css';
import { JSX, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const BestSellerSection = (): JSX.Element => {
  
  const ref = useRef<any>(null)
  

  useGSAP(() => {
    const elements = ref.current.querySelectorAll(`.${styles['seller-ul']} div`);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: `+=${window.innerHeight * 5}`,
        scrub: true,
        pin: true,
      }
    });

    tl.to(elements, {
      color: '#ffffff',
      scale: 1.1,
      opacity: 1,
      stagger: 0.3,
      ease: 'easeIn'
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={ref} className='h-[600vh] max-[769px]:h-full max-[769px]:max-h-[350vh] w-full flex justify-center items-center bg-[#0C0C0C]'>
      <div className={`${styles['seller-ul']} sticky top-0 bottom-0 h-screen flex flex-col items-center justify-center w-full`}>
        <motion.div
          className='w-52.5 h-27.5 text-center'
          >
          <h1>OUR</h1>
        </motion.div>

        <motion.div
          className='w-52.5 h-27.5 text-center' 
          >
          <h1>BEST</h1>
        </motion.div>

        <motion.div
          className='w-52.5 h-27.5 text-center' 
          >
          <h1>SELLER</h1>
        </motion.div>
      </div>
    </section>
  )
}

export default BestSellerSection
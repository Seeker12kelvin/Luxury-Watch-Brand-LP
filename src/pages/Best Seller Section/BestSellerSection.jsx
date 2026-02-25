import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useScroll } from 'framer-motion'
import styles from './BestSellerSection.module.css'

const BestSellerSection = () => {
  
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.23) {
        setActiveIndex(0);
      } else if (latest <= 0.66) {
        setActiveIndex(1);
      } else if (latest <= 1){
        setActiveIndex(2);
      }
    });
  }, [scrollYProgress]);

  return (
    <section ref={ref} className='h-[1000vh] w-360 flex justify-center items-center bg-[#0C0C0C]'>
      <div className={`${styles['seller-ul']} sticky top-0 bottom-0 h-screen flex flex-col items-center justify-center w-full`}>
        <motion.div
          className='w-52.5 h-27.5 text-center'
          animate={{
            color: activeIndex === 0 ? '#ffffff' : '#ffffff',
            scale: activeIndex === 0 ? 1.1 : 1,
            opacity: activeIndex === 0 ? 1 : 0.1
          }}
          transition={{duration: 0.3, ease: 'easeIn'}}>
          <p>OUR</p>
        </motion.div>

        <motion.div
          className='w-52.5 h-27.5 text-center' 
          animate={{
            color: activeIndex === 1 ? '#ffffff' : '#ffffff',
            scale: activeIndex === 1 ? 1.1 : 1,
            opacity: activeIndex === 1 ? 1 : 0.1
          }}
          transition={{duration: 0.3, ease: 'easeIn'}}>
          <p>BEST</p>
        </motion.div>

        <motion.div
          className='w-52.5 h-27.5 text-center' 
          animate={{
            color: activeIndex === 2 ? '#ffffff' : '#ffffff',
            scale: activeIndex === 2 ? 1.1 : 1,
            opacity: activeIndex === 2 ? 1 : 0.1
          }}
          transition={{duration: 0.3, ease: 'easeIn'}}>
          <p>SELLER</p>
        </motion.div>
      </div>
    </section>
  )
}

export default BestSellerSection
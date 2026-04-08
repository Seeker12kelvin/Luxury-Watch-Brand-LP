import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';
import HeroInfo from './Content/HeroInfo';
import Header from '../../components/Header';
import styles from './HeroSection.module.css';
import { JSX, useRef, useState } from 'react';
import HeroFooter from './Content/HeroFooter';
import { AnimatePresence } from 'framer-motion';
import HeroProductPopUp from './Content/HeroProductPopUp';
import videoSource from '../../assets/Whisk_emyyqtn4i2yxmmzm1sm0ewytetzmrtlwatz50co.mp4';

const HeroSection = (): JSX.Element => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const open: () => void = () => setIsOpen(false)
  const close: () => void = () => setIsOpen(true)

  const videoRef = useRef<HTMLVideoElement | any>(null)
  const contentRef = useRef<HTMLElement | any>(null)
  const scrollRef = useRef<HTMLElement | any>(null)
  const scaleRef = useRef<HTMLElement | any>(null)

  useGSAP(() => {
    const video = videoRef.current
    const scroll = scrollRef.current
    const scale = scaleRef.current
    const tl = gsap.timeline()

    tl
    .fromTo('.box', {clipPath: "inset(0 0 100% 0)"}, {clipPath: "inset(0 0 0% 0)", duration: 0.5, stagger: 0.25})
    .fromTo([video, scroll], {opacity: 0}, {opacity: 1, duration: 0.5})
    .fromTo([scale], {opacity: 0}, {opacity: 1, duration: 0.5})
  }, [])

  return (
    <>
      <section className={`${styles['video-background-container']}`}>
        
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className={styles['video-element']}>
          <source src={videoSource} type="video/mp4" />
        </video>

        <div className={`${styles['bg-content-overlay']}`}></div>

        <div 
          className={`${styles['content-overlay']} flex flex-col gap-70 px-50 pb-10 w-full max-sm:px-5 max-sm:w-screen max-[1005px]:gap-50`}>

          <Header />

          <div className='h-full w-full flex flex-col gap-40 max-sm:h-full max-sm:justify-between max-[1005px]:gap-60'>
            <HeroInfo ref={contentRef} />

            <HeroFooter ref={{scrollRef, scaleRef}} closeDiv={close} />
          </div>

          <AnimatePresence>
            {isOpen && <HeroProductPopUp isOpen={isOpen} open={open} />}
          </AnimatePresence>

        </div>
      </section>
    </>
  )
}

export default HeroSection
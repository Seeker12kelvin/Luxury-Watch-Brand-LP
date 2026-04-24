import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Slider from './Content/Slider';
import type { WatchItem } from '../../data';
import { watchCollection } from '../../data';
import Background from './Content/Background';
import styles from './SlideShowSection.module.css';
import SlideShowInfo from './Content/SlideShowInfo';
import { ElementType, JSX, useContext, useEffect, useRef, useState } from 'react';
import UserContext from '../../components/userContext';

const SlideShowSection = (): JSX.Element | null | undefined => {

  const context = useContext(UserContext)
  if(!context) return
  const { sectionRef } = context

  const [hasEnteredView, setHasEnteredView] = useState(false)
  const [bg, setBg] = useState<WatchItem | null>(null)
  const [btn, setBtn] = useState<boolean>(false)
  const [increment, setIncrement] = useState<number>(-1)
  const backgroundRef = useRef<HTMLElement | null>(null)
  const parentDivRef = useRef<HTMLElement | null>(null)
  const movingBoxRef = useRef<HTMLElement | null>(null)
  const sliderRef = useRef<HTMLElement | null>(null)
  const buttonRef = useRef<HTMLElement | null>(null)
  const arrowRef = useRef<HTMLElement | null>(null)
  const spanRef = useRef<HTMLElement | null>(null)
  const h1Ref = useRef<HTMLElement | null>(null)
  const h2Ref = useRef<HTMLElement | null>(null)
  const pRef = useRef<HTMLElement | null>(null)
  const hasAnimatedRef = useRef<boolean>(false)
  
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimatedRef.current) {
        hasAnimatedRef.current = true
        setHasEnteredView(true)
      }
    },
    { threshold: 0.2 }
  )

  if (sectionRef?.current) {
    observer.observe(sectionRef.current)
  }

  return () => {
    if (sectionRef?.current) {
      observer.unobserve(sectionRef.current)
    }
  }
}, [sectionRef])
  
  useGSAP(() => {
    
    const span = spanRef.current;
    const h1 = h1Ref.current;
    const h2 = h2Ref.current;
    const para = pRef.current;
    const slider = sliderRef.current;
    const button = buttonRef.current;
    const arrow = arrowRef.current;
    const background = backgroundRef.current
    
    if (!hasEnteredView) {
      gsap.set([span, h1, h2, para], { clipPath: "inset(0 0 100% 0)" })
      gsap.set(slider, { xPercent: 100, opacity: 0})
      gsap.set([button, arrow], {opacity: 0})
    } else {

      
      const tl = gsap.timeline()
      
      tl
      .call(() => {
        if (increment === watchCollection.length) {
          setIncrement(0)
        }
        
        const data = watchCollection.find(data => data.id == increment)
        if (data) setBg(data)
        })
      .to(movingBoxRef.current, { opacity: 0, scale: 0.95, duration: 0.5 })
      .to(background, { opacity: 1, duration: 0.5 })
      .to([span, h1, h2, para], {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.2,
        stagger: 0.1
      })
      .to(slider, { xPercent: 0, opacity: 1, duration: 0.5})
      .to([button, arrow], {opacity: 1, duration: 0.5})
      .to(movingBoxRef.current, {
        opacity: 1,
        scale: 0.95,
        duration: 0.5,
        onComplete: () => setBtn(false)
      })
    }
      
  }, [increment, hasEnteredView])

  const animate = (type?: string, num?: number | any) => {
    const span = spanRef.current;
    const h1 = h1Ref.current;
    const h2 = h2Ref.current;
    const para = pRef.current;
    const background = backgroundRef.current

    const tl = gsap.timeline()

    tl
    .to([span, h1, h2, para], {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.2,
      stagger: 0.1
    })
    .to(background, { opacity: 0, duration: 0.2}, "<")
    .call(() => {
      !type ? setIncrement(num) : setIncrement(prev => type === 'add' ? prev + 1: prev - 1)
    })
  }

  return (
    <section ref={sectionRef} className={`${styles['slider-section']} h-245 max-sm:h-220 w-full overflow-hidden border bg-black relative`}>
      
      <Background bg={bg} backgroundRef={backgroundRef} />


      <div className={`${styles['content-overlay']} w-full h-full flex flex-col justify-between gap-8 absolute bg-linear-to-b from-[#0C0C0C] to-[#ffffff00]`}>

        <SlideShowInfo data={{bg, animate, increment, setIncrement, h1Ref, h2Ref, pRef, setBtn, spanRef, buttonRef, arrowRef}} />

        <Slider data={{setIncrement, increment, parentDivRef, movingBoxRef, sliderRef}}/>

      </div>
      
      
    </section>
  )
}

export default SlideShowSection

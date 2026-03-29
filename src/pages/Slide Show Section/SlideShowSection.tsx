import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Slider from './Content/Slider';
import type { WatchItem } from '../../data';
import { watchCollection } from '../../data';
import Background from './Content/Background';
import { AnimatePresence } from 'framer-motion';
import styles from './SlideShowSection.module.css';
import SlideShowInfo from './Content/SlideShowInfo';
import { ElementType, JSX, useEffect, useRef, useState } from 'react';

const SlideShowSection = (): JSX.Element | null => {

  const [bg, setBg] = useState<WatchItem | null>(null)
  const [increment, setIncrement] = useState(-1)
  const [btn, setBtn] = useState(false)
  const backgroundRef = useRef<ElementType | null>(null)
  const parentDivRef = useRef<ElementType | null>(null)
  const movingBoxRef = useRef<ElementType | null>(null)
  const spanRef = useRef<ElementType | null>(null)
  const h1Ref = useRef<ElementType | null>(null)
  const h2Ref = useRef<ElementType | null>(null)
  const pRef = useRef<ElementType | null>(null)

  const animateOut = () => {
    const tl = gsap.timeline()

    tl.to(movingBoxRef.current, {opacity: 0, scale: 0.95, duration: 0.5})
  }
  
  useGSAP(() => {
    const span = spanRef.current
    const h1 = h1Ref.current
    const h2 = h2Ref.current
    const para = pRef.current
    const background = backgroundRef.current
    const tl = gsap.timeline()

    gsap.set(background, { opacity: 0 });

    gsap.set([span, h1, para], { clipPath: "inset(0 0 100% 0)" });

    tl
    .to(background, { opacity: 1, duration: 0.25})

    .to([span, h1, h2, para], { clipPath: "inset(0 0 0% 0)", duration: 0.2, stagger: 0.1, onComplete: () => {setBtn(false)} });
  }, [increment])


  useEffect(() => {
    const loadData = () => {
      if(increment === watchCollection.length) {
        setIncrement(0)
      }
      const data: WatchItem | undefined = watchCollection.find(data => data.id == increment)
      if(!data) return
      setBg(data)
    }

    loadData()
  }, [increment])


  const animate = (type: string) => {
    const span = spanRef.current;
    const h1 = h1Ref.current;
    const h2 = h2Ref.current
    const para = pRef.current;
    const background = backgroundRef.current

    const tl = gsap.timeline()

    tl
    .to([span, h1, h2, para], {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.2,
      stagger: 0.1
    })
    .to(background, { opacity: 0, duration: 0.5, onComplete: () => {
        setIncrement(prev => type === 'add' ? prev + 1: prev - 1)
        animateOut()
      }
    })
  }
  
  return (
    <section className={`${styles['slider-section']} h-245 max-sm:h-220 w-full overflow-hidden border bg-black relative`}>
      
      <Background bg={bg} backgroundRef={backgroundRef} />

      <AnimatePresence mode="wait">

        <div className={`${styles['content-overlay']} w-full h-full flex flex-col justify-between gap-8 absolute bg-linear-to-b from-[#0C0C0C] to-[#ffffff00]`}>

          <SlideShowInfo data={{bg, animate, setBtn, increment, setIncrement, h1Ref, h2Ref, pRef, spanRef }} />

          <Slider data={{setIncrement, increment, parentDivRef, movingBoxRef}}/>

        </div>
        
      </AnimatePresence>
      
    </section>
  )
}

export default SlideShowSection

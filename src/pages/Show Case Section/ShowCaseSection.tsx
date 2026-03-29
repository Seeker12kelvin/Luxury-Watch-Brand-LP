import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { JSX, useRef, useState } from 'react';
import Dark_Watch from '../../images/Dark-Watch.png';
import Light_Watch from '../../images/Light-Watch.png';
import WatchListButton from '../../components/WatchListButton';
import fill_background from '../../images/Fill-Background.svg'

const ShowCaseSection = (): JSX.Element => {

  const [bg, setBg] = useState<string>("#0C0C0C")

  const stickyDiv = useRef<HTMLDivElement | null | any>(null)
  const darkRef = useRef<HTMLDivElement | null | any>(null)
  const lightRef = useRef<HTMLDivElement | null | any>(null)
  const lightSecondRef = useRef<HTMLDivElement | null | any>(null)
  const comeUpRef = useRef<HTMLDivElement | null | any>(null)
  const darkWatchRef = useRef<HTMLDivElement | null | any>(null)
  const lightWatchRef = useRef<HTMLDivElement | null | any>(null)
  const contentRef = useRef<HTMLDivElement | null | any>(null)
  const contentSecondRef = useRef<HTMLDivElement | null | any>(null)
  const darkFirstRef = useRef<HTMLDivElement | null | any>(null)
  const darkSecondRef = useRef<HTMLDivElement | null | any>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stickyDiv.current,
        start: 'top top',
        end: `+=${window.innerHeight * 10}`,
        scrub: true,
        pin: true
      }
    })

    tl
    .fromTo(darkWatchRef.current, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 2})
    .fromTo(lightWatchRef.current, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 2}, '<')
    .fromTo(contentRef.current, {clipPath: "inset(0 0 100% 0)", yPercent: 100}, {clipPath: "inset(0 0 0% 0)", yPercent: 0, duration: 2}, '<+=1')
    .fromTo(contentSecondRef.current, {clipPath: "inset(0 0 100% 0)", yPercent: 100}, {clipPath: "inset(0 0 0% 0)", yPercent: 0, duration: 2}, '<')
    .fromTo([comeUpRef.current, darkRef.current], {clipPath: "ellipse(80% 0% at 50% 100%)"}, {clipPath: "ellipse(100% 150% at 50% 100%)", ease: 'none', duration: 3})
    .to([lightRef.current, darkFirstRef.current], {clipPath: "inset(0 0 0% 0)", duration: 3})
    .to([lightRef.current, darkFirstRef.current], {clipPath: "inset(0 0 100% 0)", duration: 1})
    .to([lightRef.current, darkFirstRef.current], {marginTop: -280})
    .to([lightSecondRef.current, darkSecondRef.current], {clipPath: "inset(0 0 0% 0)", duration: 3})
    .to([lightSecondRef.current, darkSecondRef.current], {clipPath: "inset(0 0 100% 0)", duration: 1})
    .to([lightSecondRef.current, darkSecondRef.current], {marginTop: -280})
  })

  return (


    <section ref={stickyDiv} className='h-400 relative bg-white'>

      
      {/* Dark theme */}
      <div
        style={{zIndex: bg === 'white' ? 40 : 0}}
        className='absolute bottom-0 left-0 w-full h-full flex flex-col justify-between gap-21.25 items-center max-[481px]:gap-15 text-center py-25 px-50 max-[870px]:px-30 max-[710px]:px-8 max-[550px]:px-5'>
        
        <div ref={contentRef} className='max-h-70 max-w-260 w-full h-full overflow-hidden text-[8.75rem] 
        max-[1307px]:text-[5rem] max-[870px]:text-[5rem] max-[769px]:text-[4.2rem] 
        max-[481px]:text-[3.5rem] max-[391px]:text-[3.4rem] max-[382px]:text-[3.2rem] max-[1307px]:leading-20 max-[391px]:leading-15
        text-center font-semibold leading-35 tracking-[-0.0875rem]'>

          <div
            ref={darkFirstRef}
            className="text-black h-full uppercase">
            <h1>Crafted with</h1>
            <h1>precision</h1>
          </div>
          
          <div
            ref={darkSecondRef}
            className="text-black h-full uppercase">
            <h1>Brantium</h1>
            <h1>Argent Prime</h1>
          </div>

          <div
            className="text-black h-full max-[481px]:text-[4rem]">
            <h1>$94,499.99</h1>
          </div>

        </div>
        
        <img
          ref={darkWatchRef} className='h-202.5 max-w-360 -mt-75 object-cover max-[510px]:h-180 max-[510px]:w-full max-[481px]:h-150' src={Dark_Watch} alt='watch'/>

        <div className='gap-2 bg-[#FFFFFF1A] p-1.5 rounded-[2.5rem] flex items-center'>
          <button onClick={(): void => setBg("white")} className='h-6 w-6 bg-white rounded-full'></button>
          <button onClick={(): void => setBg("#0C0C0C")} className='h-6 w-6 bg-black rounded-full'></button>
        </div>

        <div
          className='flex items-center gap-1 bg-white'>

          <WatchListButton bg={Dark_Watch} extraStyle='text-white' background='black'/>

        </div>

      </div>


      {/* Light theme */}
      <div
        ref={darkRef}
        className='absolute bottom-0 left-0 w-full h-full flex flex-col justify-between gap-21.25 items-center max-[481px]:gap-15 text-center py-25 px-50 max-[870px]:px-30 max-[710px]:px-8 max-[550px]:px-5'>
        
        <div ref={contentSecondRef} className='max-h-70 max-w-260 w-full h-full overflow-hidden text-[8.75rem] 
        max-[1307px]:text-[5rem] max-[870px]:text-[5rem] max-[769px]:text-[4.2rem] 
        max-[481px]:text-[3.5rem] max-[391px]:text-[3.4rem] max-[382px]:text-[3.2rem] max-[1307px]:leading-20 max-[391px]:leading-15
        text-center font-semibold leading-35 tracking-[-0.0875rem]'>

          <div
            ref={lightRef}
            className="text-white h-full uppercase">
            <h1>Crafted with</h1>
            <h1>precision</h1>
          </div>
          
          <div
            ref={lightSecondRef}
            className="text-white h-full uppercase">
            <h1>Brantium</h1>
            <h1>Argent Prime</h1>
          </div>

          <div
            className="text-white h-full max-[481px]:text-[4rem]">
            <h1>$94,499.99</h1>
          </div>

        </div>
        
        <img ref={lightWatchRef} className='h-202.5 max-w-360 -mt-75 object-cover max-[510px]:h-180 max-[510px]:w-full max-[481px]:h-150' src={Light_Watch} alt='watch'/>

        <div className='gap-2 bg-[#FFFFFF1A] p-1.5 rounded-[2.5rem] flex items-center'>
          <button onClick={(): void => setBg("white")} className='h-6 w-6 bg-white rounded-full'></button>
          <button onClick={(): void => setBg("#0C0C0C")} className='h-6 w-6 bg-black rounded-full'></button>
        </div>

        <div
          className='flex items-center gap-1 bg-black'>

          <WatchListButton bg={Dark_Watch}/>

        </div>

      </div>

      <img
        ref={comeUpRef}
        style={{background: bg}}
        className={`${bg === 'white' ? 'hidden' : ''} absolute left-0 right-0 bottom-0 w-full h-full z-[-1]`}
        src={fill_background}
      />

    </section>
    

  )
}

export default ShowCaseSection

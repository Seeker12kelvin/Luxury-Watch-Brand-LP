import gsap from 'gsap';
import { JSX, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import Bg from '../../images/NewestBg.jpg';
import Watch from '../../images/NewestInfo-Watch.png';
import NewReleaseBadge from '../../components/NewReleaseDiv';
import WatchListButton from '../../components/WatchListButton';
import useWindowSize from '../../hooks/windowSize';

const NewestWatchSection = (): JSX.Element => {

  const { width, height } = useWindowSize()

  const date = new Date().getFullYear()
  const imgRef = useRef<HTMLDivElement | any>(null)
  const animatedDiv = useRef<HTMLDivElement | any>(null)
  const spanRef = useRef<HTMLDivElement | any>(null)
  const h1Ref = useRef<HTMLDivElement | any>(null)
  const pRef = useRef<HTMLDivElement | any>(null)
  const pFirstRef = useRef<HTMLDivElement | any>(null)
  const sectRef = useRef<HTMLDivElement | any>(null)
  const priceRef = useRef<HTMLDivElement | any>(null)
  const animatedBackgroundRef = useRef<HTMLDivElement | any>(null)
  const innerAnimatedDiv = useRef<HTMLDivElement | any>(null)

  useGSAP(() => {
    const img = imgRef.current
    const div = animatedDiv.current
    const span = spanRef.current
    const h1 = h1Ref.current
    const para = pRef.current
    const pFirst = pFirstRef.current
    const price = priceRef.current
    const background = animatedBackgroundRef.current

    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectRef.current,
          start: 'top top',
          end: `+=${window.innerHeight * 8}`,
          scrub: true,
          pin: true
        }
      })

    tl
    .fromTo([span, h1, para, pFirst], {clipPath: "inset(0 0 100% 0)"}, {clipPath: "inset(0 0 0% 0)", duration: 1, stagger: 0.5})
    .fromTo(div, 
      {
        opacity: 0,
        borderRadius: 20,
      },
      {
        opacity: 1,
        borderRadius: 20,
        duration: 1
      }
    )
    .fromTo(img, 
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1
      }
    )
    .fromTo(div, 
      { 
        borderRadius: 20,
        width: 1040,
        height: 460,
        y: width <= 481 ? 280 : width <= 818 ? 300 : 415
      },
      {
        borderRadius: 0,
        width: "100%",
        height: '100%',
        y: 0,
        duration: 1
      }
    )
    .to(img, {height: 336, duration: 1})
    .to(img, {height: width <= 780 ? 600 : width <= 818 ? 800 : 915, duration: 1})
    .to(img, {opacity: width <= 818 ? 1 : 0, duration: width <= 818 ? 1 : 0})
    .fromTo(div, {paddingTop: 93, paddingBottom: 93}, {paddingTop: 0, paddingBottom: 0})
    .to(background, {opacity: width <= 818 ? 0 : 1, duration: width <= 818 ? 0 : 1})
    .to(price, {opacity: 1, duration: 1})

  }, {scope: animatedDiv})


  return (
    <div ref={sectRef} className='h-278.75 max-[1024px]:max-w-screen flex items-start relative flex-col justify-between bg-white w-full z-10'>

      <div className={`max-[1024px]:py-20 max-[740px]:py-15 max-[573px]:py-10 max-[541px]:py-8  max-[1024px]:px-26 max-[740px]:px-14 max-[573px]:px-10 max-[541px]:px-8 py-25 px-50 flex flex-col justify-between h-full w-full`}>

        <div className='flex flex-col items-start max-[923px]:text-center max-[923px]:w-full max-[666px]:gap-1 max-[495px]:gap-1'>

          <div ref={spanRef} className='text-white mix-blend-difference'>

            <NewReleaseBadge text={`${date} RELEASE`} textColor={'white'} borderColor={'white'} background={'[#0A0A0A14]'}/>

          </div>

          <h1 ref={h1Ref} className='text-[4rem] uppercase mix-blend-difference text-white text-left max-w-260 w-full font-semibold not-italic max-[923px]:w-full max-[819px]:text-[3rem] max-[666px]:text-[2.5rem] max-[819px]:leading-12 max-[541px]:text-center max-[446px]:text-[2rem] max-[370px]:text-[1.7rem]'>The Brantium Grand <br/> Complication No. 1</h1>

          <p ref={pFirstRef} className='text-[1rem] mix-blend-difference text-white max-w-150 self-stretch font-light not-italic leading-[1.3rem] tracking-[-0.02rem] max-[923px]:w-full max-[923px]:text-lg max-[923px]:leading-6 max-[819px]:text-[1rem] max-[495px]:leading-5 max-[446px]:text-[0.9rem] max-[370px]:text-[0.8rem]'>An ultra-exclusive mechanical masterpiece engineered for elite collectors and long-term investors. Hand-assembled, individually numbered, and produced in strictly limited quantities.</p>

        </div>

        <div className='flex items-center justify-between w-full max-[861px]:flex-col max-[861px]:text-center max-[861px]:gap-10'>

          <p ref={pRef} className='text-[1rem] mix-blend-difference text-white max-w-150 w-full font-light not-italic leading-[1.3rem] tracking-[-0.02rem] max-[997px]:max-w-100 max-[446px]:text-[0.9rem] max-[370px]:text-[0.8rem'>Featuring a Swiss high-complication automatic movement, precious metal casework, and exhibition finishing reserved for haute horlogerie ateliers. Designed as a generational collector’s asset.</p>

          <div ref={priceRef} className='w-full h-full flex flex-col items-end gap-5 opacity-0 max-[861px]:items-center'>

            <WatchListButton bg={Watch} extraStyle={'justify-end'}/>

            <h3 className='text-[4rem] font-semibold leading-16 tracking-[-0.04rem] mix-blend-difference text-white max-[923px]:text-[3rem]'>$145,999.99</h3>

          </div>

        </div>
      </div>

      <div ref={animatedDiv} className='bg-black z-[-1] absolute self-center py-6'>
        <div ref={innerAnimatedDiv} className='h-full relative flex items-center justify-center'>

          <div
            ref={animatedBackgroundRef}
            className='absolute h-full w-screen opacity-0 inset-0'
            style={{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.20) 100%), url(${Bg}) lightgray 50% / cover no-repeat`,  backgroundPosition: 'center center'}}
          />

          <img
            ref={imgRef}
            src={Watch}
            alt='A picture of a brantium watch'
            className='h-84 object-cover aspect-37/67'
          />

        </div>
      </div>

    </div>
  )
}

export default NewestWatchSection
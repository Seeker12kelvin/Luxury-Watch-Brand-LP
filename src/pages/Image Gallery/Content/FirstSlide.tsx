import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { JSX, useRef, useState } from 'react';
import { imageGalleryInfo } from '../../../data';
import type { ImageGalleryItem } from '../../../data';
import bg_blue_brantium from '../../../images/Second-Slider-Blue-Brantium.png';

type Buttons = {
  buttons: string
}

const FirstSlide = (): JSX.Element => {
  
  const [btn, setBtn] = useState(false)
  const [bg, setBg] = useState<ImageGalleryItem>(
    {
      color: '#13386F',
      backgroundImage: bg_blue_brantium,
      header: 'CLASSIC',
      description: 'A classic leather-strap collection designed for daily elegance. With Swiss automatic movements, slim cases, and premium leather, it iss perfect for executives and collectors.',
      price: '$6,499.99'
    }
  )

  const buttons: Buttons[] = [
    {buttons: '#13386F'},
    {buttons: '#8A3946'},
    {buttons: '#1C6030'}
  ]

  const handleBgInfo = (color: string) => {
    const getInfo: ImageGalleryItem | undefined = imageGalleryInfo.find(data => data.color == color)
    if (getInfo){
      setBg(getInfo)
    }
  }

  const headingRef = useRef<HTMLHeadingElement | any>(null)
  const paragraphRef = useRef<HTMLParagraphElement | any>(null)
  const h3Ref = useRef<HTMLHeadingElement | any>(null)
  const imgRef = useRef<HTMLImageElement | any>(null)
  
  useGSAP(() => {
    const tl = gsap.timeline()
    const heading = headingRef.current
    const paragraph = paragraphRef.current
    const h3 = h3Ref.current

    gsap.set(imgRef.current, { opacity: 0 })

    gsap.set([heading, paragraph, h3], { clipPath: 'inset(0 0 100% 0)' })

    tl
    .to(imgRef.current, { opacity: 1, duration: 0.6 }, '<')

    .to([heading, paragraph, h3], { clipPath: 'inset(0 0 0% 0)', duration: 0.6, stagger: 0.1, onComplete: () => {setBtn(false)} })

  }, [bg])

  const animate = (color: string) => {

    const tl = gsap.timeline()

   tl
   .to(imgRef.current, { opacity: 0, duration: 0.6 })

   .to([headingRef.current, paragraphRef.current, h3Ref.current], { clipPath: 'inset(0 0 100% 0)', duration: 0.2, stagger: 0.1, 
    onComplete: () => {
      handleBgInfo(color)
      setBtn(true)
    }})
  }



  return (
    <div
      className='h-full w-1/2 relative overflow-hidden flex max-[1031px]:w-full max-[1031px]:h-screen'>

      <img ref={imgRef} src={bg?.backgroundImage} className='absolute z-10 h-281.25 aspect-167/181 object-cover object-center w-full max-w-full max-[1031px]:h-full' />

      <div className='absolute z-20 h-[79%] top-1/10 max-[554px]:top-10 min-[554px]:self-stretch max-[554px]:h-[90%] left-[10%] max-[554px]:left-[5%] flex flex-col justify-between text-[#FFF]'>

        <div className='flex flex-col gap-2.5'>
          <h1
            ref={headingRef}
            className='text-[64px] font-semibold leading-16 tracking-[-0.04rem] max-[490px]:text-[3rem]'>
              THE <br/> {bg?.header}
          </h1>

          <p
            ref={paragraphRef}
            className='text-[1rem] max-w-150 w-112.5 font-light leading-[1.3rem] tracking-[-0.02rem] max-[490px]:text-[0.9rem] max-[490px]:max-w-full max-[490px]:w-90'>
            {bg?.description}
          </p>
        </div>

        <div className='flex flex-col gap-8'>

          <div className='flex gap-4 items-center'>

            {buttons.map((data, index) => (
              <button
                disabled={btn}
                key={index}
                onClick={() => {
                  animate(data.buttons)
                }} 
                className={`w-6 h-6 ${btn ? 'opacity-50' : ''} ${bg?.color === data.buttons ? 'border-2 border-white' : ''} rounded-full`}
                style={{backgroundColor: data.buttons}}>
              </button>
            ))}

          </div>
          
          <h3
            ref={h3Ref}
            className='text-[64px] font-semibold leading-16 tracking-[-0.04rem] max-[490px]:text-[3rem]'>
              {bg?.price}
          </h3>

        </div>
      </div>
    </div>
  )
}

export default FirstSlide
import { JSX } from 'react';
import type { WatchItem } from '../../../data';
import { watchCollection } from '../../../data';
import styles from '../SlideShowSection.module.css';
import LeftArrow from '../../../images/LeftArrow.svg';
import RightArrow from '../../../images/RightArrow.svg';
import NewReleaseBadge from '../../../components/NewReleaseDiv';
import WatchListButton from '../../../components/WatchListButton';

type SlideShowInfoProps = {
  data: {
    bg: WatchItem | null,
    animate: (type: string) => void,
    setBtn: React.Dispatch<React.SetStateAction<boolean>>,
    setIncrement: React.Dispatch<React.SetStateAction<number>>,
    increment: number,
    h1Ref : any,
    h2Ref: any,
    pRef : any,
    spanRef : any
  }
}

const SlideShowInfo = ({data}: SlideShowInfoProps): JSX.Element => {
  
  const { bg, animate, setBtn, setIncrement, increment, h1Ref, h2Ref, pRef, spanRef } = data

  return (
    <div 
      className='h-[60%] w-full flex flex-col justify-between pt-25 px-50 
        max-[670px]:px-6 max-sm:py-5 max-[1245px]:px-30 max-[1118px]:px-20 max-[1006px]:px-20 max-sm:h-full max-[743px]:px-10'>
      <div className='w-260 flex flex-col gap-[0.6rem] max-[1013px]:w-full max-[641px]:gap-5'>
        <div ref={spanRef}>

          <NewReleaseBadge text={bg?.release} />

        </div>



        <h1
          ref={h1Ref}
          className='font-semibold'>

          {bg?.title 
          || 
          'INTRODUCING THE NEW SERIES'
          }

        </h1>



        <p
          ref={pRef}
          className={`${styles['slide-description']} w-150 text-[1rem] leading-[1.3rem] tracking-tight font-extralight max-sm:w-full max-[437px]:leading-10 max-[437px]:text-[14px]`}>

          {bg?.description 
          ||
          'Our newest series blends contemporary engineering with traditional haute horlogerie. Every model features a Swiss-made automatic movement, refined finishing, and the presence expected from a grail-level timepiece'
          }

        </p>
      </div>

      <div className='flex flex-col w-full max-[760px]:gap-[1.3em]'>

        {bg 
        && 
        (
          <div className='flex justify-between items-center self-stretch flex-1 max-[603px]:flex-col max-[375px]:flex-col max-sm:gap-2'>

            <h2
              ref={h2Ref}
              className='text-[4rem] max-sm:text-5xl max-[760px]:text-5xl'>
              {bg.price.toUpperCase()}
            </h2>

            <WatchListButton bg={bg?.img}/>

          </div>
        )}

        <div className='flex justify-between items-end-safe self-stretch h-full'>

          <div className='flex gap-2.5 h-full'>

            {Array.from({ length: watchCollection.length }, (_, i) => (
              <button
                key={i}
                onClick={() => setIncrement(i)}
                className={`${increment === i ? 'w-20 bg-[#FFFFFF] cursor-pointer' : 'w-5 bg-[#FFFFFF66]'} h-2 cursor-pointer`}
              />
            ))}

          </div>

          <div className='flex items-start gap-2 h-full'>
            <button
              onClick={() => {
                animate('subtract')
                setBtn(true)
              }}
              disabled={increment <= 0 ? true : false}
              className={`w-9 h-2 ${increment <= 0 ? 'pointer-events-none opacity-50' : 'cursor-pointer opacity-100'}`}>
              <img src={LeftArrow} alt='Left arrow' />
            </button>

            <button
              onClick={() => {
                animate('add')
                setBtn(true)
              }}
              className='w-9 h-2 cursor-pointer'>
              <img src={RightArrow} alt='Right arrow' />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SlideShowInfo
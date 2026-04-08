import { JSX } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Watch_Btn from '../../../images/Watch-Button.png';

type Props = {
  closeDiv: () => void,
  ref: any
}

const HeroFooter = ({closeDiv, ref}: Props): JSX.Element => {
  const {scrollRef, scaleRef} = ref

  return (
    <div className='w-full flex items-end justify-between'>
      <div
        ref={scrollRef}
        className='flex items-center gap-2 text-sm z-1'>
        <IoIosArrowDown />
        <p>SCROLL DOWN</p>
      </div>

      <div
        ref={scaleRef}
        onClick={() => closeDiv()}
        className='flex flex-col gap-4'>
        <div className={`relative inline-block h-30 w-30 z-1`}>
          <div
            className="relative px-1 py-1 text-white rounded-sm">

            <img
              className='h-30 w-30 object-cover'
              src={Watch_Btn} 
              alt='A picture of a watch' />

            <span className="absolute top-0 left-0 w-2 h-2
                              border-t border-l border-white" />

            <span className="absolute top-0 right-0 w-2 h-2
                              border-t border-r border-white" />

            <span className="absolute bottom-0 left-0 w-2 h-2
                              border-b border-l border-white" />

            <span className="absolute bottom-0 right-0 w-2 h-2
                              border-b border-r border-white" />
          </div>
        </div>

        <div className='flex justify-between items-center text-sm z-1'>
          <span className='underline'>01</span>
          <span>$5,499.99</span>
        </div>
      </div>
    </div>
  )
}

export default HeroFooter
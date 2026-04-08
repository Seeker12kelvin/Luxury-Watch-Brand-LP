import { JSX } from 'react';
import { Link } from 'react-router-dom';
import styles from '../HeroSection.module.css';
import { IoIosArrowRoundForward } from 'react-icons/io';

type Props = {
  ref: any
}

const HeroInfo = ({ref}: Props): JSX.Element => {

  const revealY: any = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    show: {
      clipPath: "inset(0 0 0% 0)",
      transition: { delay: 0.5, duration: 1, ease: 'easeIn' }
    }
  }

  return (
    <div ref={ref} id='hero-section' className={`h-52.75 w-fit bg-transparent z-20 text-white flex flex-col gap-6 max-sm:items-center max-sm:w-full max-sm:h-fit max-[1006px]:w-full`}>
      <div className='flex flex-col gap-2.5 max-sm:text-center max-sm:w-full max-sm:h-full max-sm:gap-4'>
        <h1
          className={`text-[4.8rem] box max-sm:w-full max-sm:text-[46px] max-sm:font-bold max-sm:text-center w-283.25 ${styles['animated-block-h1']}`}>
            A MOMENT FROZE IN TIME
        </h1>

        <p
          className={`${styles['animated-block']} box`}>
            Explore our latest collection of luxury men’s and women’s timepieces—Swiss-made, precision-engineered, and crafted with the same heritage found in icons like Rolex, Patek Philippe, and Audemars Piguet.
        </p>
      </div>
      
      <div className='flex gap-1 box items-center max-[941px]:self-center'>
        <Link
          to={'details-page'}
          target='_blank'
          className={`uppercase bg-white text-[#111111] h-9.5 py-2.5 px-3.5`}>
            JOIN THE WAITLIST
        </Link>
        <Link
          to={'details-page'}
          target='_blank'
          className={`bg-white flex items-center text-[#111111] justify-center h-9.5 w-10.5`}>
          <IoIosArrowRoundForward
            className='w-6 h-6 shrink-0'
          />
        </Link>
      </div>

    </div>
  )
}

export default HeroInfo
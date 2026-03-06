import React, { JSX } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';

const WaitlistButton = (): JSX.Element => {
  return (
    <div className='flex gap-1 items-center'>
      <button
        className='uppercase bg-white text-[#111111] h-9.5 py-2.5 px-3.5 active:scale-90'>
          JOIN THE WAITLIST
      </button>
      <button
        className='bg-white flex items-center text-[#111111] justify-center h-9.5 w-10.5 active:scale-90'>
        <IoIosArrowRoundForward
          className='w-6 h-6 shrink-0'
        />
      </button>
    </div>
  )
}

export default WaitlistButton
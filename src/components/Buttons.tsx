import { MdClose } from 'react-icons/md';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { JSX } from 'react';

export function CloseButton({ onClick, className = '' }: { onClick: () => void, className?: string }): JSX.Element {
  return (
    <button type="button" onClick={onClick} className={`bg-[#E6E6E6] w-10.5 h-10.5 flex items-center justify-center text-2xl ${className}`}>
      <MdClose />
    </button>
  );
}

export function ArrowButton({ onClick, className = '' }: { onClick: () => void, className?: string }): JSX.Element {
  return (
    <button type="button" onClick={onClick} className={`w-10.5 h-12 shrink-0 flex items-center justify-center ${className}`}>
      <IoIosArrowRoundForward className='text-2xl' />
    </button>
  );
}

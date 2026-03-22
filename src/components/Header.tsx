import Logo from './Logo';
import { JSX } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <motion.nav
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.6}}
      className='flex w-full py-3 justify-between items-center z-1'>

      <Logo />

      <div className='flex gap-1 items-center max-[375px]:hidden'>
        <Link
          to={'/details-page'}
          target='_blank'
          className={`uppercase bg-white text-[#111111] h-9.5 py-2.5 px-3.5`}>
            JOIN THE WAITLIST
        </Link>
        <Link
          to={'/details-page'}
          target='_blank'
          className={`bg-white flex items-center text-[#111111] justify-center h-9.5 w-10.5`}>
          <IoIosArrowRoundForward
            className='w-6 h-6 shrink-0'
          />
        </Link>
      </div>
    </motion.nav>
  )
}

export default Header
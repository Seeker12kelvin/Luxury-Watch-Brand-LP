import Logo from './Logo';
import { JSX } from 'react';
import { motion } from 'framer-motion';
import WaitlistButton from './WaitlistButton';

const Header = (): JSX.Element => {
  return (
    <motion.nav
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.6}}
      className='flex w-full py-3 justify-between items-center'>

      <Logo />

      <WaitlistButton />
    </motion.nav>
  )
}

export default Header
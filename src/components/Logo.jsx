import React from 'react'
import styles from './Header.module.css'
import Logo_Icon from '../assets/Subtract-Icon.png'


const Logo = () => {
  return (
    <div className='flex justify-center items-center gap-2 text-sm'>
      <img 
        className='h-5'
        src={Logo_Icon}
        alt='Logo'
      />
      <span className={`${styles['nav-logo']}`}>BRANTIUM</span>
    </div>
  )
}

export default Logo
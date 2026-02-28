import React from 'react';
import FooterInfo from './Content/FooterInfo';
import bg from '../../images/Footer-Background-Img.png';

const Footer = () => {

  return (
    <section className='h-298.25 w-360 bg-[#0C0C0C]'>
      <img src={bg} className='object-cover absolute z-0 w-full mix-blend-color-dodge' />
      <FooterInfo />
    </section>
  )
}

export default Footer
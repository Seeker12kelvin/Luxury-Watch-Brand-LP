import React from 'react'
import HeroSection from '../Hero Section/HeroSection'
import SlideShowSection from '../Slide Show Section/SlideShowSection'

const Home = () => {
  return (
    <main className='h-245 max-w-360 scroll-smooth overscroll-y-contain'>
      <HeroSection />
      <SlideShowSection />
    </main>
  )
}

export default Home
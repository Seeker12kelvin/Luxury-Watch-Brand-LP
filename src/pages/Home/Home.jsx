import React from 'react'
import HeroSection from '../Hero Section/HeroSection'
import SlideShowSection from '../Slide Show Section/SlideShowSection'
import NewestWatchSection from '../Newest Watch Section/NewestWatchSection'

const Home = () => {
  return (
    <main className='h-245 max-w-360 scroll-smooth overscroll-y-contain'>
      <HeroSection />
      <SlideShowSection />
      <NewestWatchSection />
    </main>
  )
}

export default Home
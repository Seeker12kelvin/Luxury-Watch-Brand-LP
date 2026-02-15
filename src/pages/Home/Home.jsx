import React from 'react'
import HeroSection from '../Hero Section/HeroSection'
import SlideShowSection from '../Slide Show Section/SlideShowSection'
import NewestWatchSection from '../Newest Watch Section/NewestWatchSection'
import BestSellerSection from '../Best Seller Section/BestSellerSection'
import ShowCaseSection from '../Show Case Section/ShowCaseSection'

const Home = () => {
  return (
    <main className='h-full flex flex-col items-center w-full scroll-smooth overflow-x-hidden'>
      <HeroSection />
      
      <SlideShowSection />
      
      <NewestWatchSection />
      
      <BestSellerSection />
      
      <ShowCaseSection />
    </main>
  )
}

export default Home
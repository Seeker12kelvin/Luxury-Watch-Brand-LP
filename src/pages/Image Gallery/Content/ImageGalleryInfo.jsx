import React from 'react'
import FirstSlide from './FirstSlide'
import SecondSlide from './SecondSlide'

const ImageGalleryInfo = () => {
  return (
    <div className='h-full w-full flex justify-between'>
      <FirstSlide />
      <SecondSlide />
    </div>
  )
}

export default ImageGalleryInfo
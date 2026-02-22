import React from 'react'
import ImageGalleryInfo from './Content/ImageGalleryInfo'
import { AnimatePresence } from 'framer-motion'

const ImageGallery = () => {
  return (
    <section className='h-245 w-360'>
      <AnimatePresence mode="wait">
        <ImageGalleryInfo />
      </AnimatePresence>
    </section>
  )
}

export default ImageGallery
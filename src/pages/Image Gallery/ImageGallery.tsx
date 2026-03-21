import { JSX } from 'react';
import { AnimatePresence } from 'framer-motion';
import ImageGalleryInfo from './Content/ImageGalleryInfo';

const ImageGallery = (): JSX.Element => {
  return (
    <section className='h-245 w-full'>
      <AnimatePresence mode="wait">
        <ImageGalleryInfo />
      </AnimatePresence>
    </section>
  )
}

export default ImageGallery

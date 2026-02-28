import { AnimatePresence } from 'framer-motion';
import ImageGalleryInfo from './Content/ImageGalleryInfo';

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
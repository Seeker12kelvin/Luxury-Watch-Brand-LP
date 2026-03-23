import { JSX } from 'react';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';

const ImageGalleryInfo = (): JSX.Element => {
  return (
    <div className='h-full w-full flex justify-between max-[1031px]:flex-col'>
      <FirstSlide />
      <SecondSlide />
    </div>
  )
}

export default ImageGalleryInfo
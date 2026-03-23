import { JSX } from 'react';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';

const ImageGalleryInfo = (): JSX.Element => {
  return (
    <div className='h-full w-full flex min-[1030px]:justify-between max-[1031px]:flex-col max-[554px]:h-562.5'>
      <FirstSlide />
      <SecondSlide />
    </div>
  )
}

export default ImageGalleryInfo
import { JSX } from 'react';
import styles from '../SlideShowSection.module.css';

type BackgroundProps = {
  bg: {
    id: number;
    img: string;
    title: string;
    description: string;
  } | null,
  backgroundRef: any
}

const Background = ({bg, backgroundRef}: BackgroundProps): JSX.Element => {

  return (
    <div
      ref={backgroundRef}
      className={`${styles['video-element']} bg-black text-white bg-cover max-sm:w-full`}
      style={bg ? { 
        backgroundImage: `url(${bg.img})`}
        :
        {}
      }
    >
    </div>
  )
}

export default Background
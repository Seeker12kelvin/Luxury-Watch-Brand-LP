import Watch from '../../../images/NewestInfo-Watch.png'
import { motion } from 'framer-motion'
import Bg from '../../../images/NewestBg.jpg'
import { IoIosArrowRoundForward } from 'react-icons/io'

const AnimatedBackground = ({controls}) => {

  const bgVariants = {
    hidden: {
      opacity: 0,
      height: 460,
      width: 1040,
      y: 300,
      borderRadius: 20,
    },

    visible: {
      opacity: 1,
      height: 460,
      width: 1040,
      y: 300,
      borderRadius: 20,
      transition: { duration: 1.6 },
    },

    expanded: {
      height: "100%",
      width: "100%",
      x: -200,
      y: -100,
      paddingTop: '5.81rem',
      paddingLeft: '1rem',
      borderRadius: 0,
      transition: {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      },
    },

    fadeInBackground: {
      backgroundImage: `url(${Bg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transition: {
        duration: 2,
        ease: [0.16, 1, 0.3, 1]
      },
    },

    fadeBackground: {
      opacity: 1,
      backgroundImage: `url(${Bg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transition: {
        duration: 5,
        ease: [0.16, 1, 0.3, 1]
      },
    },
  };

  const imgVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
    },

    visible: {
      opacity: 1,
      width: "11.625rem",
      height: "21rem",
      scale: 1,
      transition: { duration: 1.2 },
    },

    expanded: {
      width: "32.75rem",
      height: "59.3125rem",
      scale: 1,
      transition: { duration: 2 },
    },

    fadeOut: {
      opacity: 0,
      scale: 0.97,
      transition: { duration: 1.2 },
    },
  };

  const priceAnim = {
    hidden: {
      clipPath: "inset(0 0 100% 0)",
      color: "#000",
    },
    visible: {
      clipPath: "inset(0 0 0% 0)",
      color: "#000",
      transition: {
        delay: 7.5,
        duration: 1.2,
        ease: "easeInOut",
      },
    }
  }


  return (
   <motion.div
    variants={bgVariants}
    initial="hidden"
    animate={controls}
    className="bg-[#0C0C0C] absolute z-10 rounded-[1.25rem] bg-center flex justify-center items-center self-stretch overflow-hidden">
      
      <motion.div
        variants={imgVariants}
        initial="hidden"
        animate={controls}
        onAnimationComplete={(variants) => {
          if(variants === 'expanded') {
            controls.start('fadeOut').then(() => {
              controls.start('fadeInBackground').then(() => {
                controls.start('fadeBackground')
              })
            })
          }
        }}
        className='object-cover'
        style={{
          backgroundImage: `url(${Watch})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}></motion.div>

        <motion.div
          variants={priceAnim}
          initial="hidden"
          animate='visible'
          className='flex flex-col absolute top-[79.7%] right-50 items-end'>
          <div className='flex gap-1 items-center'>
            <button
              className='bg-[#FEFEFE] text-[#111111] text-sm py-2.5 px-3.5'>
                ADD TO WATCHLIST
            </button>
  
            <button
              className='bg-[#FEFEFE] flex items-center h-fit w-fit text-[#111111] text-sm py-2 px-2'>
              <IoIosArrowRoundForward className='text-2xl' />
            </button>
          </div>
  
          <h1 className='text-[4rem] text-white'>
            $145,999.99
          </h1>
        </motion.div>
    </motion.div>
  )
}

export default AnimatedBackground
import { motion } from 'framer-motion'
import { watchCollection } from '../../../data'

const SLIDE_WIDTH = 400
const VIEWPORT_WIDTH = 1440 // same role as wrapper.clientWidth

const Slider = ({ data }) => {
  const { activeIndex } = data

  const totalWidth = watchCollection.length * SLIDE_WIDTH
  const maxTranslateX = Math.max(totalWidth - VIEWPORT_WIDTH, 0)

  // Clamp movement exactly like GSAP
  const translateX = Math.min(activeIndex * SLIDE_WIDTH, maxTranslateX)

  return (
    /* WRAPPER (viewport) */
    <div
      className="relative overflow-hidden h-100"
      style={{ width: VIEWPORT_WIDTH }}
    >
      {/* TRACK */}
      <motion.div
        className="relative flex"
        style={{ width: totalWidth }}
        animate={{ x: -translateX }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* BORDER INDICATOR */}
        <motion.div
          className="absolute top-0 left-0 z-10 border-[0.875rem] border-[#FFFFFF1A]"
          style={{ width: SLIDE_WIDTH, height: '100%' }}
          animate={{ x: activeIndex * SLIDE_WIDTH }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* SLIDES */}
        {watchCollection.map(item => (
          <div
            key={item.id}
            className="h-100 w-100 shrink-0"
            style={{ width: SLIDE_WIDTH }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Slider

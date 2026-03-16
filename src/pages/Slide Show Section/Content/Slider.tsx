import { JSX } from "react";
import useWindowSize from "../../../hooks/windowSize";
import { watchCollection } from "../../../data";
import { motion, AnimatePresence } from "framer-motion";

const SLIDE_WIDTH = 400
const VIEWPORT_WIDTH = 1440

type SliderProps = {
  data: {
    activeIndex: number
  }
}

const Slider = ({ data }: SliderProps): JSX.Element => {
  const { activeIndex } = data
  const { width } = useWindowSize()

  const totalWidth: number = watchCollection.length * SLIDE_WIDTH
  const maxTranslateX: number = Math.max(totalWidth - width, 0)

  const isActive: boolean = activeIndex >= 0
  const translateX: number = isActive
    ? Math.min(activeIndex * SLIDE_WIDTH, maxTranslateX)
    : 0

  return (
    <div
      className="relative overflow-x-hidden h-100 max-sm:h-full"
      style={{ width: width }}
    >
      <motion.div
        className="relative flex max-sm:h-full"
        style={{ width: totalWidth }}
        animate={{ x: -translateX }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* BORDER */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="border"
              className="absolute top-0 left-0 z-10 border-[0.875rem] border-[#FFFFFF1A] max-sm:h-full"
              style={{ width: SLIDE_WIDTH, height: '100%' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: activeIndex * SLIDE_WIDTH,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>

        {/* SLIDES */}
        {watchCollection.map(item => (
          <div
            key={item.id}
            className="shrink-0 h-100 max-sm:h-full"
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
import { motion, AnimatePresence } from "framer-motion"
import { watchCollection } from "../../../data"

const SLIDE_WIDTH = 400
const VIEWPORT_WIDTH = 1440

const Slider = ({ data }) => {
  const { activeIndex } = data

  const totalWidth = watchCollection.length * SLIDE_WIDTH
  const maxTranslateX = Math.max(totalWidth - VIEWPORT_WIDTH, 0)

  const isActive = activeIndex >= 0
  const translateX = isActive
    ? Math.min(activeIndex * SLIDE_WIDTH, maxTranslateX)
    : 0

  return (
    <div
      className="relative overflow-hidden h-100"
      style={{ width: VIEWPORT_WIDTH }}
    >
      <motion.div
        className="relative flex"
        style={{ width: totalWidth }}
        animate={{ x: -translateX }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* BORDER */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="border"
              className="absolute top-0 left-0 z-10 border-[0.875rem] border-[#FFFFFF1A]"
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
            className="shrink-0 h-100"
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
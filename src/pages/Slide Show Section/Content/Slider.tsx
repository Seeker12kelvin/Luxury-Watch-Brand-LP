import { JSX } from "react";
import useWindowSize from "../../../hooks/windowSize";
import { watchCollection } from "../../../data";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const SLIDE_WIDTH = 400
const VIEWPORT_WIDTH = 1440

type SliderProps = {
  data: {
    setIncrement: (index: number) => void,
    increment: number,
    movingBoxRef : React.RefObject<any>,
    parentDivRef : React.RefObject<any>
  }
}

const Slider = ({ data }: SliderProps): JSX.Element => {
  const { increment, movingBoxRef, parentDivRef } = data
  const { width } = useWindowSize()

  const totalWidth = watchCollection.length * SLIDE_WIDTH
  const maxTranslateX = Math.max(totalWidth - width, 0)

  const isActive = increment >= 0
  const translateX = isActive ? Math.min(increment * SLIDE_WIDTH, maxTranslateX) : 0
8 
  useGSAP(() => {
    gsap.set(movingBoxRef.current, {opacity: 0, scale: 0.95})
    gsap.to(parentDivRef.current, {x: -translateX, duration: 0.5,})
    gsap.to(movingBoxRef.current, {opacity: 1, x: increment * SLIDE_WIDTH, scale: 1, duration: 0.5,})
  }, [increment])

  return (
    <div
      className="relative h-100 z-10 max-sm:h-full"
      style={{ maxWidth: width }}>
      <div
        ref={parentDivRef}
        className="relative flex max-sm:h-full"
        style={{ maxWidth: totalWidth }}>
        {isActive && (
          <div
            ref={movingBoxRef}
            className="absolute top-0 left-0 border-[0.875rem] w-full h-full border-[#FFFFFF1A]"
            style={{ maxWidth: SLIDE_WIDTH }}
          />
        )}
        
        {watchCollection.map(item => (
          <div
            key={item.id}
            className="shrink-0 h-100 max-sm:h-full"
            style={{ maxWidth: SLIDE_WIDTH }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
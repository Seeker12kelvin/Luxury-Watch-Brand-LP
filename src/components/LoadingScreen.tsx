import UserContext from "./userContext"
import React, { JSX, useContext, useEffect, useState } from "react"
import { motion, useMotionValue, animate, useTransform, MotionValue } from "framer-motion"

const LoadingScreen = (): JSX.Element => {

  const userContext = useContext(UserContext)

  if (!userContext) {
    throw new Error("UserContext is not available")
  }

  const { displayProgress, setDisplayProgress, opacity} = userContext

  const progress: MotionValue<number> = useMotionValue(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {

    const controls = animate(progress, 100, {
      duration: 4,
      ease: "easeInOut",
      onUpdate: (v) => {

        const rounded = Math.round(v)

        setDisplayProgress(rounded)

        if (rounded >= 100) {
          setComplete(true)
        }
      }
    })

    return controls.stop

  }, [])

  const angle: MotionValue<number> = useTransform(progress, [0, 100], [0, 360])

  const path: MotionValue<string> = useTransform(angle, (a) => {

    const radius: number = 140
    const center: number = 150

    const radians: number = (a - 90) * Math.PI / 180

    const x: number = center + radius * Math.cos(radians)
    const y: number = center + radius * Math.sin(radians)

    const largeArc: number = a > 180 ? 1 : 0

    return `
      M ${center} ${center}
      L ${center} ${center - radius}
      A ${radius} ${radius} 0 ${largeArc} 1 ${x} ${y}
      Z
    `
  })

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 3.5, delay: 0, ease: 'easeIn' }} 
      className={`max-sm:w-screen max-sm:h-full overflow-hidden h-full fixed left-0 max-sm:justify-start w-screen justify-self-center flex items-center justify-center opacity-${opacity}`}>

      <div className="relative">

        <svg width="700" height="700" className="max-sm:h-full max-sm:w-full overflow-hidden" viewBox="0 0 300 300">

          {/* border */}
          <circle
            cx="150"
            cy="150"
            r="140"
            stroke="#333"
            strokeWidth="1"
            fill="transparent"
          />

          {/* if complete → full white circle */}
          {complete ? (

            <circle
              cx="150"
              cy="150"
              r="140"
              fill="#D9D9D9"
            />

          ) : (

            <motion.path
              d={path}
              fill="#D9D9D9"
            />

          )}

        </svg>
        
        <div className="absolute inset-0 text-gray-300 font-serif pointer-events-none">

          <h1 className="absolute max-sm:top-[10%] top-10 mix-blend-difference left-1/2 -translate-x-1/2 text-[80px] max-sm:text-2xl">I</h1>
          <h1 className="absolute right-10 mix-blend-difference top-1/2 -translate-y-1/2 text-[80px] max-sm:text-2xl">III</h1>
          <h1 className="absolute max-sm:bottom-[10%] bottom-5 mix-blend-difference left-1/2 -translate-x-1/2 text-[80px] max-sm:text-2xl">VI</h1>
          <h1 className="absolute left-10 mix-blend-difference top-1/2 -translate-y-1/2 text-[80px] max-sm:text-2xl">IX</h1>

        </div>

        {/* center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white mix-blend-difference">

          <div className="text-5xl font-serif">
            {displayProgress}%
          </div>

          <div className="text-xs tracking-widest opacity-70">
            LOADING
          </div>

        </div>

      </div>

    </motion.div>
  )
}

export default LoadingScreen
import React, { useContext, useEffect, useState } from "react"
import { motion, useMotionValue, animate, useTransform } from "framer-motion"
import UserContext from "./userContext"

const LoadingScreen = () => {

  const { displayProgress, setDisplayProgress, opacity} = useContext(UserContext)

  const progress = useMotionValue(0)
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

  const angle = useTransform(progress, [0, 100], [0, 360])

  const path = useTransform(angle, (a) => {

    const radius = 140
    const center = 150

    const radians = (a - 90) * Math.PI / 180

    const x = center + radius * Math.cos(radians)
    const y = center + radius * Math.sin(radians)

    const largeArc = a > 180 ? 1 : 0

    return `
      M ${center} ${center}
      L ${center} ${center - radius}
      A ${radius} ${radius} 0 ${largeArc} 1 ${x} ${y}
      Z
    `
  })

  return (
    <div className={`h-screen w-360 bg-black justify-self-center flex items-center justify-center opacity-${opacity}`}>

      <div className="relative">

        <svg width="700" height="700" viewBox="0 0 300 300">

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

          <h1 className="absolute top-10 mix-blend-difference left-1/2 -translate-x-1/2 text-[80px]">I</h1>
          <h1 className="absolute right-10 mix-blend-difference top-1/2 -translate-y-1/2 text-[80px]">III</h1>
          <h1 className="absolute bottom-5 mix-blend-difference left-1/2 -translate-x-1/2 text-[80px]">VI</h1>
          <h1 className="absolute left-10 mix-blend-difference top-1/2 -translate-y-1/2 text-[80px]">IX</h1>

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

    </div>
  )
}

export default LoadingScreen
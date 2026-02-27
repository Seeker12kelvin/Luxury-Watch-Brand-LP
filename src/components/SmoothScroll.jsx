// SmoothScroll.jsx
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smooth: true,
      wheelMultiplier: 0.6,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}

export default SmoothScroll
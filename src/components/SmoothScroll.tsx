import { JSX } from "react"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

function SmoothScroll({ children }: { children: JSX.Element } ): JSX.Element {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      smoothWheel: true,
      wheelMultiplier: 0.6,
    })

    function raf(time: any) {
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
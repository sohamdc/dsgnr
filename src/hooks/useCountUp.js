import { useEffect, useRef, useState } from 'react'


export function useCountUp(end, duration = 1800) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined


    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end)
      return undefined
    }

    let frameId
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect() 

        const startTime = performance.now()
        function tick(now) {
          const progress = Math.min((now - startTime) / duration, 1)
          // const eased = 1 - Math.pow(1 - progress, 9) 


           const eased = progress < 0.5 
        ? 16 * Math.pow(progress, 5) 
        : 1 - Math.pow(-2 * progress + 2, 5) / 2
          setValue(Math.round(eased * end))
          if (progress < 1) frameId = requestAnimationFrame(tick)
        }
        frameId = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [end, duration])

  return [ref, value]
}
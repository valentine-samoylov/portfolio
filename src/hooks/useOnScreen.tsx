// useOnScreen Hook
import { useState, useEffect, MutableRefObject } from 'react'

export const useOnScreen = (ref: MutableRefObject<any>) => {
  const [isOnScreen, setOnScreen] = useState(false)

  const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
    rootMargin: '-50% 0px',
  })

  useEffect(() => {
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  })

  return isOnScreen
}

// useScrollLock Hook
import { useCallback } from 'react'

const useScrollLock = () => {
  const toggleScrollLock = useCallback((): void => {
    document.body.classList.toggle('isLocked')
  }, [])

  return toggleScrollLock
}

export default useScrollLock

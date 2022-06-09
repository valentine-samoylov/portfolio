// ScrollIndicator
import { useState, useEffect } from 'react'
import './index.scss'

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0)

  const getScrollProgress = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercent = (winScroll / pageHeight) * 100
    setScroll(scrollPercent)
  }

  useEffect(() => {
    window.addEventListener('scroll', getScrollProgress)

    return () => {
      window.removeEventListener('scroll', () => getScrollProgress)
    }
  }, [])

  return (
    <div className="scrollIndicator">
      <div className="scrollIndicator__progress" style={{ width: `${scroll}%` }}></div>
    </div>
  )
}

export default ScrollIndicator

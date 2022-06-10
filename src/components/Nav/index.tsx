// Nav
import { useState } from 'react'
import './index.scss'
import NavLink from '@/components/NavLink'
import data from '@/db/index.json'
import useScrollLock from '@/hooks/useScrollLock'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleScrollLock = useScrollLock()

  const toggle = () => {
    setIsOpen(!isOpen)
    toggleScrollLock()
  }
  const hide = () => setIsOpen(false)
  const show = () => setIsOpen(true)

  const navSvg = [
    {
      d: 'M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058',
    },
    { d: 'M 20,50 H 80' },
    {
      d: 'M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942',
    },
  ]

  return (
    <nav className="nav">
      <button
        className={`nav__btn ${isOpen ? 'isActive' : ''}`}
        title="Navigation Menu"
        type="button"
        onClick={toggle}
      >
        <svg width={40} height={40} viewBox="0 0 100 100">
          {navSvg.map((navPath, idx) => (
            <path className="nav__pathLine" d={navPath.d} key={idx} />
          ))}
        </svg>
      </button>

      <div className={`nav__body ${isOpen ? 'isOpen' : ''}`}>
        <ul className="nav__links d-f">
          {data.navLinks.map(({ navLinkId, targetId, linkText }, idx) => (
            <li className="nav__item" onClick={toggle} onBlur={hide} onFocus={show} key={idx}>
              <NavLink navLinkId={navLinkId} targetId={targetId} linkText={linkText} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav

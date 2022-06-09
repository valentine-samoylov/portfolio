// NavLink
import { FC, useContext } from 'react'
import { NavContext } from '@/context/NavContext'
import { NavLinkTypes } from '@/types'
import './index.scss'
import scrollToSection from '@/utils/scrollToSection'

const NavLink: FC<NavLinkTypes> = ({ navLinkId, targetId, linkText }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext)

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setActiveNavLinkId(navLinkId)
    scrollToSection(targetId)
  }

  return (
    <a
      className={`navLink ${activeNavLinkId === navLinkId ? 'isActive' : ''}`}
      id={navLinkId}
      href="#"
      onClick={handleClick}
    >
      {linkText}
    </a>
  )
}

export default NavLink

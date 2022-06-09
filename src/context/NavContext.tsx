// NavContext
import { useState, createContext } from 'react'
import { FC } from 'react'
import { ChildrenTypes, INavContext } from '@/types'

export const NavContext = createContext({} as INavContext)

const NavProvider: FC<ChildrenTypes> = ({ children }) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState<string>('')

  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId,
  }

  return <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
}

export default NavProvider

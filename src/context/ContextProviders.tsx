// ContextProviders
import NavContext from './NavContext'
import { FC } from 'react'
import { ChildrenTypes } from '@/types'

const ContextProviders: FC<ChildrenTypes> = ({ children }) => {
  return <NavContext>{children}</NavContext>
}

export default ContextProviders

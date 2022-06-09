// Types
import { ReactNode } from 'react'

export type ChildrenTypes = {
  children: ReactNode | ReactNode[]
}

export type HeadingTypes = {
  children: ReactNode | ReactNode[]
  id?: string
}

export type SubheadingTypes = {
  children: ReactNode | ReactNode[]
  className?: string
  variant?: string
}

export type ParagraphTypes = {
  children: ReactNode | ReactNode[]
  className?: string
}

export type BtnTypes = {
  className?: string
  as?: string
  type?: string | any
  variant?: string | any
  href?: string
  targetId?: string
  download?: boolean
  children?: ReactNode | ReactNode[]
  onClick?: () => void
}

export type LinkTypes = {
  type: string
  href: string
  children: ReactNode | ReactNode[]
}

export type NavLinkTypes = { navLinkId: string; targetId: string; linkText: string }

export type CardTypes = {
  data: {
    title: string
    text: string
    hrefDemo: string
    hrefRepo: string
    imgSrc: string
    stack: {
      icon: JSX.Element
      text: string
    }[]
  }
}

export interface INavContext {
  activeNavLinkId: string
  setActiveNavLinkId: (fn: string) => void
}

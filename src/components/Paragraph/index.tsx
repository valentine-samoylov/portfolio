// Paragraph
import { FC } from 'react'
import { ParagraphTypes } from '@/types'
import './index.scss'

const Paragraph: FC<ParagraphTypes> = ({ className, children }) => {
  return <p className={`paragraph ${className || ''}`}>{children}</p>
}

export default Paragraph

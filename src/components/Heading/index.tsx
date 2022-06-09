// Heading
import { FC } from 'react'
import { HeadingTypes } from '@/types'
import './index.scss'

const Heading: FC<HeadingTypes> = ({ id, children }) => {
  return (
    <h3 className="heading ta-c" id={id}>
      {children}
    </h3>
  )
}

export default Heading

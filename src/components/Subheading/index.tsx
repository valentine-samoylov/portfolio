// Subheading
import { FC } from 'react'
import { SubheadingTypes } from '@/types'
import './index.scss'

const subheadingProps: any = {
  variant: {
    centered: 'ta-c',
  },
}

const Subheading: FC<SubheadingTypes> = ({ className, variant, children }) => {
  return (
    <h4 className={`subheading ${className} ${subheadingProps.variant[variant] || ''}`}>
      {children}
    </h4>
  )
}

export default Subheading

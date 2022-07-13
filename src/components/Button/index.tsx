// Button
import { FC } from 'react'
import { BtnTypes } from '@/types'
import './index.scss'
import scrollToSection from '@/utils/scrollToSection'

const buttonProps: any = {
  type: {
    primary: 'button--primary',
  },

  variant: {
    reversed: 'button--reversed',
    centered: 'button--centered',
  },
}

const Button: FC<BtnTypes> = ({ as, type, variant, href, targetId, children, ...props }) => {
  const classes = `button ${buttonProps.type[type] || ''} ${buttonProps.variant[variant] || ''}`

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    scrollToSection(targetId)
  }

  return (
    <>
      {as === 'anchor' ? (
        <a className={classes} href={href || '#'} onClick={handleClick} {...props}>
          <span className="button__inner">{children}</span>
          <div className="liquid"></div>
        </a>
      ) : as === 'link' ? (
        <a className={classes} href={href || '#'} {...props}>
          <span className="button__inner">{children}</span>

          <div className="liquid"></div>
        </a>
      ) : (
        <button className={classes} {...props} type="button">
          <span className="button__inner">{children}</span>

          <div className="liquid"></div>
        </button>
      )}
    </>
  )
}

export default Button

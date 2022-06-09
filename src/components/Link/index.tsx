// Link
import { FC } from 'react'
import { LinkTypes } from '@/types'
import './index.scss'

const linkProps: any = {
  type: {
    primary: 'link--primary',
    icon: 'link--icon',
  },
}

const Link: FC<LinkTypes> = ({ type, href, children, ...props }) => {
  const classes = `link ${linkProps.type[type] || ''}`

  return (
    <a className={classes} href={href || '#'} {...props}>
      {children}
    </a>
  )
}

export default Link

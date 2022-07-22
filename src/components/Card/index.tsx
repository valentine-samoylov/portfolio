// Card (Works card)
import { FC } from 'react'
import { CardTypes } from '@/types'
import './index.scss'
import Link from '@/components/Link'
import IconView from '@/assets/images/svg/view.svg'
import IconCode from '@/assets/images/svg/code.svg'

const Card: FC<CardTypes> = ({ data }) => {
  return (
    <article className="card d-f fd-c">
      <div className="card__header">
        <img
          className="img-fl"
          src={data.imgSrc}
          alt={`${data.title} - ${data.text}`}
          loading="lazy"
        />
      </div>
      <div className="card__body">
        <div className="d-f ai-c jc-sb">
          <h4 className="card__title">{data.title}</h4>
        </div>
        <p className="card__text">{data.text}</p>
        <ul className="card__techStack d-f fxw-w">
          {data.stack.map((stackItem, idx) => (
            <li className="card__techStackItem d-f ai-c" key={idx}>
              {stackItem.icon}
              <span>{stackItem.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card__footer d-f">
        <Link type="primary" target="_blank" href={data.hrefDemo}>
          <IconView className="card__icon" title="Live demo" />
          <span className="card__linkText">Demo</span>
        </Link>
        <Link type="primary" target="_blank" href={data.hrefRepo}>
          <IconCode className="card__icon" title="Browse code" />
          <span className="card__linkText">Code</span>
        </Link>
      </div>
    </article>
  )
}

export default Card

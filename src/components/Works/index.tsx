// Works
import { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import './index.scss'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Card from '@/components/Card'
import Button from '@/components/Button'
import data from '@/db/index.json'
import IconPlus from '@/assets/images/svg/plus.svg'
import IconMinus from '@/assets/images/svg/minus.svg'
import previewLuxuryHotels from '@/assets/images/content/preview-luxury-hotels.jpg?as=webp'
import previewMountain from '@/assets/images/content/preview-mountain.jpg?as=webp'
import previewPorten from '@/assets/images/content/preview-porten.jpg?as=webp'
import previewKrypto from '@/assets/images/content/preview-krypto.jpg?as=webp'
import IconPug from '@/assets/images/svg/pug.svg'
import IconSASS from '@/assets/images/svg/sass.svg'
import IconJS from '@/assets/images/svg/js.svg'
import IconReact from '@/assets/images/svg/react.svg'
import IconAxios from '@/assets/images/svg/axios.svg'
import IconTailwind from '@/assets/images/svg/tailwindcss.svg'

const tech = [
  { icon: <IconPug />, text: 'Pug (Jade)' },
  { icon: <IconSASS />, text: 'SASS/SCSS' },
  { icon: <IconJS />, text: 'JS' },
  { icon: <IconReact />, text: 'React' },
  { icon: <IconAxios />, text: 'Axios' },
  { icon: <IconTailwind />, text: 'Tailwind CSS' },
]

const worksAssets = [
  {
    imgSrc: previewLuxuryHotels,
    stack: [tech[0], tech[1], tech[2]],
  },
  {
    imgSrc: previewMountain,
    stack: [tech[0], tech[1], tech[2]],
  },
  {
    imgSrc: previewPorten,
    stack: [tech[0], tech[1], tech[2]],
  },
  {
    imgSrc: previewKrypto,
    stack: [tech[3], tech[4], tech[5]],
  },
]

const worksData = worksAssets
  .map((item, idx) => ({
    ...item,
    ...data.works.cards[idx],
  }))
  .reverse()

const buttonProps = {
  type: 'primary',
  variant: 'centered',
}

const Works = () => {
  const worksRef = useNav('Works')
  const [itemsToShow, setItemsToShow] = useState(3)

  const showMore = () => {
    setItemsToShow(worksData.length)
  }

  const showLess = () => {
    setItemsToShow(3)
  }

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from('#worksHeading', {
      scrollTrigger: {
        trigger: '#worksHeading',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
    })

    gsap.from('.card', {
      scrollTrigger: {
        trigger: '#worksSection',
        start: 'top bottom',
        end: 'top 40%',
        scrub: 1,
      },
      scale: 0,
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <section className="works section" id="worksSection" ref={worksRef}>
      <Container>
        <Heading id="worksHeading">{data.works.heading}</Heading>
        <div className="works__content d-g">
          <div className="works__items d-g">
            {worksData.slice(0, itemsToShow).map((workItem, idx) => (
              <Card data={workItem} key={idx} />
            ))}
          </div>
        </div>
        {itemsToShow === 3 ? (
          <Button {...buttonProps} onClick={showMore}>
            <IconPlus />
            {data.works.btn.inactive}
          </Button>
        ) : (
          <Button {...buttonProps} onClick={showLess}>
            <IconMinus />
            {data.works.btn.active}
          </Button>
        )}
      </Container>
    </section>
  )
}

export default Works

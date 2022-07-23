// Works
import { useEffect } from 'react'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Keyboard, Mousewheel } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/free-mode'
import 'swiper/scss/keyboard'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import './index.scss'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Card from '@/components/Card'
import data from '@/db/index.json'
import previewLuxuryHotels from '@/assets/images/content/preview-luxury-hotels.jpg?as=webp'
import previewMountain from '@/assets/images/content/preview-mountain.jpg?as=webp'
import previewPorten from '@/assets/images/content/preview-porten.jpg?as=webp'
import previewCalc from '@/assets/images/content/preview-calc.jpg?as=webp'
import previewKrypto from '@/assets/images/content/preview-krypto.jpg?as=webp'
import IconPug from '@/assets/images/svg/pug.svg'
import IconCSS from '@/assets/images/svg/css3.svg'
import IconSASS from '@/assets/images/svg/sass.svg'
import IconJS from '@/assets/images/svg/js.svg'
import IconReact from '@/assets/images/svg/react.svg'
import IconAxios from '@/assets/images/svg/axios.svg'
import IconTailwind from '@/assets/images/svg/tailwindcss.svg'

const techIcons = [
  { icon: <IconPug />, title: 'Pug' },
  { icon: <IconCSS />, title: 'CSS' },
  { icon: <IconSASS />, title: 'SASS/SCSS' },
  { icon: <IconJS />, title: 'JS' },
  { icon: <IconReact />, title: 'React' },
  { icon: <IconAxios />, title: 'Axios' },
  { icon: <IconTailwind />, title: 'Tailwind CSS' },
]

const worksAssets = [
  {
    imgSrc: previewLuxuryHotels,
    stack: [techIcons[0], techIcons[2], techIcons[3]],
  },
  {
    imgSrc: previewMountain,
    stack: [techIcons[0], techIcons[2], techIcons[3]],
  },
  {
    imgSrc: previewPorten,
    stack: [techIcons[0], techIcons[2], techIcons[3]],
  },
  {
    imgSrc: previewCalc,
    stack: [techIcons[4], techIcons[1]],
  },
  {
    imgSrc: previewKrypto,
    stack: [techIcons[4], techIcons[5], techIcons[6]],
  },
]

const worksData = worksAssets
  .map((item, idx) => ({
    ...item,
    ...data.works.cards[idx],
  }))
  .reverse()

const Works = () => {
  const worksRef = useNav('Works')

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
      </Container>

      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={32}
        freeMode={true}
        keyboard={{
          enabled: true,
        }}
        mousewheel={{
          forceToAxis: true,
        }}
        modules={[FreeMode, Keyboard, Mousewheel]}
        breakpoints={{
          // when window width is >= 540px
          540: {
            centeredSlides: false,
          },
        }}
      >
        {worksData.map((workItem, idx) => (
          <SwiperSlide className="works__slide" key={idx}>
            <Card data={workItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Works

// Hero
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import './index.scss'
import Container from '@/components/Container'
import Button from '@/components/Button'
import data from '@/db/index.json'
import IconArrowRight from '@/assets/images/svg/arrow-right-long.svg'
import bgImage from '@/assets/images/bg/bg.png?as=webp'

const commonButtonProps = {
  as: 'anchor',
  targetId: 'aboutSection',
}

const Hero = () => {
  const heroRef = useNav('Hero')

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to('#heroSection', {
      scrollTrigger: {
        trigger: '#heroSection',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <section
      className="hero d-f ai-c ovl-07"
      id="heroSection"
      style={{ backgroundImage: `url(${bgImage})` }}
      ref={heroRef}
    >
      <Container>
        <div className="hero__inner">
          <h1 className="hero__title">
            <span className="hero__name">{data.hero.firstName}</span>
            <span className="hero__name">{data.hero.lastName}</span>
          </h1>
          <h2 className="hero__subtitle">
            <span className="hero__details">{data.hero.position}</span>
            <span className="hero__details">{data.hero.location}</span>
          </h2>
          <Button {...commonButtonProps} type="primary" variant="reversed">
            <IconArrowRight />
            {data.hero.btn.label}
          </Button>
        </div>
        <Button className="hero__scrollDown" {...commonButtonProps}></Button>
      </Container>
    </section>
  )
}

export default Hero

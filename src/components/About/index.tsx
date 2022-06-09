// About
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import './index.scss'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import data from '@/db/index.json'
import ownerPhoto from '@/assets/images/content/owner-photo.jpg?as=webp'

const About = () => {
  const aboutRef = useNav('About')

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to('#aboutSection', {
      scrollTrigger: {
        trigger: '#aboutSection',
        start: 'bottom 30%',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
    })

    gsap.from('#aboutHeading', {
      scrollTrigger: {
        trigger: '#aboutHeading',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
    })

    gsap.from('#aboutImg', {
      scrollTrigger: {
        trigger: '#aboutSection',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      scale: 0,
      opacity: 0,
    })

    gsap.from('.about__col', {
      scrollTrigger: {
        trigger: '#aboutSection',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <section className="about section" id="aboutSection" ref={aboutRef}>
      <Container>
        <Heading id="aboutHeading">{data.about.heading}</Heading>
        <div className="about__inner d-f ai-c">
          <div className="about__imgWrapper" id="aboutImg">
            <img
              className="about__img"
              src={ownerPhoto}
              alt="Photo of Valentine Samoylov"
              loading="lazy"
            />
          </div>

          <div className="about__col">
            {data.about.description.map((item, idx) => (
              <Paragraph key={idx}>{item.text}</Paragraph>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About

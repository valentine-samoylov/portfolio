// Skills
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import './index.scss'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Subheading from '@/components/Subheading'
import Paragraph from '@/components/Paragraph'
import data from '@/db/index.json'
import IconJS from '@/assets/images/svg/js.svg'
import IconTS from '@/assets/images/svg/ts.svg'
import IconReact from '@/assets/images/svg/react.svg'

const skillsIcons = [{ icon: <IconJS /> }, { icon: <IconTS /> }, { icon: <IconReact /> }]

const skillsSummaryData = data.skills.summary.map((item, idx) => ({
  ...item,
  ...skillsIcons[idx],
}))

const Skills = () => {
  const skillsRef = useNav('Skills')

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to('#skillsSection', {
      scrollTrigger: {
        trigger: '#skillsSection',
        start: 'bottom 30%',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
    })

    gsap.from('#skillsHeading', {
      scrollTrigger: {
        trigger: '#skillsHeading',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#skillsSection',
          start: 'top bottom',
          end: 'top 40%',
          scrub: true,
        },
      })
      .from('.skills__progressBar', {
        xPercent: -200,
        opacity: 0,
        stagger: 0.15,
      })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#skillsSection',
          start: 'top bottom',
          end: 'top 40%',
          scrub: true,
        },
      })
      .from('.skills__col', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
      })

    ScrollTrigger.refresh()
  }, [])

  return (
    <section className="skills section" id="skillsSection" ref={skillsRef}>
      <Container>
        <Heading id="skillsHeading">{data.skills.heading}</Heading>
        <div className="skills__inner d-g">
          <div className="skills__col skills__col--charts d-f fd-c">
            {skillsSummaryData.map((skill, idx) => (
              <div className="skills__item" key={idx}>
                <Subheading className="skills__subject d-if ai-c">
                  {skill.icon}
                  <span className="skills__chartName">{skill.name}</span>
                </Subheading>
                <div className="skills__progress">
                  <div className="skills__progressBar" style={{ width: `${skill.progressed}` }} />
                  <div className="skills__label">{skill.progressed}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills__col" id="skillsText">
            <Subheading variant="centered">{data.skills.subheading}</Subheading>
            <Paragraph>{data.skills.other}</Paragraph>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills

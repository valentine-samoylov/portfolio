// Contacts
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import './index.scss'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Subheading from '@/components/Subheading'
import Social from '@/components/Social'
import Link from '@/components/Link'
import data from '@/db/index.json'
import IconPhone from '@/assets/images/svg/phone.svg'
import IconMail from '@/assets/images/svg/mail.svg'

const contactsIcons = [
  { icon: <IconPhone /> },
  {
    icon: <IconMail />,
  },
]

const contactsData = data.contacts.links.map((item, idx) => ({
  ...item,
  ...contactsIcons[idx],
}))

const Contacts = () => {
  const contactRef = useNav('Contacts')

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from('#contactsHeading', {
      scrollTrigger: {
        trigger: '#contactsHeading',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
    })

    gsap.from('.contacts__inner', {
      scrollTrigger: {
        trigger: '#contactsSection',
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
    <section className="contacts section ta-c" id="contactsSection" ref={contactRef}>
      <Container>
        <Heading id="contactsHeading">{data.contacts.heading}</Heading>
        <div className="contacts__inner">
          <Subheading variant="centered">{data.contacts.subheading}</Subheading>
          <ul className="contacts__list">
            {contactsData.map((contact, idx) => (
              <li className="contacts__item" key={idx}>
                <Link type="primary" href={contact.href}>
                  {contact.icon}
                  {contact.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Social />
      </Container>
    </section>
  )
}

export default Contacts

// HomePage
import { useEffect } from 'react'
import Layout from '@/layouts/Layout'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import Download from '@/components/Download'
import Contacts from '@/components/Contacts'
import ContextProviders from '@/context/NavContext'
import setDynamicVH from '@/utils/setDynamicVH'

const HomePage = () => {
  useEffect(() => {
    window.addEventListener('load', setDynamicVH)
    window.addEventListener('resize', setDynamicVH)

    return () => {
      window.removeEventListener('load', () => setDynamicVH)
      window.removeEventListener('resize', () => setDynamicVH)
    }
  }, [])

  return (
    <ContextProviders>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Download />
        <Contacts />
      </Layout>
    </ContextProviders>
  )
}

export default HomePage

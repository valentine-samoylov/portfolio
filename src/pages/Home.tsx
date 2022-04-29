// Home
import { useEffect } from 'react'
import ContextProviders from '@/context/ContextProviders'
import Layout from '@/layouts/Layout'
import setDynamicVH from '@/utils/setDynamicVH'
import LogoWebpack from '@/assets/images/svg/webpack.svg'
import LogoReact from '@/assets/images/svg/react.svg'
import LogoSASS from '@/assets/images/svg/sass.svg'
import LogoTS from '@/assets/images/svg/ts.svg'

const Home: React.FC = () => {
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
        <section>
          <div className="container">
            <h1 className="d-f ai-c jc-c">
              <LogoWebpack /> Webpack Boilerplate (<LogoReact />
              React + <LogoTS /> TypeScript + <LogoSASS /> SASS)
            </h1>
          </div>
        </section>
      </Layout>
    </ContextProviders>
  )
}

export default Home

// Layout
import { FC } from 'react'
import { ChildrenTypes } from '@/types'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

const Layout: FC<ChildrenTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}

export default Layout

// Layout
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

type Props = {
  children: JSX.Element
}

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout

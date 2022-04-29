// Footer
import './index.scss'
import Container from '@/components/Container'
import IconHeart from '@/assets/images/svg/heart.svg'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__copyright d-f jc-c ai-c">
          <span className="footer__label">Coded with</span>
          <IconHeart className="footer__icon" />
          <span className="footer__label">by Valentine Samoylov</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

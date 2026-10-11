import { ctaContent } from '../data/content'
import logo from '../assets/Logo.svg'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import styles from './CtaBanner.module.css'

function CtaBanner() {
  return (
    <section className={styles.banner} aria-labelledby="cta-title">
     
      <img className={styles.bigLogo} src={logo} alt="" />

      <div className={styles.canvas}>
        <Reveal as="h2" id="cta-title" className={styles.heading}>
          {ctaContent.headingLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </Reveal>

        <Button href={ctaContent.buttonHref} className={styles.button}>
          {ctaContent.buttonLabel}
        </Button>

        <Reveal className={styles.hands} delay={0.15}>
          {ctaContent.hands.map((hand) => (
            <img
              key={hand.id}
              src={hand.src}
              alt={hand.alt}
              width="123"
              height="195"
              loading="lazy"
              decoding="async"
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default CtaBanner
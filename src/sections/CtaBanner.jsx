import { ctaContent } from '../data/content'
import logo from '../assets/logo.svg'
import Button from '../components/Button'
import styles from './CtaBanner.module.css'

function CtaBanner() {
  return (
    <section className={styles.banner} aria-labelledby="cta-title">
      {/* Large cropped logo: decorative, so no alt text */}
      <img className={styles.bigLogo} src={logo} alt="" />

      <div className={styles.canvas}>
        <h2 id="cta-title" className={styles.heading}>
          {ctaContent.headingLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <Button href={ctaContent.buttonHref} className={styles.button}>
          {ctaContent.buttonLabel}
        </Button>

        <div className={styles.hands}>
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
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
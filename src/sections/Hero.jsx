import { heroContent } from '../data/content'
import shapes from '../assets/hero-shapes.svg'
import mouse from '../assets/mouse.svg'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stage}>
        <div className={styles.canvas}>
          <img className={styles.shapes} src={shapes} alt="" aria-hidden="true" />

          <h1 id="hero-title" className={styles.title}>
            {heroContent.title}
          </h1>

          <div className={styles.hands}>
            {heroContent.hands.map((hand) => (
              <img key={hand.id} src={hand.src} alt={hand.alt} width="245" height="388" />
            ))}
          </div>
        </div>
      </div>

      <a href="#contact" className={styles.scroll} aria-label={heroContent.scrollLabel}>
        <img src={mouse} alt="" width="64" height="64" />
      </a>
    </section>
  )
}

export default Hero
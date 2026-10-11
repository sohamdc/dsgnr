import { m } from 'framer-motion'
import { heroContent } from '../data/content'
import shapes from '../assets/hero-shapes.svg'
import mouse from '../assets/mouse.svg'
import styles from './Hero.module.css'


const handVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.25 + index * 0.12, ease: [0.2, 0.7, 0.2, 1] },
  }),
}

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
            {heroContent.hands.map((hand, index) => (
              <m.img
                key={hand.id}
                src={hand.src}
                alt={hand.alt}
                width="245"
                height="388"
                variants={handVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              />
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
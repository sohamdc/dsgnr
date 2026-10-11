import { brandsContent } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import styles from './Brands.module.css'

function Brands() {
  return (
    <section id="clients" className={styles.brands} aria-labelledby="brands-title">
      <div className="container">
        <div className={styles.headingBox}>
          <SectionHeading id="brands-title">{brandsContent.heading}</SectionHeading>
        </div>

        <ul className={styles.grid}>
          {brandsContent.logos.map((logo, index) => (
            <Reveal as="li" key={logo.id} className={styles.cell} delay={(index % 4) * 0.08}>
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                style={{ '--w': logo.width }}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Brands
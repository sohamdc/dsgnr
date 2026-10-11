import { brandsContent } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import styles from './Brands.module.css'

function Brands() {
  return (
    <section id="clients" className={styles.brands} aria-labelledby="brands-title">
      <div className="container">
        <div className={styles.headingBox}>
          <SectionHeading id="brands-title">{brandsContent.heading}</SectionHeading>
        </div>

        <ul className={styles.grid}>
          {brandsContent.logos.map((logo) => (
            <li key={logo.id} className={styles.cell}>
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                style={{ '--w': logo.width }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Brands
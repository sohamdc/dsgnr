import Reveal from './Reveal'
import styles from './SectionHeading.module.css'

function SectionHeading({ id, align = 'center', children }) {
  return (
    <Reveal as="h2" id={id} className={`${styles.heading} ${styles[align]}`}>
      {children}
    </Reveal>
  )
}

export default SectionHeading
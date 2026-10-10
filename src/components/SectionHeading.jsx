import styles from './SectionHeading.module.css'

function SectionHeading({ id, align = 'center', children }) {
  return (
    <h2 id={id} className={`${styles.heading} ${styles[align]}`}>
      {children}
    </h2>
  )
}

export default SectionHeading
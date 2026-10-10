import { useCountUp } from '../hooks/useCountUp'
import styles from './StatItem.module.css'

function StatItem({ end, suffix, label }) {
  const [ref, count] = useCountUp(end)
  const finalText = `${end}${suffix}`

  return (
    <li className={styles.item}>
      <span className="visually-hidden">{finalText}</span>

      <span ref={ref} className={styles.number} aria-hidden="true">
        
        <span className={styles.sizer}>{finalText}</span>
        <span className={styles.live}>
          {count}
          {suffix}
        </span>
      </span>

      <span className={styles.label}>{label}</span>
    </li>
  )
}

export default StatItem
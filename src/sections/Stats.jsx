import { statsContent } from '../data/content'
import StatItem from '../components/StatItem'
import styles from './Stats.module.css'

function Stats() {
  return (
    <section className={styles.stats} aria-label="Our numbers">
      <div className="container">
        <ul className={styles.list}>
          {statsContent.map((stat) => (
            <StatItem key={stat.id} end={stat.end} suffix={stat.suffix} label={stat.label} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Stats
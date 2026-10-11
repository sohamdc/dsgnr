import { footerContent } from '../data/content'
import logo from '../assets/logo.svg'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <a href="#top" className={styles.logo}>
            <img src={logo} alt="dsgnr. - back to top" />
          </a>
          <p className={styles.description}>{footerContent.description}</p>

          <a className={styles.emailBox} href={`mailto:${footerContent.email}`}>
            <img src={footerContent.emailIcon} alt="" width="30" height="30" />
            <span>{footerContent.email}</span>
          </a>
        </div>

        {footerContent.columns.map((column) => {
          const titleId = `footer-${column.id}`
          return (
            <nav key={column.id} className={styles.column} aria-labelledby={titleId}>
              <h2 id={titleId} className={styles.columnTitle}>
                {column.title}
              </h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          )
        })}
      </div>

      <div className={`container ${styles.bottom}`}>
        <ul className={styles.legal}>
          {footerContent.legal.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <ul className={styles.social}>
          {footerContent.social.map((item) => (
            <li key={item.id}>
              {/* Icon-only links need an accessible name, so aria-label */}
              <a href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer">
                <img src={item.icon} alt="" style={{ '--w': item.width }} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
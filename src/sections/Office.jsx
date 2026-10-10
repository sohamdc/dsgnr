import { officeContent as office } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import styles from './Office.module.css'

function Office() {
  return (
    <section id="office" className={styles.office} aria-labelledby="office-title">
      <div className="container">
        <SectionHeading id="office-title">{office.heading}</SectionHeading>

        <div className={styles.photoWrap}>
          <img
            className={styles.photo}
            src={office.photo.src}
            srcSet={office.photo.srcSet}
            sizes="(min-width: 1728px) 1528px, 88vw"
            alt={office.photo.alt}
            width="1528"
            height="677"
            loading="lazy"
            decoding="async"
          />

          <div className={styles.card}>
            <h3 className={styles.city}>{office.city}</h3>

            <address className={styles.address}>
              <p className={styles.street}>
                {office.street}
                <br />
                {office.region}
              </p>
              <p className={styles.contact}>
                <a className={styles.email} href={`mailto:${office.email}`}>
                  {office.email}
                </a>
                <br />
                <a href={`tel:${office.phoneHref}`}>{office.phone}</a>
              </p>
            </address>

            <a
              className={styles.directions}
              href={office.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {office.directionsLabel}
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 10h13m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Office
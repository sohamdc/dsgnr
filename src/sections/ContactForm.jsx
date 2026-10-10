import { contactContent } from '../data/content'
import { useContactForm } from '../hooks/useContactForm'
import SectionHeading from '../components/SectionHeading'
import Field from '../components/Field'
import Button from '../components/Button'
import styles from './ContactForm.module.css'

function ContactForm() {
  const { values, errors, status, handleChange, handleBlur, handleSubmit } = useContactForm()
  const isSending = status === 'sending'

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.card}>
          <img
            src={contactContent.illustration.src}
            alt={contactContent.illustration.alt}
            width="378"
            height="656"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <div className={styles.headingBox}>
            <SectionHeading id="contact-title" align="right">
              {contactContent.heading}
            </SectionHeading>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate aria-busy={isSending}>
            {contactContent.fields.map((field) => (
              <Field
                key={field.name}
                {...field}
                value={values[field.name]}
                error={errors[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}

            <Button type="submit" className={styles.submit} disabled={isSending}>
              {isSending ? contactContent.sendingLabel : contactContent.submitLabel}
            </Button>

            {/* Always in the page so screen readers announce the text when it appears */}
            <p className={styles.status} data-state={status} role="status" aria-live="polite">
              {status === 'success' && contactContent.successMessage}
              {status === 'error' && contactContent.errorMessage}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
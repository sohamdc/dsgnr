import { AnimatePresence, m } from 'framer-motion'
import { contactContent } from '../data/content'
import { useContactForm } from '../hooks/useContactForm'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Field from '../components/Field'
import Button from '../components/Button'
import styles from './ContactForm.module.css'

const statusMessages = {
  success: contactContent.successMessage,
  error: contactContent.errorMessage,
}

function ContactForm() {
  const { values, errors, status, handleChange, handleBlur, handleSubmit } = useContactForm()
  const isSending = status === 'sending'
  const statusMessage = statusMessages[status]

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.card}>
          <img
            src={contactContent.illustration.src}
            alt={contactContent.illustration.alt}
            width="378"
            height="656"
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <div>
          <div className={styles.headingBox}>
            <SectionHeading id="contact-title" align="right">
              {contactContent.heading}
            </SectionHeading>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate aria-busy={isSending}>
            {contactContent.fields.map((field, index) => (
              <Field
                key={field.name}
                {...field}
                value={values[field.name]}
                error={errors[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                revealDelay={index * 0.09}
              />
            ))}

            <Button type="submit" className={styles.submit} disabled={isSending}>
              {isSending ? contactContent.sendingLabel : contactContent.submitLabel}
            </Button>

         
            <p className={styles.status} data-state={status} role="status" aria-live="polite">
              <AnimatePresence mode="wait">
                {statusMessage && (
                  <m.span
                    key={status}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {statusMessage}
                  </m.span>
                )}
              </AnimatePresence>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
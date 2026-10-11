import { AnimatePresence, m } from 'framer-motion'
import Reveal from './Reveal'
import styles from './Field.module.css'


function Field({ name, label, type = 'text', value, error, onChange, onBlur, autoComplete, revealDelay = 0 }) {
  const id = `field-${name}`
  const errorId = `${id}-error`
  const isTextarea = type === 'textarea'
  const Control = isTextarea ? 'textarea' : 'input'

  return (
    <Reveal delay={revealDelay} className={`${styles.field} ${isTextarea ? styles.textarea : ''}`}>
      <Control
        id={id}
        name={name}
        type={isTextarea ? undefined : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder=" "
        required
        aria-required="true"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={styles.control}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
        <span aria-hidden="true">*</span>
      </label>

    
      <AnimatePresence>
        {error && (
          <m.p
            key="error"
            id={errorId}
            className={styles.error}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </m.p>
        )}
      </AnimatePresence>
    </Reveal>
  )
}

export default Field
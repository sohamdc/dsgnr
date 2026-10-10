import styles from './Field.module.css'

// One input or textarea with a floating label and an error message linked for screen readers.
function Field({ name, label, type = 'text', value, error, onChange, onBlur, autoComplete }) {
  const id = `field-${name}`
  const errorId = `${id}-error`
  const isTextarea = type === 'textarea'
  const Control = isTextarea ? 'textarea' : 'input'

  return (
    <div className={`${styles.field} ${isTextarea ? styles.textarea : ''}`}>
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
      {/* The label comes after the control so CSS can react to its focus and filled state */}
      <label htmlFor={id} className={styles.label}>
        {label}
        <span aria-hidden="true">*</span>
      </label>
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default Field
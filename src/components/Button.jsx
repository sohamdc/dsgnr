import styles from './Button.module.css'

function Button({ children, className = '', href, ...props }) {
  const classes = `${styles.button} ${className}`

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
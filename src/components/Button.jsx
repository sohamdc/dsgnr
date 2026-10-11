import { m } from 'framer-motion'
import styles from './Button.module.css'


function Button({ children, className = '', href, ...props }) {
  const classes = `${styles.button} ${className}`
  const tap = props.disabled ? undefined : { scale: 0.97 }

  if (href) {
    return (
      <m.a className={classes} href={href} whileTap={tap} {...props}>
        {children}
      </m.a>
    )
  }

  return (
    <m.button className={classes} whileTap={tap} {...props}>
      {children}
    </m.button>
  )
}

export default Button
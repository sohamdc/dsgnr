import { useEffect, useRef, useState } from 'react'
import { m } from 'framer-motion'
import { navLinks } from '../data/content'
import logo from '../assets/logo.svg'
import styles from './Header.module.css'


const listVariants = {
  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
}

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 },
}

function Header() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)


  useEffect(() => {
    if (!open) return

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} onClick={() => setOpen(false)}>
          <img src={logo} alt="dsgnr." width="84" height="28" />
        </a>

        <button
          ref={buttonRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <span className={styles.bars} data-open={open} aria-hidden="true" />
        </button>
      </div>

      <nav id="site-menu" className={styles.menu} data-open={open} aria-label="Main">
        <m.ul variants={listVariants} initial={false} animate={open ? 'open' : 'closed'}>
          {navLinks.map((link) => (
            <m.li key={link.label} variants={itemVariants}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </m.li>
          ))}
        </m.ul>
      </nav>
    </header>
  )
}

export default Header
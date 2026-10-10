import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/content'
import logo from '../assets/logo.svg'
import styles from './Header.module.css'

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
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
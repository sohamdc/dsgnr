import { m } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function Reveal({ as = 'div', delay = 0, children, ...props }) {
  const Component = m[as]

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Reveal
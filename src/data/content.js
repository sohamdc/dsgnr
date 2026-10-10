import handPointing from '../assets/hand-pointing.webp'
import handFist from '../assets/hand-fist.webp'
import handSpotted from '../assets/hand-spotted.webp'
import illustration from '../assets/illustration.webp'
import office764 from '../assets/office-764.webp'
import office1528 from '../assets/office-1528.webp'

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Contact', href: '#contact' },
  { label: 'Office', href: '#office' },
  { label: 'Clients', href: '#clients' },
]

export const heroContent = {
  title: 'We would love to hear from you.',
  scrollLabel: 'Scroll to the contact form',
  // alt is empty because these are decorative images
  hands: [
    { id: 'pointing', src: handPointing, alt: '' },
    { id: 'fist', src: handFist, alt: '' },
    { id: 'spotted', src: handSpotted, alt: '' },
  ],
}

export const contactContent = {
  heading: "We'd love to hear from you",
  illustration: {
    src: illustration,
    alt: 'Two illustrated designers standing side by side',
  },
  fields: [
    { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    { name: 'website', label: 'Website URL', type: 'url', autoComplete: 'url' },
    { name: 'details', label: 'Project Details', type: 'textarea' },
  ],
  submitLabel: 'Send Proposal',
  sendingLabel: 'Sending...',
  successMessage: 'Thank you! Your proposal has been sent. We will be in touch soon.',
  errorMessage: 'Something went wrong while sending. Please try again.',
}

const address = {
  city: 'New York, USA',
  street: '7626 W. 8th St.',
  region: 'Massapequa, NY 11758',
  email: 'info@dsgnr.com',
  phone: '(543)890 98',
  phoneHref: '54389098',
}

export const officeContent = {
  heading: 'Come stop by our office sometime',
  photo: {
    src: office1528,
    srcSet: `${office764} 764w, ${office1528} 1528w`,
    alt: 'The dsgnr. office lounge with yellow and red chairs',
  },
  ...address,
  directionsLabel: 'Get Directions',
  directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${address.street}, ${address.region}`,
  )}`,
}

export const statsContent = [
  { id: 'clients', end: 350, suffix: ' +', label: 'Clients Worldwide' },
  { id: 'team', end: 20, suffix: ' +', label: 'Team Members' },
  { id: 'projects', end: 100, suffix: ' +', label: 'Projects Completed' },
  { id: 'revenue', end: 85, suffix: 'M +', label: 'Revenue Generated' },
]
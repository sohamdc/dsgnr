import handPointing from '../assets/hand-pointing.webp'
import handFist from '../assets/hand-fist.webp'
import handSpotted from '../assets/hand-spotted.webp'
import illustration from '../assets/illustration.webp'
import office764 from '../assets/office-764.webp'
import office1528 from '../assets/office-1528.webp'
import spotify from '../assets/brands/spotify.svg'
import dropbox from '../assets/brands/dropbox.svg'
import tesla from '../assets/brands/tesla.svg'
import reddit from '../assets/brands/reddit.svg'
import google from '../assets/brands/google.svg'
import stripe from '../assets/brands/stripe.svg'
import dhl from '../assets/brands/dhl.svg'
import airbnb from '../assets/brands/airbnb.svg'
import ctaHandOk from '../assets/cta-hand-ok.webp'
import ctaHandPeace from '../assets/cta-hand-peace.webp'
import ctaHandRock from '../assets/cta-hand-rock.webp'
import twitterIcon from '../assets/icons/twitter.svg'
import facebookIcon from '../assets/icons/facebook.svg'
import googlePlusIcon from '../assets/icons/google-plus.svg'
import emailIcon from '../assets/icons/email.svg'

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


export const brandsContent = {
  heading: 'We worked with the world’s biggest brands and the most innovative startups',
  // width = the logo's width in Figma px (change a number here if a logo looks too small or big)
  logos: [
    { id: 'spotify', name: 'Spotify', src: spotify, width: 211 },
    { id: 'dropbox', name: 'Dropbox', src: dropbox, width: 216 },
    { id: 'tesla', name: 'Tesla', src: tesla, width: 232 },
    { id: 'reddit', name: 'Reddit', src: reddit, width: 186 },
    { id: 'google', name: 'Google', src: google, width: 179 },
    { id: 'stripe', name: 'Stripe', src: stripe, width: 150 },
    { id: 'dhl', name: 'DHL', src: dhl, width: 218 },
    { id: 'airbnb', name: 'Airbnb', src: airbnb, width: 210 },
  ],
}

export const ctaContent = {
  headingLines: ['Grow Your Business.', 'Build Great Products.'],
  buttonLabel: 'Book a free call',
  buttonHref: `mailto:${address.email}?subject=${encodeURIComponent('Book a free call')}`,
  hands: [
    { id: 'ok', src: ctaHandOk, alt: '' },
    { id: 'peace', src: ctaHandPeace, alt: '' },
    { id: 'rock', src: ctaHandRock, alt: '' },
  ],
}

export const footerContent = {
  description: 'Dsgnr. is an award winning creative and design agency based in New York, USA.',
  email: address.email,
  emailIcon,
  columns: [
    {
      id: 'what-we-do',
      title: 'What We Do',
      links: [
        { label: 'Intro', href: '#top' },
        { label: 'Home', href: '#top' },
        { label: 'Work', href: '#clients' },
        { label: 'Pricing', href: '#contact' },
        { label: 'Contact Us', href: '#contact' },
      ],
    },
    {
      id: 'who-we-are',
      title: 'Who We Are',
      links: [
        { label: 'About', href: '#office' },
        { label: 'News', href: '#top' },
        { label: 'Testimonials', href: '#clients' },
      ],
    },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#top' },
    { label: 'Terms', href: '#top' },
  ],
  social: [
    { id: 'twitter', label: 'Twitter', href: 'https://twitter.com', icon: twitterIcon, width: 25 },
    { id: 'facebook', label: 'Facebook', href: 'https://facebook.com', icon: facebookIcon, width: 14 },
    { id: 'google-plus', label: 'Google+', href: 'https://plus.google.com', icon: googlePlusIcon, width: 37 },
  ],
}
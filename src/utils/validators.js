export const MIN_DETAILS = 20

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// new URL() throws if the text isn't a real URL, so we use it as the check.
function isValidUrl(value) {
  try {
    const url = new URL(value)
    return (url.protocol === 'http:' || url.protocol === 'https:') && url.hostname.includes('.')
  } catch {
    return false
  }
}

// Returns an error message, or '' when the value is fine.
export function validateField(name, rawValue) {
  const value = rawValue.trim()

  switch (name) {
    case 'name':
      return value ? '' : 'Please enter your name.'
    case 'email':
      if (!value) return 'Please enter your email.'
      return EMAIL_PATTERN.test(value) ? '' : 'Please enter a valid email address.'
    case 'website':
      if (!value) return 'Please enter your website URL.'
      return isValidUrl(value) ? '' : 'Please enter a valid URL, for example https://example.com.'
    case 'details':
      if (!value) return 'Please tell us about your project.'
      return value.length >= MIN_DETAILS
        ? ''
        : `Please write at least ${MIN_DETAILS} characters (${value.length}/${MIN_DETAILS}).`
    default:
      return ''
  }
}

export function validateAll(values) {
  return Object.fromEntries(Object.keys(values).map((name) => [name, validateField(name, values[name])]))
}
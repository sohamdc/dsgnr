import { useState } from 'react'
import { validateField, validateAll } from '../utils/validators'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'
const EMPTY_VALUES = { name: '', email: '', website: '', details: '' }

export function useContactForm() {
  const [values, setValues] = useState(EMPTY_VALUES)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  function handleChange(e) {
    const { name, value } = e.target
    setValues((current) => ({ ...current, [name]: value }))

    // After a field has been touched, its error updates live while typing.
    if (touched[name]) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value) }))
    }
    if (status !== 'sending') setStatus('idle') // hide an old success/error message
  }

  // Validate when the user leaves a field. Nothing is shown before they touch it.
  function handleBlur(e) {
    const { name, value } = e.target
    setTouched((current) => ({ ...current, [name]: true }))
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget

    // Validate everything again on submit and mark every field as touched.
    const allErrors = validateAll(values)
    setErrors(allErrors)
    setTouched({ name: true, email: true, website: true, details: true })

    const firstInvalid = Object.keys(allErrors).find((name) => allErrors[name])
    if (firstInvalid) {
      form.elements.namedItem(firstInvalid)?.focus() // keyboard users land on the first problem
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`)

      setValues(EMPTY_VALUES) // success clears the form
      setErrors({})
      setTouched({})
      setStatus('success')
    } catch {
      setStatus('error') // failure keeps what the user typed
    }
  }

  return { values, errors, status, handleChange, handleBlur, handleSubmit }
}
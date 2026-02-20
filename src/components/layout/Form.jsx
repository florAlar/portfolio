import { useState } from 'react'
import '../../pages/ContactPage/ContactPage.css'

const FORMSPREE_URL = 'https://formspree.io/f/mjgewwpg' // ← tu endpoint

const initialForm = {
  name: '',
  email: '',
  message: ''
}

const ContactForm = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle') 
  // idle | loading | success | error

  const validate = (values) => {
    const errors = {}

    if (!values.name.trim()) {
      errors.name = 'El nombre es obligatorio'
    } else if (values.name.length < 2) {
      errors.name = 'Debe tener al menos 2 caracteres'
    }

    if (!values.email.trim()) {
      errors.email = 'El email es obligatorio'
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = 'Formato de email inválido'
    }

    if (!values.message.trim()) {
      errors.message = 'El mensaje es obligatorio'
    } else if (values.message.length < 10) {
      errors.message = 'Debe tener al menos 10 caracteres'
    }

    return errors
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    const nextForm = { ...form, [id]: value }

    setForm(nextForm)

    if (touched[id]) {
      setErrors(validate(nextForm))
    }
  }

  const handleBlur = (e) => {
    const { id } = e.target
    setTouched(prev => ({ ...prev, [id]: true }))
    setErrors(validate(form))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)

    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    try {
      setStatus('loading')

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(form)
      })

      if (!response.ok) throw new Error('Error en el envío')

      setStatus('success')
      setForm(initialForm)
      setTouched({})
      setSubmitted(false)
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const showError = (field) =>
    (touched[field] || submitted) && errors[field]

  const isValid = (field) =>
    touched[field] && !errors[field]

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          className={`form-input ${
            showError('name') ? 'is-error' : isValid('name') ? 'is-valid' : ''
          }`}
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={status === 'loading'}
        />
        {showError('name') && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-input ${
            showError('email') ? 'is-error' : isValid('email') ? 'is-valid' : ''
          }`}
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={status === 'loading'}
        />
        {showError('email') && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className={`form-textarea ${
            showError('message') ? 'is-error' : isValid('message') ? 'is-valid' : ''
          }`}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={status === 'loading'}
        />
        {showError('message') && (
          <span className="form-error">{errors.message}</span>
        )}
      </div>

      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%' }}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
      </button>

      {status === 'success' && (
        <p className="form-success">Mensaje enviado correctamente ✔</p>
      )}

      {status === 'error' && (
        <p className="form-error-global">
          Ocurrió un error. Intentá nuevamente más tarde.
        </p>
      )}
    </form>
  )
}

export default ContactForm

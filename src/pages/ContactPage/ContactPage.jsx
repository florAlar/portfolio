import React from 'react'
import { useMouseTracking } from '../../hooks/useMouseTracking'
import ContactForm from '../../components/layout/Form'
import './ContactPage.css'
import '../../styles/global.css'


const ContactPage = () => {
  const handleMouseMove = useMouseTracking('pixel')

  return (
    <section className="contact-page container-slim section-v-padding">
      <div className="contact-layout">
        {/* Left Column: Info */}
        <div className="column-info">
          <div className='column-info-top'>

            <span className="intro-text neon-text-primary">HABLEMOS</span>
            <h1 className="text-h2">Construyamos algo increíble juntos.</h1>

            <p className="text-muted">
  Disponible para nuevos proyectos freelance o colaboraciones full-time.
  <br />
  
  Busco integrarme en equipos donde construir aplicaciones web, aprender y aportar valor real, combinando estructura y atención al detalle en la experiencia de usuario.
  <br />
  <br />
  Si tienes una idea, un proyecto o buscas sumar a alguien al equipo, estaré encantada de conversar.
</p>
          </div>
          <div className="contact-info-list">
            <div className="contact-item">
              <div className="icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-details">
                <h4 className="contact-label ">Email</h4>
                <p>flor.alarcos@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-details">
                <h4 className='contact-label'>Ubicación</h4>
                <p >Tandil, Argentina - Remoto / Global</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="column-form">
          <div
            className="contact-form-card glass-surface glass-glow glass-interactive"
            onMouseMove={handleMouseMove}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage

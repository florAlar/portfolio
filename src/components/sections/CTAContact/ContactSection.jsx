import { Link } from 'react-router-dom'
import { useMouseTracking } from '../../../hooks/useMouseTracking'
import './ContactSection.css'

const ContactSection = () => {
  const handleMouseMove = useMouseTracking()

  return (
    <section className="contact-cta-wrapper section-v-padding">
      <div className="container-wide">
        <div
          className="contact-cta-card glass-surface glass-glow glass-interactive"
          onMouseMove={handleMouseMove}
        >
          <div className="cta-content">
            <h2 className="cta-title text-h2">¿Listo para colaborar?</h2>
            <p className="cta-description">
              Me interesa formar parte de equipos donde construir aplicaciones web, aprender continuamente y mejorar juntos. </p>
          </div>

          <Link to="/contact" className="btn btn-primary">
            Escríbeme <span className="arrow-icon">➤</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

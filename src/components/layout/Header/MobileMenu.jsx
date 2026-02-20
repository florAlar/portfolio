import { NavLink } from 'react-router-dom'
import { HiX } from 'react-icons/hi'

const MobileMenu = ({ open, close }) => {
  return (
    <div className={`mobile-menu ${open ? 'show' : ''}`}>
      <button className="mobile-close" onClick={close} aria-label="Close menu">
        <HiX />
      </button>

      <nav>
        <ul className="mobile-links">
          <li><NavLink to="/" end onClick={close}>Inicio</NavLink></li>
          <li><NavLink to="/about" onClick={close}>Sobre mí</NavLink></li>
          <li><NavLink to="/contact" onClick={close}>Contacto</NavLink></li>
          <li>
            <a href="/cv/FalarcosAP.pdf" download onClick={close}>
              Descargar CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu
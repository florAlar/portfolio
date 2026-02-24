import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content container">
        <div className="footer-left">
          <p className="footer-copy">

          </p>
          <p className="footer-love">
            © {new Date().getFullYear()} - with love by zeroCore 
          </p>
        </div>

        <nav className="footer-right">
          <ul className="footer-links">
            <li>
              <a href="https://github.com/florAlar" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li className="separator">•</li>
            <li>
              <a href="https://www.linkedin.com/in/florencia-alarcos/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="separator">•</li>
            <li>
              <a href="mailto:flor.alarcos@gmail.com" target="_blank" rel="noopener noreferrer"A>
                Mail
              </a>
            </li>
            <li className="separator">•</li>
            <li>
              <Link to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

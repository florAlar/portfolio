import { NavLink } from 'react-router-dom'

const DesktopNav = () => {
  return (
    <nav className="desktop-nav">
      <ul className="nav-links">
        <li><NavLink to="/" end>Inicio</NavLink></li>
        <li><NavLink to="/about">Sobre mí</NavLink></li>
        <li><NavLink to="/contact">Contacto</NavLink></li>
        <li>
          <a href={`${import.meta.env.BASE_URL}CVAlarcosT.pdf`} download>CV</a>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNav

import { useEffect, useState } from 'react'

import Logo from './Logo'
import DesktopNav from './DesktopNav'
import HamburgerButton from './HamburgerButton'
import MobileMenu from './MobileMenu'
import ColorPalette from '../../ui/ColorPallete/ColorPalette'

import './Header.css'

const SCROLL_THRESHOLD = 50

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(v => !v)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">

        {/* MOBILE LEFT / DESKTOP hidden — palette */}
        <div className="header-palette">
          <ColorPalette />
        </div>

        {/* CENTER (mobile) / LEFT (desktop) — logo */}
        <Logo onClick={closeMenu} />

        {/* RIGHT — desktop nav + hamburger */}
        <div className="header-right">
          <DesktopNav closeMenu={closeMenu} />
          {/* Desktop: palette sits here on the far right */}
          <div className="header-palette-desktop">
            <ColorPalette />
          </div>
          <HamburgerButton toggle={toggleMenu} />
        </div>

      </div>

      <MobileMenu open={menuOpen} close={closeMenu} />
    </header>
  )
}

export default Header
import React, { useState, useRef, useEffect } from 'react'
import { useColor } from '../../../context/useColor'
import { TbPalette } from 'react-icons/tb'
import './ColorPalette.css'

const ColorPalette = () => {
  const { activePalette, setActivePalette, palettes } = useColor()

  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  /* detectar dispositivos táctiles correctamente */
  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: none)').matches

  /* cerrar al hacer click fuera (solo mobile necesita esto) */
  useEffect(() => {
    if (!isTouchDevice) return

    const handleClickOutside = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', handleClickOutside)

    return () =>
      document.removeEventListener('pointerdown', handleClickOutside)
  }, [isTouchDevice])

  const handleTriggerClick = () => {
    if (isTouchDevice) {
      setOpen((prev) => !prev)
    }
  }

  const handleSelect = (palette) => {
    setActivePalette(palette)

    /* plegar solo en mobile */
    if (isTouchDevice) {
      setOpen(false)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`color-palette-container ${open ? 'open' : ''}`}
    >
     <button
  className="palette-trigger"
  aria-label="Open Color Palette"
  onClick={() => setOpen(prev => !prev)}
>
  <TbPalette />
</button>


      {<div className="palette-options">
        {palettes.map((palette) => (
          <button
            key={palette.name}
            className={`color-dot ${
              activePalette.name === palette.name ? 'active' : ''
            }`}
            style={{
              backgroundColor: palette.primary,
              boxShadow:
                activePalette.name === palette.name
                  ? `0 0 10px ${palette.primary}, 0 0 20px ${palette.primary}`
                  : 'none'
            }}
            onClick={() => handleSelect(palette)}
            title={palette.name}
            aria-label={`Select ${palette.name} theme`}
          />
        ))}
      </div>}
     
    </div>
  )
}

export default ColorPalette

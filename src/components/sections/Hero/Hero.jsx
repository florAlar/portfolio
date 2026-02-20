import React, { useEffect, useRef, useState } from 'react'
import heroVideo from '../../../assets/hero.mp4'
import heroFallback from '../../../assets/ref2.webp'
import { FaReact } from 'react-icons/fa'
import { useMouseTracking } from '../../../hooks/useMouseTracking'
import {
  getHeroPlayed,
  setHeroPlayed
} from '../../../state/heroState'

import './Hero.css'

const Hero = () => {
  const handleMouseMove = useMouseTracking('normalized')
  const videoRef = useRef(null)

  // ✅ estado persistente SOLO durante navegación SPA
  const [isCompact, setIsCompact] = useState(getHeroPlayed())

  const handleMouseLeave = (e) => {
    const hero = e.currentTarget
    hero.style.setProperty('--mouse-x', 0.5)
    hero.style.setProperty('--mouse-y', 0.5)
  }

  // ✅ cuando termina el video
  const handleVideoEnd = () => {
    setHeroPlayed()
    setIsCompact(true)
  }

  // seguridad extra
  useEffect(() => {
    if (isCompact && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isCompact])

  return (
    <section
      className={`hero ${isCompact ? 'hero-compact' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--mouse-x': 0.5, '--mouse-y': 0.5 }}
    >
      {/* BACKGROUND */}
      <div className="hero-glow-bg"></div>

      <div className="hero-bg-text">
        <span>PORTFOLIO</span>
      </div>

      {/* FIGURE */}
      <div className="hero-figure-container">
        <div className="figure-glow"></div>
        <div className="figure-glow2"></div>
        <div className="code-symbol">
          <FaReact />
        </div>

        {!isCompact ? (
          <video
            ref={videoRef}
            src={heroVideo}
            className="hero-figure-video"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
          />
        ) : (
          <img
            src={heroFallback}
            className="hero-figure-fallback"
            alt="Hero fallback"
            loading="eager"
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="hero-content">
        <div className="intro-text">
          BIENVENIDO A MI PORTFOLIO, SOY FLOR
        </div>

        <h1 className="text-display">
          WEB DEVELOPER<span className="text-muted">;</span>
        </h1>
      </div>

      <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero

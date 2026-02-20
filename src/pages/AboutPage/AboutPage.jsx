import React, { useEffect, useRef } from 'react'
import './AboutPage.css'
import profileImage from '../../assets/about.png'
import VanillaTilt from 'vanilla-tilt'
import { useMouseTracking } from '../../hooks/useMouseTracking'

import {
  FaHtml5, FaCss3Alt, FaReact, FaAngular, FaJava, FaPhp, FaDocker,
  FaGitAlt, FaGithub, FaLayerGroup, FaDatabase, FaMobileAlt, FaUniversalAccess
} from 'react-icons/fa'
import {
  SiTailwindcss, SiJavascript, SiSpringboot, SiHibernate, SiVite
} from 'react-icons/si'
import {
  TbBrandReactNative, TbApi, TbComponents, TbBrandFramerMotion
} from 'react-icons/tb'

const AboutPage = () => {
  const imageContainerRef = useRef(null)
  const handleMouseMove = useMouseTracking('pixel')

  useEffect(() => {
    if (!imageContainerRef.current) return

    VanillaTilt.init(imageContainerRef.current, {
      max: 8,
      speed: 400,
      scale: 1.04,
      glare: false,
      perspective: 1200,
      easing: 'cubic-bezier(.03,.98,.52,.99)'
    })
  }, [])

  return (
    <section className="about-page container-slim section-v-padding">
      <div className="about-profile">
        <div
          ref={imageContainerRef}
          className="profile-image-container glass-surface"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
            onError={(e) => {
              e.target.onerror = null
              e.target.style.display = 'none'
              e.target.parentNode.style.background = '#222'
            }}
          />
        </div>

        <div className="profile-bio">
          <div className='profile-bio-top'>


            <div className="section-header">
              <span className="intro-text neon-text-primary">SOBRE MÍ</span>
              <h1 className="text-h2">
                Desarrollo  con diseño, lógica y pensamiento crítico
                <span className="text-muted">;</span>
              </h1>
              {/*  <p className="intro-text">90% passion, 10% caffeine</p> */}
            </div>

            <div className="bio-text">
              <p>
                Me considero una persona curiosa y orientada al aprendizaje constante. Me gusta entender cómo funcionan las cosas por dentro, cuestionar decisiones técnicas y mejorar soluciones paso a paso. Disfruto trabajar en entornos donde puedo experimentar, equivocarme y refinar ideas hasta que el resultado final tenga sentido tanto a nivel funcional como estético.
              </p>

              <p>
                En el desarrollo encuentro un equilibrio entre lógica y creatividad. Me interesa escribir código claro, mantenible y con buenas prácticas, priorizando siempre la legibilidad y la estructura antes que soluciones apresuradas. Suelo enfocarme en construir interfaces limpias, accesibles y coherentes, cuidando los detalles que hacen que la experiencia del usuario sea fluida y natural.
              </p>

            </div>
          </div>
          <a
            href="/cv/FalarcosAP.pdf"
            download
            className="btn btn-secondary btn-cv "
          >
            DESCARGAR CV
          </a>

          <div className="profile-meta">
            <div className="meta-item">📍 España</div>
            <div className="meta-item"> <span> ✔ </span>  Disponible para proyectos</div>
          </div>
        </div>
      </div>

      <div className="stack-section">
        <h2 className="stack-title text-h4">Stack Tecnológico</h2>

        <div className="stack-grid">
          <div
            className="stack-card glass-surface glass-interactive glass-glow"
            onMouseMove={handleMouseMove}
          >
            <div className="stack-header">
              <span>{'{ }'}</span>
              <h3>Frontend Core</h3>
            </div>
            <div className="stack-tags">
              <span className="stack-tag"><FaHtml5 /> HTML5</span>
              <span className="stack-tag"><FaCss3Alt /> CSS3</span>
              <span className="stack-tag"><SiJavascript /> JavaScript</span>
              <span className="stack-tag"><FaReact /> React</span>
              <span className="stack-tag"><FaAngular /> Angular</span>
              <span className="stack-tag"><SiVite /> Vite</span>
              <span className="stack-tag"><FaGitAlt /> Git</span>
              <span className="stack-tag"><FaGithub /> GitHub</span>
            </div>
          </div>

          <div
            className="stack-card glass-surface glass-interactive glass-glow"
            onMouseMove={handleMouseMove}
          >
            <div className="stack-header">
              <span>{'>_'}</span>
              <h3>Backend & Ops</h3>
            </div>
            <div className="stack-tags">
              <span className="stack-tag"><FaJava /> Java</span>
              <span className="stack-tag"><SiSpringboot /> Spring Boot</span>
              <span className="stack-tag"><SiHibernate /> Hibernate</span>
              <span className="stack-tag"><FaDatabase /> SQL</span>
              <span className="stack-tag"><FaDocker /> Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage

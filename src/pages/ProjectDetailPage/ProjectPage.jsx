import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../../services/projectsService'
import { FaRocket, FaCode } from 'react-icons/fa';
import { useMouseTracking } from '../../hooks/useMouseTracking'
import './ProjectPage.css'

function ProjectPage() {
    const { id } = useParams()
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const handleMouseMove = useMouseTracking('pixel')

    useEffect(() => {
        getProjectById(id)
            .then(data => {
                if (!data) throw new Error('Proyecto no encontrado')
                setProject(data)
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <div className="container section"><p>Cargando details...</p></div>
    if (error) return <div className="container section"><p>{error}</p></div>
    if (!project) return null

    return (
        <section className="project-page container ">
            {/* Header: Back Link + Title + Subtitle */}
            <header className="project-header">
                <div >
                    <h1 className="text-display-project">{project.title}</h1>
                    <div className="intro-text" style={{ fontSize: '1.2rem', }}>
                        {project.shortDescription} • 2024
                    </div>
                </div>
                <Link to="/" className="btn btn-secondary align-right">
                    <span>←</span> Volver
                </Link>
            </header>

            {/* Main Content: Split Layout */}
            <div className="project-content">
                {/* Left Column: Image */}
                <div className="project-gallery">
                    <div className=" glass-surface cta-card glass-surface ">
                        {/* Placeholder for the project image */}
                        <div className="project-image-placeholder">
                            <img
                                src={project.image}
                                alt={project.title}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentNode.style.background = 'linear-gradient(135deg, #111 0%, #222 100%)';
                                }}
                                style={{ width: '90%', height: '90%', objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Details */}
                <div className="project-details">

                    <div className="description-text">
                        {project.description.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="tech-stack-section">
                        <span className="text-label neon-text-primary">TECNOLOGÍAS</span>
                        <div className="tech-tags">
                            {project.tech.map(tech => (
                                <span key={tech} className="tech-tag text-label">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="action-buttons">
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                <FaRocket size={18} /> Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                <FaCode size={20} /> GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Card: CTA */}
            <div
                className="cta-card glass-surface glass-glow glass-interactive"
                onMouseMove={handleMouseMove}
            >
                <div className="cta-content">
                    <h2 className="text-h2">¿Trabajamos en algo parecido?</h2>
                    <p className="text-muted">Si este proyecto encaja con lo que buscas, estaré encantada de conversar sobre cómo podría aportar en tu equipo.</p>
                </div>
                <Link to="/contact" className="btn btn-primary">
                    Hablemos <span className="arrow-icon">➤</span>
                </Link>
            </div>
        </section>
    )
}

export default ProjectPage
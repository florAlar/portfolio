import { useNavigate } from 'react-router-dom'
import {
  FaCode,
  FaRocket,
  FaArrowRight,
  FaLaptopCode,
  FaServer
} from 'react-icons/fa'
import { useMouseTracking } from '../../../../hooks/useMouseTracking'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()
  const handleMouseMove = useMouseTracking()

  const handleCardClick = (e) => {
    if (e.target.closest('a, button')) return
    navigate(`/projects/${project.id}`)
  }

  return (
    <article
      className={`project-card glass-surface glass-interactive glass-glow ${
        project.type === 'Backend' ? 'type-backend' : 'type-frontend'
      }`}
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}
      {project.thumbnail && (
        <div
          className="project-card-bg"
          style={{ backgroundImage: `url(${project.thumbnail})` }}
          aria-hidden="true"
        />
      )}

      {project.type && (
        <div className="project-type-icon" title={project.type}>
          {project.type === 'Frontend' ? <FaLaptopCode /> : <FaServer />}
        </div>
      )}

      <div className="card-content">
        <h3 className="card-title text-h5 card-title-hover">
          <span>{project.title}</span>
        </h3>

        <p className="card-description-text">
          {project.shortDescription || project.description}
        </p>

        <div className="card-footer">
          <div className="card-tech-text">
            {project.tech?.slice(0, 4).map((tech, index) => (
              <span key={index} className="tech-text-item text-label">
                {tech}
              </span>
            ))}
          </div>

          <div className="card-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-secondary"
                onClick={(e) => e.stopPropagation()}
              >
                <FaCode /> CODE
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-secondary"
                onClick={(e) => e.stopPropagation()}
              >
                <FaRocket /> DEMO
              </a>
            )}

            <div className="card-nav-circle">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard

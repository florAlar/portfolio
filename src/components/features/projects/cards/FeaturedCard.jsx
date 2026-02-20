import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useMouseTracking } from '../../../../hooks/useMouseTracking'
import '../list/FeaturedProjects.css'
import '../cards/FeaturedCard.css'

const FeaturedCard = ({ project, active }) => {
    const handleMouseMove = useMouseTracking()

    return (
        <Link
            to={`/projects/${project.id}`}
            className={`featured-card glass-surface glass-interactive glass-glow ${active ? 'active' : ''}`}
            onMouseMove={handleMouseMove}
        >
            <img
                src={project.thumbnail || project.image}
                alt={project.title}
                className="card-bg"
            />

            <div className="card-overlay">
                <div className="card-body">
                    <div className="card-column">
                        <h3 className="card-title-lg text-h5">
                            {project.title}
                        </h3>
                        <div className="card-footer">
                            <span className="card-subtitle-tech text-label neon-text-primary">
                                {project.tech?.join(' • ')}
                            </span>
                        </div>
                    </div>

                    <div className="card-nav-circle">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default FeaturedCard
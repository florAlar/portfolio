import FeaturedCard from '../cards/FeaturedCard'
import './FeaturedProjects.css'

// Este componente recibe una lista de proyectos en producción y muestra una sección
// destacada renderizando una card por cada id del arreglo.

const FeaturedProjects = ({ projects }) => {
    if (!projects || !projects.length) return null

    return (
        <section className="featured-projects section-v-padding">
            <div className="container-wide">
                <div className="featured-wrapper">
                    <div className="section-header">
                        <h2 className="text-h2 text-outline opacity">PROYECTOS</h2>
                        <p className="intro-text">Productos web & aplicaciones academicas</p>
                    </div>

                    <div className="featured-grid">
                        {projects.map((project, index) => (
                            <FeaturedCard
                                key={project.id}
                                project={project}
                                index={index}
                                active={index === 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects
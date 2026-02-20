import { useEffect, useState } from 'react'
import { getProjects } from '../../../services/projectsService'
import ProjectsList from './list/ProjectsList'
import FeaturedProjects from './list/FeaturedProjects'
import '../../../styles/global.css'

// Este componente obtiene los datos de un archivo JSON tratado como API,
// filtra la lista completa en proyectos destacados y académicos
// y los envía a componentes de renderización de cada una de las listas

const ProjectsSection = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Cargando proyectos...</p>
  if (error) return <p>Error: {error}</p>

  const featuredProjects = projects.filter(project => !project.academic)
  const academicProjects = projects.filter(project => project.academic)

  return (
    <section ClassName='paddingLayout'>
      <FeaturedProjects projects={featuredProjects} />
      <ProjectsList projects={academicProjects} />
    </section>
  )
}

export default ProjectsSection

const PROJECTS_URL = '/data/projects.json'

// Cache en memoria para hacer la solicitud de tipo get solo una vez y luego filtrar cuando se necesite.
let projectsCache = null

export async function getProjects() {
  
  if (projectsCache) {
    return projectsCache
  }

  try {
    const response = await fetch(PROJECTS_URL)

    if (!response.ok) {
      console.error(
        `Error de red al cargar proyectos: ${response.status} ${response.statusText}`
      )
      throw new Error(
        'No se pudieron cargar los proyectos. Por favor, inténtelo de nuevo más tarde.'
      )
    }

    const data = await response.json()

    // Guardamos en memoria
    projectsCache = data

    return data
  } catch (error) {
    console.error('Error en el servicio de proyectos:', error)

    if (error.name === 'TypeError') {
      throw new Error('Error de conexión. Verifique su red.')
    }

    throw error
  }
}

export async function getProjectById(id) {
  try {
    const projects = await getProjects()
    const project = projects.find(p => p.id === id)

    if (!project) {
      throw new Error(`Proyecto con ID "${id}" no encontrado.`)
    }

    return project
  } catch (error) {
    console.error(`Error obteniendo proyecto ${id}:`, error)
    throw error
  }
}

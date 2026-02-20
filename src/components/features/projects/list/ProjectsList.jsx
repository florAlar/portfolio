import ProjectCard from "../cards/ProjectCard"
import './ProjectsList.css'
import { FaTerminal } from "react-icons/fa";

//este componente recibe una lista de proyectos academicos y muestra un grid renderizando una card por cada id  del arreglo. 

const ProjectsList = ({ projects }) => {
  return (
    <section className="projects-section section-v-padding">



      <div className="container-wide">

        {/* <div className="section-header">
          <h2 className="text-h3 text-outline opacity">ACADEMIC</h2>
          <p className="intro-text">Foundation & Lifelong learning</p>
        </div> */}
        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <div key={project.id} className="project-card-wrapper">
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsList


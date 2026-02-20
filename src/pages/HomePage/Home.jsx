import Background from '../../components/ui/Backgrounds/Background'
import Hero from '../../components/sections/Hero/Hero'
import ProjectsSection from '../../components/features/projects/ProjectsSection'
import ContactSection from '../../components/sections/CTAContact/ContactSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <Background >
        <ProjectsSection  />
        <ContactSection />
      </Background>
    </div>
  )
}

export default Home

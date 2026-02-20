import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import ProjectPage from './pages/ProjectDetailPage/ProjectPage'
import AboutPage from './pages/AboutPage/AboutPage'
import Layout from './components/layout/Layout'
import ContactPage from './pages/ContactPage/ContactPage'
import { ColorProvider } from './context/ColorContext'
import './styles/global.css'
import './styles/variables.css'

function App() {
  return (
    <ColorProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </ColorProvider>
  )
}

export default App
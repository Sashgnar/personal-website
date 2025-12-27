import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import ProjectEntry from './components/ProjectEntry'
import Experience from './components/Experience'
import projectsData from './data/projects.json'

function App() {
  const [personalProjects, setPersonalProjects] = useState([])
  const [academicProjects, setAcademicProjects] = useState([])

  useEffect(() => {
    setPersonalProjects(projectsData.filter(p => p.category === 'Personal'))
    setAcademicProjects(projectsData.filter(p => p.category === 'Academic'))
  }, [])

  return (
    <div className="container">
      <nav>
        <span className="logo">SASHGNAR/DEV</span>
        <a href="mailto:sashstolba@gmail.com">SASHSTOLBA@GMAIL.COM</a>
      </nav>

      <main>
        <Hero />

        <Experience />

        <section className="projects-section">
          <span className="section-label">SELECTED WORKS // PERSONAL</span>
          <div className="project-list">
            {personalProjects.map(project => (
              <ProjectEntry key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="projects-section" style={{ paddingTop: '2rem' }}>
          <span className="section-label">ACADEMIC ENGINEERING</span>
          <div className="project-list">
            {academicProjects.map(project => (
              <ProjectEntry key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>SASH STOLBA © 2025</p>
      </footer>
    </div>
  )
}

export default App

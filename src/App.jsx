import { Link, Route, Routes } from 'react-router-dom';
import Experience from './components/Experience';
import Hero from './components/Hero';
import ProjectDetail from './components/ProjectDetail';
import ProjectEntry from './components/ProjectEntry';
import projectsData from './data/projects.json';

function HomePage() {
  const personalProjects = projectsData.filter((project) => project.category === 'Personal');
  const academicProjects = projectsData.filter((project) => project.category === 'Academic');

  return (
    <div className="container">
      <nav>
        <Link to="/" className="logo">SASHGNAR/DEV</Link>
        <a href="mailto:sashstolba@gmail.com">SASHSTOLBA@GMAIL.COM</a>
      </nav>

      <main>
        <Hero />
        <Experience />

        <section className="projects-section">
          <span className="section-label">SELECTED WORKS // PERSONAL</span>
          <div className="project-list">
            {personalProjects.map((project) => (
              <ProjectEntry key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="projects-section" style={{ paddingTop: '2rem' }}>
          <span className="section-label">ACADEMIC ENGINEERING</span>
          <div className="project-list">
            {academicProjects.map((project) => (
              <ProjectEntry key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>SASH STOLBA (C) 2026</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;

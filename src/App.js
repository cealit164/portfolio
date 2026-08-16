import { useState } from 'react';
import profileIcon from './images/profile-icon.png';
import ProjectCard from './ProjectCard';
import { projects, slugify } from './projectsData';
import './App.css';

function App() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(true);

  return (
    <div id='app' className="App">
      <nav className="sidebar">
        <button
          className={`nav-toggle ${navOpen ? 'open' : ''}`}
          onClick={() => setNavOpen(!navOpen)}
          aria-expanded={navOpen}
          aria-label={navOpen ? 'Hide navigation' : 'Show navigation'}
        >
          {navOpen ? '✕' : '☰'}
        </button>

        {navOpen && (
          <div className="nav-panel">
          <ul className="nav-list">
            <li><a href="#app">Main</a></li>
            <li><a href="#description">Description</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#focus-areas">Focus Areas</a></li>
            <li>
              <button
                className="nav-dropdown-toggle"
                onClick={() => setProjectsOpen(!projectsOpen)}
                aria-expanded={projectsOpen}
              >
                Projects
                <span className={`nav-arrow ${projectsOpen ? 'open' : ''}`}>▾</span>
              </button>
              {projectsOpen && (
                <ul className="nav-sublist">
                  {projects.map((project) => (
                    <li key={project.title}>
                      <a href={`#${slugify(project.title)}`}>{project.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><a href="#contact-info">Contact Info</a></li>
          </ul>
          </div>
        )}
      </nav>

      <div className={`page-content ${navOpen ? '' : 'nav-collapsed'}`}>
        <div className="profile-header">
          <img src={profileIcon} className="profile-icon" alt="Profile icon" />
          <h1>Ali Mohammed Alqhtani</h1>
        </div>

        <br />

        <div className="main-content">
          <div className="content-box">
            <h2 id="description">Description</h2>
            <h3 className="muted-text">
              Unity Gameplay Developer with 2+ years of experience building
              modular gameplay systems, mechanics, and 2D/3D prototypes using C#.
            </h3>

            <h2 id="skills">Skills</h2>
            <ul>
              <li className="muted-text">C#</li>
              <li className="muted-text">Unity</li>
              <li className="muted-text">Gameplay Programming</li>
              <li className="muted-text">Game Systems Development</li>
              <li className="muted-text">Game Development</li>
              <li className="muted-text">OOP</li>
              <li className="muted-text">Git / GitHub</li>
            </ul>

            <h2 id="focus-areas">Focus Areas</h2>
            <ul>
              <li className="muted-text">Gameplay programming</li>
              <li className="muted-text">Game systems architecture</li>
              <li className="muted-text">AI behavior design</li>
              <li className="muted-text">2D/3D development using Unity</li>
              <li className="muted-text">Software Technical Lead</li>
              <li className="muted-text">Front-end Developer</li>
            </ul>
          </div>

          <br />

          <div className="content-box">
            <h2 id="projects">Projects</h2>
            <div className="project-list">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.title} />
              ))}
            </div>
          </div>

          <br/>

          <div className="content-box">
            <h2 id="contact-info">Contact Info</h2>
            <p className="muted-text">
              <a href="https://linkedin.com/in/ali-mohammed-98690a308">LinkedIn</a>
              {' | '}
              <a href="https://linktr.ee">Website</a>
              {' | '}
              <a href="mailto:alialqahtania164@gmail.com">Email</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

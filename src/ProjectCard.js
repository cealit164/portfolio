import { useState } from 'react';
import { slugify } from './projectsData';

function ProjectCard({ project }) {
  const [mediaIndex, setMediaIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const showPrevMedia = () =>
    setMediaIndex((i) => (i - 1 + project.media.length) % project.media.length);
  const showNextMedia = () =>
    setMediaIndex((i) => (i + 1) % project.media.length);

  const currentMedia = project.media[mediaIndex];
  const isImage = typeof currentMedia === 'string' && !currentMedia.includes(' ');

  return (
    <div className="project-card" id={slugify(project.title)}>
      <div className="project-carousel">
        <button
          className="carousel-arrow"
          onClick={showPrevMedia}
          aria-label="Previous screenshot"
        >
          ‹
        </button>
        <div className="carousel-media">
          {isImage ? (
            <img src={currentMedia} alt={`${project.title} screenshot ${mediaIndex + 1}`} />
          ) : (
            currentMedia
          )}
        </div>
        <button
          className="carousel-arrow"
          onClick={showNextMedia}
          aria-label="Next screenshot"
        >
          ›
        </button>
      </div>
      <div className="carousel-dots">
        {project.media.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === mediaIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="muted-text">{project.description}</p>
      <div className="project-actions">
        {project.link && (
          <a
            className="project-play-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Play on itch.io
          </a>
        )}
        <button className="project-info-btn" onClick={() => setShowModal(true)}>
          More Info
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ✕
            </button>
            <h3>{project.title}</h3>

            <h4>Team Members</h4>
            <ul>
              {project.team.map((member) => (
                <li key={member} className="muted-text">{member}</li>
              ))}
            </ul>

            <h4>Skills Used</h4>
            <ul>
              {project.skills.map((skill) => (
                <li key={skill} className="muted-text">{skill}</li>
              ))}
            </ul>

            <h4>Challenges &amp; How I Solved Them</h4>
            <p className="muted-text">{project.challenges}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;

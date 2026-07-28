import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from './data';

// ProjectCard Component
const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="project-card" onClick={() => navigate(`/project/${project.id}`)}>
      {project.thumbnail && (
        <div className="project-thumbnail">
          <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
        </div>
      )}
      <h2>{project.title}</h2>
      {project.status && (
        <div className="project-status-badge">
          <span className="status-dot"></span>
          {project.status}
        </div>
      )}
      <p>{project.synopsis}</p>
      <div className="project-tags">
        {project.tags.map(tag => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// TagFilter Component
const TagFilter = ({ availableTags, selectedTags, onToggleTag }) => {
  return (
    <div className="tag-filter">
      {availableTags.map(tag => (
        <button
          key={tag}
          className={`tag-btn ${selectedTags.includes(tag) ? 'active' : ''}`}
          onClick={() => onToggleTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default function Home() {
  const [selectedTags, setSelectedTags] = useState([]);

  // Extract all unique tags from the projects
  const availableTags = useMemo(() => {
    const tags = new Set();
    projects.forEach(p => {
      p.tags.forEach(t => tags.add(t));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter(project =>
      selectedTags.every(tag => project.tags.includes(tag))
    );
  }, [selectedTags]);

  const handleToggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <>
      <header className="header hero">
        <h1>My Portfolio</h1>
        <p className="bio">
          I'm Juan Alonso, a bilingual Computer Engineering graduate specializing in embedded systems, multi-layer PCB design, and low-level software architecture. Click on any of the tags below to filter and explore my relevant projects.
        </p>
      </header>

      <main>
        <TagFilter
          availableTags={availableTags}
          selectedTags={selectedTags}
          onToggleTag={handleToggleTag}
        />

        {filteredProjects.length > 0 ? (
          <div className="project-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            No projects match the selected combination of tags.
          </div>
        )}
      </main>
    </>
  );
}

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from './data';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pdfStatus, setPdfStatus] = useState('checking'); // 'checking' | 'available' | 'missing'

  // Find project by ID
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (project?.pdfUrl) {
      fetch(project.pdfUrl, { method: 'HEAD' })
        .then(res => {
          const contentType = res.headers.get('content-type') || '';
          // If HTTP OK and not text/html (which is SPA 404 fallback), the PDF exists!
          if (res.ok && !contentType.includes('text/html')) {
            setPdfStatus('available');
          } else {
            setPdfStatus('missing');
          }
        })
        .catch(() => setPdfStatus('missing'));
    }
  }, [project?.pdfUrl]);

  if (!project) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <h2>Project Not Found</h2>
        <button className="back-btn" onClick={() => navigate('/')}>Back to Portfolio</button>
      </div>
    );
  }

  const pdfFileName = project.pdfUrl ? project.pdfUrl.replace(/^\//, '') : '';

  return (
    <div className="project-details-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        &larr; Back to Portfolio
      </button>

      <header className="details-header">
        <h1>{project.title}</h1>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </header>

      <section className="details-section">
        <h2>Overview</h2>
        <p>{project.description || project.synopsis}</p>
      </section>

      {/* Report Highlights or Standalone Metrics */}
      {(project.reportDetails || project.metrics) && (
        <section className="details-section report-meta-section">
          <h2>{project.reportDetails ? 'Senior Design Highlights' : 'Project Highlights & Metrics'}</h2>
          
          {project.reportDetails && (
            <div className="report-meta-grid">
              <div className="meta-card">
                <span className="meta-label">Institution</span>
                <span className="meta-value">{project.reportDetails.institution}</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Course</span>
                <span className="meta-value">{project.reportDetails.course}</span>
              </div>
              <div className="meta-card">
                <span className="meta-label">Faculty Advisor</span>
                <span className="meta-value">{project.reportDetails.advisor}</span>
              </div>
            </div>
          )}

          {project.reportDetails?.team && (
            <div className="team-contributors-block">
              <h3 className="contributors-heading">Engineering Team & Key Contributions</h3>
              <div className="contributors-grid">
                {project.reportDetails.team.map((member, idx) => {
                  const isObject = typeof member === 'object';
                  const name = isObject ? member.name : member;
                  const role = isObject ? member.role : null;
                  const degree = isObject ? member.degree : null;
                  const contributions = isObject ? member.contributions : null;

                  return (
                    <div key={idx} className="contributor-card">
                      <div className="contributor-header">
                        <span className="contributor-name">{name}</span>
                        {degree && <span className="contributor-degree">{degree}</span>}
                      </div>
                      {role && <div className="contributor-role">{role}</div>}
                      {contributions && (
                        <div className="contributor-contributions">
                          <strong>Key Contributions:</strong> {contributions}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {(project.metrics || project.reportDetails?.metrics) && (
            <div className="metrics-block">
              <h3 className="metrics-heading">Measurable Results 📊</h3>
              <div className="metrics-grid">
                {(project.metrics || project.reportDetails.metrics).map((m, idx) => (
                  <div key={idx} className="metric-box">
                    <span className="metric-value">{m.value}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {project.techStack && (
        <section className="details-section">
          <h2>Technology Stack & System Specifications ⚡</h2>
          <div className="tech-stack-grid">
            {project.techStack.map((tech, idx) => (
              <div key={idx} className="tech-card">
                <span className="tech-category">{tech.category}</span>
                <span className="tech-name">{tech.name}</span>
                {tech.details && <span className="tech-details">{tech.details}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {project.videoDemos && (
        <section className="details-section video-demos-section">
          <h2>Project Demonstrations & Video Documentation 🎥</h2>
          <div className="video-demos-grid">
            {project.videoDemos.map((demo, idx) => (
              <div key={idx} className={`video-demo-card ${demo.isShort ? 'short-video-card' : ''}`}>
                <div className="video-embed-container">
                  <iframe
                    src={demo.url}
                    title={demo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="video-demo-info">
                  <h3>{demo.title}</h3>
                  <p>{demo.description}</p>
                  <a href={demo.originalUrl} target="_blank" rel="noopener noreferrer" className="video-link">
                    Watch on YouTube ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.pdfUrl && (
        <section className="details-section pdf-section">
          <div className="pdf-header-bar">
            <h2>{project.pdfTitle || 'PDF Viewer & Documentation'}</h2>
            {pdfStatus === 'available' && (
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-download-btn"
              >
                Open Full PDF 📄
              </a>
            )}
          </div>
          <div className="pdf-viewer-frame">
            {pdfStatus === 'available' ? (
              <iframe
                src={`${project.pdfUrl}#toolbar=1`}
                title={`${project.title} PDF Report`}
                className="pdf-embed"
              />
            ) : (
              <div className="pdf-fallback">
                <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📄</span>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0, fontSize: '1.1rem' }}>
                  PDF Viewer Standby
                </p>
                <p style={{ maxWidth: '520px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  To display your Senior Design Report live in this viewer, copy your PDF file into the <code>portfolio/public/</code> folder as <code>{pdfFileName}</code>.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {project.architectureSections ? (
        <section className="details-section">
          <h2>Architecture & Engineering Design Deep-Dive 🏗️</h2>
          <div className="architecture-grid">
            {project.architectureSections.map((sec, idx) => (
              <div key={idx} className="architecture-card">
                <h3>{sec.title}</h3>
                <p>{sec.content}</p>
              </div>
            ))}
          </div>
        </section>
      ) : project.architecture && (
        <section className="details-section">
          <h2>Architecture</h2>
          <p>{project.architecture}</p>
        </section>
      )}

      {project.features && (
        <section className="details-section">
          <h2>Key Features & Technical Capabilities</h2>
          <ul className="features-list">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {project.codeSnippets ? (
        <section className="details-section">
          <h2>Core Software Implementation & Code Architecture 💻</h2>
          <div className="code-snippets-container">
            {project.codeSnippets.map((snippet, idx) => (
              <div key={idx} className="code-snippet-card">
                <div className="code-snippet-header">
                  <span className="code-snippet-title">{snippet.title}</span>
                  <span className="code-snippet-lang">{snippet.language || 'javascript'}</span>
                </div>
                <pre className="code-block">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>
      ) : project.codeSnippet && (
        <section className="details-section">
          <h2>Code Snippet</h2>
          <pre className="code-block">
            <code>{project.codeSnippet.code}</code>
          </pre>
        </section>
      )}

      {(project.githubUrl || project.liveUrl) && (
        <section className="details-section">
          <h2>Links</h2>
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} className="social-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} className="social-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

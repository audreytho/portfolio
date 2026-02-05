import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useLayoutEffect } from 'react'
import portfolioData from '../data/portfolio.json'

function ProjectDetail() {
const { id } = useParams()
const navigate = useNavigate()

const project = portfolioData.projects.find(p => p.id === parseInt(id))

// useLayoutEffect runs BEFORE paint, preventing visible scroll
useLayoutEffect(() => {
window.scrollTo(0, 0)
}, [])

useLayoutEffect(() => {
    window.scrollTo(0, 0)
}, [id])

    if (!project) {
        return (
            <div className="project-detail-page">
                <div className="project-not-found">
                    <h2>Project Not Found</h2>
                    <button onClick={() => navigate('/work')}>Back to Work</button>
                </div>
            </div>
        )
    }

    return (
        <div className="project-detail-page">
            <div className="project-detail-container">
                <button className="back-button" onClick={() => navigate('/work')}>
                    ← BACK TO WORK
                </button>

                <div className="project-detail-header">
                    <h1>Context</h1>
                </div>

                <div className="project-meta-grid">
                    <div className="project-meta-column project-meta-left">
                        <div className="meta-section">
                            <h3>About</h3>
                            <p>{project.description}</p>
                            {project.detailedDescription && (
                                <p>{project.detailedDescription}</p>
                            )}
                        </div>
                    </div>

                    <div className="project-meta-column project-meta-middle">
                        <div className="meta-section">
                            <h3>Role</h3>
                            <p>{project.role || "Role information coming soon"}</p>
                        </div>

                        <div className="meta-section">
                            <h3>Tools Used</h3>
                            <div className="tools-list">
                                {project.tech.map(tech => (
                                    <span key={tech} className="tool-item">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="project-meta-column project-meta-right">
                        {project.team && project.team.length > 0 && (
                            <div className="meta-section">
                                <h3>Team</h3>
                                <ul className="team-list">
                                    {project.team.map((member, index) => (
                                        <li key={index}>
                                            <span className="team-name">{member.name}</span>
                                            {member.role && <span className="team-role"> ({member.role})</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="meta-section">
                            <h3>Duration</h3>
                            <p>{project.duration || "Duration information coming soon"}</p>
                        </div>
                    </div>
                </div>

                <div className="project-detail-image">
                    <img src={project.image} alt={project.title} />
                </div>

                {/* Wireframes Section - Only for UI/UX (programming category) projects */}
                {project.category === 'programming' && (
                    <div className="project-wireframes">
                        <h2>Wireframes</h2>
                        {project.wireframes && project.wireframes.length > 0 ? (
                            <div className="wireframes-grid">
                                {project.wireframes.map((item, index) => (
                                    <div key={index} className="wireframe-item">
                                        <img src={item.url} alt={item.caption || `Wireframe ${index + 1}`} />
                                        {item.caption && <p className="wireframe-caption">{item.caption}</p>}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="coming-soon">Wireframes coming soon</p>
                        )}
                    </div>
                )}

                {/* Media Gallery Section - For future images/videos */}
                {project.gallery && project.gallery.length > 0 && (
                    <div className="project-gallery">
                        <h2>Project Media</h2>
                        <div className="gallery-grid">
                            {project.gallery.map((item, index) => (
                                <div key={index} className="gallery-item">
                                    {item.type === 'image' && (
                                        <img src={item.url} alt={item.caption || `Gallery image ${index + 1}`} />
                                    )}
                                    {item.type === 'video' && (
                                        <video controls>
                                            <source src={item.url} type="video/mp4" />
                                        </video>
                                    )}
                                    {item.caption && <p className="gallery-caption">{item.caption}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Links Section */}
                {(project.links.demo && project.links.demo !== '#') || (project.links.github && project.links.github !== '#') ? (
                    <div className="project-links-section">
                        {project.links.demo && project.links.demo !== '#' && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                VIEW DEMO
                            </a>
                        )}
                        {project.links.github && project.links.github !== '#' && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                VIEW CODE
                            </a>
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default ProjectDetail
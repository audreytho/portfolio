import { useParams, useNavigate } from 'react-router-dom'
import portfolioData from '../data/portfolio.json'

function ProjectDetail() {
    const { id } = useParams()
    const navigate = useNavigate()

    const project = portfolioData.projects.find(p => p.id === parseInt(id))

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
                    <div className="category-badge">
                        {project.category.replace('-', ' ').toUpperCase()}
                    </div>
                    <h1>{project.title}</h1>
                </div>

                <div className="project-detail-image">
                    <img src={project.image} alt={project.title} />
                </div>

                <div className="project-detail-content">
                    <section className="project-section">
                        <h2>About This Project</h2>
                        <p>{project.description}</p>
                    </section>

                    {project.detailedDescription && (
                        <section className="project-section">
                            <h2>Project Details</h2>
                            <p>{project.detailedDescription}</p>
                        </section>
                    )}

                    {project.highlights && (
                        <section className="project-section">
                            <h2>Key Highlights</h2>
                            <ul className="highlights-list">
                                {project.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <section className="project-section">
                        <h2>Technologies Used</h2>
                        <div className="tech-stack">
                            {project.tech.map(tech => (
                                <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </section>

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
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
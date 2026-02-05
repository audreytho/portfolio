import { useEffect } from 'react'
function ProjectModal({ project, onClose }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                
                <div className="modal-header">
                    <div className="category-badge" style={{ position: 'static', marginBottom: '15px' }}>
                        {project.category.replace('-', ' ').toUpperCase()}
                    </div>
                    <h2>{project.title}</h2>
                </div>

                <div className="modal-body">
                    <div className="modal-image-container">
                        <img src={project.image} alt={project.title} />
                    </div>

                    <div className="modal-description">
                        <h3>About This Project</h3>
                        <p>{project.description}</p>
                    </div>

                    <div className="modal-tech">
                        <h3>Technologies Used</h3>
                        <div className="tech-stack">
                            {project.tech.map(tech => (
                                <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {project.detailedDescription && (
                        <div className="modal-detailed">
                            <h3>Project Details</h3>
                            <p>{project.detailedDescription}</p>
                        </div>
                    )}

                    {project.highlights && (
                        <div className="modal-highlights">
                            <h3>Key Highlights</h3>
                            <ul>
                                {project.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="modal-links">
                        {project.links.demo && project.links.demo !== '#' && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                VIEW DEMO
                            </a>
                        )}
                        {project.links.github && project.links.github !== '#' && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                VIEW CODE
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal

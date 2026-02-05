function ProjectCard({ project, onClick }) {
    // Map categories to colors for badge text
    const categoryColors = {
        'game-design': { 
            text: '#1a1a1a'
        },
        'programming': { 
            text: '#1a1a1a'
        },
        'art': { 
            text: '#1a1a1a'
        }
    };

    const categoryStyle = categoryColors[project.category] || categoryColors['programming'];

    return (
        <div className={`project-card ${project.category}`} onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="category-badge" style={{
                color: categoryStyle.text
            }}>
                {project.category.replace('-', ' ').toUpperCase()}
            </div>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
                {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>
            <div className="links" onClick={(e) => e.stopPropagation()}>
                {project.links.demo && <a href={project.links.demo}>DEMO</a>}
                {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">CODE</a>}
            </div>
        </div>
    )
}

export default ProjectCard

function ProjectCard({ project }) {
    // Map categories to Sky Dreams colors
    const categoryColors = {
        'game-design': { 
            bg: 'rgba(255, 204, 234, 0.5)', 
            text: '#d95fa3', 
            border: 'rgba(255, 204, 234, 0.8)' 
        },
        'programming': { 
            bg: 'rgba(191, 236, 255, 0.5)', 
            text: '#4da6c7', 
            border: 'rgba(191, 236, 255, 0.8)' 
        },
        'art': { 
            bg: 'rgba(205, 193, 255, 0.4)', 
            text: '#8a7bcf', 
            border: 'rgba(205, 193, 255, 0.8)' 
        }
    };

    const categoryStyle = categoryColors[project.category] || categoryColors['programming'];

    return (
        <div className="project-card">
            <div className="category-badge" style={{
                background: categoryStyle.bg,
                color: categoryStyle.text,
                border: `1px solid ${categoryStyle.border}`
            }}>
                {project.category.replace('-', ' ')}
            </div>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
                {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>
            <div className="links">
                {project.links.demo && <a href={project.links.demo}>View Demo</a>}
                {project.links.github && <a href={project.links.github}>View Code</a>}
            </div>
        </div>
    )
}

export default ProjectCard

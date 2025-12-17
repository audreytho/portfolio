function ProjectCard({ project }) {
    // Map categories to colors
    const categoryColors = {
        'game-design': { bg: 'rgba(239, 68, 68, 0.1)', text: '#dc2626', border: 'rgba(239, 68, 68, 0.2)' },
        'programming': { bg: 'rgba(59, 130, 246, 0.1)', text: '#2563eb', border: 'rgba(59, 130, 246, 0.2)' },
        'art': { bg: 'rgba(168, 85, 247, 0.1)', text: '#9333ea', border: 'rgba(168, 85, 247, 0.2)' }
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

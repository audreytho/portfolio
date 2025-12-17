function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
                {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>
            <div className="links">
                {project.links.demo && <a href={project.links.demo}>Demo</a>}
                {project.links.github && <a href={project.links.github}>Code</a>}
            </div>
        </div>
    )
}

export default ProjectCard
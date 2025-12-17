import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import portfolioData from './data/portfolio.json'
import './App.css'

function App() {
    return (
        <div className="App">
            <Header />

            <section id="about">
                <h1>{portfolioData.about.name}</h1>
                <p>{portfolioData.about.title}</p>
                <p>{portfolioData.about.bio}</p>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <div className="project-grid">
                    {portfolioData.projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            <section id="contact">
                <h2>Get In Touch</h2>
                <p>Interested in collaborating or want to learn more about my work?</p>
                <div className="contact-links">
                    <a href={`mailto:${portfolioData.contact.email}`}>Email Me</a>
                    <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </section>
        </div>
    )
}

export default App

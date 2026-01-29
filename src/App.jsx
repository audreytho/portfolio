import { useState } from 'react'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import portfolioData from './data/portfolio.json'
import './App.css'

function App() {
    const [activeTab, setActiveTab] = useState('all')

    const filteredProjects = activeTab === 'all' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(p => p.category === activeTab)

    return (
        <div className="App">
            <Header />
            
            <main>
                <section id="about">
                    <h1>HI!</h1>
                    <p>{portfolioData.about.bio}</p>
                    <p>I'm always actively seeking opportunities to learn from, contribute, and collaborate on meaningful projects!</p>
                </section>

                <section id="projects">
                    <h2>WHEN I'M NOT IN CLASS</h2>
                    
                    <div className="project-tabs">
                        <div 
                            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveTab('all')}
                        >
                            ALL
                        </div>
                        <div 
                            className={`tab ${activeTab === 'programming' ? 'active' : ''}`}
                            onClick={() => setActiveTab('programming')}
                        >
                            UI/UX
                        </div>
                        <div 
                            className={`tab ${activeTab === 'game-design' ? 'active' : ''}`}
                            onClick={() => setActiveTab('game-design')}
                        >
                            GAMES
                        </div>
                        <div 
                            className={`tab ${activeTab === 'art' ? 'active' : ''}`}
                            onClick={() => setActiveTab('art')}
                        >
                            3D ART/ANIMATIONS
                        </div>
                    </div>

                    <div className="project-grid">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>

                <section id="contact">
                    <h2>GET IN TOUCH</h2>
                    <p>Interested in collaborating or want to learn more about my work?</p>
                    <div className="contact-links">
                        <a href={`mailto:${portfolioData.contact.email}`}>EMAIL ME</a>
                        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
                        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App

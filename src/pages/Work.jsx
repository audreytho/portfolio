import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import portfolioData from '../data/portfolio.json'

function Work() {
    const [activeTab, setActiveTab] = useState('all')
    const [selectedProject, setSelectedProject] = useState(null)

    const filteredProjects = activeTab === 'all' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(p => p.category === activeTab)

    return (
        <div className="work-page">
            <section id="projects">
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
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </section>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    )
}

export default Work

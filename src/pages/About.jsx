import './About.css'

function About() {
    return (
        <div className="about-page">
            <div className="about-content">
                <div className="about-photo-main">
                    <img src="/images/audrey-photo.jpg" alt="Audrey Thornal" />
                </div>

                <div className="about-text">
                    <h1>Hello;</h1>
                    <p>
                        I'm Audrey, a third-year student at Northeastern University studying a combined major in 
                        Computer Science and Game Development with a minor in Business Administration. In my program, 
                        I've been enjoying exploring different creative and technical domains (UI/UX design, game design, 
                        programming, 3D modeling, and project management). I'm passionate about designing and building 
                        products that blend strong technical foundations with creative vision, and I do my best work in 
                        collaborative, interdisciplinary environments where ideas are given the chance to grow into 
                        polished and impactful experiences!
                    </p>

                    <h2>When I'm not in class,</h2>
                    <p>
                        I'm working on personal projects, exploring new technologies, and contributing to open-source 
                        initiatives. I enjoy programming, game design, and project management, and I'm always actively 
                        seeking opportunities to learn from, contribute, and collaborate on meaningful projects!
                    </p>

                    <h2>Things I love</h2>
                    <p>
                        ♥︎ Game development and interactive storytelling<br/>
                        ♥︎ Creating immersive user experiences<br/>
                        ♥︎ Collaborative creative projects<br/>
                        ♥︎ Learning new technologies and tools
                    </p>

                    <h2>Let's connect ☕︎</h2>
                    <p>
                        Interested in collaborating or want to learn more about my work?<br/>
                        <a href="mailto:thornal.a@northeastern.edu">thornal.a@northeastern.edu</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

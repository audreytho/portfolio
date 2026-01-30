import { useNavigate } from 'react-router-dom'
import './About.css'

function About() {
    const navigate = useNavigate()

    return (
        <div className="about-page">
            <div className="about-window">
                <button className="close-btn" onClick={() => navigate('/')}>✕</button>
                
                <div className="about-layout">
                    <div className="about-photo">
                        <img src="/images/audrey-photo.jpg" alt="Audrey Thornal" />
                    </div>
                    
                    <div className="about-text">
                        <h1>Hello!</h1>
                        <p>
                            My name's Audrey Thornal! I'm currently a third-year student at Northeastern 
                            University studying a combined major in Computer Science and Game Development with a 
                            minor in Business Administration. I'm passionate about designing and building products that 
                            blend strong technical foundations with creative vision. I enjoy programming, game 
                            design, and project management, and I do my best work in collaborative, interdisciplinary 
                            environments where ideas are given the chance to grow into polished and impactful 
                            experiences!
                        </p>
                        <p>
                            I'm always actively seeking opportunities to learn from, contribute, and collaborate on 
                            meaningful projects!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="home-page">
            <div className="menu-label">MENU</div>
            <nav className="home-menu">
                <Link to="/work" className="home-link">WORK</Link>
                <Link to="/about" className="home-link">ABOUT</Link>
                <Link to="/resume" className="home-link">RESUME</Link>
                <Link to="/contact" className="home-link">CONTACT</Link>
            </nav>
        </div>
    )
}

export default Home

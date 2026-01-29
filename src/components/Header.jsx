import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/work">WORK</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">RESUME</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

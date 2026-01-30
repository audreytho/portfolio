import { Link } from 'react-router-dom'

function Header() {
    const playSound = () => {
        const audio = new Audio('/sounds/click.mp3')
        audio.volume = 0.3 // 30% volume
        audio.play()
    }

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/work" onClick={playSound}>WORK</Link></li>
                    <li><Link to="/about" onClick={playSound}>ABOUT</Link></li>
                    <li><Link to="/contact" onClick={playSound}>RESUME</Link></li>
                    <li><Link to="/contact" onClick={playSound}>CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

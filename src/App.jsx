import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import './App.css'

function ScrollToTop() {
    const { pathname } = useLocation()
    
    useEffect(() => {
        // Disable browser's scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
        // Immediately scroll to top
        window.scrollTo(0, 0)
    }, [pathname])
    
    return null
}

function App() {
    // Set scroll restoration to manual on initial load
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
    }, [])
    
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={
                    <div className="App">
                        <Header />
                        <main><Work /></main>
                    </div>
                } />
                <Route path="/project/:id" element={
                    <div className="App">
                        <Header />
                        <main><ProjectDetail /></main>
                    </div>
                } />
                <Route path="/about" element={
                    <div className="App">
                        <Header />
                        <main><About /></main>
                    </div>
                } />
                <Route path="/contact" element={
                    <div className="App">
                        <Header />
                        <main><Contact /></main>
                    </div>
                } />
                <Route path="/resume" element={
                    <div className="App">
                        <Header />
                        <main><Contact /></main>
                    </div>
                } />
            </Routes>
        </Router>
    )
}

export default App

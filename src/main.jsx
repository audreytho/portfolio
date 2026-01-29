import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize animations
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-out'
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

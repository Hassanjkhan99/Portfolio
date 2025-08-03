import React, { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Testimonials } from './sections/Testimonials'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App

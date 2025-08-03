import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { HomePage } from './sections/HomePage'
import { TechStack } from './sections/TechStack'
import { AboutMe } from './sections/AboutMe'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
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
        <HomePage />
        <TechStack />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

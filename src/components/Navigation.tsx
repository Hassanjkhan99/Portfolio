import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { Toggle } from './ui/toggle'
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react'
import { navigation, socialLinks } from '../constants/data'
import { scrollToSection } from '../lib/utils'

interface NavigationProps {
  isDark: boolean
  onToggleTheme: () => void
}

export const Navigation: React.FC<NavigationProps> = ({ isDark, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Active section detection
      const sections = ['home', 'tech-stack-section', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    scrollToSection(href.replace('#', ''))
    setIsOpen(false)
  }

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <Github className="h-5 w-5" />
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />
      case 'mail':
        return <Mail className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/5 dark:bg-gray-900/5 backdrop-blur-xl border-b border-white/10 dark:border-gray-700/30 shadow-2xl shadow-purple-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => handleNavClick('#home')}
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-purple-400 dark:text-purple-300' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300'
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.slice(0, 2).map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  {getSocialIcon(link.icon)}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <Toggle
              pressed={isDark}
              onPressedChange={onToggleTheme}
              className="p-2"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Toggle>

            {/* Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                onClick={() => handleNavClick('#contact')}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-500/50 backdrop-blur-sm"
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Toggle
              pressed={isDark}
              onPressedChange={onToggleTheme}
              className="p-2"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Toggle>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
                         className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="container-custom py-4 space-y-4">
              {navigation.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 10 }}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </motion.button>
              ))}
              
                             <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                    >
                      {getSocialIcon(link.icon)}
                    </motion.a>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleNavClick('#contact')}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Github, Linkedin, Mail, Download, ArrowUp, Heart } from 'lucide-react'
import { navigation, socialLinks } from '../constants/data'
import { scrollToSection } from '../lib/utils'

// Animated Particles Background Component
const AnimatedParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 200 // Footer height
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Floating particles
    const particles: Array<{ x: number; y: number; size: number; speedY: number; opacity: number }> = []
    const numParticles = 20

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 50,
        size: Math.random() * 2 + 1,
        speedY: -Math.random() * 0.5 - 0.2,
        opacity: Math.random() * 0.5 + 0.2
      })
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.y += particle.speedY

        // Reset particle when it goes off screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10
          particle.x = Math.random() * canvas.width
        }

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = '#a855f7'
        ctx.shadowColor = '#a855f7'
        ctx.shadowBlur = 5
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export const Footer: React.FC = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white overflow-hidden">
      {/* Animated Particles Background */}
      <AnimatedParticles />
      
      <div className="relative z-10 container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">Portfolio</h3>
            <p className="text-gray-400 mb-6">
              Full-stack developer passionate about creating innovative web applications 
              with modern technologies and exceptional user experiences.
            </p>
            
            <div className="space-y-2 text-gray-400">
              <p>📍 Hamburg, Germany</p>
              <p>📧 hello@example.com</p>
              <p>📱 +49 123 456 789</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white p-0 h-auto justify-start"
                onClick={() => window.open('https://github.com/username', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub Profile
              </Button>
              
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white p-0 h-auto justify-start"
                onClick={() => window.open('https://linkedin.com/in/username', '_blank')}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn Profile
              </Button>
              
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white p-0 h-auto justify-start"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
              
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white p-0 h-auto justify-start"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Section Shortcuts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Navigation</h4>
            <div className="space-y-3">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="text-gray-400 hover:text-white p-0 h-auto justify-start"
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <span>Made by Muhammad Hassan with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500" />
              </motion.div>
              <span>using React, Three.js, shadcn/ui, and Tailwind CSS</span>
            </div>
            <div className="mt-1">© 2024 Portfolio. All rights reserved.</div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  {getSocialIcon(link.icon)}
                </motion.a>
              ))}
            </div>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-primary transition-colors duration-200 border border-gray-800 rounded-md hover:border-primary"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 
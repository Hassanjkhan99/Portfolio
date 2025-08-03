// 🚀 PROJECTS SECTION COMPONENT
// Featured projects with glassy cards and Three.js background

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Star, Users, Calendar } from 'lucide-react'

// Project interface
interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  stars?: number
  forks?: number
  lastUpdated: string
  featured: boolean
}

// Sample projects data
const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    subtitle: 'Modern React Portfolio',
    description: 'A stunning portfolio built with React, Three.js, and Framer Motion featuring interactive animations and glassmorphism design.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'TypeScript', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Hassanjkhan99/portfolio',
    liveUrl: 'https://hassan-portfolio.vercel.app',
    stars: 15,
    forks: 8,
    lastUpdated: '2024-01-15',
    featured: true
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    subtitle: 'Full-Stack Shopping Experience',
    description: 'A complete e-commerce solution with Angular frontend, Node.js backend, and MongoDB database.',
    image: '/api/placeholder/400/250',
    tech: ['Angular', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    githubUrl: 'https://github.com/Hassanjkhan99/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    stars: 23,
    forks: 12,
    lastUpdated: '2024-01-10',
    featured: true
  },
  {
    id: 'dashboard',
    title: 'Analytics Dashboard',
    subtitle: 'Real-time Data Visualization',
    description: 'Interactive dashboard with D3.js charts, real-time data updates, and responsive design.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'D3.js', 'WebSocket', 'TypeScript', 'Chart.js'],
    githubUrl: 'https://github.com/Hassanjkhan99/dashboard',
    liveUrl: 'https://analytics-demo.vercel.app',
    stars: 18,
    forks: 6,
    lastUpdated: '2024-01-08',
    featured: true
  },
  {
    id: 'chat-app',
    title: 'Real-time Chat App',
    subtitle: 'Instant Messaging Platform',
    description: 'Real-time chat application with WebSocket, user authentication, and file sharing capabilities.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/Hassanjkhan99/chat-app',
    liveUrl: 'https://chat-demo.vercel.app',
    stars: 31,
    forks: 15,
    lastUpdated: '2024-01-05',
    featured: false
  },
  {
    id: 'task-manager',
    title: 'Task Management System',
    subtitle: 'Productivity & Collaboration',
    description: 'Advanced task management with drag-and-drop, team collaboration, and progress tracking.',
    image: '/api/placeholder/400/250',
    tech: ['Angular', 'NgRx', 'Firebase', 'Material UI', 'RxJS'],
    githubUrl: 'https://github.com/Hassanjkhan99/task-manager',
    liveUrl: 'https://tasks-demo.vercel.app',
    stars: 27,
    forks: 11,
    lastUpdated: '2024-01-03',
    featured: false
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    subtitle: 'Location-based Weather',
    description: 'Beautiful weather app with location detection, 7-day forecasts, and animated weather icons.',
    image: '/api/placeholder/400/250',
    tech: ['React', 'OpenWeather API', 'Geolocation', 'CSS Grid', 'PWA'],
    githubUrl: 'https://github.com/Hassanjkhan99/weather-app',
    liveUrl: 'https://weather-demo.vercel.app',
    stars: 12,
    forks: 4,
    lastUpdated: '2024-01-01',
    featured: false
  }
]

// Three.js Animated Background Component
const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Floating orbs
    const orbs: Array<{ x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }> = []
    const numOrbs = 8

    // Initialize orbs
    for (let i = 0; i < numOrbs; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1
      })
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      )
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.05)')
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.1)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw orbs
      orbs.forEach(orb => {
        orb.x += orb.speedX
        orb.y += orb.speedY

        // Bounce off edges
        if (orb.x < 0 || orb.x > canvas.width) orb.speedX *= -1
        if (orb.y < 0 || orb.y > canvas.height) orb.speedY *= -1

        // Draw orb
        ctx.save()
        ctx.globalAlpha = orb.opacity
        const orbGradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.size
        )
        orbGradient.addColorStop(0, 'rgba(147, 51, 234, 0.3)')
        orbGradient.addColorStop(1, 'rgba(147, 51, 234, 0)')
        ctx.fillStyle = orbGradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2)
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

// Project Card Component
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glassy Card */}
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/25">
        
        {/* Animated Image Container */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          {/* Placeholder gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20" />
          
          {/* Animated overlay */}
          <motion.div
            animate={{
              background: isHovered 
                ? "linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))"
                : "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))"
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          />
          
          {/* Project title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h3
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold text-white text-center px-4"
            >
              {project.title}
            </motion.h3>
          </div>

          {/* Shimmer effect on hover */}
          <motion.div
            animate={{
              x: isHovered ? '100%' : '-100%'
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Subtitle */}
          <p className="text-purple-300 font-medium mb-2">{project.subtitle}</p>
          
          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.05 }}
                className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            {project.stars && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>{project.stars}</span>
              </div>
            )}
            {project.forks && (
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{project.forks}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(project.lastUpdated).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </motion.a>
            )}
            
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-4 w-4" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 pointer-events-none"
        />
      </div>
    </motion.div>
  )
}

export const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('projects')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Three.js Animated Background */}
      <AnimatedBackground />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="text-6xl md:text-7xl font-extrabold font-['Space_Grotesk'] mb-6"
            >
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Showcasing my best work and technical expertise
            </motion.p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-3 mb-16"
          >
            {(['all', 'featured'] as const).map((filterOption) => (
              <motion.button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-500 backdrop-blur-xl border-2 ${
                  filter === filterOption
                    ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white border-purple-400/50 shadow-2xl shadow-purple-500/25'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 hover:shadow-xl'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/Hassanjkhan99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 backdrop-blur-xl border border-white/20"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
// 🚀 TECH STACK SECTION
// Dedicated tech stack page with full-width design and advanced interactions

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SkillCard } from './home/components/tech-stack/SkillCard'
import { skills, skillFilters, type SkillFilter } from './home/data'

// Enhanced Wavy SVG Divider Component with refined opacity and depth
const WavyDivider: React.FC<{ className?: string; flip?: boolean }> = ({ className = "", flip = false }) => (
  <div className={`w-full ${className}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`w-full h-16 md:h-20 ${flip ? 'rotate-180' : ''}`}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".15"
        className="fill-current text-purple-500/15"
        stroke="url(#gradient1)"
        strokeWidth="1.5"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".25"
        className="fill-current text-purple-400/20"
        stroke="url(#gradient2)"
        strokeWidth="1"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        className="fill-current text-purple-300/25"
        stroke="url(#gradient3)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#ef4444" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

// Enhanced Three.js Starfield Background Component
const StarfieldBackground: React.FC = () => {
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

    // Enhanced star properties with realistic space colors
    const stars: Array<{ 
      x: number; 
      y: number; 
      size: number; 
      speed: number; 
      opacity: number;
      color: string;
      pulse: number;
      twinkle: number;
      type: 'white' | 'blue' | 'yellow' | 'red' | 'orange';
    }> = []
    const numStars = 300

    // Realistic star colors for space effect
    const starColors = {
      white: ['#ffffff', '#f8f8ff', '#f0f0f0'],
      blue: ['#87ceeb', '#4682b4', '#1e90ff', '#00bfff'],
      yellow: ['#ffd700', '#ffeb3b', '#f4f4f4', '#ffffe0'],
      red: ['#ff6b6b', '#dc143c', '#b22222', '#8b0000'],
      orange: ['#ffa500', '#ff8c00', '#ff7f50', '#ff6347']
    }

    // Initialize stars with enhanced properties
    for (let i = 0; i < numStars; i++) {
      const starTypes: Array<'white' | 'blue' | 'yellow' | 'red' | 'orange'> = ['white', 'blue', 'yellow', 'red', 'orange']
      const starType = starTypes[Math.floor(Math.random() * starTypes.length)]
      const colors = starColors[starType]
      const color = colors[Math.floor(Math.random() * colors.length)]
      
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.9 + 0.1,
        color: color,
        pulse: Math.random() * Math.PI * 2,
        twinkle: Math.random() * Math.PI * 2,
        type: starType
      })
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create enhanced space gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      )
      gradient.addColorStop(0, 'rgba(25, 25, 35, 0.3)')
      gradient.addColorStop(0.3, 'rgba(15, 15, 25, 0.4)')
      gradient.addColorStop(0.7, 'rgba(10, 10, 20, 0.5)')
      gradient.addColorStop(1, 'rgba(5, 5, 15, 0.6)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add nebula-like effects
      const nebulaGradient = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.4, 0,
        canvas.width * 0.3, canvas.height * 0.4, canvas.width * 0.4
      )
      nebulaGradient.addColorStop(0, 'rgba(138, 43, 226, 0.05)')
      nebulaGradient.addColorStop(0.5, 'rgba(75, 0, 130, 0.03)')
      nebulaGradient.addColorStop(1, 'rgba(25, 25, 35, 0)')
      ctx.fillStyle = nebulaGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw enhanced stars
      stars.forEach((star) => {
        star.y += star.speed
        star.pulse += 0.02
        star.twinkle += 0.03
        
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        // Enhanced star effects
        const pulseOpacity = star.opacity * (0.6 + 0.4 * Math.sin(star.pulse))
        const twinkleEffect = 0.8 + 0.2 * Math.sin(star.twinkle * 3)
        const finalOpacity = pulseOpacity * twinkleEffect
        const pulseSize = star.size * (0.8 + 0.2 * Math.sin(star.pulse * 2))

        // Draw star with enhanced glow
        ctx.save()
        ctx.globalAlpha = finalOpacity
        
        // Create star glow effect
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, pulseSize * 3
        )
        
        // Different glow colors based on star type
        switch (star.type) {
          case 'red':
            glowGradient.addColorStop(0, star.color)
            glowGradient.addColorStop(0.3, `${star.color}80`)
            glowGradient.addColorStop(1, 'rgba(139, 0, 0, 0)')
            break
          case 'orange':
            glowGradient.addColorStop(0, star.color)
            glowGradient.addColorStop(0.3, `${star.color}80`)
            glowGradient.addColorStop(1, 'rgba(255, 140, 0, 0)')
            break
          case 'yellow':
            glowGradient.addColorStop(0, star.color)
            glowGradient.addColorStop(0.3, `${star.color}80`)
            glowGradient.addColorStop(1, 'rgba(255, 215, 0, 0)')
            break
          case 'blue':
            glowGradient.addColorStop(0, star.color)
            glowGradient.addColorStop(0.3, `${star.color}80`)
            glowGradient.addColorStop(1, 'rgba(30, 144, 255, 0)')
            break
          default: // white
            glowGradient.addColorStop(0, star.color)
            glowGradient.addColorStop(0.3, `${star.color}80`)
            glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        }
        
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, pulseSize * 3, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw star core
        ctx.fillStyle = star.color
        ctx.beginPath()
        ctx.arc(star.x, star.y, pulseSize, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()

        // Add shooting stars occasionally (more realistic)
        if (Math.random() < 0.0005) {
          ctx.save()
          ctx.strokeStyle = star.color
          ctx.lineWidth = 1
          ctx.globalAlpha = 0.8
          ctx.shadowColor = star.color
          ctx.shadowBlur = 8
          ctx.beginPath()
          ctx.moveTo(star.x, star.y)
          ctx.lineTo(star.x - 80, star.y - 80)
          ctx.stroke()
          ctx.restore()
        }
      })

      // Add occasional nebula wisps
      if (Math.random() < 0.01) {
        ctx.save()
        const wispGradient = ctx.createLinearGradient(
          Math.random() * canvas.width, 0,
          Math.random() * canvas.width, canvas.height
        )
        wispGradient.addColorStop(0, 'rgba(138, 43, 226, 0.1)')
        wispGradient.addColorStop(0.5, 'rgba(75, 0, 130, 0.05)')
        wispGradient.addColorStop(1, 'rgba(25, 25, 35, 0)')
        ctx.fillStyle = wispGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.restore()
      }

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
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
      style={{ 
        background: 'radial-gradient(ellipse at center, rgba(25, 25, 35, 0.3) 0%, rgba(15, 15, 25, 0.4) 30%, rgba(10, 10, 20, 0.5) 70%, rgba(5, 5, 15, 0.6) 100%)'
      }}
    />
  )
}

// Enhanced Floating Particles Component
const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.5, 1.2, 0.5],
            x: [0, Math.random() * 150 - 75],
            y: [0, Math.random() * 150 - 75]
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
          className={`absolute w-1 h-1 rounded-full ${
            i % 4 === 0 ? 'bg-pink-400/30' :
            i % 4 === 1 ? 'bg-purple-400/30' :
            i % 4 === 2 ? 'bg-blue-400/30' :
            'bg-cyan-400/30'
          }`}
          style={{
            left: `${20 + (i * 8) % 60}%`,
            top: `${30 + (i * 12) % 40}%`,
            boxShadow: `0 0 ${6 + i * 2}px ${
              i % 4 === 0 ? 'rgba(236, 72, 153, 0.3)' :
              i % 4 === 1 ? 'rgba(168, 85, 247, 0.3)' :
              i % 4 === 2 ? 'rgba(59, 130, 246, 0.3)' :
              'rgba(6, 182, 212, 0.3)'
            }`
          }}
        />
      ))}
    </div>
  )
}

export const TechStack: React.FC = () => {
  const [skillFilter, setSkillFilter] = useState<SkillFilter>('all')
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills = skillFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === skillFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('tech-stack-section')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="tech-stack-section" className="relative overflow-hidden w-full min-h-screen">
      {/* Enhanced Three.js Starfield Background - Full Width */}
      <StarfieldBackground />

      {/* Enhanced Floating Particles - Full Width */}
      <FloatingParticles />

      {/* Enhanced Wavy Divider Top - Full Width */}
      <WavyDivider className="absolute top-0 left-0 w-full" />

      {/* Content Container - Full Width with Centered Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
        
        {/* Centered Header Section */}
        <div className="max-w-4xl mx-auto mb-20 sm:mb-24">
          
          {/* Enhanced Section Title with improved spacing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-['Space_Grotesk'] mb-8 sm:mb-10 relative"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px rgba(236, 72, 153, 0.6)",
                    "0 0 40px rgba(168, 85, 247, 0.8)",
                    "0 0 20px rgba(236, 72, 153, 0.6)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                Tech Stack
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255, 255, 255, 0.3)",
                    "0 0 20px rgba(255, 255, 255, 0.5)",
                    "0 0 10px rgba(255, 255, 255, 0.3)"
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-gray-200/90 font-light"
              >
                Technologies I use to bring ideas to life
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Enhanced Filter Tabs with improved spacing and design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-4 sm:gap-6 flex-wrap"
          >
            {skillFilters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setSkillFilter(filter)}
                className={`px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-500 backdrop-blur-xl border-2 relative overflow-hidden ${
                  skillFilter === filter
                    ? 'bg-gradient-to-r from-purple-500/40 to-pink-500/40 text-white border-purple-400/60 shadow-2xl shadow-purple-500/30 scale-105'
                    : 'bg-white/8 text-gray-300 border-white/15 hover:bg-white/12 hover:text-white hover:border-white/25 hover:shadow-xl hover:scale-105'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              >
                {/* Enhanced button glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl"
                  animate={{
                    opacity: skillFilter === filter ? [0.4, 0.7, 0.4] : 0
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10">
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Full-Width Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="relative w-full"
        >
          {/* Enhanced Spotlight Gradient Background - Full Width */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-purple-500/8 via-transparent to-pink-500/8 rounded-3xl pointer-events-none w-full"
            animate={{
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Full-Width Grid with Responsive Columns */}
          <div className="grid gap-6 sm:gap-8 lg:gap-10 xl:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12">
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${skillFilter}`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  layout
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <SkillCard skill={skill} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Enhanced hover effect overlay - Full Width */}
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-3xl pointer-events-none w-full"
            />
          )}
        </motion.div>
      </div>

      {/* Enhanced Wavy Divider Bottom - Full Width */}
      <WavyDivider className="absolute bottom-0 left-0 w-full" flip />

      {/* Enhanced Background Glow - Full Width */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-purple-500/4 via-transparent to-pink-500/4 pointer-events-none w-full"
      />
    </section>
  )
} 
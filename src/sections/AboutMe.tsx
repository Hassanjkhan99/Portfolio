// 🚀 ABOUT ME SECTION COMPONENT
// Playful bio, animated timeline, fun facts, and future goals

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Coffee, 
  Plane, 
  Code, 
  Target, 
  Rocket,
  Star,
  Award,
  Users,
  Globe
} from 'lucide-react'

// Timeline item interface
interface TimelineItem {
  id: string
  year: string
  title: string
  company: string
  description: string
  icon: React.ReactNode
  color: string
}

// Fun fact interface
interface FunFact {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

// Timeline data
const timelineData: TimelineItem[] = [
  {
    id: '2024',
    year: '2024',
    title: 'Frontend Software Engineer',
    company: 'Tech Company',
    description: 'Building scalable web applications with Angular and React, modernizing legacy systems.',
    icon: <Briefcase className="h-6 w-6" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: '2023',
    year: '2023',
    title: 'Software Developer',
    company: 'Startup',
    description: 'Developed full-stack applications using modern technologies and best practices.',
    icon: <Code className="h-6 w-6" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: '2022',
    year: '2022',
    title: 'Computer Science Graduate',
    company: 'University',
    description: 'Completed degree with focus on software engineering and web development.',
    icon: <GraduationCap className="h-6 w-6" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: '2021',
    year: '2021',
    title: 'Web Development Intern',
    company: 'Tech Startup',
    description: 'First professional experience building responsive web applications.',
    icon: <Code className="h-6 w-6" />,
    color: 'from-orange-500 to-red-500'
  }
]

// Fun facts data
const funFacts: FunFact[] = [
  {
    id: 'coffee',
    icon: <Coffee className="h-8 w-8" />,
    title: 'Coffee Enthusiast',
    description: 'Can\'t start coding without my daily dose of caffeine ☕',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'travel',
    icon: <Plane className="h-8 w-8" />,
    title: 'Travel Lover',
    description: 'Exploring new places and cultures whenever possible ✈️',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'fitness',
    icon: <Heart className="h-8 w-8" />,
    title: 'Fitness Freak',
    description: 'Staying healthy with regular workouts and outdoor activities 💪',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'open-source',
    icon: <Users className="h-8 w-8" />,
    title: 'Open Source Contributor',
    description: 'Giving back to the community through code contributions 🌟',
    color: 'from-green-500 to-emerald-500'
  }
]

// Future goals data
const futureGoals = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Dive deep into AI/ML to build intelligent applications',
    icon: <Target className="h-6 w-6" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    description: 'Explore Web3 and decentralized applications',
    icon: <Globe className="h-6 w-6" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'leadership',
    title: 'Technical Leadership',
    description: 'Lead engineering teams and mentor junior developers',
    icon: <Award className="h-6 w-6" />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'startup',
    title: 'Build My Own Startup',
    description: 'Create innovative solutions that solve real problems',
    icon: <Rocket className="h-6 w-6" />,
    color: 'from-orange-500 to-red-500'
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

    // Floating particles
    const particles: Array<{ x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }> = []
    const numParticles = 50

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
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
      gradient.addColorStop(0, 'rgba(236, 72, 153, 0.05)')
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.1)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = '#a855f7'
        ctx.shadowColor = '#a855f7'
        ctx.shadowBlur = 10
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

// Timeline Item Component
const TimelineItem: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`flex items-center gap-8 ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* Timeline Icon */}
      <div className="relative flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}
        >
          {item.icon}
        </motion.div>
        <div className="absolute top-8 left-8 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent" />
      </div>

      {/* Timeline Content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
        <motion.div
          whileHover={{ y: -5 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
        >
          <div className="text-sm text-purple-300 font-medium mb-2">{item.year}</div>
          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
          <p className="text-purple-300 font-medium mb-3">{item.company}</p>
          <p className="text-gray-300 leading-relaxed">{item.description}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Fun Fact Card Component
const FunFactCard: React.FC<{ fact: FunFact; index: number }> = ({ fact, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
    >
      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${fact.color} flex items-center justify-center text-white mb-4 mx-auto`}>
        {fact.icon}
      </div>
      <h3 className="text-lg font-bold text-white text-center mb-2">{fact.title}</h3>
      <p className="text-gray-300 text-center text-sm">{fact.description}</p>
    </motion.div>
  )
}

// Future Goal Card Component
const FutureGoalCard: React.FC<{ goal: any; index: number }> = ({ goal, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${goal.color} flex items-center justify-center text-white mb-4`}>
        {goal.icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{goal.title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{goal.description}</p>
    </motion.div>
  )
}

export const AboutMe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('about')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-20 overflow-hidden">
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
                About Me
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Get to know the person behind the code
            </motion.p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 mb-20"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="text-lg text-gray-300 leading-relaxed mb-6"
              >
                Hey there! 👋 I'm Muhammad Hassan Jamil Khan, a passionate Frontend Software Engineer 
                who loves turning complex problems into simple, beautiful, and intuitive solutions. 
                When I'm not crafting pixel-perfect user interfaces or optimizing web performance, 
                you'll find me exploring new technologies, contributing to open-source projects, 
                or planning my next adventure.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                I believe in writing clean, maintainable code and creating experiences that users love. 
                My journey in tech has taught me that the best solutions come from understanding both 
                the technical requirements and the human needs behind them.
              </motion.p>
            </div>
          </motion.div>

          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white text-center mb-12">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
            </h3>
            
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-4xl font-bold text-white text-center mb-12">
              Fun <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Facts</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {funFacts.map((fact, index) => (
                <FunFactCard key={fact.id} fact={fact} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-white text-center mb-12">
              Future <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Goals</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {futureGoals.map((goal, index) => (
                <FutureGoalCard key={goal.id} goal={goal} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
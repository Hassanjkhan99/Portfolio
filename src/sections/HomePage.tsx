// 🚀 HOME PAGE - Modular Component Architecture
// Main home page component using modular components

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

// Import data
// typewriterTexts is now handled by RotatingTypewriter component

// Import components
import {
  AnimatedBackground,
  ParticlesBackground,
} from './home/components'
import Hero from './Hero'

// Enhanced Floating Artifacts Component
const FloatingArtifacts: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: [0, 360]
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className={`absolute ${
            i % 2 === 0 ? 'w-4 h-4' : 'w-6 h-6'
          } ${
            i % 3 === 0 ? 'bg-gradient-to-r from-pink-400/20 to-purple-400/20' :
            i % 3 === 1 ? 'bg-gradient-to-r from-blue-400/20 to-cyan-400/20' :
            'bg-gradient-to-r from-yellow-400/20 to-orange-400/20'
          } rounded-full blur-sm`}
          style={{
            left: `${20 + (i * 10) % 60}%`,
            top: `${15 + (i * 15) % 70}%`
          }}
        />
      ))}

      {/* Floating Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
          }}
          className="absolute h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
          style={{
            width: `${100 + i * 50}px`,
            left: `${10 + (i * 20) % 80}%`,
            top: `${20 + (i * 25) % 60}%`,
            transform: `rotate(${i * 15}deg)`
          }}
        />
      ))}

      {/* Glowing Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1
          }}
          className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
          style={{
            left: `${25 + (i * 12) % 50}%`,
            top: `${30 + (i * 18) % 40}%`,
            boxShadow: `0 0 ${10 + i * 5}px rgba(168, 85, 247, 0.5)`
          }}
        />
      ))}
    </div>
  )
}

// Interactive Cursor Effect Component
const InteractiveCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 20,
        y: mousePosition.y - 20,
        scale: isHovering ? 1.5 : 1
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-10 h-10 bg-white rounded-full opacity-20" />
    </motion.div>
  )
}

// Enhanced Scroll Progress Indicator
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])



  return (
    <div ref={sectionRef} className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <AnimatedBackground />

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Enhanced Floating Artifacts */}
      <FloatingArtifacts />

      {/* Interactive Cursor Effect */}
      <InteractiveCursor />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className=" mx-auto">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <Hero />
          </motion.div>
        </div>
      </div>



      {/* Enhanced Background Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"
      />
    </div>
  )
} 
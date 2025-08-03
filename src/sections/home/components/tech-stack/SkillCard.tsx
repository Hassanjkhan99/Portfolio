// 🚀 ENHANCED SKILL CARD COMPONENT
// Josh W. Comeau inspired skill card with advanced interactions and glassmorphism

import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import type { Skill } from '../../data'

interface SkillCardProps {
  skill: Skill
  index: number
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showFunFact, setShowFunFact] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Motion values for advanced interactions
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-100, 100], [15, -15])
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15])
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  // Audio context for hover sounds
  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio()
      audioRef.current.volume = 0.1
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
    setShowFunFact(false)
  }

  const handleHover = () => {
    setIsHovered(true)
    setShowConfetti(true)
    
    // Play subtle hover sound
    if (audioRef.current) {
      audioRef.current.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT'
      audioRef.current.play().catch(() => {})
    }
    
    setTimeout(() => setShowConfetti(false), 1000)
  }

  const handleLongPress = () => {
    setShowFunFact(true)
    setTimeout(() => setShowFunFact(false), 3000)
  }

  const handleClick = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 200)
  }

  // Fun facts for each technology
  const funFacts: Record<string, string> = {
    "JavaScript": "Created in just 10 days by Brendan Eich in 1995!",
    "TypeScript": "Microsoft's answer to JavaScript's type safety issues.",
    "Angular": "Originally developed by Google's internal team.",
    "React": "Facebook's library that revolutionized component-based UI.",
    "Vue.js": "Created by Evan You, originally for internal use at Google.",
    "Next.js": "Built by Vercel to make React full-stack development easier.",
    "NgRx": "Inspired by Redux but built specifically for Angular.",
    "Tailwind CSS": "Created by Adam Wathan as a utility-first CSS framework.",
    "Node.js": "Built on Chrome's V8 engine by Ryan Dahl in 2009.",
    "MongoDB": "Named after 'humongous' - it's a play on words!",
    "PostgreSQL": "Started in 1986 at UC Berkeley - it's been around!",
    "GraphQL": "Facebook's query language that gives you exactly what you need.",
    "Prisma": "Next-generation ORM that makes database access type-safe.",
    "Docker": "Named after the shipping containers - same concept!",
    "Git": "Created by Linus Torvalds in just 2 weeks in 2005.",
    "GitHub": "Founded in 2008, now owned by Microsoft since 2018.",
    "Vite": "French for 'fast' - and it lives up to its name!",
    "Webpack": "The bundler that powers most modern web apps.",
    "Jest": "Meta's testing framework that makes testing delightful.",
    "Cypress": "Named after the cypress tree - known for its reliability.",
    "AWS S3": "Amazon's Simple Storage Service - stores the internet!",
    "Vercel": "Founded by Guillermo Rauch, creator of Socket.io.",
    "Netlify": "Started as a static site hosting service in 2014.",
    "Firebase": "Originally a startup, acquired by Google in 2014.",
    "Supabase": "Open source alternative to Firebase, built with PostgreSQL.",
    "D3.js": "Data-Driven Documents - the king of data visualization.",
    "Web Workers": "Run JavaScript in background threads - no more blocking!",
    "Figma": "Founded in 2012, now the go-to design tool for teams.",
    "Adobe XD": "Adobe's answer to modern UX design needs.",
    "Strapi": "Headless CMS that gives you full control over your content.",
    "WordPress": "Powers over 40% of all websites on the internet!",
    "Shopify": "Started as an online snowboard store in 2004."
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{
        scale: 1.08,
        y: -12,
        transition: { duration: 0.4, type: "spring", stiffness: 200 }
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      onHoverStart={handleHover}
      onHoverEnd={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseDown={handleClick}
      onTouchStart={handleLongPress}
      className="group relative cursor-pointer perspective-1000"
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Enhanced Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
                scale: 0,
                rotate: 0
              }}
              animate={{ 
                opacity: 0, 
                x: (Math.random() - 0.5) * 150,
                y: -80 - Math.random() * 80,
                scale: [0, 1, 0.8],
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: 1.5,
                delay: i * 0.05,
                ease: "easeOut"
              }}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: [
                  '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', 
                  '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'
                ][Math.floor(Math.random() * 8)],
                left: `${20 + i * 6}%`,
                top: '50%'
              }}
            />
          ))}
        </div>
      )}

      {/* Fun Fact Tooltip */}
      {showFunFact && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-30 bg-black/95 backdrop-blur-xl border border-purple-400/50 rounded-xl p-4 max-w-xs shadow-2xl"
        >
          <p className="text-sm text-white font-medium text-center leading-relaxed">
            {funFacts[skill.name] || "This technology is awesome!"}
          </p>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95" />
        </motion.div>
      )}

      {/* Main Card Container */}
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d'
        }}
        className="relative w-full h-full"
      >
        {/* Enhanced Glassmorphism Card with improved styling */}
        <div className="bg-gradient-to-br from-white/12 via-white/8 to-white/4 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/25 p-8 sm:p-10 flex flex-col items-center relative overflow-hidden h-full min-h-[320px] group-hover:border-white/40 group-hover:shadow-3xl transition-all duration-500 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/6">
          
          {/* Enhanced Animated Border Glow */}
          <motion.div
            animate={{
              boxShadow: isHovered 
                ? `0 0 50px ${skill.color}50, 0 0 100px ${skill.color}30, inset 0 0 30px ${skill.color}15` 
                : '0 0 0px rgba(255,255,255,0)'
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded-3xl pointer-events-none"
          />

          {/* Enhanced Shine Effect */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '100%' : '-100%' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
          />

          {/* Icon with Enhanced Floating Animation */}
          <motion.div 
            className="mb-8 relative z-10"
            animate={{
              y: isHovered ? [-8, 8, -8] : 0,
              scale: isHovered ? 1.15 : 1,
              rotate: isHovered ? [0, 5, -5, 0] : 0
            }}
            transition={{
              duration: 3,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              {skill.icon}
              {/* Enhanced Icon Glow */}
              <motion.div
                animate={{
                  opacity: isHovered ? 0.8 : 0,
                  scale: isHovered ? 1.8 : 1
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-full blur-2xl"
                style={{ backgroundColor: skill.color }}
              />
            </div>
          </motion.div>
          
          {/* Skill Name with Enhanced Typography */}
          <motion.div 
            className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center relative z-10 leading-tight"
            animate={{
              scale: isHovered ? 1.08 : 1,
              color: isHovered ? skill.color : '#ffffff'
            }}
            transition={{ duration: 0.4 }}
          >
            {skill.name}
          </motion.div>
          
          {/* Enhanced Proficiency Bar */}
          <div className="w-full h-5 bg-white/15 rounded-2xl mb-8 overflow-hidden relative z-10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.proficiency}%` }}
              transition={{ 
                duration: 2.5, 
                delay: index * 0.1 + 0.5,
                ease: "easeOut"
              }}
              className="h-5 rounded-2xl relative overflow-hidden"
              style={{
                background: `linear-gradient(90deg, ${skill.color}50, ${skill.color}90, ${skill.color}50)`
              }}
            >
              {/* Enhanced Animated Shimmer */}
              <motion.div
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
              
              {/* Proficiency Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white"
              >
                {skill.proficiency}%
              </motion.div>
            </motion.div>
          </div>
          
          {/* Enhanced Confidence Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: index * 0.1 + 0.8,
              type: "spring",
              stiffness: 200
            }}
            className="px-6 py-3 rounded-2xl text-sm font-bold text-center mb-6 bg-gradient-to-r from-white/20 to-white/8 border border-white/25 backdrop-blur-sm relative z-10 hover:from-white/25 hover:to-white/12 transition-all duration-300"
          >
            <span 
              className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
              style={{ color: skill.color }}
            >
              {skill.confidence}
            </span>
          </motion.div>
          
          {/* Description on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.5 }}
            className="text-sm text-white/90 text-center absolute bottom-8 left-8 right-8 pointer-events-none z-10 leading-relaxed"
          >
            {skill.desc}
          </motion.div>

          {/* Enhanced Press Effect */}
          {isPressed && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 rounded-3xl bg-white/25 pointer-events-none"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  )
} 
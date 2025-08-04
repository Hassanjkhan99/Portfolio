import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { RotatingTypewriter } from '../ui/RotatingTypewriter'
import { typewriterTexts } from '../../data'

// Advanced 3D Name Component with Particle Effects
const HeroName: React.FC = () => {
  const [isNameHovered, setIsNameHovered] = useState(false)
  
  return (
    <div className="relative perspective-1000">
      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
      
      <motion.h1
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: 0.3, 
          duration: 1.2,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className="text-6xl md:text-8xl font-black mb-6 font-['Poppins'] relative cursor-pointer"
        onHoverStart={() => setIsNameHovered(true)}
        onHoverEnd={() => setIsNameHovered(false)}
      >
        {/* First Name with Advanced Gradient */}
        <motion.div
          className="relative inline-block"
        >
          <motion.span
            className="bg-gradient-to-r from-pink-400 via-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent relative z-10"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Muhammad Hassan
          </motion.span>
          
          {/* Animated Underline */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isNameHovered ? "100%" : "0%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>
        
        <br />
        
        {/* Last Name with 3D Effect */}
        <motion.div
          className="relative inline-block"
        >
          <motion.span 
            className="text-white relative z-10"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 255, 255, 0.3)",
                "0 0 20px rgba(255, 255, 255, 0.6)",
                "0 0 30px rgba(255, 255, 255, 0.8)",
                "0 0 20px rgba(255, 255, 255, 0.6)",
                "0 0 10px rgba(255, 255, 255, 0.3)",
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            Jamil Khan
          </motion.span>
          
          {/* 3D Depth Effect */}
          <motion.div
            className="absolute inset-0 text-gray-800 blur-sm"
            style={{ zIndex: 1 }}
            animate={{
              x: [0, 2, 0],
              y: [0, 2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Jamil Khan
          </motion.div>
        </motion.div>
        
        {/* Advanced Shimmer Effect */}
        {isNameHovered && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
            style={{ zIndex: 20 }}
          />
        )}
        
        {/* Particle Burst on Hover */}
        {isNameHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 30 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                initial={{ 
                  x: "50%", 
                  y: "50%", 
                  opacity: 1,
                  scale: 0
                }}
                animate={{
                  x: `${50 + (Math.cos(i * Math.PI / 4) * 100)}%`,
                  y: `${50 + (Math.sin(i * Math.PI / 4) * 100)}%`,
                  opacity: [1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.h1>
      
      {/* Ambient Light Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

// Enhanced Title with Multiple Funky Titles
const HeroTitle: React.FC = () => {
  const funkyTitles = [
    "Code Wizard 🧙‍♂️",
    "Pixel Pusher 🎨",
    "Bug Hunter 🐛",
    "Coffee Addict ☕",
    "Problem Solver 💡",
    "Tech Enthusiast 🚀",
    "Creative Coder 🎭",
    "Digital Craftsman ⚡",
    "Frontend Software Engineer"
  ]

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="text-2xl md:text-3xl text-purple-300 mb-8 font-['Space_Grotesk'] relative"
    >
             <motion.div
         animate={{
           textShadow: [
             "0 0 10px rgba(168, 85, 247, 0.3)",
             "0 0 20px rgba(168, 85, 247, 0.5)",
             "0 0 10px rgba(168, 85, 247, 0.3)"
           ]
         }}
         transition={{
           duration: 5,
           repeat: Infinity,
           ease: "easeInOut",
           delay: 0.5
         }}
      >
                 <RotatingTypewriter 
           texts={funkyTitles}
           interval={4000}
           speed={60}
           delay={0.5}
           cursor="|"
           cursorClassName="text-purple-400 font-mono"
         />
      </motion.div>
    </motion.h2>
  )
}

// Enhanced Location with Tooltip
const HeroLocation: React.FC = () => {
  const [isLocationHovered, setIsLocationHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="flex items-center justify-center gap-2 text-gray-300 mb-10 relative"
      onHoverStart={() => setIsLocationHovered(true)}
      onHoverEnd={() => setIsLocationHovered(false)}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <MapPin className="h-5 w-5 text-pink-400" />
      </motion.div>
             <motion.span 
         className="font-medium"
         animate={{
           textShadow: [
             "0 0 5px rgba(255, 255, 255, 0.2)",
             "0 0 10px rgba(255, 255, 255, 0.4)",
             "0 0 5px rgba(255, 255, 255, 0.2)"
           ]
         }}
         transition={{
           duration: 6,
           repeat: Infinity,
           ease: "easeInOut"
         }}
      >
        Karachi, Pakistan → Hamburg, Germany
      </motion.span>
      
      {/* Location Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isLocationHovered ? 1 : 0, 
          y: isLocationHovered ? 0 : 10 
        }}
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap z-50"
      >
        Relocating soon!
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
      </motion.div>
    </motion.div>
  )
}

// Enhanced Typewriter Effect
const HeroTypewriter: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="text-xl md:text-2xl text-gray-300 mb-12 h-8 font-['Inter'] relative"
    >
             <motion.div
         animate={{
           textShadow: [
             "0 0 10px rgba(255, 255, 255, 0.2)",
             "0 0 20px rgba(255, 255, 255, 0.4)",
             "0 0 10px rgba(255, 255, 255, 0.2)"
           ]
         }}
         transition={{
           duration: 5,
           repeat: Infinity,
           ease: "easeInOut"
         }}
      >
                 <RotatingTypewriter 
           texts={typewriterTexts}
           interval={7000}
           speed={50}
           delay={0.2}
           cursor="|"
           cursorClassName="text-purple-400 font-mono"
         />
      </motion.div>
    </motion.div>
  )
}

// Enhanced Professional Summary
const HeroSummary: React.FC = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="text-lg text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed font-['Inter'] relative"
    >
             <motion.span
         animate={{
           textShadow: [
             "0 0 5px rgba(255, 255, 255, 0.1)",
             "0 0 10px rgba(255, 255, 255, 0.2)",
             "0 0 5px rgba(255, 255, 255, 0.1)"
           ]
         }}
         transition={{
           duration: 7,
           repeat: Infinity,
           ease: "easeInOut"
         }}
      >
        Software Engineer with hands-on experience in frontend development using Angular and React, 
        specializing in building scalable, responsive, and data-intensive web applications. 
        Modernized legacy systems, integrated GraphQL/REST APIs, and optimized performance via RxJS, NgRx, and Web Workers.
      </motion.span>
    </motion.p>
  )
}

export const HeroContent: React.FC = () => {
  return (
    <>
      <HeroName />
      <HeroTitle />
      <HeroLocation />
      <HeroTypewriter />
      <HeroSummary />
    </>
  )
} 
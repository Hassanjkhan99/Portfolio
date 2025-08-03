import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { TypewriterText } from '../ui/TypewriterText'
import { typewriterTexts } from '../../data'

interface HeroContentProps {
  currentTextIndex: number
}

// Enhanced Name with Shimmer Effect
const HeroName: React.FC = () => {
  const [isNameHovered, setIsNameHovered] = useState(false)
  
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-6xl md:text-8xl font-black mb-6 font-['Poppins'] relative"
      onHoverStart={() => setIsNameHovered(true)}
      onHoverEnd={() => setIsNameHovered(false)}
    >
      <motion.span
        animate={{
          textShadow: [
            "0 0 20px rgba(236, 72, 153, 0.5)",
            "0 0 40px rgba(168, 85, 247, 0.5)",
            "0 0 20px rgba(236, 72, 153, 0.5)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent relative"
      >
        Muhammad Hassan
      </motion.span>
      <br />
      <motion.span 
        className="text-white drop-shadow-lg"
        animate={{
          textShadow: [
            "0 0 10px rgba(255, 255, 255, 0.3)",
            "0 0 20px rgba(255, 255, 255, 0.5)",
            "0 0 10px rgba(255, 255, 255, 0.3)"
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
      
      {/* Shimmer Effect on Hover */}
      {isNameHovered && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
        />
      )}
    </motion.h1>
  )
}

// Enhanced Title with Typewriter Effect
const HeroTitle: React.FC = () => {
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
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <TypewriterText text="Frontend Software Engineer" delay={0.5} />
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
          duration: 4,
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
const HeroTypewriter: React.FC<{ currentTextIndex: number }> = ({ currentTextIndex }) => {
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
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <TypewriterText text={typewriterTexts[currentTextIndex]} />
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
          duration: 5,
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

export const HeroContent: React.FC<HeroContentProps> = ({ currentTextIndex }) => {
  return (
    <>
      <HeroName />
      <HeroTitle />
      <HeroLocation />
      <HeroTypewriter currentTextIndex={currentTextIndex} />
      <HeroSummary />
    </>
  )
} 
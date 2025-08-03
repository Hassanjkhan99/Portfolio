import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from '../ui/SocialIcon'
import { type SocialLink } from '../../data'

// Enhanced Social Icon with Tooltip and Sparkle Effect
export const EnhancedSocialIcon: React.FC<{ link: SocialLink; index: number }> = ({ link, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showSparkle, setShowSparkle] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  const handleMouseEnter = () => {
    setIsHovered(true)
    hoverTimeoutRef.current = setTimeout(() => {
      setShowSparkle(true)
    }, 1500)
  }
  
  const handleMouseLeave = () => {
    setIsHovered(false)
    setShowSparkle(false)
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ 
          scale: 1.2, 
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
        className="block p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        <motion.div
          animate={{
            rotate: isHovered ? [0, 360] : 0
          }}
          transition={{ duration: 2, ease: "linear" }}
        >
          <SocialIcon link={link} index={index} />
        </motion.div>
      </motion.a>
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? 0 : 10 
        }}
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap z-50"
      >
        {link.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
      </motion.div>
      
      {/* Sparkle Effect */}
      {showSparkle && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(6)].map((_, i) => {
            const randomX = (Math.random() - 0.5) * 100
            const randomY = (Math.random() - 0.5) * 100
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1.5, 0],
                  x: [0, randomX],
                  y: [0, randomY]
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#ffd700', '#ff69b4', '#00bfff', '#ff6b6b', '#98fb98', '#dda0dd'][i],
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            )
          })}
        </motion.div>
      )}
    </motion.div>
  )
} 
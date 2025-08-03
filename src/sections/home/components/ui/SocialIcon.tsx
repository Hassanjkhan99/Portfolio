// 🚀 SOCIAL ICON COMPONENT
// Individual social icon with hover effects

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import type { SocialLink } from '../../data'

interface SocialIconProps {
  link: SocialLink
  index: number
}

export const SocialIcon: React.FC<SocialIconProps> = ({ link, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: 1 + index * 0.1, 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.15, 
        y: -8,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 group"
    >
      <motion.div
        animate={{
          boxShadow: isHovered 
            ? `0 0 30px ${link.hoverColor}40` 
            : '0 0 0px rgba(255,255,255,0)'
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full"
      />
      <link.icon 
        className="h-6 w-6 relative z-10 transition-all duration-300" 
        style={{ 
          color: isHovered ? link.hoverColor : '#ffffff',
          filter: isHovered ? 'drop-shadow(0 0 8px currentColor)' : 'none'
        }}
      />
      
      {/* Floating particles on hover */}
      {isHovered && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
            style={{ backgroundColor: link.hoverColor }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: link.hoverColor }}
          />
        </>
      )}
    </motion.a>
  )
} 
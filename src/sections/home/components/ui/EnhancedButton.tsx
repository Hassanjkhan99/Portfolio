// 🚀 ENHANCED BUTTON COMPONENT
// Button with ripple effect and animations

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface EnhancedButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '', 
  icon 
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const baseClasses = "relative overflow-hidden rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm border"
  const variantClasses = {
    primary: "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-pink-500/30",
    secondary: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-blue-500/30",
    outline: "bg-white/10 text-purple-300 hover:bg-purple-500/20 border-purple-400/30 hover:border-purple-400/60"
  }
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <motion.div
        animate={{
          scale: isPressed ? 0.95 : 1,
          boxShadow: isPressed 
            ? "inset 0 2px 4px rgba(0,0,0,0.2)" 
            : "none"
        }}
        className="flex items-center justify-center gap-2"
      >
        {icon}
        {children}
      </motion.div>
      
      {/* Ripple effect */}
      {isPressed && (
        <motion.div
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 rounded-lg bg-white/20"
        />
      )}
    </motion.button>
  )
} 
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { EnhancedButton } from '../ui/EnhancedButton'

// Enhanced Button with Ripple Effect
export const EnhancedCTAButton: React.FC<{
  variant: 'primary' | 'outline' | 'secondary'
  size: 'lg'
  onClick: () => void
  icon: React.ReactNode
  children: React.ReactNode
}> = ({ variant, size, onClick, icon, children }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const handleClick = () => {
    onClick()
  }
  
  return (
    <motion.div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <EnhancedButton
        variant={variant}
        size={size}
        onClick={handleClick}
        icon={icon}
      >
        {children}
      </EnhancedButton>
      
      {/* Hover Glow Effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: variant === 'primary' ? 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)' :
                    variant === 'outline' ? 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)' :
                    'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
        }}
      />
    </motion.div>
  )
} 
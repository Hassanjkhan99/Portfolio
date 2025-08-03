// 🚀 CONFETTI EFFECT COMPONENT
// Animated confetti effect for celebrations

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ConfettiEffectProps {
  show: boolean
  count?: number
  colors?: string[]
}

export const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ 
  show, 
  count = 50,
  colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3']
}) => {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(count)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 1, 
                x: Math.random() * window.innerWidth, 
                y: -10 
              }}
              animate={{ 
                opacity: 0, 
                y: window.innerHeight + 10,
                x: Math.random() * window.innerWidth
              }}
              transition={{ 
                duration: 2,
                delay: Math.random() * 0.5
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: colors[Math.floor(Math.random() * colors.length)]
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  )
} 
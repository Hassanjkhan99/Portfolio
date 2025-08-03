import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Enhanced Glow Effect Component with Mouse Parallax
export const GlowEffect: React.FC = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])
  
  const springX = useSpring(mouseX, { stiffness: 30, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 30, damping: 25 })
  const parallaxX = useTransform(springX, [0, window.innerWidth], [-10, 10])
  const parallaxY = useTransform(springY, [0, window.innerHeight], [-10, 10])
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        style={{
          x: parallaxX,
          y: parallaxY
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
      />
    </div>
  )
} 
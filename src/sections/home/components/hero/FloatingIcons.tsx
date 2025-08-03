import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles, Zap, Star } from 'lucide-react'

// Enhanced Floating Icons Component with Mouse Parallax
export const FloatingIcons: React.FC = () => {
  const icons = [Sparkles, Zap, Star]
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
  
  // Create springs and transforms outside the map
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const parallaxX = useTransform(springX, [0, window.innerWidth], [-20, 20])
  const parallaxY = useTransform(springY, [0, window.innerHeight], [-20, 20])
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
            y: [0, -20, 0],
            x: [0, Math.random() * 40 - 20, 0]
          }}
          style={{
            x: parallaxX,
            y: parallaxY,
            left: `${30 + (i * 20) % 40}%`,
            top: `${20 + (i * 25) % 60}%`
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
          className="absolute"
        >
          <Icon className={`h-6 w-6 ${
            i === 0 ? 'text-yellow-400' :
            i === 1 ? 'text-pink-400' :
            'text-blue-400'
          }`} />
        </motion.div>
      ))}
    </div>
  )
} 
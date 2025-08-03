import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { GlowEffect } from './GlowEffect'

// Enhanced Profile Photo with Mouse Following
export const ProfileAvatar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  // Mouse tracking for avatar
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      className="relative w-48 h-48 mx-auto mb-12"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        x: useTransform(springX, [0, window.innerWidth], [-10, 10]),
        y: useTransform(springY, [0, window.innerHeight], [-10, 10])
      }}
    >
      {/* Enhanced orbiting particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: isHovered ? [0.8, 1, 0.8] : [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear"
          }}
          className="absolute inset-0"
          style={{
            transformOrigin: 'center',
            transform: `rotate(${i * 45}deg) translateY(-110px)`
          }}
        >
          <div className={`w-2 h-2 rounded-full blur-sm ${
            i % 3 === 0 ? 'bg-gradient-to-r from-pink-400 to-purple-400' :
            i % 3 === 1 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' :
            'bg-gradient-to-r from-yellow-400 to-orange-400'
          }`} />
        </motion.div>
      ))}
      
      {/* Enhanced main avatar with glow effect */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-1">
        <GlowEffect />
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(236, 72, 153, 0.5)",
              "0 0 40px rgba(168, 85, 247, 0.5)",
              "0 0 20px rgba(236, 72, 153, 0.5)"
            ],
            scale: isHovered ? 1.05 : 1
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl font-bold text-white backdrop-blur-sm relative z-10"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 255, 255, 0.5)",
                "0 0 20px rgba(255, 255, 255, 0.8)",
                "0 0 10px rgba(255, 255, 255, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            MH
          </motion.span>
        </motion.div>
      </div>

      {/* Enhanced pulse ring */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full border-2 border-purple-400/30"
      />
    </motion.div>
  )
} 
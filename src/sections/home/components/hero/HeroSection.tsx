// 🚀 HERO SECTION COMPONENT
// Main hero section with enhanced visual elements and animations

import React, { useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import { FloatingIcons } from './FloatingIcons'
import { HeroContent } from './HeroContent'
import { HeroActions } from './HeroActions'

interface HeroSectionProps {
  onDownloadCV: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDownloadCV }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
  // Mouse tracking for enhanced parallax effects
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center relative min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(236, 72, 153, 0.1) 100%)",
              "linear-gradient(45deg, rgba(236, 72, 153, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(147, 51, 234, 0.1) 100%)",
              "linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(236, 72, 153, 0.1) 100%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Orbital Rings Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-purple-500/20 rounded-full"
              style={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
            />
          ))}
        </div>
        
        {/* Floating Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute w-4 h-4 border border-purple-400/30"
            style={{
              left: `${10 + (i * 15) % 80}%`,
              top: `${20 + (i * 20) % 60}%`,
              transform: `rotate(${i * 60}deg)`
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Enhanced Glow Spots */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Enhanced Floating Icons */}
      <FloatingIcons />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Lines */}
        <motion.div
          className="absolute top-1/3 left-10 w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-10 w-20 h-px bg-gradient-to-l from-transparent via-pink-400 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Corner Decorations */}
        <motion.div
          className="absolute top-10 left-10 w-8 h-8 border-l-2 border-t-2 border-purple-400/50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 right-10 w-8 h-8 border-r-2 border-b-2 border-pink-400/50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      {/* Main Content Container with Enhanced Spacing */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Hero Content with Enhanced Spacing */}
        <div className="mb-16">
          <HeroContent />
        </div>

        {/* Enhanced Hero Actions */}
        <div className="mb-12">
          <HeroActions onDownloadCV={onDownloadCV} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Interactive Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>
    </motion.div>
  )
} 
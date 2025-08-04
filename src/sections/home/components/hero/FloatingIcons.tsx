import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles, Zap, Star, Code, Cpu, Rocket } from 'lucide-react'

// Enhanced Floating Icons Component with Advanced Animations
export const FloatingIcons: React.FC = () => {
  const icons = [Sparkles, Zap, Star, Code, Cpu, Rocket]
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
            y: [0, -30, 0],
            x: [0, Math.random() * 60 - 30, 0],
            rotate: [0, 360, 0]
          }}
          style={{
            x: parallaxX,
            y: parallaxY,
            left: `${15 + (i * 15) % 70}%`,
            top: `${10 + (i * 20) % 80}%`
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
          }}
          className="absolute"
        >
          {/* Icon with Enhanced Glow */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 blur-sm"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon className={`h-8 w-8 ${
                i === 0 ? 'text-yellow-400' :
                i === 1 ? 'text-pink-400' :
                i === 2 ? 'text-blue-400' :
                i === 3 ? 'text-purple-400' :
                i === 4 ? 'text-green-400' :
                'text-orange-400'
              }`} />
            </motion.div>
            
            <Icon className={`h-6 w-6 relative z-10 ${
              i === 0 ? 'text-yellow-400' :
              i === 1 ? 'text-pink-400' :
              i === 2 ? 'text-blue-400' :
              i === 3 ? 'text-purple-400' :
              i === 4 ? 'text-green-400' :
              'text-orange-400'
            }`} />
          </div>
          
          {/* Particle Trail */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.5
            }}
          >
            {[...Array(3)].map((_, j) => (
              <motion.div
                key={j}
                className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                style={{
                  left: "50%",
                  top: "50%"
                }}
                animate={{
                  x: [0, (j - 1) * 20],
                  y: [0, -20 - j * 10],
                  opacity: [1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: j * 0.2 + i * 0.3
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      ))}
      
      {/* Additional Decorative Elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`decor-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          style={{
            left: `${20 + (i * 20) % 60}%`,
            top: `${30 + (i * 15) % 50}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 0.8, 0.2],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2
          }}
        />
      ))}
      
      {/* Floating Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          style={{
            width: "60px",
            left: `${25 + (i * 25) % 50}%`,
            top: `${40 + (i * 20) % 40}%`,
            transform: `rotate(${i * 45}deg)`
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
        />
      ))}
    </div>
  )
} 
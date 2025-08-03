// 🚀 ENHANCED ANIMATED BACKGROUND COMPONENT
// Animated gradient background with floating blobs and enhanced effects

import React from 'react'
import { motion } from 'framer-motion'

// Enhanced Floating Blobs Component
const FloatingBlobs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 90, 180]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl"
      />

      {/* Additional smaller blobs for more depth */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [0.8, 1.1, 0.8],
          rotate: [0, 120, 240]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [0.9, 1.2, 0.9],
          rotate: [0, -90, -180]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7
        }}
        className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-r from-red-500/15 to-pink-500/15 rounded-full blur-2xl"
      />
    </div>
  )
}

// Enhanced Floating Particles Component
const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.5, 0.5],
            x: [0, Math.random() * 300 - 150],
            y: [0, Math.random() * 300 - 150]
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
          className={`absolute w-1 h-1 rounded-full ${
            i % 5 === 0 ? 'bg-pink-400' :
            i % 5 === 1 ? 'bg-purple-400' :
            i % 5 === 2 ? 'bg-blue-400' :
            i % 5 === 3 ? 'bg-cyan-400' :
            'bg-yellow-400'
          }`}
          style={{
            left: `${10 + (i * 6) % 80}%`,
            top: `${15 + (i * 8) % 70}%`,
            boxShadow: `0 0 ${8 + i * 2}px ${
              i % 5 === 0 ? 'rgba(236, 72, 153, 0.5)' :
              i % 5 === 1 ? 'rgba(168, 85, 247, 0.5)' :
              i % 5 === 2 ? 'rgba(59, 130, 246, 0.5)' :
              i % 5 === 3 ? 'rgba(6, 182, 212, 0.5)' :
              'rgba(251, 191, 36, 0.5)'
            }`
          }}
        />
      ))}
    </div>
  )
}

// Enhanced Geometric Shapes Component
const GeometricShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Triangles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`triangle-${i}`}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
          className={`absolute ${
            i % 2 === 0 ? 'w-8 h-8' : 'w-6 h-6'
          } ${
            i % 3 === 0 ? 'bg-gradient-to-r from-pink-400/20 to-purple-400/20' :
            i % 3 === 1 ? 'bg-gradient-to-r from-blue-400/20 to-cyan-400/20' :
            'bg-gradient-to-r from-yellow-400/20 to-orange-400/20'
          }`}
          style={{
            left: `${25 + (i * 15) % 50}%`,
            top: `${20 + (i * 20) % 60}%`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
      ))}

      {/* Squares */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`square-${i}`}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, -360],
            scale: [0.7, 1.1, 0.7]
          }}
          transition={{
            duration: 18 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
          }}
          className={`absolute w-5 h-5 ${
            i % 2 === 0 ? 'bg-gradient-to-r from-purple-400/15 to-pink-400/15' :
            'bg-gradient-to-r from-cyan-400/15 to-blue-400/15'
          } rounded-sm`}
          style={{
            left: `${60 + (i * 12) % 30}%`,
            top: `${40 + (i * 15) % 40}%`
          }}
        />
      ))}
    </div>
  )
}

// Enhanced Glow Effects Component
const GlowEffects: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Radial glow effects */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/8 to-orange-500/8 rounded-full blur-2xl"
        style={{
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  )
}

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {/* Enhanced base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/80 to-pink-900/60" />
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
      
      {/* Enhanced Floating Blobs */}
      <FloatingBlobs />

      {/* Enhanced Floating Particles */}
      <FloatingParticles />

      {/* Enhanced Geometric Shapes */}
      <GeometricShapes />

      {/* Enhanced Glow Effects */}
      <GlowEffects />

      {/* Enhanced noise texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>
    </div>
  )
} 
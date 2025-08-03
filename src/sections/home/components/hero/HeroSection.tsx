// 🚀 HERO SECTION COMPONENT
// Main hero section with profile, name, and CTA buttons

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FloatingIcons } from './FloatingIcons'
import { ProfileAvatar } from './ProfileAvatar'
import { HeroContent } from './HeroContent'
import { HeroActions } from './HeroActions'

interface HeroSectionProps {
  currentTextIndex: number
  onDownloadCV: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentTextIndex, onDownloadCV }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center relative min-h-screen flex flex-col justify-center items-center py-20"
      style={{ y, opacity }}
    >
      {/* Enhanced Floating Icons */}
      <FloatingIcons />

      {/* Hero Content */}
      <HeroContent currentTextIndex={currentTextIndex} />

      {/* Hero Actions */}
      <HeroActions onDownloadCV={onDownloadCV} />

      {/* Enhanced Background Glow */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none rounded-full"
      />
    </motion.div>
  )
} 
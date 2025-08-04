import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, MessageCircle } from 'lucide-react'
import { EnhancedCTAButton } from './EnhancedCTAButton'
import { EnhancedSocialIcon } from './EnhancedSocialIcon'
import { socialLinks } from '../../data'

interface HeroActionsProps {
  onDownloadCV: () => void
}

// Enhanced CTA Buttons with Advanced Animations
const HeroCTAButtons: React.FC<HeroActionsProps> = ({ onDownloadCV }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 100 }}
      className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 relative"
    >
      {/* Background Glow for Button Group */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-2xl blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <EnhancedCTAButton
          variant="primary"
          size="lg"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          icon={<ArrowRight className="h-5 w-5" />}
        >
          View Projects
        </EnhancedCTAButton>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <EnhancedCTAButton
          variant="outline"
          size="lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          icon={<MessageCircle className="h-5 w-5" />}
        >
          Get In Touch
        </EnhancedCTAButton>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <EnhancedCTAButton
          variant="secondary"
          size="lg"
          onClick={onDownloadCV}
          icon={<Download className="h-5 w-5" />}
        >
          Download CV
        </EnhancedCTAButton>
      </motion.div>
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full"
        animate={{
          scale: [0.5, 1.5, 0.5],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-4 right-1/4 w-1 h-1 bg-pink-400 rounded-full"
        animate={{
          scale: [0.5, 1, 0.5],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  )
}

// Enhanced Social Links with Advanced Effects
const HeroSocialLinks: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 1, type: "spring", stiffness: 100 }}
      className="flex justify-center items-center gap-6 relative"
    >
      {/* Background Glow for Social Links */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/3 via-pink-500/3 to-blue-500/3 rounded-full blur-lg"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10 flex gap-6">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1 + index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <EnhancedSocialIcon link={link} index={index} />
          </motion.div>
        ))}
      </div>
      
      {/* Connecting Lines Between Social Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {socialLinks.slice(0, -1).map((_, index) => (
          <motion.div
            key={`line-${index}`}
            className="absolute h-px bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-transparent"
            style={{
              width: "60px",
              left: `${20 + index * 20}%`,
              top: "50%",
              transform: "translateY(-50%)"
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }}
          />
        ))}
      </div>
      
      {/* Floating Particles Around Social Links */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`social-particle-${i}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          style={{
            left: `${15 + (i * 15) % 70}%`,
            top: `${40 + (i * 10) % 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.8
          }}
        />
      ))}
    </motion.div>
  )
}

export const HeroActions: React.FC<HeroActionsProps> = ({ onDownloadCV }) => {
  return (
    <div className="relative">
      <HeroCTAButtons onDownloadCV={onDownloadCV} />
      <HeroSocialLinks />
      
      {/* Ambient Light Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
} 
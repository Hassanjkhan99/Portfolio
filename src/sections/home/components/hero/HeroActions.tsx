import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, MessageCircle } from 'lucide-react'
import { EnhancedCTAButton } from './EnhancedCTAButton'
import { EnhancedSocialIcon } from './EnhancedSocialIcon'
import { socialLinks } from '../../data'

interface HeroActionsProps {
  onDownloadCV: () => void
}

// Enhanced CTA Buttons
const HeroCTAButtons: React.FC<HeroActionsProps> = ({ onDownloadCV }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
    >
      <EnhancedCTAButton
        variant="primary"
        size="lg"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        icon={<ArrowRight className="h-5 w-5" />}
      >
        View Projects
      </EnhancedCTAButton>
      
      <EnhancedCTAButton
        variant="outline"
        size="lg"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        icon={<MessageCircle className="h-5 w-5" />}
      >
        Get In Touch
      </EnhancedCTAButton>
      
      <EnhancedCTAButton
        variant="secondary"
        size="lg"
        onClick={onDownloadCV}
        icon={<Download className="h-5 w-5" />}
      >
        Download CV
      </EnhancedCTAButton>
    </motion.div>
  )
}

// Enhanced Social Links
const HeroSocialLinks: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8 }}
      className="flex justify-center items-center gap-6"
    >
      {socialLinks.map((link, index) => (
        <EnhancedSocialIcon key={link.name} link={link} index={index} />
      ))}
    </motion.div>
  )
}

export const HeroActions: React.FC<HeroActionsProps> = ({ onDownloadCV }) => {
  return (
    <>
      <HeroCTAButtons onDownloadCV={onDownloadCV} />
      <HeroSocialLinks />
    </>
  )
} 
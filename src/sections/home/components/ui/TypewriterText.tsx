// 🚀 TYPEWRITER TEXT COMPONENT
// Robust typewriter effect using typewriter-effect library

import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

interface TypewriterTextProps {
  text: string | string[]
  delay?: number
  speed?: number
  loop?: boolean
  cursor?: string
  cursorClassName?: string
  wrapperClassName?: string
  onComplete?: () => void
  onStart?: () => void
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 0, 
  speed = 50,
  loop = false,
  cursor = '|',
  cursorClassName = 'text-purple-400 font-mono',
  wrapperClassName = 'inline-block',
  onComplete,
  onStart
}) => {
  const options = {
    strings: typeof text === 'string' ? [text] : text,
    autoStart: true,
    loop: loop,
    delay: speed,
    deleteSpeed: speed * 0.5,
    cursor: cursor,
    cursorClassName: cursorClassName,
    wrapperClassName: wrapperClassName,
    onComplete: onComplete,
    onStart: onStart,
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay * 0.5, duration: 0.3 }}
      className={wrapperClassName}
    >
      <Typewriter
        options={options}
      />
    </motion.div>
  )
} 
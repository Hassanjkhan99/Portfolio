// 🚀 ROTATING TYPEWRITER COMPONENT
// Advanced typewriter effect for rotating text arrays

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

interface RotatingTypewriterProps {
  texts: string[]
  interval?: number
  speed?: number
  delay?: number
  loop?: boolean
  cursor?: string
  cursorClassName?: string
  wrapperClassName?: string
  onTextChange?: (index: number) => void
}

export const RotatingTypewriter: React.FC<RotatingTypewriterProps> = ({ 
  texts, 
  interval = 5000,
  speed = 60,
  delay = 0,
  loop = true,
  cursor = '|',
  cursorClassName = 'text-purple-400 font-mono',
  wrapperClassName = 'inline-block',
  onTextChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (texts.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = (prev + 1) % texts.length
        setKey(prevKey => prevKey + 1)
        onTextChange?.(nextIndex)
        return nextIndex
      })
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval, onTextChange])

  const options = {
    strings: [texts[currentIndex]],
    autoStart: true,
    loop: false, // We handle looping ourselves
    delay: speed,
    deleteSpeed: speed * 0.5,
    cursor: cursor,
    cursorClassName: cursorClassName,
    wrapperClassName: wrapperClassName,
  }

  return (
    <motion.div
      key={key}
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
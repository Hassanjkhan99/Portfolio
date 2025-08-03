// 🚀 CONTACT SECTION COMPONENT
// Animated glassy panel with contact form, quick contact icons, and calendar widget

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  Clock,
  User,
  FileText,
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react'

// Contact method interface
interface ContactMethod {
  id: string
  icon: React.ReactNode
  title: string
  value: string
  url: string
  color: string
  hoverColor: string
}

// Contact methods data
const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    value: 'hassanjamilkhan114w@gmail.com',
    url: 'mailto:hassanjamilkhan114w@gmail.com',
    color: '#EA4335',
    hoverColor: '#ff6b6b'
  },
  {
    id: 'whatsapp',
    icon: <MessageCircle className="h-6 w-6" />,
    title: 'WhatsApp',
    value: '+92 300 1234567',
    url: 'https://wa.link/ggjfxx',
    color: '#25D366',
    hoverColor: '#25D366'
  },
  {
    id: 'linkedin',
    icon: <Linkedin className="h-6 w-6" />,
    title: 'LinkedIn',
    value: 'hassanjkhan99',
    url: 'https://www.linkedin.com/in/hassanjkhan99/',
    color: '#0077B5',
    hoverColor: '#0077B5'
  },
  {
    id: 'github',
    icon: <Github className="h-6 w-6" />,
    title: 'GitHub',
    value: 'Hassanjkhan99',
    url: 'https://github.com/Hassanjkhan99',
    color: '#333',
    hoverColor: '#ffffff'
  }
]

// Form field interface
interface FormField {
  id: string
  label: string
  type: string
  placeholder: string
  icon: React.ReactNode
  required: boolean
}

// Form fields data
const formFields: FormField[] = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Your full name',
    icon: <User className="h-5 w-5" />,
    required: true
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'your.email@example.com',
    icon: <Mail className="h-5 w-5" />,
    required: true
  },
  {
    id: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'What\'s this about?',
    icon: <FileText className="h-5 w-5" />,
    required: true
  }
]

// Three.js Animated Background Component
const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Wavy lines
    const waves: Array<{ y: number; amplitude: number; frequency: number; speed: number; opacity: number }> = []
    const numWaves = 3

    // Initialize waves
    for (let i = 0; i < numWaves; i++) {
      waves.push({
        y: canvas.height * (0.3 + i * 0.2),
        amplitude: 50 + i * 20,
        frequency: 0.02 + i * 0.01,
        speed: 0.02 + i * 0.01,
        opacity: 0.1 - i * 0.02
      })
    }

    let time = 0

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      )
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.05)')
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.1)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      waves.forEach((wave, index) => {
        ctx.save()
        ctx.globalAlpha = wave.opacity
        ctx.strokeStyle = '#a855f7'
        ctx.lineWidth = 2
        ctx.beginPath()
        
        for (let x = 0; x < canvas.width; x++) {
          const y = wave.y + Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        
        ctx.stroke()
        ctx.restore()
      })

      time += 0.5
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

// Contact Method Card Component
const ContactMethodCard: React.FC<{ method: ContactMethod; index: number }> = ({ method, index }) => {
  return (
    <motion.a
      href={method.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group"
    >
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: method.color }}
      >
        {method.icon}
      </div>
      <h3 className="text-lg font-bold text-white text-center mb-2">{method.title}</h3>
      <p className="text-gray-300 text-center text-sm">{method.value}</p>
    </motion.a>
  )
}

// Form Field Component
const FormField: React.FC<{ field: FormField; value: string; onChange: (value: string) => void; error?: string }> = ({ 
  field, 
  value, 
  onChange, 
  error 
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-2">
        {field.label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <div className="text-gray-400">
            {field.icon}
          </div>
        </div>
        <input
          type={field.type}
          id={field.id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          required={field.required}
          className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-white/10 hover:border-white/20'
          }`}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-1 flex items-center gap-1"
        >
          <AlertCircle className="h-4 w-4" />
          {error}
        </motion.p>
      )}
    </div>
  )
}

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('contact')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => ({ ...prev, [fieldId]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Three.js Animated Background */}
      <AnimatedBackground />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="text-6xl md:text-7xl font-extrabold font-['Space_Grotesk'] mb-6"
            >
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Let's discuss your next project or just say hello!
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                Quick <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Contact</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactMethods.map((method, index) => (
                  <ContactMethodCard key={method.id} method={method} index={index} />
                ))}
              </div>

              {/* Calendar Widget */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-purple-400" />
                  <h4 className="text-lg font-bold text-white">Schedule a Meeting</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Book a 30-minute call to discuss your project requirements
                </p>
                <motion.a
                  href="https://calendly.com/hassan-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Clock className="h-4 w-4" />
                  Book Now
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                Send a <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Message</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Fields */}
                {formFields.map((field) => (
                  <FormField
                    key={field.id}
                    field={field}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(value) => handleInputChange(field.id, value)}
                    error={errors[field.id]}
                  />
                ))}

                {/* Message Field */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="h-4 w-4" />
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-medium">Message sent successfully!</span>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                    >
                      <AlertCircle className="h-5 w-5 text-red-400" />
                      <span className="text-red-400 font-medium">Failed to send message. Please try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
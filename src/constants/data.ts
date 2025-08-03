export interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other'
  level: number // 1-5
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    image: '/projects/ecommerce.jpg',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/projects/taskmanager.jpg',
    techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/taskmanager',
    liveUrl: 'https://taskmanager-demo.com',
    featured: true
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts using multiple weather APIs and interactive charts.',
    image: '/projects/weather.jpg',
    techStack: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
    githubUrl: 'https://github.com/username/weather-dashboard',
    liveUrl: 'https://weather-demo.com',
    featured: false
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and interactive elements.',
    image: '/projects/portfolio.jpg',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio-demo.com',
    featured: false
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Senior Frontend Developer',
    company: 'TechCorp',
    content: 'Working with this developer was an absolute pleasure. Their attention to detail and commitment to writing clean, maintainable code is exceptional. They consistently delivered high-quality solutions that exceeded our expectations.',
    avatar: '/testimonials/sarah.jpg'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'StartupXYZ',
    content: 'This developer has a rare combination of technical expertise and business acumen. They not only built a great product but also provided valuable insights that helped shape our product strategy.',
    avatar: '/testimonials/michael.jpg'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'CTO',
    company: 'InnovateTech',
    content: 'I was impressed by their ability to quickly understand complex requirements and translate them into elegant solutions. Their code is well-documented and follows best practices.',
    avatar: '/testimonials/emily.jpg'
  }
]

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 5 },
  { name: 'JavaScript', category: 'frontend', level: 5 },
  { name: 'HTML/CSS', category: 'frontend', level: 5 },
  { name: 'Tailwind CSS', category: 'frontend', level: 4 },
  { name: 'Next.js', category: 'frontend', level: 4 },
  { name: 'Vue.js', category: 'frontend', level: 3 },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'Express.js', category: 'backend', level: 4 },
  { name: 'Python', category: 'backend', level: 3 },
  { name: 'Django', category: 'backend', level: 3 },
  
  // Database
  { name: 'MongoDB', category: 'database', level: 4 },
  { name: 'PostgreSQL', category: 'database', level: 3 },
  { name: 'Redis', category: 'database', level: 3 },
  
  // DevOps
  { name: 'Docker', category: 'devops', level: 3 },
  { name: 'AWS', category: 'devops', level: 3 },
  { name: 'Git', category: 'devops', level: 4 },
  
  // Other
  { name: 'Figma', category: 'other', level: 3 },
  { name: 'Jest', category: 'other', level: 4 },
  { name: 'Webpack', category: 'other', level: 3 }
]

export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Tech Stack', href: '#tech-stack-section' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/username', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/username', icon: 'twitter' },
  { name: 'Email', url: 'mailto:hello@example.com', icon: 'mail' }
] 
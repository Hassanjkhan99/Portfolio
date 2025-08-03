// 🚀 HOME PAGE DATA
// Centralized data for the home page components

import React from 'react'
import { 
  SiJavascript, 
  SiTypescript, 
  SiAngular, 
  SiReact, 
  SiTailwindcss, 
  SiJest, 
  SiAmazon, 
  SiD3Dotjs, 
  SiGraphql, 
  SiWebassembly,
  SiNgrx,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiVite,
  SiWebpack,
  SiCypress,
  SiFigma,
  SiAdobexd,
  SiVuedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiStrapi,
  SiWordpress,
  SiShopify
} from 'react-icons/si'

import { 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle
} from 'lucide-react'

// ===== SKILL INTERFACE =====

export interface Skill {
  name: string
  icon: React.ReactNode
  proficiency: number
  desc: string
  color: string
  category: 'frontend' | 'backend' | 'tools' | 'testing'
  confidence: string
}

// ===== SOCIAL LINK INTERFACE =====

export interface SocialLink {
  name: string
  url: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string
  hoverColor: string
}

// ===== SKILLS DATA =====

export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" size={38} />,
    proficiency: 95,
    desc: "My first love and go-to for magic.",
    color: "#F7DF1E",
    category: 'frontend',
    confidence: "Expert Level"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-400" size={38} />,
    proficiency: 90,
    desc: "Strongly typed, strong opinions.",
    color: "#3178C6",
    category: 'frontend',
    confidence: "Rock Solid"
  },
  {
    name: "Angular",
    icon: <SiAngular className="text-red-500" size={38} />,
    proficiency: 88,
    desc: "The Swiss Army knife of frameworks.",
    color: "#DD0031",
    category: 'frontend',
    confidence: "Battle Tested"
  },
  {
    name: "React",
    icon: <SiReact className="text-cyan-400" size={38} />,
    proficiency: 85,
    desc: "Composable everything.",
    color: "#61DAFB",
    category: 'frontend',
    confidence: "Production Ready"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" size={38} />,
    proficiency: 82,
    desc: "Full-stack React framework.",
    color: "#000000",
    category: 'frontend',
    confidence: "Full Stack Ready"
  },
  {
    name: "NgRx",
    icon: <SiNgrx className="text-purple-400" size={38} />,
    proficiency: 80,
    desc: "State management powerhouse.",
    color: "#BA68C8",
    category: 'frontend',
    confidence: "Deep Knowledge"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" size={38} />,
    proficiency: 92,
    desc: "Utility-first CSS magic.",
    color: "#06B6D4",
    category: 'frontend',
    confidence: "Ninja Level"
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600" size={38} />,
    proficiency: 85,
    desc: "JavaScript runtime for backend.",
    color: "#339933",
    category: 'backend',
    confidence: "Backend Master"
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" size={38} />,
    proficiency: 78,
    desc: "NoSQL database for modern apps.",
    color: "#47A248",
    category: 'backend',
    confidence: "Database Pro"
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-600" size={38} />,
    proficiency: 75,
    desc: "Reliable relational database.",
    color: "#336791",
    category: 'backend',
    confidence: "SQL Expert"
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="text-pink-600" size={38} />,
    proficiency: 78,
    desc: "Query exactly what you need.",
    color: "#E10098",
    category: 'backend',
    confidence: "Query Wizard"
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-500" size={38} />,
    proficiency: 75,
    desc: "Containerization made simple.",
    color: "#2496ED",
    category: 'tools',
    confidence: "DevOps Ready"
  },
  {
    name: "Git",
    icon: <SiGit className="text-orange-600" size={38} />,
    proficiency: 90,
    desc: "Version control mastery.",
    color: "#F05032",
    category: 'tools',
    confidence: "Git Master"
  },
  {
    name: "Vite",
    icon: <SiVite className="text-purple-500" size={38} />,
    proficiency: 85,
    desc: "Lightning-fast build tool.",
    color: "#646CFF",
    category: 'tools',
    confidence: "Build Expert"
  },
  {
    name: "Webpack",
    icon: <SiWebpack className="text-blue-600" size={38} />,
    proficiency: 80,
    desc: "Module bundler extraordinaire.",
    color: "#8DD6F9",
    category: 'tools',
    confidence: "Bundling Pro"
  },
  {
    name: "Jest",
    icon: <SiJest className="text-red-600" size={38} />,
    proficiency: 82,
    desc: "Testing with confidence.",
    color: "#C21325",
    category: 'testing',
    confidence: "Test Champion"
  },
  {
    name: "AWS S3",
    icon: <SiAmazon className="text-orange-500" size={38} />,
    proficiency: 75,
    desc: "Cloud storage solutions.",
    color: "#FF9900",
    category: 'tools',
    confidence: "Cloud Native"
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-black" size={38} />,
    proficiency: 85,
    desc: "Deploy with zero config.",
    color: "#000000",
    category: 'tools',
    confidence: "Deployment Pro"
  },
  {
    name: "D3.js",
    icon: <SiD3Dotjs className="text-orange-400" size={38} />,
    proficiency: 70,
    desc: "Data visualization magic.",
    color: "#F9A03C",
    category: 'frontend',
    confidence: "Visual Artist"
  },
  {
    name: "Web Workers",
    icon: <SiWebassembly className="text-green-500" size={38} />,
    proficiency: 72,
    desc: "Background processing power.",
    color: "#4CAF50",
    category: 'frontend',
    confidence: "Performance Guru"
  },
]

// ===== SOCIAL LINKS DATA =====

export const socialLinks: SocialLink[] = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/Hassanjkhan99', 
    icon: Github, 
    color: '#333', 
    hoverColor: '#ffffff' 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/hassanjkhan99/', 
    icon: Linkedin, 
    color: '#0077B5', 
    hoverColor: '#0077B5' 
  },
  { 
    name: 'Email', 
    url: 'mailto:hassanjamilkhan114w@gmail.com', 
    icon: Mail, 
    color: '#EA4335', 
    hoverColor: '#ff6b6b' 
  },
  { 
    name: 'WhatsApp', 
    url: 'https://wa.link/ggjfxx', 
    icon: MessageCircle, 
    color: '#25D366', 
    hoverColor: '#25D366' 
  }
]

// ===== TYPEWRITER TEXTS =====

export const typewriterTexts = [
  "Building scalable web applications",
  "Modernizing legacy systems", 
  "Optimizing frontend performance",
  "Creating exceptional user experiences"
]

// ===== SKILL FILTERS =====

export const skillFilters = ['all', 'frontend', 'backend', 'tools', 'testing'] as const
export type SkillFilter = typeof skillFilters[number] 
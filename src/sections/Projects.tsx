import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { projects, type Project } from '../constants/data'

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }


  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
                     <div className="flex bg-white dark:bg-gray-800 rounded-md p-1 border border-gray-200 dark:border-gray-700">
            <Button
              variant={filter === 'all' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setFilter('all')}
              className="rounded-md"
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setFilter('featured')}
              className="rounded-md"
            >
              Featured
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
                     {filteredProjects.map((project) => (
             <ProjectCard key={project.id} project={project} />
           ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => window.open('https://github.com/username', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full group cursor-pointer overflow-hidden">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-4xl font-bold text-gradient opacity-50">
              {project.title.charAt(0)}
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <div className="flex space-x-2">
            {project.githubUrl && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="text-gray-600 dark:text-gray-400 hover:text-primary"
              >
                <Github className="h-4 w-4 mr-1" />
                Code
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="text-gray-600 dark:text-gray-400 hover:text-primary"
              >
                <Eye className="h-4 w-4 mr-1" />
                Demo
              </Button>
            )}
          </div>
          
          {project.featured && (
            <span className="px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20">
              Featured
            </span>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
} 
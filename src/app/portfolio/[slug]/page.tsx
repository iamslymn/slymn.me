'use client'

import { motion } from 'framer-motion'
import ProjectImage from '@/components/ProjectImage'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// This should match your projects data structure
interface Project {
  id: number
  title: string
  category: string
  description: string
  href: string
  image: string
  // Add more fields as needed:
  // fullDescription?: string
  // technologies?: string[]
  // clientName?: string
  // projectDate?: string
}

// Import your projects data
import { projects } from '../page'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p: Project) => p.href === `/portfolio/${slug}`)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl">Project not found</h1>
        <Link href="/portfolio" className="text-primary hover:underline">
          Back to Portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/portfolio" className="text-primary hover:underline mb-8 block">
          ← Back to Portfolio
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
          {project.category}
        </p>

        <div className="aspect-video relative rounded-xl overflow-hidden mb-12">
          <ProjectImage src={project.image} alt={project.title} priority />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">{project.description}</p>
          
          {/* Add more project details here */}
          {/* <h2>The Challenge</h2> */}
          {/* <p>...</p> */}
          
          {/* <h2>The Solution</h2> */}
          {/* <p>...</p> */}
          
          {/* <h2>Technologies Used</h2> */}
          {/* <ul>...</ul> */}
        </div>
      </motion.div>
    </div>
  )
} 
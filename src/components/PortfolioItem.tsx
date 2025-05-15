'use client'

import Link from 'next/link'
import { MotionDiv } from './MotionWrapper'
import ProjectImage from './ProjectImage'
import { Project } from '@/data/projects'

interface PortfolioItemProps {
  project: Project
  index: number
}

export function PortfolioItem({ project, index }: PortfolioItemProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm"
    >
      <Link href={project.href} className="block">
        <div className="relative h-64 overflow-hidden">
          <ProjectImage
            src={project.image}
            alt={project.title}
            priority={index < 4}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <span className="text-sm font-medium text-primary">
            {project.category}
          </span>
          <h3 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
        </div>
      </Link>
    </MotionDiv>
  )
} 
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectImage from '@/components/ProjectImage'
import { projects } from '@/data/projects'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Portfolio() {
  return (
    <div className="pt-16">
      <section className="section">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading">Portfolio</h1>
            <p className="subheading">
              Explore my selected projects and creative work
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
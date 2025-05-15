import Link from 'next/link'
import ProjectImage from '@/components/ProjectImage'
import { getProjects, getProjectBySlug } from '@/data/projects'
import { notFound } from 'next/navigation'
import { MotionDiv } from '@/components/MotionWrapper'

export async function generateStaticParams() {
  const projects = getProjects()
  return projects.map((project) => ({
    slug: project.href.replace('/portfolio/', ''),
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <MotionDiv
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
      </MotionDiv>
    </div>
  )
} 
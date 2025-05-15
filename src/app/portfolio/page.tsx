import { getProjects } from '@/data/projects'
import { PortfolioHeader } from '@/components/PortfolioHeader'
import { PortfolioItem } from '@/components/PortfolioItem'

export default function PortfolioPage() {
  const projects = getProjects()
  
  return (
    <div className="pt-16">
      <section className="section">
        <div className="container">
          <PortfolioHeader />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioItem 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
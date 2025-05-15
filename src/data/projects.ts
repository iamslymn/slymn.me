export interface Project {
  id: number
  title: string
  category: string
  description: string
  href: string
  image: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'Your Category', // e.g., "Web Development", "UI Design", etc.
    description: 'Brief description of your project (1-2 sentences)',
    href: '/portfolio/your-project-slug',
    image: '/images/projects/your-project-image.jpg',
  },
  // Add more projects following the same structure:
  // {
  //   id: 2,
  //   title: 'Second Project',
  //   category: 'Category',
  //   description: 'Description',
  //   href: '/portfolio/second-project',
  //   image: '/images/projects/second-project.jpg',
  // },
]

export function getProjects(): Project[] {
  return projectsData
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.href === `/portfolio/${slug}`)
} 